 // Importing the top navigation bar
import Navbar from "../components/Navbar"

// Importing the secondary navigation bar
import SubNavbar from "../components/SubNavbar"

// MainLayout wraps every page in the app
// children = the current page being rendered
// cartItems = cart data coming from App.jsx
function MainLayout({ children, cartItems }) {
  return (
    <>
      {/* 
        This always shows at the top of every page
        We pass cartItems so Navbar can show cart count
      */}
      <Navbar cartItems={cartItems} />

      {/* 
        Secondary navbar (categories / menu)
        Also always visible on every page
      */}
      <SubNavbar />

      {/*
        children = whatever page is currently active

        Example:
        "/" → Home page
        "/cart" → Cart page
        "/ProductList" → Product list page
      */}
      {children}
    </>
  )
}

export default MainLayout