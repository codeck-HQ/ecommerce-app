import { Link, useLocation, useNavigate } from "react-router-dom"
import {
  ShoppingCart,
  ChevronDown,
  Heart,
} from "lucide-react"

import {
  useState,
  useRef,
  useEffect,
  useContext,
} from "react"

import logo from "../assets/images/home_logo.png"

import { CartContext } from "../context/CartContext"
import { SearchContext } from "../context/SearchContext"
import { WishlistContext } from "../context/WishlistContext"

function Navbar() {
  // ==============================
  // CONTEXT
  // ==============================

  const { cartItems } = useContext(CartContext)

  const {
    searchTerm,
    setSearchTerm,
  } = useContext(SearchContext)

  const {
    wishlist,
  } = useContext(WishlistContext)

  // ==============================
  // ROUTER
  // ==============================

  const navigate = useNavigate()
  const location = useLocation()

  // ==============================
  // ACCOUNT DROPDOWN STATE
  // ==============================

  const [accountOpen, setAccountOpen] =
    useState(false)

  const dropdownRef = useRef(null)

  // ==============================
  // SEARCH
  // ==============================

  const handleSearch = () => {
    navigate("/ProductList")
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate("/ProductList")
    }
  }

  // ==============================
  // CLOSE ACCOUNT DROPDOWN
  // WHEN CLICKING OUTSIDE
  // ==============================

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

  // ==============================
  // CLOSE DROPDOWN WHEN ROUTE CHANGES
  // ==============================

  useEffect(() => {
    setAccountOpen(false)
  }, [location.pathname])

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        bg-black/90
        backdrop-blur-xl
        border-b
        border-white/10
        text-white
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-3
          md:px-6
          py-2
          md:py-3
        "
      >

        {/* ==========================================
            MAIN NAVBAR ROW
        ========================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-3
            md:gap-6
          "
        >

          {/* ==========================================
              LOGO
          ========================================== */}

          <Link
            to="/"
            className="
              flex-shrink-0
              flex
              items-center
            "
          >
            <img
              src={logo}
              alt="Codeck Store Logo"
              className="
                w-24
                md:w-32
                object-contain
              "
            />
          </Link>

          {/* ==========================================
              DESKTOP SEARCH
          ========================================== */}

          <div
            className="
              hidden
              md:flex
              flex-1
              max-w-2xl
              bg-white
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
                w-full
                px-5
                py-3
                text-gray-900
                outline-none
                placeholder:text-gray-400
              "
            />

            <button
              onClick={handleSearch}
              className="
                px-6
                bg-yellow-500
                text-black
                font-semibold
                hover:bg-yellow-400
                transition
              "
            >
              Search
            </button>
          </div>

          {/* ==========================================
              RIGHT ACTIONS
          ========================================== */}

          <div
            className="
              flex
              items-center
              gap-1
              md:gap-3
            "
          >

            {/* ======================================
                ACCOUNT
            ====================================== */}

            <div
              ref={dropdownRef}
              className="relative"
            >
              <button
                onClick={() =>
                  setAccountOpen(
                    (current) => !current
                  )
                }
                className="
                  flex
                  items-center
                  gap-1
                  px-3
                  py-2
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
                  className={`
                    transition-transform
                    duration-300
                    ${
                      accountOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              {/* ACCOUNT DROPDOWN */}

              <div
                className={`
                  absolute
                  right-0
                  top-12
                  w-48
                  bg-white
                  text-black
                  rounded-2xl
                  shadow-2xl
                  py-2
                  overflow-hidden
                  transition-all
                  duration-200
                  origin-top-right
                  ${
                    accountOpen
                      ? `
                        opacity-100
                        scale-100
                        translate-y-0
                      `
                      : `
                        opacity-0
                        scale-95
                        translate-y-2
                        pointer-events-none
                      `
                  }
                `}
              >

                <Link
                  to="/login"
                  className="
                    block
                    px-4
                    py-3
                    hover:bg-gray-100
                    transition
                  "
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="
                    block
                    px-4
                    py-3
                    hover:bg-gray-100
                    transition
                  "
                >
                  Register
                </Link>

              </div>
            </div>

            {/* ======================================
                WISHLIST
            ====================================== */}

            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="
                relative
                p-3
                rounded-full
                bg-white/5
                hover:bg-white/10
                transition
              "
            >
              <Heart
                className="w-5 h-5"
              />

              {/* WISHLIST COUNT */}

              {wishlist?.length > 0 && (
                <span
                  className="
                    absolute
                    -top-1
                    -right-1
                    min-w-[20px]
                    h-5
                    px-1
                    flex
                    items-center
                    justify-center
                    bg-red-600
                    text-white
                    text-[11px]
                    font-semibold
                    rounded-full
                  "
                >
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* ======================================
                CART
            ====================================== */}

            <Link
              to="/cart"
              aria-label="Shopping cart"
              className="
                relative
                p-3
                rounded-full
                bg-white/5
                hover:bg-white/10
                transition
              "
            >
              <ShoppingCart
                className="w-5 h-5"
              />

              {/* CART COUNT */}

              {cartItems?.length > 0 && (
                <span
                  className="
                    absolute
                    -top-1
                    -right-1
                    min-w-[20px]
                    h-5
                    px-1
                    flex
                    items-center
                    justify-center
                    bg-red-600
                    text-white
                    text-[11px]
                    font-semibold
                    rounded-full
                  "
                >
                  {cartItems.length}
                </span>
              )}
            </Link>

          </div>
        </div>

        {/* ==========================================
            MOBILE SEARCH
        ========================================== */}

        <div
          className="
            mt-2
            md:hidden
          "
        >
          <div
            className="
              flex
              w-full
              bg-white
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
                w-full
                px-4
                py-3
                text-gray-900
                outline-none
                text-sm
                placeholder:text-gray-400
              "
            />

            <button
              onClick={handleSearch}
              className="
                px-5
                bg-yellow-500
                text-black
                font-semibold
                text-sm
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