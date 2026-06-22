import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

const C = {
  orange: "#FF6B00", orangeLight: "#FF8C38", orangeDim: "#FFF0E6",
  earth: "#1A1208", earthMid: "#2D2010", soil: "#5C3D11",
  green: "#16A34A", greenLight: "#DCFCE7", red: "#DC2626", redLight: "#FEE2E2",
  blue: "#1D4ED8", blueLight: "#DBEAFE", gray50: "#F9FAFB", gray100: "#F3F4F6",
  gray200: "#E5E7EB", gray400: "#9CA3AF", gray600: "#4B5563", white: "#FFFFFF",
};

const inp = {
  width: "100%", padding: "11px 14px", borderRadius: 10,
  border: `1.5px solid ${C.gray200}`, fontSize: 14, color: C.earth,
  boxSizing: "border-box", outline: "none", fontFamily: "inherit", background: C.white,
};

// ─── ALL TEXT IN BOTH LANGUAGES ───────────────────────────────────────────────
const T = {
  en: {
    tagline: "INDIA'S EARTH MOVERS MARKETPLACE",
    liveNear: "Live Near You",
    available: "Available",
    joinFree: "Join Free",
    find: "Find",
    bookings: "Bookings",
    mechanics: "Mechanics",
    list: "List",
    adTag: "🎯 MACHINE OWNERS",
    adHeadline1: "Apna JCB khali hai?",
    adHeadline2: "Earn ₹8,000+ Daily",
    adSub: "Free listing · GPS tracking · Instant payments",
    adBtn: "Register Now — Free →",
    searchPlaceholder: "Search JCB, excavator, city...",
    availNow: "Available now only",
    machines: "machines",
    noMachines: "No machines listed yet. Be the first to list yours!",
    bookNow: "Book Now",
    unavailable: "Unavailable",
    verified: "✓ VERIFIED",
    fuel: "FUEL",
    engineHrs: "ENGINE HRS",
    status: "STATUS",
    liveBtn: "Live →",
    owner: "Owner",
    myBookings: "My Bookings",
    myBookingsSub: "Your active and past machine hires",
    registerToBook: "Register to see your bookings",
    joinBtn: "Join KhudaiWala Free",
    noBookings: "No bookings yet. Find a machine to get started.",
    findMechanics: "Find Mechanics",
    findMechanicsSub: "Verified repair & service professionals",
    emergency: "🔧 Emergency breakdown? Call now:",
    noMechanics: "No mechanics listed yet. Register as a mechanic to be first!",
    registerMechanic: "Register as Mechanic",
    bookMechanic: "Book Mechanic",
    call: "📞 Call",
    specialty: "Specialty",
    listMachine: "List Your Machine",
    listMachineSub: "Reach 10,000+ hirers. Earn every day.",
    earningPotential: "💰 Earning Potential",
    freeWith: "🎁 Free with every listing",
    listBtn: "🚜 List My Machine — Free →",
    listNote: "Verified within 24 hrs · No hidden charges · Free IoT device",
    workDate: "Work Date",
    duration: "Duration",
    hours: "hours",
    workDetails: "Work Details",
    workPlaceholder: "Describe the work: excavation, foundation, road work...",
    machineRate: "Machine Rate",
    platformFee: "Platform Fee (5%)",
    total: "Total",
    confirmBooking: "Confirm Booking",
    processing: "Processing...",
    bookingConfirmed: "Booking Confirmed!",
    ownerCall: "📱 Owner will call you within 30 mins",
    viewBookings: "View My Bookings",
    joinTitle: "JOIN KHUDAIWALA",
    whoAreYou: "Aap kaun ho?",
    whoSub: "Who are you joining as?",
    roles: [
      { key: "owner", icon: "🚜", title: "Machine Owner", sub: "I own JCB / Excavator / Grader" },
      { key: "operator", icon: "👷", title: "Operator / Driver", sub: "I operate heavy equipment" },
      { key: "mechanic", icon: "🔧", title: "Mechanic", sub: "I repair & service machines" },
      { key: "hirer", icon: "🏗️", title: "I need to Hire", sub: "Contractor / Builder / Developer" },
    ],
    cancel: "Cancel",
    registerAs: "Register as",
    regFree: "Free · 2 minutes",
    yourName: "Your Full Name",
    phone: "Mobile Number",
    whatsapp: "WhatsApp Number (if different)",
    city: "Your City",
    state: "Your State",
    machineType: "Machine Type",
    ratePerHour: "Rate per Hour (₹)",
    specialtyLabel: "Your Specialty",
    freePerks: [
      "Free IoT GPS tracking device",
      "Verified badge on your listing",
      "WhatsApp booking alerts",
      "Instant payment within 24hrs"
    ],
    registerBtn: "Register Free →",
    registering: "Registering...",
    regNote: "Verified within 24 hrs · No spam · No hidden charges",
    welcomeTitle: "Welcome to KhudaiWala!",
    regNextSteps: [
      "Profile under review (24 hrs)",
      "You'll receive a verified badge",
      "Start receiving job requests",
      "Earnings paid weekly to your bank"
    ],
    exploreBtn: "Explore KhudaiWala →",
    namePH: "Ramesh Kumar",
    phonePH: "+91 98765 43210",
    cityPH: "Lucknow",
    statePH: "Uttar Pradesh",
    machinePH: "JCB 3CX / Hitachi EX200 / CAT Grader",
    ratePH: "1800",
    specialtyPH: "JCB Repair / Hydraulic / Engine",
    registerPrompt: "Register or login to book a machine.",
    earningRows: [
      ["JCB Backhoe Loader", "₹1,800–₹2,200/hr", "₹25,000–40,000/month"],
      ["Hydraulic Excavator", "₹2,500–₹3,500/hr", "₹45,000–65,000/month"],
      ["Motor Grader", "₹2,200–₹3,000/hr", "₹38,000–55,000/month"],
    ],
    freeItems: [
      "IoT GPS tracker — installed free",
      "Verified Owner badge",
      "WhatsApp booking alerts instantly",
      "Earnings dashboard with daily reports",
      "Linked mechanic for breakdown support",
    ],
    back: "← Back",
    registeredAs: "registered as",
  },
  hi: {
    tagline: "भारत का अर्थमूवर बाज़ार",
    liveNear: "आपके पास",
    available: "उपलब्ध",
    joinFree: "जुड़ें मुफ़्त",
    find: "खोजें",
    bookings: "बुकिंग",
    mechanics: "मैकेनिक",
    list: "लिस्ट",
    adTag: "🎯 मशीन मालिकों के लिए",
    adHeadline1: "अपना JCB खाली है?",
    adHeadline2: "रोज़ ₹8,000+ कमाओ",
    adSub: "फ्री लिस्टिंग · GPS ट्रैकिंग · तुरंत पेमेंट",
    adBtn: "अभी रजिस्टर करो — मुफ़्त →",
    searchPlaceholder: "JCB, खुदाई मशीन, शहर खोजें...",
    availNow: "अभी उपलब्ध",
    machines: "मशीनें",
    noMachines: "अभी कोई मशीन नहीं है। पहले अपनी मशीन लिस्ट करो!",
    bookNow: "अभी बुक करो",
    unavailable: "उपलब्ध नहीं",
    verified: "✓ सत्यापित",
    fuel: "ईंधन",
    engineHrs: "इंजन घंटे",
    status: "स्थिति",
    liveBtn: "लाइव →",
    owner: "मालिक",
    myBookings: "मेरी बुकिंग",
    myBookingsSub: "आपकी चालू और पुरानी बुकिंग",
    registerToBook: "बुकिंग देखने के लिए रजिस्टर करें",
    joinBtn: "KhudaiWala से जुड़ें — मुफ़्त",
    noBookings: "अभी कोई बुकिंग नहीं। मशीन खोजें और शुरू करें।",
    findMechanics: "मैकेनिक खोजें",
    findMechanicsSub: "सत्यापित मरम्मत और सेवा विशेषज्ञ",
    emergency: "🔧 मशीन खराब हो गई? अभी कॉल करें:",
    noMechanics: "अभी कोई मैकेनिक नहीं। पहले रजिस्टर करें!",
    registerMechanic: "मैकेनिक के रूप में रजिस्टर करें",
    bookMechanic: "मैकेनिक बुक करो",
    call: "📞 कॉल",
    specialty: "विशेषज्ञता",
    listMachine: "अपनी मशीन लिस्ट करें",
    listMachineSub: "10,000+ किराएदारों तक पहुंचें। रोज़ कमाएं।",
    earningPotential: "💰 कमाई की संभावना",
    freeWith: "🎁 रजिस्ट्रेशन के साथ मुफ़्त",
    listBtn: "🚜 मेरी मशीन लिस्ट करें — मुफ़्त →",
    listNote: "24 घंटे में सत्यापन · कोई छुपा शुल्क नहीं · मुफ़्त IoT डिवाइस",
    workDate: "काम की तारीख",
    duration: "समय",
    hours: "घंटे",
    workDetails: "काम की जानकारी",
    workPlaceholder: "काम बताएं: खुदाई, नींव, सड़क का काम...",
    machineRate: "मशीन दर",
    platformFee: "प्लेटफॉर्म शुल्क (5%)",
    total: "कुल",
    confirmBooking: "बुकिंग पक्की करें",
    processing: "प्रोसेस हो रहा है...",
    bookingConfirmed: "बुकिंग पक्की हो गई!",
    ownerCall: "📱 मालिक 30 मिनट में कॉल करेगा",
    viewBookings: "मेरी बुकिंग देखें",
    joinTitle: "KHUDAIWALA से जुड़ें",
    whoAreYou: "आप कौन हैं?",
    whoSub: "किस रूप में जुड़ रहे हैं?",
    roles: [
      { key: "owner", icon: "🚜", title: "मशीन मालिक", sub: "मेरे पास JCB / खुदाई मशीन है" },
      { key: "operator", icon: "👷", title: "ऑपरेटर / ड्राइवर", sub: "मैं भारी मशीन चलाता हूं" },
      { key: "mechanic", icon: "🔧", title: "मैकेनिक", sub: "मैं मशीन की मरम्मत करता हूं" },
      { key: "hirer", icon: "🏗️", title: "मशीन चाहिए", sub: "ठेकेदार / बिल्डर / डेवलपर" },
    ],
    cancel: "रद्द करें",
    registerAs: "रजिस्टर करें",
    regFree: "मुफ़्त · 2 मिनट",
    yourName: "आपका पूरा नाम",
    phone: "मोबाइल नंबर",
    whatsapp: "WhatsApp नंबर (अलग हो तो)",
    city: "आपका शहर",
    state: "आपका राज्य",
    machineType: "मशीन का प्रकार",
    ratePerHour: "प्रति घंटा दर (₹)",
    specialtyLabel: "आपकी विशेषज्ञता",
    freePerks: [
      "मुफ़्त IoT GPS ट्रैकिंग डिवाइस",
      "सत्यापित बैज आपकी लिस्टिंग पर",
      "WhatsApp पर बुकिंग अलर्ट",
      "24 घंटे में पेमेंट"
    ],
    registerBtn: "मुफ़्त रजिस्टर करें →",
    registering: "रजिस्टर हो रहा है...",
    regNote: "24 घंटे में सत्यापन · कोई स्पैम नहीं · कोई छुपा शुल्क नहीं",
    welcomeTitle: "KhudaiWala में आपका स्वागत है!",
    regNextSteps: [
      "प्रोफाइल की जांच (24 घंटे)",
      "सत्यापित बैज मिलेगा",
      "काम के अनुरोध आने शुरू होंगे",
      "साप्ताहिक पेमेंट आपके बैंक में"
    ],
    exploreBtn: "KhudaiWala देखें →",
    namePH: "रमेश कुमार",
    phonePH: "+91 98765 43210",
    cityPH: "लखनऊ",
    statePH: "उत्तर प्रदेश",
    machinePH: "JCB 3CX / हिताची EX200",
    ratePH: "1800",
    specialtyPH: "JCB मरम्मत / हाइड्रोलिक / इंजन",
    registerPrompt: "मशीन बुक करने के लिए पहले रजिस्टर करें।",
    earningRows: [
      ["JCB बैकहो लोडर", "₹1,800–₹2,200/घंटा", "₹25,000–40,000/महीना"],
      ["हाइड्रोलिक खुदाई मशीन", "₹2,500–₹3,500/घंटा", "₹45,000–65,000/महीना"],
      ["मोटर ग्रेडर", "₹2,200–₹3,000/घंटा", "₹38,000–55,000/महीना"],
    ],
    freeItems: [
      "IoT GPS ट्रैकर — मुफ़्त लगाया जाएगा",
      "सत्यापित मालिक बैज",
      "WhatsApp पर तुरंत बुकिंग अलर्ट",
      "रोज़ाना कमाई डैशबोर्ड",
      "मशीन खराब होने पर मैकेनिक सपोर्ट",
    ],
    back: "← वापस",
    registeredAs: "के रूप में रजिस्टर हुए",
  }
};

const CATS_EN = ["All", "Backhoe Loader", "Excavator", "Motor Grader", "Compactor", "Crane"];
const CATS_HI = ["सभी", "बैकहो लोडर", "खुदाई मशीन", "मोटर ग्रेडर", "कॉम्पैक्टर", "क्रेन"];
const CAT_MAP = { "सभी": "All", "बैकहो लोडर": "Backhoe Loader", "खुदाई मशीन": "Excavator", "मोटर ग्रेडर": "Motor Grader", "कॉम्पैक्टर": "Compactor", "क्रेन": "Crane" };

function Stars({ r }) {
  return <span style={{ color: "#F59E0B", fontSize: 12 }}>{"★".repeat(Math.floor(r))}{"☆".repeat(5 - Math.floor(r))} <span style={{ color: C.gray400 }}>{r}</span></span>;
}

function FuelBar({ pct }) {
  const color = pct > 50 ? C.green : pct > 20 ? "#F59E0B" : C.red;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ flex: 1, height: 4, background: C.gray200, borderRadius: 99 }}>
        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 99 }} />
      </div>
      <span style={{ fontSize: 10, color, fontWeight: 700 }}>{pct}%</span>
    </div>
  );
}

function LangToggle({ lang, setLang }) {
  return (
    <button onClick={() => setLang(lang === "en" ? "hi" : "en")} style={{
      background: "rgba(255,107,0,0.15)", border: `1.5px solid ${C.orange}`,
      borderRadius: 8, padding: "5px 10px", color: C.orange,
      fontWeight: 800, fontSize: 12, cursor: "pointer", letterSpacing: 0.5
    }}>
      {lang === "en" ? "हिं" : "EN"}
    </button>
  );
}

function RegisterModal({ onClose, onSuccess, lang }) {
  const t = T[lang];
  const [role, setRole] = useState("");
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    full_name: "", phone: "", city: "", state: "",
    whatsapp_number: "", machine_type: "", rate_per_hour: "", specialty: "",
  });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleRegister = async () => {
    setLoading(true); setError("");
    try {
      const email = `${form.phone}@khudaiwala.app`;
      const password = `KW${form.phone}2024!`;
      const { data: authData, error: authError } = await supabase.auth.signUp({ email, password });
      if (authError) throw authError;
      const { error: profileError } = await supabase.from("users").insert({
        id: authData.user.id, full_name: form.full_name, phone: form.phone,
        role, city: form.city, state: form.state,
        whatsapp_number: form.whatsapp_number || form.phone, is_verified: false,
      });
      if (profileError) throw profileError;
      if (role === "owner" && form.machine_type) {
        await supabase.from("machines").insert({
          owner_id: authData.user.id, machine_type: form.machine_type,
          machine_category: "Backhoe Loader",
          rate_per_hour: parseFloat(form.rate_per_hour) || 1800,
          city: form.city, state: form.state,
          is_available: true, is_verified: false, fuel_level: 100, engine_hours: 0, iot_status: "Idle",
        });
      }
      if (role === "mechanic") {
        await supabase.from("mechanics").insert({
          user_id: authData.user.id,
          specialty: form.specialty ? [form.specialty] : ["General"],
          city: form.city, state: form.state, is_available: true, is_verified: false,
        });
      }
      onSuccess(role, form);
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
    } finally { setLoading(false); }
  };

  if (step === 0) return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "flex-end", justifyContent: "center", zIndex: 2000 }}>
      <div style={{ background: C.white, borderRadius: "20px 20px 0 0", padding: 28, width: "100%", maxWidth: 480 }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 10, color: C.orange, fontWeight: 800, letterSpacing: 1, marginBottom: 6 }}>{t.joinTitle}</div>
          <div style={{ fontWeight: 900, fontSize: 22, color: C.earth }}>{t.whoAreYou}</div>
          <div style={{ fontSize: 13, color: C.gray400, marginTop: 4 }}>{t.whoSub}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
          {t.roles.map((r) => (
            <button key={r.key} onClick={() => { setRole(r.key); setStep(1); }} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", borderRadius: 14, border: `2px solid ${C.gray200}`, background: C.white, cursor: "pointer", textAlign: "left" }}>
              <span style={{ fontSize: 28 }}>{r.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: C.earth }}>{r.title}</div>
                <div style={{ fontSize: 12, color: C.gray400 }}>{r.sub}</div>
              </div>
            </button>
          ))}
        </div>
        <button onClick={onClose} style={{ width: "100%", padding: 12, background: C.gray100, border: "none", borderRadius: 10, color: C.gray600, cursor: "pointer", fontWeight: 600 }}>{t.cancel}</button>
      </div>
    </div>
  );

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "flex-end", justifyContent: "center", zIndex: 2000 }}>
      <div style={{ background: C.white, borderRadius: "20px 20px 0 0", padding: 24, width: "100%", maxWidth: 480, maxHeight: "90vh", overflowY: "auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <button onClick={() => setStep(0)} style={{ background: C.gray100, border: "none", borderRadius: 8, padding: "6px 10px", cursor: "pointer", fontSize: 13 }}>{t.back}</button>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: C.earth }}>{t.registerAs} {t.roles.find(r => r.key === role)?.title}</div>
            <div style={{ fontSize: 11, color: C.gray400 }}>{t.regFree}</div>
          </div>
        </div>
        {error && <div style={{ background: C.redLight, color: C.red, padding: "10px 14px", borderRadius: 10, marginBottom: 12, fontSize: 13 }}>{error}</div>}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
          {[
            ["full_name", t.yourName, t.namePH],
            ["phone", t.phone, t.phonePH],
            ["whatsapp_number", t.whatsapp, t.phonePH],
            ["city", t.city, t.cityPH],
            ["state", t.state, t.statePH],
          ].map(([k, label, ph]) => (
            <div key={k}>
              <label style={{ fontSize: 13, fontWeight: 600, color: C.gray600, display: "block", marginBottom: 5 }}>{label}</label>
              <input value={form[k] || ""} onChange={set(k)} placeholder={ph} style={inp} />
            </div>
          ))}
          {role === "owner" && <>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: C.gray600, display: "block", marginBottom: 5 }}>{t.machineType}</label>
              <input value={form.machine_type} onChange={set("machine_type")} placeholder={t.machinePH} style={inp} />
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: C.gray600, display: "block", marginBottom: 5 }}>{t.ratePerHour}</label>
              <input type="number" value={form.rate_per_hour} onChange={set("rate_per_hour")} placeholder={t.ratePH} style={inp} />
            </div>
          </>}
          {role === "mechanic" && (
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: C.gray600, display: "block", marginBottom: 5 }}>{t.specialtyLabel}</label>
              <input value={form.specialty} onChange={set("specialty")} placeholder={t.specialtyPH} style={inp} />
            </div>
          )}
        </div>
        {role === "owner" && (
          <div style={{ background: C.orangeDim, borderRadius: 12, padding: 14, marginBottom: 16 }}>
            <div style={{ fontWeight: 700, color: C.soil, fontSize: 13, marginBottom: 6 }}>{t.freeWith}</div>
            {t.freePerks.map((b) => <div key={b} style={{ fontSize: 12, color: C.soil, marginBottom: 4 }}>✓ {b}</div>)}
          </div>
        )}
        <button onClick={handleRegister} disabled={loading || !form.full_name || !form.phone || !form.city}
          style={{ background: (!loading && form.full_name && form.phone && form.city) ? C.orange : C.gray200, color: (!loading && form.full_name && form.phone && form.city) ? C.white : C.gray400, border: "none", borderRadius: 12, padding: 14, fontWeight: 800, fontSize: 15, cursor: "pointer", width: "100%", marginBottom: 8 }}>
          {loading ? t.registering : t.registerBtn}
        </button>
        <div style={{ fontSize: 11, color: C.gray400, textAlign: "center" }}>{t.regNote}</div>
      </div>
    </div>
  );
}

function BookingModal({ m, user, onClose, onConfirm, lang }) {
  const t = T[lang];
  const [date, setDate] = useState(""); const [hours, setHours] = useState(4);
  const [note, setNote] = useState(""); const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const total = m.rate_per_hour * hours; const fee = Math.round(total * 0.05);

  const handleBook = async () => {
    if (!user) { onClose(); return; }
    setLoading(true); setError("");
    try {
      const { error: bookingError } = await supabase.from("bookings").insert({
        machine_id: m.id, hirer_id: user.id, owner_id: m.owner_id,
        booking_date: date, duration_hours: hours, work_description: note,
        status: "pending", total_amount: total, platform_fee: fee, owner_payout: total - fee, payment_status: "pending",
      });
      if (bookingError) throw bookingError;
      onConfirm({ m, date, hours, total });
    } catch (err) { setError(err.message); } finally { setLoading(false); }
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "flex-end", justifyContent: "center", zIndex: 1000 }}>
      <div style={{ background: C.white, borderRadius: "20px 20px 0 0", padding: 24, width: "100%", maxWidth: 480, maxHeight: "90vh", overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 17, color: C.earth }}>{t.bookNow} — {m.machine_type}</div>
            <div style={{ fontSize: 12, color: C.gray400 }}>📍 {m.city}, {m.state}</div>
          </div>
          <button onClick={onClose} style={{ background: C.gray100, border: "none", borderRadius: 8, width: 34, height: 34, cursor: "pointer", fontSize: 16 }}>✕</button>
        </div>
        {error && <div style={{ background: C.redLight, color: C.red, padding: "10px 14px", borderRadius: 10, marginBottom: 12, fontSize: 13 }}>{error}</div>}
        {!user && <div style={{ background: C.orangeDim, color: C.soil, padding: "12px 14px", borderRadius: 10, marginBottom: 12, fontSize: 13, fontWeight: 600 }}>⚠️ {t.registerPrompt}</div>}
        <div style={{ marginBottom: 12 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: C.gray600, display: "block", marginBottom: 5 }}>{t.workDate}</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={inp} min={new Date().toISOString().split("T")[0]} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: C.gray600, display: "block", marginBottom: 5 }}>{t.duration}: <span style={{ color: C.orange }}>{hours} {t.hours}</span></label>
          <input type="range" min={1} max={24} value={hours} onChange={(e) => setHours(Number(e.target.value))} style={{ width: "100%", accentColor: C.orange }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: C.gray400 }}><span>1 {t.hours}</span><span>24 {t.hours}</span></div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ fontSize: 13, fontWeight: 600, color: C.gray600, display: "block", marginBottom: 5 }}>{t.workDetails}</label>
          <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder={t.workPlaceholder} rows={3} style={{ ...inp, resize: "vertical" }} />
        </div>
        <div style={{ background: C.orangeDim, borderRadius: 12, padding: 14, marginBottom: 16 }}>
          {[[t.machineRate, `₹${m.rate_per_hour}/${lang==="hi"?"घंटा":"hr"} × ${hours}`, `₹${total.toLocaleString()}`],
            [t.platformFee, "", `₹${fee.toLocaleString()}`],
            [t.total, "", `₹${(total + fee).toLocaleString()}`]
          ].map(([k, sub, v], i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: i === 2 ? 15 : 13, fontWeight: i === 2 ? 800 : 400, color: i === 2 ? C.earth : C.gray600, borderTop: i === 2 ? `1px solid ${C.gray200}` : "none", paddingTop: i === 2 ? 8 : 0, marginBottom: 6 }}>
              <span>{k} <span style={{ color: C.gray400, fontSize: 11 }}>{sub}</span></span><span>{v}</span>
            </div>
          ))}
        </div>
        <button onClick={handleBook} disabled={loading || !date || !user}
          style={{ background: (date && user && !loading) ? C.orange : C.gray200, color: (date && user && !loading) ? C.white : C.gray400, border: "none", borderRadius: 12, padding: 14, fontWeight: 800, fontSize: 15, cursor: "pointer", width: "100%" }}>
          {loading ? t.processing : t.confirmBooking}
        </button>
      </div>
    </div>
  );
}

function MachineCard({ m, onBook, lang }) {
  const t = T[lang];
  return (
    <div style={{ background: C.white, borderRadius: 16, boxShadow: "0 2px 16px rgba(0,0,0,0.07)", padding: 18, border: `1.5px solid ${m.is_available ? C.gray200 : C.redLight}`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: 0, background: m.is_available ? C.green : C.red, color: "#fff", fontSize: 9, fontWeight: 800, padding: "3px 12px", borderBottomLeftRadius: 10, letterSpacing: 1 }}>
        {m.is_available ? (lang === "hi" ? "अभी उपलब्ध" : "AVAILABLE NOW") : (lang === "hi" ? "व्यस्त" : "BUSY")}
      </div>
      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <div style={{ width: 52, height: 52, borderRadius: 12, background: m.is_available ? C.orangeDim : C.redLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>🚜</div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
            <span style={{ fontWeight: 800, fontSize: 15, color: C.earth }}>{m.machine_type}</span>
            {m.is_verified && <span style={{ background: C.greenLight, color: C.green, fontSize: 10, fontWeight: 800, borderRadius: 99, padding: "2px 8px" }}>{t.verified}</span>}
          </div>
          <div style={{ fontSize: 11, color: C.gray400, marginTop: 1 }}>{m.machine_category}</div>
          <Stars r={m.rating || 4.5} />
        </div>
      </div>
      <div style={{ background: C.earthMid, borderRadius: 10, padding: "8px 12px", marginBottom: 12, display: "flex", gap: 16, alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, color: "#9CA3AF", marginBottom: 3 }}>⛽ {t.fuel}</div>
          <FuelBar pct={m.fuel_level || 80} />
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 9, color: "#9CA3AF" }}>{t.engineHrs}</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.white }}>{(m.engine_hours || 0).toLocaleString()}</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 9, color: "#9CA3AF" }}>{t.status}</div>
          <div style={{ fontSize: 10, fontWeight: 700, color: { Idle: "#BFDBFE", Working: "#BBF7D0", "On Job": "#FED7AA", Maintenance: "#FECACA" }[m.iot_status] || "#fff" }}>
            {lang === "hi" ? { Idle: "निष्क्रिय", Working: "काम पर", "On Job": "काम पर", Maintenance: "मरम्मत" }[m.iot_status] || m.iot_status : m.iot_status || "Idle"}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <div style={{ width: 30, height: 30, borderRadius: "50%", background: C.blueLight, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>👷</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 13, color: C.earth }}>{m.users?.full_name || t.owner}</div>
          <div style={{ fontSize: 10, color: C.gray400 }}>📍 {m.city}, {m.state}</div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <span style={{ fontSize: 22, fontWeight: 900, color: C.earth }}>₹{(m.rate_per_hour || 0).toLocaleString()}</span>
          <span style={{ fontSize: 11, color: C.gray400 }}>/{lang === "hi" ? "घंटा" : "hr"}</span>
        </div>
        <button onClick={() => m.is_available && onBook(m)}
          style={{ background: m.is_available ? C.orange : C.gray200, color: m.is_available ? C.white : C.gray400, border: "none", borderRadius: 10, padding: "10px 20px", fontWeight: 700, fontSize: 13, cursor: m.is_available ? "pointer" : "not-allowed" }}>
          {m.is_available ? t.bookNow : t.unavailable}
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  const t = T[lang];
  const CATS = lang === "hi" ? CATS_HI : CATS_EN;

  const [tab, setTab] = useState("discover");
  const [machines, setMachines] = useState([]);
  const [mechanics, setMechanics] = useState([]);
  const [myBookings, setMyBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [showReg, setShowReg] = useState(false);
  const [regSuccess, setRegSuccess] = useState(null);
  const [bookingM, setBookingM] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(null);
  const [search, setSearch] = useState("");
  const [onlyAvail, setOnlyAvail] = useState(false);
  const [catFilter, setCatFilter] = useState(CATS[0]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchUserProfile(session.user.id);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchUserProfile(session.user.id);
    });
    return () => subscription.unsubscribe();
  }, []);

  const fetchUserProfile = async (userId) => {
    const { data } = await supabase.from("users").select("*").eq("id", userId).single();
    setUserProfile(data);
  };

  useEffect(() => { fetchMachines(); fetchMechanics(); }, []);
  useEffect(() => { if (user) fetchMyBookings(); }, [user]);

  const fetchMachines = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("machines").select("*, users(full_name, phone)").order("created_at", { ascending: false });
    if (!error) setMachines(data || []);
    setLoading(false);
  };

  const fetchMechanics = async () => {
    const { data } = await supabase.from("mechanics").select("*, users(full_name, phone)").order("created_at", { ascending: false });
    setMechanics(data || []);
  };

  const fetchMyBookings = async () => {
    const { data } = await supabase.from("bookings").select("*, machines(machine_type, city)").eq("hirer_id", user.id).order("created_at", { ascending: false });
    setMyBookings(data || []);
  };

  const getEnglishCat = (c) => lang === "hi" ? (CAT_MAP[c] || "All") : c;

  const filtered = machines.filter((m) => {
    const engCat = getEnglishCat(catFilter);
    const cOk = engCat === "All" || m.machine_category === engCat;
    const aOk = !onlyAvail || m.is_available;
    const sOk = !search || m.machine_type?.toLowerCase().includes(search.toLowerCase()) || m.city?.toLowerCase().includes(search.toLowerCase());
    return cOk && aOk && sOk;
  });

  const avail = machines.filter((m) => m.is_available).length;

  const TABS = [
    { key: "discover", icon: "🔍", label: t.find },
    { key: "bookings", icon: "📋", label: t.bookings },
    { key: "mechanics", icon: "🔧", label: t.mechanics },
    { key: "list", icon: "➕", label: t.list },
  ];

  const statusColors = { pending: [C.orange, C.orangeDim], confirmed: [C.green, C.greenLight], completed: [C.blue, C.blueLight], cancelled: [C.red, C.redLight] };
  const statusHi = { pending: "लंबित", confirmed: "पक्का", completed: "पूरा", cancelled: "रद्द" };

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: C.gray50, minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: C.earth, color: C.white, position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 520, margin: "0 auto", padding: "0 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 0 10px" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: C.orange, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🚜</div>
            <div>
              <div style={{ fontWeight: 900, fontSize: 18, letterSpacing: -0.5 }}>Khudai<span style={{ color: C.orange }}>Wala</span></div>
              <div style={{ fontSize: 9, color: "#9CA3AF", letterSpacing: 0.5 }}>{t.tagline}</div>
            </div>
            <div style={{ marginLeft: "auto", textAlign: "right", marginRight: 6 }}>
              <div style={{ fontSize: 9, color: "#9CA3AF" }}>{t.liveNear}</div>
              <div style={{ fontWeight: 700, color: "#4ADE80", fontSize: 13 }}>{avail} {t.available}</div>
            </div>
            <LangToggle lang={lang} setLang={setLang} />
            {user ? (
              <div style={{ background: C.orangeDim, color: C.orange, borderRadius: 8, padding: "7px 10px", fontSize: 12, fontWeight: 700 }}>
                {userProfile?.full_name?.split(" ")[0] || "👤"}
              </div>
            ) : (
              <button onClick={() => setShowReg(true)} style={{ background: C.orange, color: C.white, border: "none", borderRadius: 8, padding: "7px 12px", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>{t.joinFree}</button>
            )}
          </div>
          <div style={{ display: "flex", borderTop: "1px solid #2D2010", overflowX: "auto" }}>
            {TABS.map((tb) => (
              <button key={tb.key} onClick={() => setTab(tb.key)} style={{ flex: 1, padding: "10px 4px", border: "none", background: "transparent", color: tab === tb.key ? C.orange : C.gray400, fontWeight: tab === tb.key ? 700 : 400, fontSize: 11, borderBottom: tab === tb.key ? `2px solid ${C.orange}` : "2px solid transparent", cursor: "pointer", whiteSpace: "nowrap", minWidth: 56 }}>
                {tb.icon} {tb.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 520, margin: "0 auto", padding: "0 16px 100px" }}>

        {/* DISCOVER */}
        {tab === "discover" && (
          <div style={{ paddingTop: 16 }}>
            <div style={{ background: `linear-gradient(135deg, ${C.earth} 0%, #3D2505 100%)`, borderRadius: 16, padding: 20, marginBottom: 16 }}>
              <div style={{ fontSize: 10, color: C.orangeLight, fontWeight: 800, letterSpacing: 1, marginBottom: 6 }}>{t.adTag}</div>
              <div style={{ fontWeight: 900, fontSize: 18, color: C.white, lineHeight: 1.2, marginBottom: 8 }}>
                {t.adHeadline1}<br /><span style={{ color: C.orange }}>{t.adHeadline2}</span>
              </div>
              <div style={{ fontSize: 12, color: "#CBD5E1", marginBottom: 14 }}>{t.adSub}</div>
              <button onClick={() => setShowReg(true)} style={{ background: C.orange, color: C.white, border: "none", borderRadius: 10, padding: "11px 22px", fontWeight: 800, fontSize: 14, cursor: "pointer" }}>{t.adBtn}</button>
            </div>
            <div style={{ position: "relative", marginBottom: 12 }}>
              <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: C.gray400, fontSize: 15 }}>🔍</span>
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={t.searchPlaceholder} style={{ ...inp, paddingLeft: 40 }} />
            </div>
            <div style={{ display: "flex", gap: 8, overflowX: "auto", marginBottom: 10, paddingBottom: 4 }}>
              {CATS.map((c) => (
                <button key={c} onClick={() => setCatFilter(c)} style={{ padding: "7px 16px", borderRadius: 99, border: `1.5px solid ${catFilter === c ? C.orange : C.gray200}`, background: catFilter === c ? C.orangeDim : C.white, color: catFilter === c ? C.soil : C.gray600, fontWeight: catFilter === c ? 700 : 500, fontSize: 12, cursor: "pointer", whiteSpace: "nowrap" }}>{c}</button>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div onClick={() => setOnlyAvail(!onlyAvail)} style={{ width: 42, height: 22, borderRadius: 99, background: onlyAvail ? C.green : C.gray200, position: "relative", cursor: "pointer", transition: "background 0.2s" }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: C.white, position: "absolute", top: 2, left: onlyAvail ? 22 : 2, transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} />
              </div>
              <span style={{ fontSize: 13, color: C.gray600, fontWeight: 500 }}>{t.availNow}</span>
              <span style={{ marginLeft: "auto", fontSize: 12, color: C.gray400 }}>{filtered.length} {t.machines}</span>
            </div>
            {loading ? (
              <div style={{ textAlign: "center", padding: 48, color: C.gray400 }}><div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>{lang === "hi" ? "लोड हो रहा है..." : "Loading..."}</div>
            ) : filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: 48, color: C.gray400 }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🚧</div>{t.noMachines}
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {filtered.map((m) => <MachineCard key={m.id} m={m} onBook={setBookingM} lang={lang} />)}
              </div>
            )}
          </div>
        )}

        {/* BOOKINGS */}
        {tab === "bookings" && (
          <div style={{ paddingTop: 16 }}>
            <div style={{ fontWeight: 900, fontSize: 18, color: C.earth, marginBottom: 4 }}>{t.myBookings}</div>
            <div style={{ fontSize: 13, color: C.gray400, marginBottom: 20 }}>{t.myBookingsSub}</div>
            {!user ? (
              <div style={{ textAlign: "center", padding: 48 }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🔐</div>
                <div style={{ fontSize: 15, color: C.gray600, marginBottom: 16 }}>{t.registerToBook}</div>
                <button onClick={() => setShowReg(true)} style={{ background: C.orange, color: C.white, border: "none", borderRadius: 12, padding: "12px 24px", fontWeight: 700, cursor: "pointer" }}>{t.joinBtn}</button>
              </div>
            ) : myBookings.length === 0 ? (
              <div style={{ textAlign: "center", padding: 48, color: C.gray400 }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>📋</div>{t.noBookings}
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {myBookings.map((b) => {
                  const [fg, bg] = statusColors[b.status] || [C.gray600, C.gray100];
                  return (
                    <div key={b.id} style={{ background: C.white, borderRadius: 16, padding: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: `1.5px solid ${C.gray200}` }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <div style={{ fontWeight: 700, fontSize: 15, color: C.earth }}>{b.machines?.machine_type}</div>
                        <span style={{ background: bg, color: fg, fontSize: 11, fontWeight: 700, borderRadius: 99, padding: "3px 10px", textTransform: "uppercase" }}>
                          {lang === "hi" ? statusHi[b.status] || b.status : b.status}
                        </span>
                      </div>
                      <div style={{ fontSize: 13, color: C.gray600 }}>📅 {b.booking_date} · {b.duration_hours} {t.hours}</div>
                      <div style={{ fontSize: 13, color: C.gray600, marginTop: 4 }}>📍 {b.machines?.city}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: C.earth, marginTop: 8 }}>{t.total}: ₹{(b.total_amount + b.platform_fee).toLocaleString()}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* MECHANICS */}
        {tab === "mechanics" && (
          <div style={{ paddingTop: 16 }}>
            <div style={{ fontWeight: 900, fontSize: 18, color: C.earth, marginBottom: 4 }}>{t.findMechanics}</div>
            <div style={{ fontSize: 13, color: C.gray400, marginBottom: 16 }}>{t.findMechanicsSub}</div>
            <div style={{ background: C.orangeDim, borderRadius: 14, padding: 14, marginBottom: 16, fontSize: 13, color: C.soil }}>
              {t.emergency} <strong>1800-KHUDAI-FIX</strong>
            </div>
            {mechanics.length === 0 ? (
              <div style={{ textAlign: "center", padding: 48, color: C.gray400 }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🔧</div>{t.noMechanics}<br /><br />
                <button onClick={() => setShowReg(true)} style={{ background: C.orange, color: C.white, border: "none", borderRadius: 12, padding: "12px 24px", fontWeight: 700, cursor: "pointer" }}>{t.registerMechanic}</button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {mechanics.map((m) => (
                  <div key={m.id} style={{ background: C.white, borderRadius: 16, padding: 18, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: `1.5px solid ${C.gray200}` }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 10 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 12, background: "#EDE9FE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🔧</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 800, fontSize: 15, color: C.earth }}>{m.users?.full_name || t.mechanics}</div>
                        <div style={{ fontSize: 11, color: C.gray400 }}>📍 {m.city}, {m.state}</div>
                      </div>
                      <span style={{ background: m.is_available ? C.greenLight : C.redLight, color: m.is_available ? C.green : C.red, fontSize: 10, fontWeight: 800, borderRadius: 99, padding: "3px 10px" }}>
                        {m.is_available ? (lang === "hi" ? "उपलब्ध" : "AVAILABLE") : (lang === "hi" ? "व्यस्त" : "BUSY")}
                      </span>
                    </div>
                    <div style={{ background: C.gray50, borderRadius: 10, padding: "8px 12px", fontSize: 12, color: C.gray600, marginBottom: 10 }}>
                      🛠 {t.specialty}: <strong>{Array.isArray(m.specialty) ? m.specialty.join(", ") : m.specialty || "General"}</strong>
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button style={{ flex: 1, background: m.is_available ? "#7C3AED" : C.gray200, color: m.is_available ? C.white : C.gray400, border: "none", borderRadius: 10, padding: "10px", fontWeight: 700, fontSize: 13, cursor: m.is_available ? "pointer" : "not-allowed" }}>
                        {m.is_available ? t.bookMechanic : t.unavailable}
                      </button>
                      <button style={{ background: C.greenLight, color: C.green, border: "none", borderRadius: 10, padding: "10px 14px", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>{t.call}</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* LIST */}
        {tab === "list" && (
          <div style={{ paddingTop: 16 }}>
            <div style={{ fontWeight: 900, fontSize: 18, color: C.earth, marginBottom: 4 }}>{t.listMachine}</div>
            <div style={{ fontSize: 13, color: C.gray400, marginBottom: 16 }}>{t.listMachineSub}</div>
            <div style={{ background: `linear-gradient(135deg, ${C.earth}, #3D2505)`, borderRadius: 16, padding: 20, marginBottom: 16, color: C.white }}>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{t.earningPotential}</div>
              {t.earningRows.map(([n, r, mo]) => (
                <div key={n} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 6, borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 6 }}>
                  <span style={{ color: "#CBD5E1" }}>{n}</span>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 700, color: C.orange }}>{r}</div>
                    <div style={{ fontSize: 10, color: "#9CA3AF" }}>{mo}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: C.orangeDim, borderRadius: 14, padding: 16, marginBottom: 16 }}>
              <div style={{ fontWeight: 700, color: C.soil, fontSize: 13, marginBottom: 8 }}>{t.freeWith}</div>
              {t.freeItems.map((b) => (
                <div key={b} style={{ fontSize: 12, color: C.soil, marginBottom: 5, display: "flex", gap: 6 }}><span style={{ color: C.orange }}>✓</span>{b}</div>
              ))}
            </div>
            <button onClick={() => setShowReg(true)} style={{ background: C.orange, color: C.white, border: "none", borderRadius: 14, padding: "16px", fontWeight: 900, fontSize: 16, cursor: "pointer", width: "100%", marginBottom: 12 }}>{t.listBtn}</button>
            <div style={{ fontSize: 11, color: C.gray400, textAlign: "center" }}>{t.listNote}</div>
          </div>
        )}
      </div>

      {/* Bottom Nav */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: C.white, borderTop: `1px solid ${C.gray200}`, display: "flex", zIndex: 200 }}>
        <div style={{ maxWidth: 520, margin: "0 auto", display: "flex", width: "100%" }}>
          {TABS.map((tb) => (
            <button key={tb.key} onClick={() => setTab(tb.key)} style={{ flex: 1, padding: "10px 4px 12px", border: "none", background: "transparent", color: tab === tb.key ? C.orange : C.gray400, fontWeight: tab === tb.key ? 700 : 400, fontSize: 10, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
              <span style={{ fontSize: 18 }}>{tb.icon}</span>{tb.label}
            </button>
          ))}
        </div>
      </div>

      {/* Modals */}
      {bookingM && <BookingModal m={bookingM} user={userProfile} onClose={() => setBookingM(null)} onConfirm={(b) => { setBookingSuccess(b); setBookingM(null); fetchMyBookings(); }} lang={lang} />}

      {bookingSuccess && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3000, padding: 16 }}>
          <div style={{ background: C.white, borderRadius: 20, padding: 28, width: "100%", maxWidth: 400, textAlign: "center" }}>
            <div style={{ fontSize: 56, marginBottom: 10 }}>🎉</div>
            <div style={{ fontWeight: 900, fontSize: 22, color: C.earth, marginBottom: 6 }}>{t.bookingConfirmed}</div>
            <div style={{ fontSize: 13, color: C.gray400, marginBottom: 20 }}>{bookingSuccess.m.machine_type} — {bookingSuccess.date}</div>
            <div style={{ background: C.greenLight, borderRadius: 10, padding: 10, marginBottom: 16, fontSize: 12, color: C.green }}>{t.ownerCall}</div>
            <button onClick={() => { setBookingSuccess(null); setTab("bookings"); }} style={{ background: C.orange, color: C.white, border: "none", borderRadius: 12, padding: "13px", fontWeight: 800, fontSize: 15, cursor: "pointer", width: "100%" }}>{t.viewBookings}</button>
          </div>
        </div>
      )}

      {showReg && <RegisterModal onClose={() => setShowReg(false)} onSuccess={(role, form) => { setRegSuccess({ role, form }); setShowReg(false); fetchMachines(); fetchMechanics(); }} lang={lang} />}

      {regSuccess && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 3000, padding: 16 }}>
          <div style={{ background: C.white, borderRadius: 20, padding: 28, width: "100%", maxWidth: 400, textAlign: "center" }}>
            <div style={{ fontSize: 56, marginBottom: 10 }}>🎉</div>
            <div style={{ fontWeight: 900, fontSize: 22, color: C.earth, marginBottom: 6 }}>{t.welcomeTitle}</div>
            <div style={{ fontSize: 13, color: C.gray400, marginBottom: 16 }}>{regSuccess.form.full_name} {t.registeredAs} <strong>{T[lang].roles.find(r => r.key === regSuccess.role)?.title}</strong></div>
            <div style={{ background: C.orangeDim, borderRadius: 12, padding: 14, textAlign: "left", marginBottom: 16 }}>
              {t.regNextSteps.map((s) => <div key={s} style={{ fontSize: 12, color: C.soil, marginBottom: 5 }}>✓ {s}</div>)}
            </div>
            <button onClick={() => setRegSuccess(null)} style={{ background: C.orange, color: C.white, border: "none", borderRadius: 12, padding: "13px", fontWeight: 800, fontSize: 15, cursor: "pointer", width: "100%" }}>{t.exploreBtn}</button>
          </div>
        </div>
      )}
    </div>
  );
}
