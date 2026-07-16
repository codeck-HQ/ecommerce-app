import { createContext, useState, useEffect } from "react"

// Create global cart context
const CartContext = createContext()

function CartProvider({ children }) {
  // Global cart state
const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem("cart")

  return savedCart ? JSON.parse(savedCart) : []
})

useEffect(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems)
  )
}, [cartItems])

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id
      )

      // If product already exists, increase quantity
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      }

      // If product is new, add it
      return [
        ...prevItems,
        {
          ...product,
          quantity: 1,
        },
      ]
    })
  }

  // Remove product completely
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    )
  }

  // Increase quantity by 1
  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    )
  }

  // Decrease quantity by 1
  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        // Remove item if quantity reaches 0
        .filter((item) => item.quantity > 0)
    )
  }
  // Clear entire cart
  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }