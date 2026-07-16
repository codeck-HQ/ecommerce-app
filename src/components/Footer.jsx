import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa"

function Footer() {
  const socialClass = `
    w-12 h-12 rounded-full bg-white/10
    flex items-center justify-center
    hover:bg-white hover:text-black
    hover:scale-110 hover:-translate-y-1
    transition-all duration-300 cursor-pointer
  `

  return (
    <footer
      className="
        relative
        overflow-hidden
        mt-24
        bg-gradient-to-b
        from-gray-900
        via-black
        to-black
        text-white
        border-t
        border-gray-800
      "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-yellow-500/10 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2
            gap-10 pb-12
            border-b border-gray-800
          "
        >
          {/* Brand */}
          <div>
            <h2
              className="
                text-4xl font-bold tracking-wide
                bg-gradient-to-r
                from-white
                to-gray-400
                bg-clip-text
                text-transparent
              "
            >
              CODECK-STORE
            </h2>

            <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
              Luxury shopping redefined with premium products,
              seamless checkout, and world-class delivery.
            </p>
          </div>

          {/* Newsletter */}
          <div
            className="
              bg-white/5 backdrop-blur-md
              rounded-3xl p-6
              border border-white/10
              shadow-xl
            "
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold">
              Join our newsletter
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Get exclusive offers and product drops.
            </p>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter email"
                className="
                  flex-1 px-4 py-3 rounded-full
                  bg-black border border-gray-700
                  outline-none
                  focus:border-yellow-500
                  focus:ring-2
                  focus:ring-yellow-500/30
                "
              />

              <button
                className="
                  px-6 py-3 rounded-full
                  bg-white text-black font-semibold
                  hover:scale-105 transition
                "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Middle Links */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-10 py-14
          "
        >
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition">New Arrivals</li>
              <li className="hover:text-white transition">Best Sellers</li>
              <li className="hover:text-white transition">Categories</li>
              <li className="hover:text-white transition">Deals</li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition">Contact</li>
              <li className="hover:text-white transition">FAQs</li>
              <li className="hover:text-white transition">Shipping</li>
              <li className="hover:text-white transition">Returns</li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition">About Us</li>
              <li className="hover:text-white transition">Careers</li>
              <li className="hover:text-white transition">Blog</li>
              <li className="hover:text-white transition">Partners</li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="font-semibold text-lg mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <div className={socialClass}><FaInstagram /></div>
              <div className={socialClass}><FaTwitter /></div>
              <div className={socialClass}><FaLinkedin /></div>
              <div className={socialClass}><FaFacebookF /></div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div
          className="
            py-6 border-t border-gray-800
            text-gray-500 text-sm
            flex flex-col md:flex-row
            gap-4 justify-between
          "
        >
          <span>✓ Secure Payments</span>
          <span>✓ Free Shipping</span>
          <span>✓ 30-Day Returns</span>
        </div>

        {/* Bottom */}
        <div className="pt-6 text-center text-gray-600 text-sm">
          © 2026 Codeck-Store. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer