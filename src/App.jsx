import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Routes, Route } from "react-router-dom"

// Import Cart Provider (IMPORTANT)
import { CartProvider } from "./context/CartContext"

import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import Cart from "./pages/Cart"
import ProductDetails from "./pages/Products/ProductDetails"

import Electronics from "./pages/Products/Electronics"
import Fashion from "./pages/Products/Fashion"
import Furniture from "./pages/Products/Furniture"
import Gaming from "./pages/Products/Gaming"
import Beauty from "./pages/Products/Beauty"

function App() {
  // Initialize animation library once when app loads
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return (
    /*
      CartProvider wraps the ENTIRE app.
      This makes cartItems, addToCart, etc.
      accessible in any component:
      Navbar, ProductList, Cart page, etc.
    */
    <CartProvider>
      <MainLayout>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Product Listing Page */}
          <Route path="/ProductList" element={<ProductList />} />

          {/* Category Pages */}
          <Route path="/products/electronics" element={<Electronics />} />
          <Route path="/products/fashion" element={<Fashion />} />
          <Route path="/products/furniture" element={<Furniture />} />
          <Route path="/products/gaming" element={<Gaming />} />
          <Route path="/products/beauty" element={<Beauty />} />

          {/* Cart Page */}
          <Route path="/cart" element={<Cart />} />

          {/* Product Details */}
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </MainLayout>
    </CartProvider>
  )
}

export default App