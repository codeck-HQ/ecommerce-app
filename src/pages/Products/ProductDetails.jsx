import { useContext } from "react"
import ProductCard from "../../components/productcard"
import {
  Link,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom"
import { ArrowLeft, ShoppingCart, Star } from "lucide-react"

import { CartContext } from "../../context/CartContext"
import products from "../../data/products"

function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)
  const location = useLocation()
const navigate = useNavigate()

const handleBack = () => {
  if (location.state?.from) {
    navigate(location.state.from)
  } else {
    navigate("/ProductList")
  }
}

  // Find the product that matches the ID in the URL
  const product = products.find(
    (item) => item.id === Number(id)
  )

  const relatedProducts = products
  .filter(
    (item) =>
      item.id !== product.id &&
      item.category === product.category &&
      item.subcategory === product.subcategory
  )
  .slice(0, 4)
  
  // Handle invalid product IDs
  if (!product) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Product not found
          </h1>

          <p className="text-gray-500 mt-2">
            The product you're looking for doesn't exist.
          </p>

          <Link
            to="/ProductList"
            className="
              inline-flex
              items-center
              gap-2
              mt-6
              px-6
              py-3
              rounded-full
              bg-black
              text-white
              hover:bg-gray-800
              transition
            "
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Back button */}
<button
  onClick={handleBack}
  className="
    inline-flex
    items-center
    gap-2
    text-gray-500
    hover:text-black
    transition
    mb-8
  "
>
  <ArrowLeft size={18} />
  Back to Products
</button>

        {/* Product details */}
        <div
          className="
            bg-white
            rounded-[40px]
            shadow-xl
            overflow-hidden
            grid
            lg:grid-cols-2
          "
        >

          {/* Product image */}
          <div className="bg-gray-100 p-6 md:p-10">
            <div
              className="
                h-[350px]
                md:h-[450px]
                rounded-[32px]
                overflow-hidden
              "
            >
              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-105
                  transition-transform
                  duration-500
                "
              />
            </div>
          </div>

          {/* Product information */}
          <div className="p-6 md:p-10 lg:p-14 flex flex-col justify-center">

            {/* Category */}
            <p className="uppercase tracking-[0.2em] text-sm text-yellow-500 font-semibold">
              {product.category}
            </p>

            {/* Product name */}
            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <span className="text-gray-500">
                4.9 (128 reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mt-7">
              <span className="text-4xl font-bold">
                ${product.price}
              </span>

              <span className="text-xl text-gray-400 line-through">
                ${Math.round(product.price * 1.3)}
              </span>

              <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-semibold">
                SALE
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mt-7 max-w-xl">
              Experience premium quality and modern design with the{" "}
              {product.name}. Carefully selected for the Codeck
              collection, this product combines style, quality,
              and everyday usability.
            </p>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Add to cart */}
            <button
              onClick={() => addToCart(product)}
              className="
                w-full
                py-4
                rounded-2xl
                bg-black
                text-white
                font-semibold
                text-lg
                flex
                items-center
                justify-center
                gap-3
                hover:bg-gray-800
                hover:scale-[1.01]
                transition
              "
            >
              <ShoppingCart size={21} />
              Add to Cart
            </button>

          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-500 font-semibold">
              You may also like
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Related Products
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      )}

    </section>
  )
}

export default ProductDetails