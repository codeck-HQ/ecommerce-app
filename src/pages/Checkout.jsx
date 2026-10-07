import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowLeft,
  MapPin,
  Truck,
  CreditCard,
  ShieldCheck,
  Landmark,
  Banknote,
  Check,
} from "lucide-react"
import { CartContext } from "../context/CartContext"

function Checkout() {
  const { cartItems } = useContext(CartContext)

  const [deliveryMethod, setDeliveryMethod] = useState("standard")
  const [paymentMethod, setPaymentMethod] = useState("card")

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  })

  const [errors, setErrors] = useState({})
  const [formStatus, setFormStatus] = useState("")

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const shipping = subtotal > 0
    ? deliveryMethod === "express"
      ? 35
      : 20
    : 0

  const total = subtotal + shipping

  const inputClass = (field) =>
    `w-full h-12 px-4 rounded-xl border outline-none transition ${
      errors[field]
        ? "border-red-500 bg-red-50/40 focus:border-red-500"
        : "border-gray-200 bg-gray-50 focus:border-black focus:bg-white"
    }`

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }

    if (formStatus) {
      setFormStatus("")
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required."
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Enter a valid full name."
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address."
    }

    const phoneDigits = formData.phone.replace(/\D/g, "")

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required."
    } else if (phoneDigits.length < 10) {
      newErrors.phone = "Enter a valid phone number."
    }

    if (!formData.address.trim()) {
      newErrors.address = "Street address is required."
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required."
    }

    if (!formData.state.trim()) {
      newErrors.state = "State is required."
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required."
    }

    setErrors(newErrors)

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      const firstInvalidField = Object.keys(newErrors)[0]

      setTimeout(() => {
        const field = document.querySelector(`[name="${firstInvalidField}"]`)

        if (field) {
          field.focus()
          field.scrollIntoView({
            behavior: "smooth",
            block: "center",
          })
        }
      }, 0)

      return
    }

    setFormStatus("Checkout details validated successfully.")

    console.log({
      customer: formData,
      deliveryMethod,
      paymentMethod,
      cartItems,
      subtotal,
      shipping,
      total,
    })
  }

  return (
    <section className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="mb-8">
          <Link to="/cart" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition mb-5">
            <ArrowLeft size={18} />
            Back to Cart
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Checkout
              </h1>

              <p className="text-gray-500 mt-2">
                Complete your details and review your order.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
              <span className="text-gray-400">Cart</span>
              <span className="text-gray-300">/</span>
              <span className="text-black font-semibold">Checkout</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-400">Confirmation</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_420px] gap-8 items-start" noValidate>

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* CONTACT INFORMATION */}
            <div className="bg-white rounded-[28px] border border-gray-100 shadow-sm p-5 md:p-7">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold shrink-0">
                  1
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-bold">
                    Contact Information
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    We'll use these details to keep you updated about your order.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name
                  </label>

                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe" autoComplete="name" className={inputClass("fullName")} />

                  {errors.fullName && (
                    <p className="text-sm text-red-500 mt-2">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>

                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" autoComplete="email" className={inputClass("email")} />

                  {errors.email && (
                    <p className="text-sm text-red-500 mt-2">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>

                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234 800 000 0000" autoComplete="tel" className={inputClass("phone")} />

                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-2">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* SHIPPING ADDRESS */}
            <div className="bg-white rounded-[28px] border border-gray-100 shadow-sm p-5 md:p-7">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold shrink-0">
                  2
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <MapPin size={20} />

                    <h2 className="text-xl md:text-2xl font-bold">
                      Shipping Address
                    </h2>
                  </div>

                  <p className="text-sm text-gray-500 mt-1">
                    Where should we deliver your order?
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2">
                    Street Address
                  </label>

                  <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="123 Main Street" autoComplete="street-address" className={inputClass("address")} />

                  {errors.address && (
                    <p className="text-sm text-red-500 mt-2">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    City
                  </label>

                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" autoComplete="address-level2" className={inputClass("city")} />

                  {errors.city && (
                    <p className="text-sm text-red-500 mt-2">
                      {errors.city}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    State
                  </label>

                  <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" autoComplete="address-level1" className={inputClass("state")} />

                  {errors.state && (
                    <p className="text-sm text-red-500 mt-2">
                      {errors.state}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2">
                    Postal Code
                  </label>

                  <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="Postal code" autoComplete="postal-code" className={inputClass("postalCode")} />

                  {errors.postalCode && (
                    <p className="text-sm text-red-500 mt-2">
                      {errors.postalCode}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* DELIVERY METHOD */}
            <div className="bg-white rounded-[28px] border border-gray-100 shadow-sm p-5 md:p-7">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold shrink-0">
                  3
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <Truck size={20} />

                    <h2 className="text-xl md:text-2xl font-bold">
                      Delivery Method
                    </h2>
                  </div>

                  <p className="text-sm text-gray-500 mt-1">
                    Choose how quickly you'd like your order delivered.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">

                {/* STANDARD DELIVERY */}
                <label
                  className={`relative rounded-2xl border-2 p-5 cursor-pointer transition ${
                    deliveryMethod === "standard"
                      ? "border-black bg-gray-50"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <input type="radio" name="deliveryMethod" value="standard" checked={deliveryMethod === "standard"} onChange={() => setDeliveryMethod("standard")} className="sr-only" />

                  {deliveryMethod === "standard" && (
                    <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                      <Check size={14} />
                    </div>
                  )}

                  <Truck size={24} className="mb-4" />

                  <p className="font-bold">
                    Standard Delivery
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    3–5 business days
                  </p>

                  <p className="font-bold mt-4">
                    $20.00
                  </p>
                </label>

                {/* EXPRESS DELIVERY */}
                <label
                  className={`relative rounded-2xl border-2 p-5 cursor-pointer transition ${
                    deliveryMethod === "express"
                      ? "border-black bg-gray-50"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <input type="radio" name="deliveryMethod" value="express" checked={deliveryMethod === "express"} onChange={() => setDeliveryMethod("express")} className="sr-only" />

                  {deliveryMethod === "express" && (
                    <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                      <Check size={14} />
                    </div>
                  )}

                  <Truck size={24} className="mb-4" />

                  <p className="font-bold">
                    Express Delivery
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    1–2 business days
                  </p>

                  <p className="font-bold mt-4">
                    $35.00
                  </p>
                </label>
              </div>
            </div>

            {/* PAYMENT METHOD */}
            <div className="bg-white rounded-[28px] border border-gray-100 shadow-sm p-5 md:p-7">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold shrink-0">
                  4
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <CreditCard size={20} />

                    <h2 className="text-xl md:text-2xl font-bold">
                      Payment Method
                    </h2>
                  </div>

                  <p className="text-sm text-gray-500 mt-1">
                    Choose how you'd like to pay for your order.
                  </p>
                </div>
              </div>

              <div className="space-y-3">

                {/* CARD PAYMENT */}
                <label
                  className={`relative flex items-center gap-4 rounded-2xl border-2 p-4 md:p-5 cursor-pointer transition ${
                    paymentMethod === "card"
                      ? "border-black bg-gray-50"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <input type="radio" name="paymentMethod" value="card" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} className="sr-only" />

                  <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0">
                    <CreditCard size={22} />
                  </div>

                  <div className="flex-1">
                    <p className="font-bold">
                      Card Payment
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      Pay securely with your debit or credit card
                    </p>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      paymentMethod === "card"
                        ? "border-black bg-black text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {paymentMethod === "card" && <Check size={13} />}
                  </div>
                </label>

                {/* BANK TRANSFER */}
                <label
                  className={`relative flex items-center gap-4 rounded-2xl border-2 p-4 md:p-5 cursor-pointer transition ${
                    paymentMethod === "transfer"
                      ? "border-black bg-gray-50"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <input type="radio" name="paymentMethod" value="transfer" checked={paymentMethod === "transfer"} onChange={() => setPaymentMethod("transfer")} className="sr-only" />

                  <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0">
                    <Landmark size={22} />
                  </div>

                  <div className="flex-1">
                    <p className="font-bold">
                      Bank Transfer
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      Transfer directly from your bank account
                    </p>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      paymentMethod === "transfer"
                        ? "border-black bg-black text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {paymentMethod === "transfer" && <Check size={13} />}
                  </div>
                </label>

                {/* PAY ON DELIVERY */}
                <label
                  className={`relative flex items-center gap-4 rounded-2xl border-2 p-4 md:p-5 cursor-pointer transition ${
                    paymentMethod === "delivery"
                      ? "border-black bg-gray-50"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <input type="radio" name="paymentMethod" value="delivery" checked={paymentMethod === "delivery"} onChange={() => setPaymentMethod("delivery")} className="sr-only" />

                  <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0">
                    <Banknote size={22} />
                  </div>

                  <div className="flex-1">
                    <p className="font-bold">
                      Pay on Delivery
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      Pay when your order arrives
                    </p>
                  </div>

                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      paymentMethod === "delivery"
                        ? "border-black bg-black text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {paymentMethod === "delivery" && <Check size={13} />}
                  </div>
                </label>
              </div>

              {/* PAYMENT MESSAGE */}
              <div className="mt-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                {paymentMethod === "card" && (
                  <p className="text-sm text-gray-600">
                    You'll complete your card payment securely after placing your order.
                  </p>
                )}

                {paymentMethod === "transfer" && (
                  <p className="text-sm text-gray-600">
                    Bank transfer details will be provided after your order is confirmed.
                  </p>
                )}

                {paymentMethod === "delivery" && (
                  <p className="text-sm text-gray-600">
                    You'll pay when the order is delivered to your shipping address.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <aside className="bg-white rounded-[28px] border border-gray-100 shadow-lg p-5 md:p-6 lg:sticky lg:top-28">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold">
                  Order Summary
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your order
                </p>
              </div>

              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                <ShieldCheck size={21} />
              </div>
            </div>

            {/* PRODUCTS */}
            <div className="space-y-5 max-h-[350px] overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-2xl" />

                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-black text-white text-xs font-semibold rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate">
                      {item.name}
                    </p>

                    <p className="text-sm text-gray-500 capitalize mt-1">
                      {item.category}
                    </p>

                    <p className="font-bold mt-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* TOTALS */}
            <div className="border-t border-gray-200 mt-6 pt-6 space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>

                <span className="font-medium text-black">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>
                  Shipping
                  <span className="block text-xs text-gray-400 capitalize">
                    {deliveryMethod} delivery
                  </span>
                </span>

                <span className="font-medium text-black">
                  ${shipping.toFixed(2)}
                </span>
              </div>

              <div className="border-t border-gray-200 pt-5 flex items-center justify-between">
                <span className="text-lg font-bold">
                  Total
                </span>

                <span className="text-2xl font-bold">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <button type="submit" className="w-full mt-6 py-4 rounded-2xl bg-black text-white font-semibold text-lg hover:bg-gray-800 hover:scale-[1.01] transition">
              Place Order
            </button>

            {formStatus && (
              <div className="mt-4 p-3 rounded-xl bg-green-50 border border-green-200 text-sm text-green-700 text-center">
                {formStatus}
              </div>
            )}

            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
              <ShieldCheck size={16} />
              Secure checkout
            </div>
          </aside>
        </form>
      </div>
    </section>
  )
}

export default Checkout