import ProductCard from "./productcard"
import products from "../data/products"
import { Link } from "react-router-dom"

function FeaturedProducts() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 md:px-6 py-12"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Header Row */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Featured Products
          </h2>

          <p className="text-gray-500 mt-2">
            Best-selling products handpicked for you
          </p>
        </div>

        <Link
          to="/ProductList"
          className="hidden md:block text-sm font-semibold hover:text-yellow-500 transition"
        >
          View All →
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product, index) => (
          <div
            key={product.id}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts