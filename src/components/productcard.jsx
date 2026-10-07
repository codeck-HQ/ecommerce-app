import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"

import { WishlistContext } from "../context/WishlistContext"

function ProductCard({ product, addToCart }) {
  const location = useLocation()
  const {
  toggleWishlist,
  isWishlisted,
} = useContext(WishlistContext)

  return (
    <div
      className="
        group
        relative
        bg-white
        rounded-2xl md:rounded-3xl
        overflow-hidden
        shadow-md
        border border-gray-100
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
      {/* SALE BADGE */}
      <div
        className="
          absolute
          top-2 left-2
          md:top-4 md:left-4
          bg-red-500
          text-white
          text-[10px] md:text-xs
          font-semibold
          px-2 md:px-3
          py-1
          rounded-full
          z-10
        "
      >
        SALE
      </div>

      {/* WISHLIST BUTTON */}
      <button
        onClick={() => toggleWishlist(product)}
        className="
          absolute
          top-2 right-2
          md:top-4 md:right-4
          w-8 h-8
          md:w-10 md:h-10
          rounded-full
          bg-white/90
          backdrop-blur-md
          shadow-md
          flex
          items-center
          justify-center
          z-10
          hover:scale-110
          transition
          text-xs md:text-base
        "
      >
        {isWishlisted(product.id) ? "❤️" : "♡"}
      </button>

      {/* IMAGE */}
      <Link
        to={`/products/${product.id}`}
        state={{
          from: location.pathname + location.search,
        }}
      >
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
              loading="lazy"
             decoding="async"
            className="
              w-full
              h-40
              sm:h-48
              md:h-56
              object-cover
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />

          {/* DARK OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-black/40
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-300
            "
          ></div>

          {/* VIEW DETAILS */}
          <div
            className="
              hidden md:block
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              bg-white
              text-black
              px-5
              py-3
              rounded-full
              font-medium
              opacity-0
              scale-90
              group-hover:opacity-100
              group-hover:scale-100
              transition-all
              duration-300
            "
          >
            View Details
          </div>
        </div>
      </Link>

      {/* CONTENT */}
      <div className="p-3 md:p-5">

        {/* PRODUCT NAME */}
        <Link
          to={`/products/${product.id}`}
          state={{
            from: location.pathname + location.search,
          }}
        >
          <h2
            className="
              text-sm
              md:text-lg
              font-semibold
              text-gray-900
              hover:text-yellow-500
              transition
              line-clamp-2
            "
          >
            {product.name}
          </h2>
        </Link>

        {/* RATING */}
        <div className="flex items-center gap-0.5 mt-2">
          <span className="text-xs md:text-base">⭐</span>
          <span className="text-xs md:text-base">⭐</span>
          <span className="text-xs md:text-base">⭐</span>
          <span className="text-xs md:text-base">⭐</span>
          <span className="text-xs md:text-base">⭐</span>

          <span className="text-[10px] md:text-sm text-gray-500 ml-1 md:ml-2">
            (4.9)
          </span>
        </div>

        {/* PRICE */}
        <div className="flex items-center gap-2 mt-2 md:mt-3">
          <p className="text-lg md:text-2xl font-bold text-black">
            ${product.price}
          </p>

          <span className="text-xs md:text-sm text-gray-400 line-through">
            ${Math.round(product.price * 1.3)}
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={() => addToCart(product)}
          className="
            mt-3 md:mt-5
            w-full
            py-2 md:py-3
            rounded-full
            bg-black
            text-white
            text-xs md:text-sm
            font-medium
            hover:bg-gray-800
            transition
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard