import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { useState } from "react"

function SubNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative bg-gray-900 text-white border-t border-white/10">

      {/* ================= NAVBAR ROW ================= */}
      <div
        className="
          max-w-7xl mx-auto
          px-3 md:px-6 py-3
          flex items-center gap-5
          overflow-x-auto
          whitespace-nowrap
          scrollbar-hide
        "
      >
        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 font-semibold hover:text-yellow-400 transition"
        >
          <Menu size={18} />
          <span>All</span>
        </button>

        {/* Main Navigation Links */}
        <Link to="/" className="hover:text-yellow-400 transition">
          Home
        </Link>

        <Link
          to="/Products/electronics"
          className="hover:text-yellow-400 transition"
        >
          Electronics
        </Link>

        <Link
          to="/Products/fashion"
          className="hover:text-yellow-400 transition"
        >
          Fashion
        </Link>

        <Link
          to="/Products/furniture"
          className="hover:text-yellow-400 transition"
        >
          Furniture
        </Link>

        <Link
          to="/Products/gaming"
          className="hover:text-yellow-400 transition"
        >
          Gaming
        </Link>

        <Link
          to="/Products/beauty"
          className="hover:text-yellow-400 transition"
        >
          Beauty
        </Link>
      </div>

      <>
        {/* ================= OVERLAY ================= */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`
            fixed inset-0 bg-black/50 z-40
            transition-opacity duration-500 ease-out
            ${
              menuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }
          `}
        ></div>

        {/* ================= SIDEBAR DRAWER ================= */}
        <div
          className={`
            fixed top-0 left-0
            h-full w-72
            bg-white text-black
            shadow-2xl z-50
            transform transition-transform duration-300 ease-in-out
            ${
              menuOpen
                ? "translate-x-0"
                : "-translate-x-full"
            }
          `}
        >
          {/* Drawer Header */}
          <div className="bg-gray-900 text-white px-6 py-5 flex justify-between items-center">
            <h2 className="font-bold text-lg">
              All Categories
            </h2>

            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl hover:text-yellow-400 transition"
            >
              ×
            </button>
          </div>

          {/* Drawer Links */}
          <ul className="p-6 space-y-5">

            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-500 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/ProductList/electronics"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-500 transition"
              >
                Electronics
              </Link>
            </li>

            <li>
              <Link
                to="/ProductList/fashion"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-500 transition"
              >
                Fashion
              </Link>
            </li>

            <li>
              <Link
                to="/ProductList/furniture"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-500 transition"
              >
                Furniture
              </Link>
            </li>

            <li>
              <Link
                to="/ProductList/gaming"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-500 transition"
              >
                Gaming
              </Link>
            </li>

            <li>
              <Link
                to="/ProductList/beauty"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-500 transition"
              >
                Beauty
              </Link>
            </li>

            <li>
              <Link
                to="/orders"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-500 transition"
              >
                Orders
              </Link>
            </li>

            <li>
              <Link
                to="/wishlist"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-500 transition"
              >
                Wishlist
              </Link>
            </li>
          </ul>
        </div>
      </>
    </div>
  )
}

export default SubNavbar