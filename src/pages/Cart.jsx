import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import {
  Trash2,
  ShoppingCart,
  Plus,
  Minus,
  ArrowLeft,
  CreditCard,
} from "lucide-react"

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(CartContext)

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const shipping = subtotal > 0 ? 20 : 0
  const total = subtotal + shipping

  return (
    <section className="min-h-screen bg-gray-50 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* PAGE HEADER */}
        <div className="mb-8 md:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold">
                Shopping Cart
              </h1>

              <p className="text-gray-500 mt-2">
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
              </p>
            </div>

            <Link
              to="/ProductList"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-black transition"
            >
              <ArrowLeft size={18} />
              Continue Shopping
            </Link>
          </div>
        </div>

        {cartItems.length === 0 ? (
          /* EMPTY CART */
          <div className="bg-white rounded-[32px] shadow-lg py-20 px-6 md:px-8 flex flex-col items-center text-center">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
              <ShoppingCart size={44} className="text-yellow-500" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-3 max-w-md leading-relaxed">
              Looks like you haven't added any products yet.
              Start shopping and find something you love.
            </p>

            <Link
              to="/ProductList"
              className="mt-7 inline-flex items-center justify-center px-7 py-3.5 rounded-2xl bg-black text-white font-semibold hover:scale-[1.02] transition"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">

            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-5">
              {cartItems.map((item) => {
                const itemSubtotal = item.price * item.quantity

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-[28px] shadow-md border border-gray-100 p-4 md:p-5 hover:shadow-lg transition"
                  >
                    <div className="flex flex-col sm:flex-row gap-5">

                      {/* PRODUCT IMAGE */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full sm:w-32 md:w-36 h-52 sm:h-32 md:h-36 object-cover rounded-2xl"
                      />

                      {/* PRODUCT INFO */}
                      <div className="flex-1 flex flex-col justify-between gap-5">
                        <div>
                          <h3 className="font-bold text-lg md:text-xl">
                            {item.name}
                          </h3>

                          <p className="text-sm text-gray-500 capitalize mt-1">
                            {item.category}
                          </p>

                          <p className="text-lg font-semibold mt-3">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        {/* CONTROLS */}
                        <div className="flex flex-wrap items-center justify-between gap-4">

                          {/* QUANTITY */}
                          <div className="flex items-center bg-gray-100 rounded-full p-1 gap-2">
                            <button
                              onClick={() => decreaseQuantity(item.id)}
                              className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-200 transition"
                            >
                              <Minus size={16} />
                            </button>

                            <span className="w-8 text-center font-semibold">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() => increaseQuantity(item.id)}
                              className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
                            >
                              <Plus size={16} />
                            </button>
                          </div>

                          {/* REMOVE */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="inline-flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-600 transition"
                          >
                            <Trash2 size={18} />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>

                      {/* ITEM SUBTOTAL */}
                      <div className="sm:w-28 sm:text-right">
                        <p className="text-xs text-gray-400 uppercase tracking-wide">
                          Subtotal
                        </p>

                        <p className="text-lg md:text-xl font-bold mt-1">
                          ${itemSubtotal.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* ORDER SUMMARY */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-[28px] shadow-lg border border-gray-100 p-6 md:p-7 lg:sticky lg:top-32">

                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">
                    Order Summary
                  </h2>

                  <ShoppingCart size={22} className="text-gray-400" />
                </div>

                <div className="space-y-4 text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-medium text-gray-900">
                      ${shipping.toFixed(2)}
                    </span>
                  </div>

                  <div className="border-t border-gray-200 pt-5">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">
                        Total
                      </span>

                      <span className="text-2xl font-bold text-black">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="w-full mt-7 py-4 rounded-2xl bg-black text-white font-semibold text-lg flex items-center justify-center gap-2 hover:bg-gray-800 hover:scale-[1.01] transition"
                >
                  <CreditCard size={20} />
                  Proceed to Checkout
                </Link>
                
                <button
                  onClick={clearCart}
                  className="w-full mt-3 py-3.5 rounded-2xl border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white transition"
                >
                  Clear Cart
                </button>

                <p className="text-xs text-gray-400 text-center mt-5">
                  Secure checkout coming soon
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Cart