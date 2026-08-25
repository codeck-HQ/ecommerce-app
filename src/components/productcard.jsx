import { Link } from "react-router-dom"

function ProductCard({ product, addToCart }) {
  return (
    <div
      className="
        group
        relative
        bg-white
        rounded-3xl
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
          top-4
          left-4
          bg-red-500
          text-white
          text-xs
          font-semibold
          px-3
          py-1
          rounded-full
          z-10
        "
      >
        SALE
      </div>

      {/* WISHLIST BUTTON */}
      <button
        className="
          absolute
          top-4
          right-4
          w-10
          h-10
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
        "
      >
        ❤️
      </button>

      {/* IMAGE */}
      <Link to={`/products/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="
              w-full
              h-56
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

          {/* QUICK PREVIEW */}
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
      <div className="p-5">
        {/* Product name */}
        <Link to={`/products/${product.id}`}>
          <h2
            className="
              text-lg
              font-semibold
              text-gray-900
              hover:text-yellow-500
              transition
            "
          >
            {product.name}
          </h2>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>
          <span>⭐</span>

          <span className="text-sm text-gray-500 ml-2">
            (4.9)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-3">
          <p className="text-2xl font-bold text-black">
            ${product.price}
          </p>

          <span className="text-gray-400 line-through">
            ${Math.round(product.price * 1.3)}
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={() => addToCart(product)}
          className="
            mt-5
            w-full
            py-3
            rounded-full
            bg-black
            text-white
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