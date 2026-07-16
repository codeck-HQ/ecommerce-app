function PromoBanner() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 md:px-6 py-12"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          bg-gradient-to-r
          from-gray-900
          via-gray-800
          to-black
          px-6 md:px-16
          py-12 md:py-16
          shadow-2xl
        "
      >
        {/* Decorative Glow */}
        <div
          className="
            absolute top-0 right-0
            w-64 h-64
            bg-yellow-400/10
            rounded-full
            blur-3xl
          "
        ></div>

        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[2px]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <p className="uppercase tracking-[0.2em] text-gray-400 text-xs md:text-sm mb-4">
            Exclusive Collection
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
            Luxury Meets Everyday Shopping
          </h2>

          <p className="text-gray-300 mt-5 text-base md:text-lg leading-relaxed">
            Discover carefully curated products designed to elevate
            comfort, style, and everyday living.
          </p>

          <button
            className="
              mt-8
              px-8 py-4
              bg-white
              text-black
              font-semibold
              rounded-full
              transition-all duration-300
              hover:bg-yellow-400
              hover:scale-105
              hover:shadow-xl
            "
          >
            Shop Collection
          </button>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner