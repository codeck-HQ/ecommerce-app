// Home page sections (component composition)
import HeroCarousel from "../components/HeroCarousel"
import CategorySection from "../components/CategorySection"
import PromoBanner from "../components/PromoBanner"
import FeaturedProducts from "../components/FeaturedProducts"
import NewsletterSection from "../components/NewsletterSection"
import Footer from "../components/Footer"

function Home() {
  return (
    <div>

      {/* Hero / landing section */}
      <HeroCarousel />

      {/* 
        Main page content
        mt-40 creates spacing because HeroCarousel contains
        floating cards that overlap the next section.
      */}
      <div className="mt-4">

        {/* Product categories */}
        <CategorySection />

        {/* Marketing CTA banner */}
        <PromoBanner />

        {/* Product showcase */}
        <FeaturedProducts />

        {/* Email subscription section */}
        <NewsletterSection />

        {/* Global site footer */}
        <Footer />

      </div>

    </div>
  )
}

export default Home