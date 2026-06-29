import { useState } from "react";
import { supabase } from "./supabaseClient";

const PLATFORM_FEE = 19900; // ₹199 in paise (Razorpay uses paise)

export default function PaymentButton({ machine, bookerPhone, bookerName, onSuccess }) {
  const [loading, setLoading] = useState(false);

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);

    const loaded = await loadRazorpay();
    if (!loaded) {
      alert("Payment service failed to load. Please check your internet and try again.");
      setLoading(false);
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: PLATFORM_FEE,
      currency: "INR",
      name: "KhudaiWala",
      description: `Booking Fee — ${machine?.machine_type || "Machine"} in ${machine?.city || ""}`,
      image: "/logo.png",
      handler: async function (response) {
        // Payment successful — save booking to Supabase
        const { error } = await supabase.from("bookings").insert([
          {
            machine_id: machine?.id,
            booker_name: bookerName,
            booker_phone: bookerPhone,
            machine_type: machine?.machine_type,
            city: machine?.city,
            platform_fee: 199,
            razorpay_payment_id: response.razorpay_payment_id,
            status: "confirmed",
          },
        ]);

        if (error) {
          console.error("Booking save error:", error);
          alert("Payment received but booking save failed. Please contact support.");
        } else {
          if (onSuccess) onSuccess(response.razorpay_payment_id);
        }
      },
      prefill: {
        name: bookerName || "",
        contact: bookerPhone || "",
      },
      notes: {
        machine_id: machine?.id,
        city: machine?.city,
      },
      theme: {
        color: "#FF6B00",
      },
      modal: {
        ondismiss: () => {
          setLoading(false);
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      alert(`Payment failed: ${response.error.description}`);
      setLoading(false);
    });

    rzp.open();
    setLoading(false);
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      style={{
        backgroundColor: loading ? "#ccc" : "#FF6B00",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        padding: "12px 24px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: loading ? "not-allowed" : "pointer",
        width: "100%",
        marginTop: "12px",
      }}
    >
      {loading ? "Processing..." : "Book Now — ₹199 Platform Fee"}
    </button>
  );
}
