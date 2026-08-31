import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { X } from "lucide-react"

import { WishlistContext } from "../context/WishlistContext"

function WishlistNotification() {
  const {
    wishlistMessage,
    clearWishlistMessage,
  } = useContext(WishlistContext)

  // Automatically clear the notification after 4 seconds
  useEffect(() => {
    if (!wishlistMessage) return

    const timer = setTimeout(() => {
      clearWishlistMessage()
    }, 4000)

    return () => clearTimeout(timer)
  }, [wishlistMessage, clearWishlistMessage])

  if (!wishlistMessage) {
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative bg-black text-white rounded-2xl shadow-2xl px-5 py-4 pr-10">

        {/* CLOSE BUTTON */}
        <button
          onClick={clearWishlistMessage}
          className="
            absolute
            top-2
            right-2
            text-gray-400
            hover:text-white
            transition
          "
          aria-label="Close notification"
        >
          <X size={18} />
        </button>

        {/* MESSAGE */}
        <p className="font-medium">
          {wishlistMessage.type === "added"
            ? `${wishlistMessage.product} added to wishlist`
            : `${wishlistMessage.product} removed from wishlist`}
        </p>

        {/* VIEW WISHLIST */}
        {wishlistMessage.type === "added" && (
          <Link
            to="/wishlist"
            onClick={clearWishlistMessage}
            className="
              inline-block
              mt-2
              text-yellow-400
              hover:text-yellow-300
              font-medium
            "
          >
            View Wishlist →
          </Link>
        )}

      </div>
    </div>
  )
}

export default WishlistNotification