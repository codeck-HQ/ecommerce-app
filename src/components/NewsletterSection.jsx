function NewsletterSection() {
  return (
    <section
      className="max-w-6xl mx-auto px-6 py-16"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        className="
          relative
          overflow-hidden
          bg-gray-950
          rounded-[32px]
          px-8
          md:px-16
          py-14
          text-center
          shadow-2xl
        "
      >
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-white/5"></div>

        <div className="relative z-10">
          <p className="uppercase tracking-[0.2em] text-gray-400 text-sm mb-4">
            Stay Connected
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Join Our Newsletter
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Get exclusive offers, early access to new collections,
            and premium shopping updates delivered to your inbox.
          </p>

          <div
            className="
              mt-8
              flex
              flex-col
              md:flex-row
              gap-4
              max-w-2xl
              mx-auto
            "
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="
                flex-1
                px-6
                py-4
                rounded-full
                outline-none
                bg-white/95
                shadow-lg
                focus:ring-2
                focus:ring-yellow-500/30
              "
            />

            <button
              className="
                px-8
                py-4
                rounded-full
                bg-yellow-500
                text-black
                font-semibold
                hover:scale-105
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
              "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection