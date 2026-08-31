import { useContext } from "react"
import { Link } from "react-router-dom"
import { Heart, ShoppingBag, Trash2 } from "lucide-react"

import { WishlistContext } from "../context/WishlistContext"
import { CartContext } from "../context/CartContext"

function Wishlist() {
  const {
    wishlist,
    toggleWishlist,
  } = useContext(WishlistContext)

  const { addToCart } = useContext(CartContext)

  return (
    <section className="min-h-screen bg-gray-50 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div>
            <div className="flex items-center gap-3">
              <Heart
                className="text-yellow-500"
                size={28}
              />

              <p className="uppercase tracking-[0.2em] text-sm text-yellow-500 font-semibold">
                Your favorites
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              Wishlist
            </h1>

            <p className="text-gray-500 mt-2">
              Products you've saved for later.
            </p>
          </div>

          <div className="text-sm text-gray-500">
            {wishlist.length} item
            {wishlist.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* EMPTY WISHLIST */}
        {wishlist.length === 0 ? (
          <div className="mt-12 bg-white rounded-[32px] shadow-sm border border-gray-100 px-6 py-20 text-center">

            <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
              <Heart
                size={30}
                className="text-gray-400"
              />
            </div>

            <h2 className="text-2xl font-bold mt-5">
              Your wishlist is empty
            </h2>

            <p className="text-gray-500 mt-2 max-w-md mx-auto">
              Save products you love and come back to them
              whenever you're ready.
            </p>

            <Link
              to="/ProductList"
              className="
                inline-flex
                items-center
                gap-2
                mt-6
                px-6
                py-3
                rounded-full
                bg-black
                text-white
                hover:bg-gray-800
                transition
              "
            >
              <ShoppingBag size={18} />
              Browse Products
            </Link>

          </div>
        ) : (

          /* WISHLIST PRODUCTS */
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

            {wishlist.map((product) => (
              <div
                key={product.id}
                className="
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-md
                  border border-gray-100
                  group
                "
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-full
                      h-48
                      md:h-56
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* REMOVE */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="
                      absolute
                      top-3
                      right-3
                      w-10
                      h-10
                      rounded-full
                      bg-white/90
                      backdrop-blur-md
                      shadow-md
                      flex
                      items-center
                      justify-center
                      text-red-500
                      hover:scale-110
                      transition
                    "
                    aria-label={`Remove ${product.name} from wishlist`}
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

                {/* CONTENT */}
                <div className="p-4 md:p-5">

                  <p className="text-xs uppercase tracking-wider text-yellow-500 font-semibold">
                    {product.category}
                  </p>

                  <h2 className="font-semibold text-gray-900 mt-2 line-clamp-2">
                    {product.name}
                  </h2>

                  {/* PRICE */}
                  <div className="flex items-center gap-2 mt-3">

                    <p className="text-xl font-bold">
                      ${product.price}
                    </p>

                    <span className="text-sm text-gray-400 line-through">
                      ${Math.round(product.price * 1.3)}
                    </span>

                  </div>

                  {/* ACTIONS */}
                  <div className="flex gap-2 mt-4">

                    <Link
                      to={`/products/${product.id}`}
                      className="
                        flex-1
                        py-2.5
                        rounded-full
                        border
                        border-gray-200
                        text-center
                        text-sm
                        font-medium
                        hover:bg-gray-100
                        transition
                      "
                    >
                      View
                    </Link>

                    <button
                      onClick={() => addToCart(product)}
                      className="
                        flex-1
                        py-2.5
                        rounded-full
                        bg-black
                        text-white
                        text-sm
                        font-medium
                        hover:bg-gray-800
                        transition
                      "
                    >
                      Add to Cart
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  )
}

export default Wishlist