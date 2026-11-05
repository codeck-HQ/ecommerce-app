import { useLocation, Link } from "react-router-dom";
import {
  CheckCircle2,
  Package,
  Truck,
  CreditCard,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

function OrderConfirmation() {
  const location = useLocation();
  const order = location.state?.order;

  const formatPrice = (amount) => `$${Number(amount).toFixed(2)}`;

  const paymentLabels = {
    card: "Card Payment",
    transfer: "Bank Transfer",
    delivery: "Pay on Delivery",
  };

  if (!order) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full bg-white rounded-[28px] shadow-lg p-8 text-center">
          <Package size={52} className="mx-auto text-gray-400 mb-5" />

          <h1 className="text-2xl font-bold">No Order Found</h1>

          <p className="text-gray-500 mt-3">
            We couldn't find any order details for this page.
          </p>

          <Link
            to="/ProductList"
            className="inline-flex items-center justify-center gap-2 mt-7 px-7 py-3.5 rounded-2xl bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            <ShoppingBag size={18} />
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* CONFIRMATION HEADER */}
        <div className="bg-white rounded-[28px] shadow-sm border border-gray-100 p-8 md:p-12 text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={44} className="text-green-600" />
          </div>

          <p className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3">
            Checkout Completed
          </p>

          <h1 className="text-3xl md:text-4xl font-bold">
            Thank You, {order.customer.fullName.split(" ")[0]}!
          </h1>

          <p className="text-gray-500 mt-4 max-w-lg mx-auto leading-relaxed">
            Your checkout details have been captured for this demonstration. No
            real order has been submitted or payment processed.
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-gray-50 rounded-2xl px-6 py-4 mt-7">
            <span className="text-sm text-gray-500">Demo Order Reference</span>
            <span className="font-bold tracking-wide">{order.reference}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">
            {/* ORDER ITEMS */}
            <div className="bg-white rounded-[28px] shadow-sm border border-gray-100 p-5 md:p-7">
              <div className="flex items-center gap-3 mb-6">
                <Package size={23} />

                <h2 className="text-xl md:text-2xl font-bold">Order Items</h2>
              </div>

              <div className="space-y-5">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b border-gray-100 pb-5 last:border-0 last:pb-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-2xl shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold">{item.name}</h3>

                      <p className="text-sm text-gray-500 capitalize mt-1">
                        {item.category}
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="font-bold text-sm md:text-base">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* DELIVERY INFORMATION */}
            <div className="bg-white rounded-[28px] shadow-sm border border-gray-100 p-5 md:p-7">
              <div className="flex items-center gap-3 mb-6">
                <Truck size={23} />

                <h2 className="text-xl md:text-2xl font-bold">
                  Delivery Information
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-400 mb-2">Customer</p>
                  <p className="font-semibold">{order.customer.fullName}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {order.customer.email}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {order.customer.phone}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-2">Shipping Address</p>
                  <p className="font-semibold">{order.customer.address}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {order.customer.city}, {order.customer.state}
                  </p>
                  <p className="text-sm text-gray-500">
                    {order.customer.postalCode}
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-sm text-gray-400 mb-2">Delivery Method</p>
                  <p className="font-semibold capitalize">
                    {order.deliveryMethod} Delivery
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* ORDER SUMMARY */}
            <div className="bg-white rounded-[28px] shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(order.subtotal)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{formatPrice(order.shipping)}</span>
                </div>

                <div className="border-t border-gray-200 pt-5 flex justify-between items-center">
                  <span className="font-bold">Total</span>
                  <span className="text-2xl font-bold">
                    {formatPrice(order.total)}
                  </span>
                </div>
              </div>
            </div>

            {/* PAYMENT METHOD */}
            <div className="bg-white rounded-[28px] shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-5">
                <CreditCard size={21} />
                <h2 className="text-lg font-bold">Payment Method</h2>
              </div>

              <p className="font-semibold">
                {paymentLabels[order.paymentMethod]}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                {order.paymentMethod === "card"
                  ? "Card payment has not been processed."
                  : order.paymentMethod === "transfer"
                    ? "Bank transfer has not been completed."
                    : "Payment would be collected on delivery."}
              </p>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            to="/ProductList"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-black text-white font-semibold hover:bg-gray-800 transition"
          >
            Continue Shopping
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl border border-gray-200 bg-white font-semibold hover:bg-gray-100 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OrderConfirmation;
