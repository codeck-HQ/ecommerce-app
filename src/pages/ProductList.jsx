import { useMemo, useState, useContext } from "react"
import { Link } from "react-router-dom"

import {
  ArrowUpDown,
  Search,
  Sparkles,
} from "lucide-react"

import { CartContext } from "../context/CartContext"
import { SearchContext } from "../context/SearchContext"

import ProductCard from "../components/productcard"
import products from "../data/products"

const categories = [
  "all",
  "electronics",
  "fashion",
  "furniture",
  "gaming",
  "beauty",
]

const subcategories = {
  beauty: [
    "all",
    "skincare",
    "makeup",
    "perfume",
    "haircare",
    "grooming",
    "accessories",
  ],
  electronics: [
    "all",
    "phones",
    "laptops",
    "audio",
    "wearables",
    "accessories",
  ],
  fashion: [
    "all",
    "clothing",
    "footwear",
    "bags",
    "watches",
    "accessories",
  ],
  furniture: [
    "all",
    "living_room",
    "bedroom",
    "office",
    "decor",
    "storage",
  ],
  gaming: [
    "all",
    "console",
    "accessories",
    "chair",
    "monitor",
    "collectibles",
  ],
}

function ProductList() {
  // Cart Context
  const { addToCart } =
    useContext(CartContext)

  // Search Context
  const {
    searchTerm,
    setSearchTerm,
  } = useContext(SearchContext)

  // Filters
  const [activeCategory, setActiveCategory] =
    useState("all")

  const [activeSubcategory, setActiveSubcategory] =
    useState("all")

  const [sortBy, setSortBy] =
    useState("featured")

  const filteredProducts = useMemo(() => {
    let list = [...products]

    // Category filter
    if (activeCategory !== "all") {
      list = list.filter(
        (product) =>
          product.category?.toLowerCase() ===
          activeCategory
      )
    }

    // Subcategory filter
    if (activeSubcategory !== "all") {
      list = list.filter(
        (product) =>
          product.subcategory?.toLowerCase() ===
          activeSubcategory
      )
    }

// Search filter
if (searchTerm.trim()) {
  const search = searchTerm.toLowerCase()

  list = list.filter(
    (product) =>
      product.name
        ?.toLowerCase()
        .includes(search) ||

      product.category
        ?.toLowerCase()
        .includes(search) ||

      product.subcategory
        ?.toLowerCase()
        .includes(search)
  )
}

    // Sorting
    switch (sortBy) {
      case "price-low":
        list.sort((a, b) => a.price - b.price)
        break

      case "price-high":
        list.sort((a, b) => b.price - a.price)
        break

      case "name":
        list.sort((a, b) =>
          a.name.localeCompare(b.name)
        )
        break

      default:
        break
    }

    return list
  }, [ activeCategory, activeSubcategory, searchTerm, sortBy])

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-14">
      {/* HERO */}
      <div
        className="
          relative overflow-hidden
          rounded-[32px]
          bg-gradient-to-r
          from-gray-950
          via-gray-900
          to-black
          text-white
          shadow-2xl
          p-6 md:p-10
        "
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-sm text-gray-400 mb-4">
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Product List</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <p className="uppercase tracking-[0.2em] text-yellow-400 text-xs md:text-sm">
                All Products
              </p>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Explore the full Codeck collection
            </h1>

            <p className="text-gray-300 mt-4 max-w-xl leading-relaxed">
              Browse premium products across all categories.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <p className="text-xs text-gray-400">Products</p>
              <p className="text-xl font-bold">{products.length}</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <p className="text-xs text-gray-400">Categories</p>
              <p className="text-xl font-bold">5</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH + SORT */}
      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto]">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-4 rounded-2xl bg-white border border-gray-200 shadow-sm"
          />
        </div>

        <div className="relative">
          <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full lg:w-[220px] pl-11 pr-4 py-4 rounded-2xl bg-white border border-gray-200 shadow-sm"
          >
            <option value="featured">Featured</option>
            <option value="name">Name (A–Z)</option>
            <option value="price-low">Price Low → High</option>
            <option value="price-high">Price High → Low</option>
          </select>
        </div>
      </div>

      {/* CATEGORY CHIPS */}
      <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
        {categories.map((category) => {
          const isActive = activeCategory === category

          return (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setActiveSubcategory("all")
              }}
              className={`px-5 py-2.5 rounded-full border ${
                isActive
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-200"
              }`}
            >
              {category === "all"
                ? "All"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          )
        })}
      </div>

      {/* SUBCATEGORY CHIPS */}
      {activeCategory !== "all" && subcategories[activeCategory] && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {subcategories[activeCategory].map((sub) => {
            const isActive = activeSubcategory === sub

            return (
              <button
                key={sub}
                onClick={() => setActiveSubcategory(sub)}
                className={`px-4 py-2 rounded-full border ${
                  isActive
                    ? "bg-yellow-500 text-black border-yellow-500"
                    : "bg-white text-gray-700 border-gray-200"
                }`}
              >
                {sub === "all"
                  ? "All"
                  : sub.replace("_", " ")}
              </button>
            )
          })}
        </div>
      )}

      {/* COUNT */}
      <div className="mt-8 text-sm text-gray-500">
        Showing {filteredProducts.length} product
        {filteredProducts.length !== 1 ? "s" : ""}
      </div>

      {/* GRID */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart}/>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <h3 className="text-2xl font-bold">No products found</h3>

            <button
              onClick={() => {
                setActiveCategory("all")
                setActiveSubcategory("all")
                setSearchTerm("")
                setSortBy("featured")
              }}
              className="mt-6 px-6 py-3 rounded-full bg-black text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductList