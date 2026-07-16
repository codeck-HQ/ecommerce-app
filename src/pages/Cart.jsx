import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import {
  Trash2,
  ShoppingCart,
  Plus,
  Minus,
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
    <section className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Page heading */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">
            Shopping Cart
          </h1>

          <p className="text-gray-500 mt-2">
            Review your selected items
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div
            className="
              bg-white
              rounded-[40px]
              shadow-xl
              py-20 px-8
              flex flex-col items-center
              text-center
            "
          >
            {/* Empty icon */}
            <div
              className="
                w-28 h-28
                rounded-full
                bg-yellow-100
                flex items-center justify-center
                mb-6
              "
            >
              <ShoppingCart
                size={48}
                className="text-yellow-500"
              />
            </div>

            <h2 className="text-3xl font-bold">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-3 max-w-md">
              Looks like you haven’t added any products yet.
              Start shopping to fill your cart.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* LEFT SIDE */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="
                    bg-white
                    rounded-[32px]
                    shadow-lg
                    p-5
                    hover:shadow-xl
                    transition
                  "
                >
                  <div className="flex flex-col md:flex-row gap-5 md:items-center">
                    
                    {/* Product image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        w-full md:w-32
                        h-52 md:h-32
                        object-cover
                        rounded-3xl
                      "
                    />

                    {/* Product details */}
                    <div className="flex-1">
                      <h3 className="font-bold text-xl">
                        {item.name}
                      </h3>

                      <p className="text-gray-500 capitalize mt-1">
                        {item.category}
                      </p>

                      <p className="text-2xl font-bold mt-3">
                        ${item.price}
                      </p>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col items-center gap-4">
                      
                      {/* Quantity */}
                      <div
                        className="
                          flex items-center
                          bg-gray-100
                          rounded-full
                          p-1
                          gap-2
                        "
                      >
                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          className="
                            w-9 h-9
                            rounded-full
                            bg-white
                            shadow
                            flex items-center justify-center
                          "
                        >
                          <Minus size={16} />
                        </button>

                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          className="
                            w-9 h-9
                            rounded-full
                            bg-black text-white
                            flex items-center justify-center
                          "
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        className="
                          text-red-500
                          hover:scale-110
                          transition
                        "
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div
              className="
                bg-white
                rounded-[32px]
                shadow-xl
                p-7
                h-fit
                sticky top-32
              "
            >
              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="space-y-5 text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping}</span>
                </div>

                <hr />

                <div className="flex justify-between text-2xl font-bold text-black">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>

              <button
                className="
                  w-full mt-8 py-4
                  rounded-2xl
                  bg-black
                  text-white
                  font-semibold
                  text-lg
                  hover:scale-[1.02]
                  transition
                "
              >
                Proceed to Checkout
              </button>
              
              <button
                onClick={clearCart}
                className="
                  w-full mt-4 py-3
                  rounded-2xl
                  border border-red-500
                  text-red-500
                  font-medium
                  hover:bg-red-500
                  hover:text-white
                  transition
                "
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Cart