import { NavLink, useSearchParams} from "react-router-dom"
import {
  Menu,
  X,
  Home,
  Monitor,
  Shirt,
  Sofa,
  Gamepad2,
  Sparkles,
  Heart,
} from "lucide-react"
import { useState } from "react"

function SubNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchParams] = useSearchParams()

  const activeCategory = searchParams.get("category")

  // Main navigation items
    const navItems = [
      {
        name: "Home",
        path: "/",
        icon: Home,
      },
      {
        name: "Electronics",
        path: "/ProductList?category=electronics",
        icon: Monitor,
      },
      {
        name: "Fashion",
        path: "/ProductList?category=fashion",
        icon: Shirt,
      },
      {
        name: "Furniture",
        path: "/ProductList?category=furniture",
        icon: Sofa,
      },
      {
        name: "Gaming",
        path: "/ProductList?category=gaming",
        icon: Gamepad2,
      },
      {
        name: "Beauty",
        path: "/ProductList?category=beauty",
        icon: Sparkles,
      },
    ]

  // Reusable function for closing the drawer
  const closeMenu = () => {
    setMenuOpen(false)
  }

  // Active link styling
  const desktopLinkClass = ({ isActive }) =>
    `
      relative
      py-2
      text-sm md:text-base
      font-medium
      transition-colors duration-200
      ${
        isActive
          ? "text-yellow-400"
          : "text-gray-300 hover:text-white"
      }
    `

  return (
    <div className="relative bg-gray-900 text-white border-t border-white/10">

      {/* =====================================================
          DESKTOP / MOBILE SUB NAVIGATION
      ===================================================== */}

      <div
        className="
          max-w-7xl mx-auto
          px-3 md:px-6
          py-3
          flex items-center gap-5
          overflow-x-auto
          whitespace-nowrap
          scrollbar-hide
        "
      >

        {/* ALL / MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(true)}
          className="
            flex
            items-center
            gap-2
            shrink-0
            font-semibold
            text-white
            hover:text-yellow-400
            transition
          "
        >
          <Menu size={18} />

          <span>All</span>
        </button>

        {/* NAVIGATION LINKS */}
        {navItems.map((item) => {
          const category = item.path.split("category=")[1]

          const isCategoryActive =
            category
              ? activeCategory === category
              : !activeCategory

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={() =>
                `
                  relative
                  py-2
                  text-sm md:text-base
                  font-medium
                  transition-colors duration-200
                  ${
                    isCategoryActive
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-white"
                  }
                `
              }
            >
              {item.name}
            </NavLink>
          )
        })}

        {/* WISHLIST */}
        <NavLink
          to="/wishlist"
          className={desktopLinkClass}
        >
          Wishlist
        </NavLink>

      </div>


      {/* =====================================================
          BACKDROP
      ===================================================== */}

      <div
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          bg-black/60
          backdrop-blur-sm
          z-40
          transition-opacity
          duration-300
          ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />


      {/* =====================================================
          SIDEBAR DRAWER
      ===================================================== */}

      <aside
        className={`
          fixed
          top-0
          left-0
          h-full
          w-80
          max-w-[85vw]
          bg-white
          text-black
          shadow-2xl
          z-50
          transform
          transition-transform
          duration-300
          ease-out
          ${
            menuOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* =================================================
            DRAWER HEADER
        ================================================= */}

        <div
          className="
            bg-gray-900
            text-white
            px-6
            py-5
            flex
            items-center
            justify-between
          "
        >
          <div>
            <p className="text-xs text-yellow-400 uppercase tracking-widest">
              Browse
            </p>

            <h2 className="font-bold text-lg mt-1">
              All Categories
            </h2>
          </div>

          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              bg-white/10
              hover:bg-white/20
              hover:text-yellow-400
              transition
            "
          >
            <X size={20} />
          </button>
        </div>


        {/* =================================================
            DRAWER NAVIGATION
        ================================================= */}

        <nav className="p-4">

        {navItems.map((item) => {
          const Icon = item.icon

          // Get the category from the URL
          const category = item.path.split("category=")[1]

          // Check the active category manually
          const isCategoryActive = category
            ? activeCategory === category
            : !activeCategory

          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`
                flex
                items-center
                gap-4
                px-4
                py-3.5
                rounded-xl
                mb-1
                font-medium
                transition
                ${
                  isCategoryActive
                    ? "bg-yellow-400 text-black"
                    : "text-gray-700 hover:bg-gray-100 hover:text-black"
                }
              `}
            >
              <Icon size={19} />

              <span>{item.name}</span>
            </NavLink>
          )
        })}

          {/* =================================================
              WISHLIST
          ================================================= */}

          <NavLink
            to="/wishlist"
            onClick={closeMenu}
            className={({ isActive }) =>
              `
                flex
                items-center
                gap-4
                px-4
                py-3.5
                rounded-xl
                mb-1
                font-medium
                transition
                ${
                  isActive
                    ? "bg-yellow-400 text-black"
                    : "text-gray-700 hover:bg-gray-100 hover:text-black"
                }
              `
            }
          >
            <Heart size={19} />

            <span>Wishlist</span>
          </NavLink>

        </nav>


        {/* =================================================
            DRAWER FOOTER
        ================================================= */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            p-6
            border-t
            border-gray-100
          "
        >
          <p className="text-xs text-gray-400 text-center">
            Codeck Store
          </p>
        </div>

      </aside>

    </div>
  )
}

export default SubNavbar