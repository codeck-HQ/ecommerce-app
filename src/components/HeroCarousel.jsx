import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Pagination } from "swiper/modules"
import { Link } from "react-router-dom"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import hero1 from "../assets/images/hero/midnight luxe2.png"
import hero2 from "../assets/images/hero/neon velocity2.png"
import hero3 from "../assets/images/hero/modern elegance2.png"

/*
  Array of slide images.
  Since text is already inside the images,
  we only need image paths.
*/
const slides = [
  {
    image: hero1,
    link: "/ProductList?category=electronics",
  },
  {
    image: hero2,
    link: "/ProductList?category=gaming",
  },
  {
    image: hero3,
    link: "/ProductList?category=fashion",
  },
]

function HeroCarousel() {
  return (
    <div className="relative overflow-hidden"  data-aos="fade-up" data-aos-duration="1200">

      {/* ================= HERO SWIPER ================= */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
        >
          
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="hero-slide">
            <Link to={slide.link}>
            <div className="relative h-[220px] sm:h-[350px] md:h-[550px] cursor-pointer">

              {/* Background Image */}
              <img
                src={slide.image}
                alt={`Hero Slide ${index + 1}`}
                decoding="async"
                className="hero-image w-full h-full object-center object-cover"
              />

              {/* Dark overlay for better contrast */}
              <div className="absolute inset-0  bg-black/20"></div>

              {/* Shop Now Button */}
            <div className="hidden md:block absolute bottom-20 left-12">
              <button className="pointer-events-none px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition">
                Shop Now
              </button>
            </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>



    </div>
  )
}

export default HeroCarousel