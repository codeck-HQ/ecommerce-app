import sharp from "sharp"
import fs from "fs/promises"
import path from "path"

const imagesDir = path.resolve("src/assets/images")
const backupDir = path.resolve("image-backup")

const imageExtensions = [".jpg", ".jpeg", ".png"]

async function getImages(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const images = []

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      images.push(...(await getImages(fullPath)))
      continue
    }

    if (imageExtensions.includes(path.extname(entry.name).toLowerCase())) {
      images.push(fullPath)
    }
  }

  return images
}

async function backupImage(filePath) {
  const relativePath = path.relative(imagesDir, filePath)
  const backupPath = path.join(backupDir, relativePath)

  await fs.mkdir(path.dirname(backupPath), { recursive: true })

  try {
    await fs.access(backupPath)
  } catch {
    await fs.copyFile(filePath, backupPath)
  }
}

async function optimizeImage(filePath) {
  const extension = path.extname(filePath).toLowerCase()
  const relativePath = path.relative(imagesDir, filePath)

  const isHero = relativePath.toLowerCase().includes("hero")

  const maxWidth = isHero ? 1600 : 900

  const tempPath = `${filePath}.optimized${extension}`

  const image = sharp(filePath)
  const metadata = await image.metadata()

  let pipeline = image.resize({
    width: Math.min(metadata.width || maxWidth, maxWidth),
    withoutEnlargement: true,
  })

  if (extension === ".jpg" || extension === ".jpeg") {
    pipeline = pipeline.jpeg({
      quality: 78,
      mozjpeg: true,
    })
  }

  if (extension === ".png") {
    pipeline = pipeline.png({
      compressionLevel: 9,
      adaptiveFiltering: true,
    })
  }

  await pipeline.toFile(tempPath)

  const originalStats = await fs.stat(filePath)
  const optimizedStats = await fs.stat(tempPath)

  if (optimizedStats.size < originalStats.size) {
    await fs.unlink(filePath)
    await fs.rename(tempPath, filePath)

    const saved = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1)

    console.log(
      `✓ ${relativePath} | ${(originalStats.size / 1024).toFixed(0)} KB → ${(optimizedStats.size / 1024).toFixed(0)} KB | saved ${saved}%`
    )
  } else {
    await fs.unlink(tempPath)
    console.log(`- ${relativePath} | already optimized`)
  }
}

async function run() {
  console.log("\nFinding images...\n")

  const images = await getImages(imagesDir)

  console.log(`Found ${images.length} images.\n`)

  await fs.mkdir(backupDir, { recursive: true })

  for (const image of images) {
    await backupImage(image)
    await optimizeImage(image)
  }

  console.log("\nImage optimization complete.")
  console.log("Original images are backed up inside /image-backup\n")
}

run().catch((error) => {
  console.error("Image optimization failed:", error)
  process.exit(1)
})