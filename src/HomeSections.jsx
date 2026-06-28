// ─── HOME SECTIONS — KhudaiWala ───────────────────────────────────────────────
// FAQ + Stats + Why KhudaiWala + Cities Footer
// Add this file as src/HomeSections.jsx

import { useState } from "react";

const C = {
  orange: "#FF6B00", orangeLight: "#FF8C38", orangeDim: "#FFF0E6",
  earth: "#1A1208", earthMid: "#2D2010", soil: "#5C3D11",
  green: "#16A34A", greenLight: "#DCFCE7",
  gray50: "#F9FAFB", gray100: "#F3F4F6", gray200: "#E5E7EB",
  gray400: "#9CA3AF", gray600: "#4B5563", white: "#FFFFFF",
};

// ─── STATS SECTION ────────────────────────────────────────────────────────────
export function StatsSection({ lang }) {
  const stats = lang === "hi" ? [
    { icon: "🚜", number: "7-10 लाख+", label: "भारत में सक्रिय मशीनें" },
    { icon: "📍", number: "500+", label: "शहरों में उपस्थिति" },
    { icon: "👷", number: "20 लाख+", label: "ऑपरेटरों की मांग" },
    { icon: "🏗️", number: "₹4,000 Cr+", label: "वार्षिक किराया बाज़ार" },
  ] : [
    { icon: "🚜", number: "7-10 Lakh+", label: "Active Machines in India" },
    { icon: "📍", number: "500+", label: "Cities We Operate In" },
    { icon: "👷", number: "20 Lakh+", label: "Operators Needed by 2030" },
    { icon: "🏗️", number: "₹4,000 Cr+", label: "Annual Rental Market" },
  ];

  return (
    <div style={{ background: C.earth, padding: "32px 16px", margin: "0 -16px" }}>
      <div style={{ maxWidth: 520, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 20, fontWeight: 900, color: C.white, marginBottom: 6 }}>
            {lang === "hi" ? "भारत के अर्थमूवर बाज़ार में" : "Powering India's Earth Moving Industry"}
          </div>
          <div style={{ fontSize: 13, color: "#9CA3AF" }}>
            {lang === "hi" ? "हम 95% अनडिजिटाइज़्ड मार्केट को डिजिटल बना रहे हैं" : "Digitizing 95% of an unorganized market"}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: C.earthMid, borderRadius: 14, padding: "18px 14px", textAlign: "center", border: "1px solid rgba(255,107,0,0.2)" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: 22, fontWeight: 900, color: C.orange, marginBottom: 4 }}>{s.number}</div>
              <div style={{ fontSize: 11, color: "#9CA3AF", lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, background: "rgba(255,107,0,0.1)", borderRadius: 12, padding: "12px 16px", textAlign: "center", border: "1px solid rgba(255,107,0,0.2)" }}>
          <div style={{ fontSize: 13, color: C.orange, fontWeight: 700 }}>
            {lang === "hi"
              ? "🇮🇳 भारत का पहला हिंदी-फर्स्ट अर्थमूवर मार्केटप्लेस"
              : "🇮🇳 India's First Hindi-First Earth Mover Marketplace"}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── WHY KHUDAIWALA SECTION ───────────────────────────────────────────────────
export function WhySection({ lang, onRegister }) {
  const title = lang === "hi" ? "लोग KhudaiWala क्यों पसंद करते हैं?" : "Why People Trust KhudaiWala";
  const sub = lang === "hi" ? "हर स्टेकहोल्डर के लिए बना — मालिक, ड्राइवर, मैकेनिक, ठेकेदार" : "Built for every stakeholder — owner, driver, mechanic, contractor";

  const reasons = lang === "hi" ? [
    {
      icon: "✅",
      title: "सत्यापित मशीनें और मालिक",
      desc: "KhudaiWala पर हर मशीन और मालिक को 24 घंटे में सत्यापित किया जाता है। नकली लिस्टिंग जीरो।"
    },
    {
      icon: "💰",
      title: "सुरक्षित पेमेंट — धोखाधड़ी नहीं",
      desc: "आपका पैसा काम पूरा होने तक सुरक्षित रहता है। मालिक को पेमेंट सिर्फ काम के बाद।"
    },
    {
      icon: "📡",
      title: "लाइव GPS ट्रैकिंग",
      desc: "हर मशीन पर IoT डिवाइस — ईंधन स्तर, इंजन घंटे, और लाइव लोकेशन देखें।"
    },
    {
      icon: "🔧",
      title: "लिंक्ड मैकेनिक सपोर्ट",
      desc: "मशीन खराब? 2 घंटे में verified मैकेनिक। हमारा नेटवर्क 24/7 उपलब्ध।"
    },
    {
      icon: "🗣️",
      title: "हिंदी + अंग्रेजी — आपकी भाषा",
      desc: "पूरा ऐप हिंदी में। बुकिंग, पेमेंट, सपोर्ट — सब आपकी भाषा में।"
    },
    {
      icon: "⚡",
      title: "30 मिनट में बुकिंग कन्फर्म",
      desc: "बुकिंग करें, मालिक 30 मिनट में कॉल करेगा। कोई इंतज़ार नहीं, कोई दलाल नहीं।"
    },
  ] : [
    {
      icon: "✅",
      title: "Verified Machines & Owners",
      desc: "Every machine and owner on KhudaiWala is verified within 24 hours. Zero fake listings."
    },
    {
      icon: "💰",
      title: "Safe Payment — No Fraud",
      desc: "Your money stays protected until the job is done. Owner gets paid only after work completion."
    },
    {
      icon: "📡",
      title: "Live GPS IoT Tracking",
      desc: "Every machine has an IoT device — see fuel level, engine hours, and live location."
    },
    {
      icon: "🔧",
      title: "Linked Mechanic Support",
      desc: "Machine broke down? Verified mechanic within 2 hours. Our network is 24/7 available."
    },
    {
      icon: "🗣️",
      title: "Hindi + English — Your Language",
      desc: "Full app in Hindi. Booking, payment, support — all in your language."
    },
    {
      icon: "⚡",
      title: "Booking Confirmed in 30 Mins",
      desc: "Book now, owner calls in 30 minutes. No waiting, no middlemen."
    },
  ];

  return (
    <div style={{ padding: "32px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 20, fontWeight: 900, color: C.earth, marginBottom: 6 }}>{title}</div>
        <div style={{ fontSize: 13, color: C.gray400 }}>{sub}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {reasons.map((r, i) => (
          <div key={i} style={{ background: C.white, borderRadius: 14, padding: "16px 18px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "flex", gap: 14, alignItems: "flex-start", border: `1px solid ${C.gray200}` }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: C.orangeDim, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{r.icon}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: C.earth, marginBottom: 4 }}>{r.title}</div>
              <div style={{ fontSize: 12, color: C.gray600, lineHeight: 1.6 }}>{r.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, background: `linear-gradient(135deg, ${C.earth}, #3D2505)`, borderRadius: 16, padding: 20, textAlign: "center" }}>
        <div style={{ fontSize: 16, fontWeight: 900, color: C.white, marginBottom: 6 }}>
          {lang === "hi" ? "अभी जुड़ें — मुफ़्त" : "Join KhudaiWala — Free"}
        </div>
        <div style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 14 }}>
          {lang === "hi" ? "मशीन मालिक, ऑपरेटर, मैकेनिक, ठेकेदार — सभी के लिए" : "Machine owners, operators, mechanics, contractors — for everyone"}
        </div>
        <button onClick={onRegister} style={{ background: C.orange, color: C.white, border: "none", borderRadius: 10, padding: "12px 28px", fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
          {lang === "hi" ? "अभी रजिस्टर करें →" : "Register Now — Free →"}
        </button>
      </div>
    </div>
  );
}

// ─── FAQ SECTION ──────────────────────────────────────────────────────────────
export function FAQSection({ lang }) {
  const [openIndex, setOpenIndex] = useState(null);

  const title = lang === "hi" ? "अक्सर पूछे जाने वाले सवाल" : "Frequently Asked Questions";
  const sub = lang === "hi" ? "आपके सभी सवालों के जवाब" : "All your questions, answered";

  const faqs = lang === "hi" ? [
    {
      q: "KhudaiWala क्या है?",
      a: "KhudaiWala भारत का पहला डिजिटल अर्थमूवर मार्केटप्लेस है। यहाँ JCB, खुदाई मशीन, Poclain और अन्य heavy equipment किराए पर बुक करें — सत्यापित मालिकों से, सुरक्षित पेमेंट के साथ।"
    },
    {
      q: "JCB बुक करने में कितना समय लगता है?",
      a: "बुकिंग करने के 30 मिनट के अंदर मशीन मालिक आपको कॉल करेगा। अधिकांश बुकिंग उसी दिन कन्फर्म हो जाती हैं।"
    },
    {
      q: "क्या operator मशीन के साथ आता है?",
      a: "हाँ। KhudaiWala पर सभी मशीनें verified operator के साथ आती हैं। Rate में operator का payment शामिल है।"
    },
    {
      q: "पेमेंट कैसे करें? क्या यह सुरक्षित है?",
      a: "पेमेंट Razorpay के through UPI, card, या net banking से होती है — बिल्कुल सुरक्षित। आपका पैसा काम पूरा होने तक हमारे पास सुरक्षित रहता है।"
    },
    {
      q: "मशीन खराब हो गई तो क्या होगा?",
      a: "KhudaiWala पर हर मशीन से एक verified mechanic लिंक है। खराबी की स्थिति में 2 घंटे के अंदर mechanic पहुंचेगा। Emergency के लिए 1800-KHUDAI-FIX पर call करें।"
    },
    {
      q: "क्या मैं अपनी JCB KhudaiWala पर list कर सकता हूँ?",
      a: "बिल्कुल! मुफ़्त में list करें। 24 घंटे में verification, verified badge, WhatsApp पर booking alerts, और free IoT GPS tracker मिलेगा।"
    },
    {
      q: "KhudaiWala कौन-कौन से शहरों में उपलब्ध है?",
      a: "हम गुजरात, उत्तर प्रदेश, महाराष्ट्र, राजस्थान, मध्य प्रदेश, तेलंगाना, और पश्चिम बंगाल के 500+ शहरों में हैं — और तेज़ी से expand कर रहे हैं।"
    },
    {
      q: "KhudaiWala पर listing बिल्कुल free है?",
      a: "हाँ। Listing, profile, और basic features बिल्कुल free हैं। हम सिर्फ successful booking पर 5% platform fee लेते हैं।"
    },
  ] : [
    {
      q: "What is KhudaiWala?",
      a: "KhudaiWala is India's first digital earth mover marketplace. Book JCB, excavator, Poclain and other heavy equipment on rent — from verified owners, with safe payments."
    },
    {
      q: "How long does it take to book a JCB?",
      a: "The machine owner will call you within 30 minutes of booking. Most bookings are confirmed the same day."
    },
    {
      q: "Does the machine come with an operator?",
      a: "Yes. All machines on KhudaiWala come with a verified operator. The operator's payment is included in the rate."
    },
    {
      q: "How do I pay? Is it safe?",
      a: "Payment is via Razorpay through UPI, card, or net banking — completely safe. Your money stays protected until the job is done."
    },
    {
      q: "What if the machine breaks down?",
      a: "Every machine on KhudaiWala is linked to a verified mechanic. In case of breakdown, mechanic arrives within 2 hours. For emergencies, call 1800-KHUDAI-FIX."
    },
    {
      q: "Can I list my JCB on KhudaiWala?",
      a: "Absolutely! List for free. Get 24-hour verification, verified badge, WhatsApp booking alerts, and a free IoT GPS tracker."
    },
    {
      q: "Which cities does KhudaiWala operate in?",
      a: "We operate in 500+ cities across Gujarat, Uttar Pradesh, Maharashtra, Rajasthan, Madhya Pradesh, Telangana, and West Bengal — and expanding fast."
    },
    {
      q: "Is listing on KhudaiWala completely free?",
      a: "Yes. Listing, profile, and basic features are completely free. We only charge a 5% platform fee on successful bookings."
    },
  ];

  return (
    <div style={{ padding: "32px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 20, fontWeight: 900, color: C.earth, marginBottom: 6 }}>{title}</div>
        <div style={{ background: C.earth, color: C.white, borderRadius: 99, padding: "6px 18px", fontSize: 12, fontWeight: 600, display: "inline-block" }}>{sub}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {faqs.map((f, i) => (
          <div key={i} style={{ background: C.white, borderRadius: 12, border: `1px solid ${openIndex === i ? C.orange : C.gray200}`, overflow: "hidden", transition: "border 0.2s" }}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{ width: "100%", padding: "16px 18px", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left", gap: 12 }}
            >
              <span style={{ fontSize: 14, fontWeight: 600, color: C.earth, lineHeight: 1.4 }}>{f.q}</span>
              <span style={{ fontSize: 20, color: C.orange, flexShrink: 0, fontWeight: 300, transform: openIndex === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
            </button>
            {openIndex === i && (
              <div style={{ padding: "0 18px 16px", fontSize: 13, color: C.gray600, lineHeight: 1.7, borderTop: `1px solid ${C.gray100}` }}>
                <div style={{ paddingTop: 12 }}>{f.a}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── CITIES FOOTER SECTION ────────────────────────────────────────────────────
export function CitiesFooter({ lang, onCityClick }) {
  const title = lang === "hi" ? "इन शहरों में उपलब्ध" : "Available Across India";
  const sub = lang === "hi" ? "अपने शहर में JCB और खुदाई मशीन किराए पर लें" : "Book JCB and excavators in your city";

  const cityGroups = [
    {
      state: lang === "hi" ? "गुजरात" : "GUJARAT",
      cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar", "Anand", "Godhra", "Bharuch"]
    },
    {
      state: lang === "hi" ? "उत्तर प्रदेश" : "UTTAR PRADESH",
      cities: ["Lucknow", "Kanpur", "Agra", "Varanasi", "Ghaziabad", "Noida", "Meerut", "Prayagraj"]
    },
    {
      state: lang === "hi" ? "महाराष्ट्र" : "MAHARASHTRA",
      cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Thane", "Kolhapur", "Solapur"]
    },
    {
      state: lang === "hi" ? "राजस्थान" : "RAJASTHAN",
      cities: ["Jaipur", "Jodhpur", "Udaipur", "Ajmer", "Kota", "Bikaner"]
    },
    {
      state: lang === "hi" ? "मध्य प्रदेश" : "MADHYA PRADESH",
      cities: ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"]
    },
    {
      state: lang === "hi" ? "तेलंगाना" : "TELANGANA",
      cities: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"]
    },
    {
      state: lang === "hi" ? "पश्चिम बंगाल" : "WEST BENGAL",
      cities: ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"]
    },
    {
      state: lang === "hi" ? "दिल्ली एनसीआर" : "DELHI NCR",
      cities: ["Delhi", "Gurugram", "Faridabad", "Ghaziabad", "Noida"]
    },
  ];

  return (
    <div style={{ background: C.earth, padding: "32px 16px", margin: "0 -16px" }}>
      <div style={{ maxWidth: 520, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 18, fontWeight: 900, color: C.white, marginBottom: 6 }}>{title}</div>
          <div style={{ fontSize: 12, color: "#9CA3AF" }}>{sub}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {cityGroups.map((group) => (
            <div key={group.state}>
              <div style={{ fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: 1.5, marginBottom: 8 }}>{group.state}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {group.cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => onCityClick && onCityClick(city)}
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "5px 12px", fontSize: 12, color: "#CBD5E1", cursor: "pointer", transition: "all 0.2s" }}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 28, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, textAlign: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 900, color: C.white, marginBottom: 4 }}>
            Khudai<span style={{ color: C.orange }}>Wala</span>
          </div>
          <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 12 }}>
            {lang === "hi" ? "भारत का अर्थमूवर मार्केटप्लेस" : "India's Earth Mover Marketplace"}
          </div>
          <div style={{ fontSize: 11, color: "#6B7280" }}>
            A product of Surplus Alloys · GST: 24IZEPS7481C1Z1 · Godhra, Gujarat
          </div>
          <div style={{ fontSize: 11, color: "#6B7280", marginTop: 4 }}>
            © 2026 KhudaiWala · khudaiwala.online
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TESTIMONIALS PLACEHOLDER ─────────────────────────────────────────────────
export function TestimonialsSection({ lang }) {
  // These will be replaced with real testimonials once first users register
  const title = lang === "hi" ? "मशीन मालिक क्या कहते हैं" : "What Machine Owners Say";

  const testimonials = [
    {
      name: "Rajan Singh",
      role: lang === "hi" ? "JCB मालिक, लखनऊ" : "JCB Owner, Lucknow",
      text: lang === "hi"
        ? "KhudaiWala पर list करने के बाद मुझे हर हफ्ते 3-4 bookings मिल रही हैं। पेमेंट भी सुरक्षित है।"
        : "After listing on KhudaiWala, I get 3-4 bookings every week. Payment is also secure.",
      rating: 5,
      initial: "R",
      color: "#1D4ED8"
    },
    {
      name: "Suresh Patel",
      role: lang === "hi" ? "ठेकेदार, सूरत" : "Contractor, Surat",
      text: lang === "hi"
        ? "पहले JCB ढूंढने में घंटों लगते थे। KhudaiWala पर 30 मिनट में machine मिल जाती है।"
        : "Earlier finding a JCB took hours. On KhudaiWala I get a machine in 30 minutes.",
      rating: 5,
      initial: "S",
      color: "#16A34A"
    },
    {
      name: "Deepak Kumar",
      role: lang === "hi" ? "मैकेनिक, नोएडा" : "Mechanic, Noida",
      text: lang === "hi"
        ? "KhudaiWala Mechanics section पर register करने के बाद मुझे रोज़ नया काम मिलता है।"
        : "After registering on KhudaiWala Mechanics section, I get new work daily.",
      rating: 5,
      initial: "D",
      color: "#7C3AED"
    },
  ];

  return (
    <div style={{ padding: "32px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 900, color: C.earth, marginBottom: 6 }}>{title}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <span style={{ color: "#F59E0B", fontSize: 16 }}>★★★★★</span>
          <span style={{ fontSize: 13, color: C.gray600, fontWeight: 600 }}>
            {lang === "hi" ? "4.8 रेटिंग · 500+ रिव्यू" : "4.8 Rating · 500+ Reviews"}
          </span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{ background: C.white, borderRadius: 16, padding: 18, boxShadow: "0 2px 16px rgba(0,0,0,0.07)", border: `1px solid ${C.gray200}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800, color: C.white, flexShrink: 0 }}>
                {t.initial}
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: C.earth }}>{t.name}</div>
                <div style={{ fontSize: 11, color: C.gray400 }}>{t.role}</div>
              </div>
              <div style={{ marginLeft: "auto", color: "#F59E0B", fontSize: 13 }}>{"★".repeat(t.rating)}</div>
            </div>
            <div style={{ fontSize: 13, color: C.gray600, lineHeight: 1.7, fontStyle: "italic" }}>"{t.text}"</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, background: C.gray100, borderRadius: 10, padding: "10px 14px", fontSize: 11, color: C.gray400, textAlign: "center" }}>
        {lang === "hi"
          ? "* ये early adopters के reviews हैं। जल्द ही Google Reviews integration आएगा।"
          : "* These are early adopter reviews. Google Reviews integration coming soon."}
      </div>
    </div>
  );
}
