import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
const [wishlist, setWishlist] = useState(() => {
  try {
    const savedWishlist = localStorage.getItem("wishlist");
    const parsedWishlist = savedWishlist ? JSON.parse(savedWishlist) : [];

    return Array.isArray(parsedWishlist) ? parsedWishlist : [];
  } catch {
    return [];
  }
});

useEffect(() => {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}, [wishlist]);

  const [wishlistMessage, setWishlistMessage] = useState(null);

  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);

    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));

      setWishlistMessage({
        type: "removed",
        product: product.name,
      });

      return;
    }

    setWishlist([...wishlist, product]);

    setWishlistMessage({
      type: "added",
      product: product.name,
    });
  };

  const isWishlisted = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const clearWishlistMessage = () => {
    setWishlistMessage(null);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isWishlisted,
        wishlistMessage,
        clearWishlistMessage,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;
