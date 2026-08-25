const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 120,
    image: "/products_img/electronics/audio/wireless_headphone.jpg",
    category: "electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 80,
    image: "/products_img/electronics/wearables/smart_watch.jpg",
    category: "electronics",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 45,
    image: "/products_img/gaming/mouse/gaming_mouse.png",
    category: "gaming",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 140,
    image: "/products_img/gaming/keyboard/mechanical_keyboard.jpg",
    category: "gaming",
  },
  {
    id: 5,
    name: "Premium Sneakers",
    price: 95,
    image: "/products_img/fashion/shoes/sneakers.jpg",
    category: "fashion",
  },

  // Beauty — Skincare
  {
    id: 6,
    name: "Hydrating Face Cleanser",
    price: 28,
    image: "/products_img/beauty/skincare/hydrating_face_cleanser.jpg",
    category: "beauty",
    subcategory: "skincare",
  },
  {
    id: 7,
    name: "Vitamin C Serum",
    price: 45,
    image: "/products_img/beauty/skincare/vitamin_c_serum.jpg",
    category: "beauty",
    subcategory: "skincare",
  },
  {
    id: 8,
    name: "Daily Moisturizer",
    price: 32,
    image: "/products_img/beauty/skincare/daily_moisturizer.jpg",
    category: "beauty",
    subcategory: "skincare",
  },
  {
    id: 9,
    name: "Sunscreen SPF 50",
    price: 24,
    image: "/products_img/beauty/skincare/sunscreen_SPF_50.jpg", 
    category: "beauty",
    subcategory: "skincare",
  },
  {
    id: 10,
    name: "Night Repair Cream",
    price: 52,
    image: "/products_img/beauty/skincare/night_repair_cream.jpg",
    category: "beauty",
    subcategory: "skincare",
  },
  {
    id: 11,
    name: "Aloe Vera Gel",
    price: 18,
    image: "/products_img/beauty/skincare/aloe_vera_gel.jpg",
    category: "beauty",
    subcategory: "skincare",
  },
  {
    id: 12,
    name: "Facial Toner",
    price: 22,
    image: "/products_img/beauty/skincare/facial_toner.jpg",
    category: "beauty",
    subcategory: "skincare",
  },
  {
    id: 13,
    name: "Exfoliating Scrub",
    price: 30,
    image: "/products_img/beauty/skincare/exfoliating_scrub.jpg",
    category: "beauty",
    subcategory: "skincare",
  },
  {
    id: 14,
    name: "Under Eye Cream",
    price: 39,
    image: "/products_img/beauty/skincare/under_eye_cream.jpg",
    category: "beauty",
    subcategory: "skincare",
  },
  {
    id: 15,
    name: "Clay Face Mask",
    price: 26,
    image: "/products_img/beauty/skincare/clay_face_mask.jpg",
    category: "beauty",
    subcategory: "skincare",
  },
    // Electronics — Phones
  {
    id: 16,
    name: "iPhone 15 Pro",
    price: 999,
    image: "/products_img/electronics/phones/iphone_15_pro.png",
    category: "electronics",
    subcategory: "phones",
  },

  {
    id: 17,
    name: "Samsung Galaxy S25",
    price: 899,
    image: "/products_img/electronics/phones/samsung_galaxy_s25.jpg",
    category: "electronics",
    subcategory: "phones",
  },

  {
    id: 18,
    name: "Google Pixel 9",
    price: 799,
    image: "/products_img/electronics/phones/google_pixel_9.jpg",
    category: "electronics",
    subcategory: "phones",
  },

  {
    id: 19,
    name: "OnePlus 13",
    price: 849,
    image: "/products_img/electronics/phones/oneplus_13.jpg",
    category: "electronics",
    subcategory: "phones",
  },

  {
    id: 20,
    name: "Xiaomi 15",
    price: 749,
    image: "/products_img/electronics/phones/xiaomi_15.jpg",
    category: "electronics",
    subcategory: "phones",
  },

  {
    id: 21,
    name: "Nothing Phone 3",
    price: 699,
    image: "/products_img/electronics/phones/nothing_phone_3.jpg",
    category: "electronics",
    subcategory: "phones",
  },

  {
    id: 22,
    name: "Sony Xperia 1 VI",
    price: 1099,
    image: "/products_img/electronics/phones/sony_xperia_1_vi.jpg",
    category: "electronics",
    subcategory: "phones",
  },

    {
    id: 23,
    name: "iPhone 17 Pro",
    price: 1800,
    image: "/products_img/electronics/phones/iphone_17_pro.jpg",
    category: "electronics",
    subcategory: "phones",
  },

    // Electronics — Laptops
  {
    id: 24,
    name: "MacBook Pro 16",
    price: 2499,
    image: "/products_img/electronics/laptops/macbook_pro_16.jpg",
    category: "electronics",
    subcategory: "laptops",
  },

  {
    id: 25,
    name: "Dell XPS 15",
    price: 1899,
    image: "/products_img/electronics/laptops/dell_xps_15.jpg",
    category: "electronics",
    subcategory: "laptops",
  },

  {
    id: 26,
    name: "HP Spectre x360",
    price: 1699,
    image: "/products_img/electronics/laptops/hp_spectre_x360.jpg",
    category: "electronics",
    subcategory: "laptops",
  },

  {
    id: 27,
    name: "Lenovo ThinkPad X1 Carbon",
    price: 1799,
    image: "/products_img/electronics/laptops/lenovo_thinkpad_x1_carbon.jpg",
    category: "electronics",
    subcategory: "laptops",
  },

  {
    id: 28,
    name: "ASUS ROG Zephyrus G16",
    price: 1999,
    image: "/products_img/electronics/laptops/asus_rog_zephyrus_g16.jpg",
    category: "electronics",
    subcategory: "laptops",
  },

  {
    id: 29,
    name: "Microsoft Surface Laptop",
    price: 1499,
    image: "/products_img/electronics/laptops/microsoft_surface_laptop.jpg",
    category: "electronics",
    subcategory: "laptops",
  },

  {
    id: 30,
    name: "Acer Swift Go 14",
    price: 899,
    image: "/products_img/electronics/laptops/acer_swift_go_14.jpg",
    category: "electronics",
    subcategory: "laptops",
  },
    // Electronics — Audio
  {
    id: 31,
    name: "Sony WH-1000XM5",
    price: 399,
    image: "/products_img/electronics/audio/sony_wh_1000xm5.jpg",
    category: "electronics",
    subcategory: "audio",
  },

  {
    id: 32,
    name: "Apple AirPods Max",
    price: 549,
    image: "/products_img/electronics/audio/apple_airpods_max.jpg",
    category: "electronics",
    subcategory: "audio",
  },

  {
    id: 33,
    name: "Bose QuietComfort Ultra",
    price: 429,
    image: "/products_img/electronics/audio/bose_quietcomfort_ultra.jpg",
    category: "electronics",
    subcategory: "audio",
  },

  {
    id: 34,
    name: "Sennheiser Momentum 4",
    price: 379,
    image: "/products_img/electronics/audio/sennheiser_momentum_4.jpg",
    category: "electronics",
    subcategory: "audio",
  },

  {
    id: 35,
    name: "JBL Live 770NC",
    price: 199,
    image: "/products_img/electronics/audio/jbl_live_770nc.jpg",
    category: "electronics",
    subcategory: "audio",
  },

  {
    id: 36,
    name: "Beats Studio Pro",
    price: 349,
    image: "/products_img/electronics/audio/beats_studio_pro.jpg",
    category: "electronics",
    subcategory: "audio",
  },

  {
    id: 37,
    name: "Sony WF-1000XM5",
    price: 299,
    image: "/products_img/electronics/audio/sony_wf_1000xm5.jpg",
    category: "electronics",
    subcategory: "audio",
  },

    // Electronics — Cameras
  {
    id: 38,
    name: "Canon EOS R6 Mark II",
    price: 2499,
    image: "/products_img/electronics/cameras/canon_eos_r6_mark_ii.jpg",
    category: "electronics",
    subcategory: "cameras",
  },

  {
    id: 39,
    name: "Sony Alpha A7 IV",
    price: 2498,
    image: "/products_img/electronics/cameras/sony_alpha_a7_iv.jpg",
    category: "electronics",
    subcategory: "cameras",
  },

  {
    id: 40,
    name: "Nikon Z6 III",
    price: 2499,
    image: "/products_img/electronics/cameras/nikon_z6_iii.jpg",
    category: "electronics",
    subcategory: "cameras",
  },

  {
    id: 41,
    name: "Fujifilm X-T5",
    price: 1699,
    image: "/products_img/electronics/cameras/fujifilm_x_t5.jpg",
    category: "electronics",
    subcategory: "cameras",
  },

  {
    id: 42,
    name: "Panasonic Lumix S5 II",
    price: 1999,
    image: "/products_img/electronics/cameras/panasonic_lumix_s5_ii.jpg",
    category: "electronics",
    subcategory: "cameras",
  },

  {
    id: 43,
    name: "GoPro HERO13 Black",
    price: 399,
    image: "/products_img/electronics/cameras/gopro_hero13_black.jpg",
    category: "electronics",
    subcategory: "cameras",
  },

  {
    id: 44,
    name: "DJI Osmo Pocket 3",
    price: 519,
    image: "/products_img/electronics/cameras/dji_osmo_pocket_3.jpg",
    category: "electronics",
    subcategory: "cameras",
  },
  
]

export default products