import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import "./index.css"
import App from "./App.jsx"

// Import Cart Provider
import { CartProvider } from "./context/CartContext"
import SearchProvider from "./context/SearchContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* BrowserRouter handles all routes */}
    <BrowserRouter>

      {/* 
        CartProvider wraps App
        So every component inside App can access cart state
      */}
      <CartProvider>
        <SearchProvider>
        <App />
        </SearchProvider>
      </CartProvider>

    </BrowserRouter>
  </StrictMode>
)