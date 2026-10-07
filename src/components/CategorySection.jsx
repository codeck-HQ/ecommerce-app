import { Link } from "react-router-dom"

import electronicsImg from "../assets/images/categories/electronics.jpg"
import fashionImg from "../assets/images/categories/fashion.jpg"
import homeImg from "../assets/images/categories/home.jpg"
import gamingImg from "../assets/images/categories/gaming.jpg"
import beautyImg from "../assets/images/categories/beauty.jpg"
import sportsImg from "../assets/images/categories/sports.jpg"
import booksImg from "../assets/images/categories/books.jpg"
import toysImg from "../assets/images/categories/toys.jpg"

/*
  Category data.
  Each category contains:
  - unique id
  - display name
  - image
*/
const categories = [
  { id: 1, name: "Electronics", image: electronicsImg },
  { id: 2, name: "Fashion", image: fashionImg },
  { id: 3, name: "Home", image: homeImg },
  { id: 4, name: "Gaming", image: gamingImg },
  { id: 5, name: "Beauty", image: beautyImg },
  { id: 6, name: "Sports", image: sportsImg },
  { id: 7, name: "Books", image: booksImg },
  { id: 8, name: "Toys", image: toysImg },
]

function CategorySection() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">

      {/* Section Heading */}
      <h2
        className="text-2xl md:text-3xl font-bold mb-2"
        data-aos="fade-up"
      >
        Shop by Category
      </h2>

      {/* Subtitle */}
      <p
        className="text-gray-500 mb-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Explore products across our premium collections
      </p>

      {/* Category Row */}
      <div
        className="
          flex
          gap-8 md:gap-10
          overflow-x-auto
          md:overflow-visible
          scrollbar-hide
        "
      >
        {categories.map((category, index) => (
          <Link
            key={category.id}
            to={`/ProductList?category=${category.name.toLowerCase()}`}
            className="flex flex-col items-center min-w-[100px] group"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            {/* Circle */}
            <div
              className="
                w-28 h-28
                md:w-36 md:h-36
                rounded-full
                bg-white
                border border-gray-100
                shadow-lg
                overflow-hidden
                flex-shrink-0
                transition-all duration-300
                group-hover:-translate-y-2
                group-hover:shadow-2xl
              "
            >
              <img
                src={category.image}
                alt={category.name}
                  loading="lazy"
                  decoding="async"
                className="
                  w-full h-full
                  object-cover
                  transition duration-500
                  group-hover:scale-110
                "
              />
            </div>

            {/* Category Name */}
            <p
              className="
                mt-3
                text-sm md:text-base
                font-semibold
                text-gray-800
                text-center
                transition
                group-hover:text-yellow-500
              "
            >
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategorySection