import { Link, useNavigate } from "react-router-dom"
import { ShoppingCart, ChevronDown } from "lucide-react"
import logo from "../assets/images/home_logo.png"

import {
  useState,
  useRef,
  useEffect,
  useContext,
} from "react"

import { CartContext } from "../context/CartContext"
import { SearchContext } from "../context/SearchContext"

function Navbar() {
  const { cartItems } = useContext(CartContext)

  const { searchTerm, setSearchTerm } =
    useContext(SearchContext)

  const navigate = useNavigate()

  const [accountOpen, setAccountOpen] =
    useState(false)

  const dropdownRef = useRef(null)

  const handleSearch = () => {
    navigate("/ProductList")
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate("/ProductList")
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setAccountOpen(false)
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    )

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      )
    }
  }, [])

  return (
    <nav
      data-aos="fade-down"
      data-aos-duration="800"
      className="
        sticky top-0 z-50
        bg-black/80
        backdrop-blur-xl
        border-b border-white/10
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-3 md:px-6 py-2 md:py-3">

        {/* MAIN ROW */}
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0"
          >
            <img
              src={logo}
              alt="Codeck Store Logo"
              className="w-20 md:w-36 object-contain"
            />
          </Link>

          {/* Desktop Search */}
          <div
            className="
              hidden md:flex
              flex-1 max-w-2xl
              bg-white/95
              rounded-2xl
              overflow-hidden
              shadow-xl
              border border-black/5
            "
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              onKeyDown={handleKeyDown}
              className="
                w-full px-5 py-3
                text-gray-900 outline-none
              "
            />

            <button
              onClick={handleSearch}
              className="
                px-6 bg-yellow-500
                text-black font-semibold
                hover:bg-yellow-400
                transition
              "
            >
              Search
            </button>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 md:gap-4">

            {/* Account */}
            <div
              ref={dropdownRef}
              className="relative"
            >
              <button
                onClick={() =>
                  setAccountOpen(!accountOpen)
                }
                className="
                  flex items-center gap-1
                  px-3 py-2
                  rounded-full
                  bg-white/5
                  hover:bg-white/10
                  transition
                "
              >
                <span className="text-xs md:text-sm">
                  Account
                </span>

                <ChevronDown
                  size={14}
                  className={`transition duration-300 ${
                    accountOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              <div
                className={`
                  absolute right-0 top-12 w-48
                  bg-white text-black
                  rounded-2xl shadow-2xl py-2
                  transition-all duration-300
                  ${
                    accountOpen
                      ? "scale-100 opacity-100 translate-y-0"
                      : "scale-95 opacity-0 translate-y-2 pointer-events-none"
                  }
                `}
              >
                <Link
                  to="/login"
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  Register
                </Link>
              </div>
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              className="
                relative p-3 rounded-full
                bg-white/5 hover:bg-white/10
                transition
              "
            >
              <ShoppingCart className="w-5 h-5" />

              {cartItems?.length > 0 && (
                <span
                  className="
                    absolute -top-1 -right-1
                    min-w-[20px] h-5 px-1
                    flex items-center justify-center
                    bg-red-600 text-white
                    text-[11px]
                    rounded-full
                  "
                >
                  {cartItems?.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-2 md:hidden">
          <div
            className="
              flex w-full
              bg-white/95
              rounded-2xl
              overflow-hidden
              shadow-xl
            "
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              onKeyDown={handleKeyDown}
              className="
                w-full px-5 py-3
                text-gray-900 outline-none
              "
            />

            <button
              onClick={handleSearch}
              className="
                px-6 bg-yellow-500
                text-black font-semibold
                hover:bg-yellow-400
                transition
              "
            >
              Search
            </button>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar