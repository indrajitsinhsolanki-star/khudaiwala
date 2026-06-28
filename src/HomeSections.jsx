// ─── HOME SECTIONS — KhudaiWala ───────────────────────────────────────────────
import { useState } from "react";

const C = {
  orange: "#FF6B00", orangeDim: "#FFF0E6", earth: "#1A1208",
  earthMid: "#2D2010", soil: "#5C3D11", green: "#16A34A",
  greenLight: "#DCFCE7", gray50: "#F9FAFB", gray100: "#F3F4F6",
  gray200: "#E5E7EB", gray400: "#9CA3AF", gray600: "#4B5563", white: "#FFFFFF",
};

// ─── STATS ────────────────────────────────────────────────────────────────────
export function StatsSection({ lang }) {
  const content = {
    en: {
      title: "Powering India's Earth Moving Industry",
      sub: "Digitizing 95% of an unorganized market",
      badge: "🇮🇳 India's First Hindi-First Earth Mover Marketplace",
      stats: [
        { icon: "🚜", number: "7-10 Lakh+", label: "Active Machines in India" },
        { icon: "📍", number: "500+", label: "Cities We Operate In" },
        { icon: "👷", number: "20 Lakh+", label: "Operators Needed by 2030" },
        { icon: "🏗️", number: "₹4,000 Cr+", label: "Annual Rental Market" },
      ]
    },
    hi: {
      title: "भारत के अर्थमूवर बाज़ार में",
      sub: "हम 95% अनडिजिटाइज़्ड मार्केट को डिजिटल बना रहे हैं",
      badge: "🇮🇳 भारत का पहला हिंदी-फर्स्ट अर्थमूवर मार्केटप्लेस",
      stats: [
        { icon: "🚜", number: "7-10 लाख+", label: "भारत में सक्रिय मशीनें" },
        { icon: "📍", number: "500+", label: "शहरों में उपस्थिति" },
        { icon: "👷", number: "20 लाख+", label: "ऑपरेटरों की मांग 2030 तक" },
        { icon: "🏗️", number: "₹4,000 Cr+", label: "वार्षिक किराया बाज़ार" },
      ]
    },
    gu: {
      title: "ભારતના અર્થમૂવર ઉદ્યોગમાં",
      sub: "અમે 95% અસંગઠિત બજારને ડિજિટલ બનાવી રહ્યા છીએ",
      badge: "🇮🇳 ભારતનું પ્રથમ ગુજરાતી-ફર્સ્ટ અર્થમૂવર માર્કેટપ્લેસ",
      stats: [
        { icon: "🚜", number: "7-10 લાખ+", label: "ભારતમાં સક્રિય મશીનો" },
        { icon: "📍", number: "500+", label: "શહેરોમાં ઉપસ્થિતિ" },
        { icon: "👷", number: "20 લાખ+", label: "ઓપરેટરોની માંગ 2030 સુધી" },
        { icon: "🏗️", number: "₹4,000 Cr+", label: "વાર્ષિક ભાડા બજાર" },
      ]
    }
  };
  const c = content[lang] || content.en;
  return (
    <div style={{ background: C.earth, padding: "32px 16px", margin: "0 -16px" }}>
      <div style={{ maxWidth: 520, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 20, fontWeight: 900, color: "#fff", marginBottom: 6 }}>{c.title}</div>
          <div style={{ fontSize: 13, color: "#9CA3AF" }}>{c.sub}</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {c.stats.map((s, i) => (
            <div key={i} style={{ background: C.earthMid, borderRadius: 14, padding: "18px 14px", textAlign: "center", border: "1px solid rgba(255,107,0,0.2)" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: 22, fontWeight: 900, color: C.orange, marginBottom: 4 }}>{s.number}</div>
              <div style={{ fontSize: 11, color: "#9CA3AF", lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, background: "rgba(255,107,0,0.1)", borderRadius: 12, padding: "12px 16px", textAlign: "center", border: "1px solid rgba(255,107,0,0.2)" }}>
          <div style={{ fontSize: 13, color: C.orange, fontWeight: 700 }}>{c.badge}</div>
        </div>
      </div>
    </div>
  );
}

// ─── WHY SECTION ──────────────────────────────────────────────────────────────
export function WhySection({ lang, onRegister }) {
  const content = {
    en: {
      title: "Why People Trust KhudaiWala",
      sub: "Built for every stakeholder — owner, driver, mechanic, contractor",
      cta: "Join KhudaiWala — Free",
      ctaSub: "Machine owners, operators, mechanics, contractors — for everyone",
      ctaBtn: "Register Now — Free →",
      reasons: [
        { icon: "✅", title: "Verified Machines & Owners", desc: "Every machine and owner on KhudaiWala is verified within 24 hours. Zero fake listings." },
        { icon: "💰", title: "Safe Payment — No Fraud", desc: "Your money stays protected until the job is done. Owner gets paid only after work completion." },
        { icon: "📡", title: "Live GPS IoT Tracking", desc: "Every machine has an IoT device — see fuel level, engine hours, and live location." },
        { icon: "🔧", title: "Linked Mechanic Support", desc: "Machine broke down? Verified mechanic within 2 hours. Our network is 24/7 available." },
        { icon: "🗣️", title: "Hindi + Gujarati + English", desc: "Full app in your language. Booking, payment, support — all in the language you speak." },
        { icon: "⚡", title: "Booking Confirmed in 30 Mins", desc: "Book now, owner calls in 30 minutes. No waiting, no middlemen." },
      ]
    },
    hi: {
      title: "लोग KhudaiWala क्यों पसंद करते हैं?",
      sub: "हर स्टेकहोल्डर के लिए बना — मालिक, ड्राइवर, मैकेनिक, ठेकेदार",
      cta: "KhudaiWala से जुड़ें — मुफ़्त",
      ctaSub: "मशीन मालिक, ऑपरेटर, मैकेनिक, ठेकेदार — सभी के लिए",
      ctaBtn: "अभी रजिस्टर करें →",
      reasons: [
        { icon: "✅", title: "सत्यापित मशीनें और मालिक", desc: "KhudaiWala पर हर मशीन और मालिक को 24 घंटे में सत्यापित किया जाता है। नकली लिस्टिंग जीरो।" },
        { icon: "💰", title: "सुरक्षित पेमेंट — धोखाधड़ी नहीं", desc: "आपका पैसा काम पूरा होने तक सुरक्षित रहता है। मालिक को पेमेंट सिर्फ काम के बाद।" },
        { icon: "📡", title: "लाइव GPS IoT ट्रैकिंग", desc: "हर मशीन पर IoT डिवाइस — ईंधन स्तर, इंजन घंटे, और लाइव लोकेशन देखें।" },
        { icon: "🔧", title: "लिंक्ड मैकेनिक सपोर्ट", desc: "मशीन खराब? 2 घंटे में verified मैकेनिक। हमारा नेटवर्क 24/7 उपलब्ध।" },
        { icon: "🗣️", title: "हिंदी + गुजराती + अंग्रेजी", desc: "पूरा ऐप आपकी भाषा में। बुकिंग, पेमेंट, सपोर्ट — सब आपकी भाषा में।" },
        { icon: "⚡", title: "30 मिनट में बुकिंग कन्फर्म", desc: "बुकिंग करें, मालिक 30 मिनट में कॉल करेगा। कोई इंतज़ार नहीं, कोई दलाल नहीं।" },
      ]
    },
    gu: {
      title: "લોકો KhudaiWala ને કેમ પસંદ કરે છે?",
      sub: "દરેક માટે બનાવ્યું — માલિક, ડ્રાઇવર, મિકેનિક, ઠેકેદાર",
      cta: "KhudaiWala સાથે જોડાઓ — મફત",
      ctaSub: "મશીન માલિક, ઓપરેટર, મિકેનિક, ઠેકેદાર — સૌ માટે",
      ctaBtn: "હમણાં રજિસ્ટર કરો →",
      reasons: [
        { icon: "✅", title: "ચકાસાયેલ મશીનો અને માલિકો", desc: "KhudaiWala પર દરેક મશીન અને માલિકને 24 કલાકમાં ચકાસવામાં આવે છે. નકલી લિસ્ટિંગ શૂન્ય." },
        { icon: "💰", title: "સુરક્ષિત પેમેન્ટ — કોઈ છેતરપિંડી નહીં", desc: "કામ પૂર્ણ ન થાય ત્યાં સુધી તમારા પૈસા સુરક્ષિત રહે છે. માલિકને પેમેન્ટ ફક્ત કામ પછી." },
        { icon: "📡", title: "લાઇવ GPS IoT ટ્રેકિંગ", desc: "દરેક મશીન પર IoT ડિવાઇસ — ઇંધણ સ્તર, એન્જિન કલાક, અને લાઇવ લોકેશન જુઓ." },
        { icon: "🔧", title: "લિંક્ડ મિકેનિક સપોર્ટ", desc: "મશીન બગડ્યું? 2 કલાકમાં ચકાસાયેલ મિકેનિક. અમારું નેટવર્ક 24/7 ઉપલબ્ધ." },
        { icon: "🗣️", title: "ગુજરાતી + હિન્દી + અંગ્રેજી", desc: "આખી એપ તમારી ભાષામાં. બુકિંગ, પેમેન્ટ, સપોર્ટ — બધું તમારી ભાષામાં." },
        { icon: "⚡", title: "30 મિનિટમાં બુકિંગ કન્ફર્મ", desc: "બુકિંગ કરો, માલિક 30 મિનિટમાં ફોન કરશે. કોઈ રાહ નહીં, કોઈ દલાલ નહીં." },
      ]
    }
  };
  const c = content[lang] || content.en;
  return (
    <div style={{ padding: "32px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 20, fontWeight: 900, color: C.earth, marginBottom: 6 }}>{c.title}</div>
        <div style={{ fontSize: 13, color: C.gray400 }}>{c.sub}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {c.reasons.map((r, i) => (
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
        <div style={{ fontSize: 16, fontWeight: 900, color: "#fff", marginBottom: 6 }}>{c.cta}</div>
        <div style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 14 }}>{c.ctaSub}</div>
        <button onClick={onRegister} style={{ background: C.orange, color: "#fff", border: "none", borderRadius: 10, padding: "12px 28px", fontWeight: 800, fontSize: 14, cursor: "pointer" }}>{c.ctaBtn}</button>
      </div>
    </div>
  );
}

// ─── FAQ SECTION ──────────────────────────────────────────────────────────────
export function FAQSection({ lang }) {
  const [openIndex, setOpenIndex] = useState(null);
  const content = {
    en: {
      title: "Frequently Asked Questions",
      sub: "All your questions, answered",
      faqs: [
        { q: "What is KhudaiWala?", a: "KhudaiWala is India's first digital earth mover marketplace. Book JCB, excavator, Poclain and other heavy equipment on rent — from verified owners, with safe payments." },
        { q: "How long does it take to book a JCB?", a: "The machine owner will call you within 30 minutes of booking. Most bookings are confirmed the same day." },
        { q: "Does the machine come with an operator?", a: "Yes. All machines on KhudaiWala come with a verified operator. The operator's payment is included in the rate." },
        { q: "How do I pay? Is it safe?", a: "Payment is via Razorpay through UPI, card, or net banking — completely safe. Your money stays protected until the job is done." },
        { q: "What if the machine breaks down?", a: "Every machine on KhudaiWala is linked to a verified mechanic. In case of breakdown, mechanic arrives within 2 hours. For emergencies, call 1800-KHUDAI-FIX." },
        { q: "Can I list my JCB on KhudaiWala?", a: "Absolutely! List for free. Get 24-hour verification, verified badge, WhatsApp booking alerts, and a free IoT GPS tracker." },
        { q: "Which cities does KhudaiWala operate in?", a: "We operate in 500+ cities across Gujarat, Uttar Pradesh, Maharashtra, Rajasthan, Madhya Pradesh, Telangana, and West Bengal — and expanding fast." },
        { q: "Is listing on KhudaiWala completely free?", a: "Yes. Listing, profile, and basic features are completely free. We only charge a 5% platform fee on successful bookings." },
      ]
    },
    hi: {
      title: "अक्सर पूछे जाने वाले सवाल",
      sub: "आपके सभी सवालों के जवाब",
      faqs: [
        { q: "KhudaiWala क्या है?", a: "KhudaiWala भारत का पहला डिजिटल अर्थमूवर मार्केटप्लेस है। यहाँ JCB, खुदाई मशीन, Poclain और अन्य heavy equipment किराए पर बुक करें — सत्यापित मालिकों से, सुरक्षित पेमेंट के साथ।" },
        { q: "JCB बुक करने में कितना समय लगता है?", a: "बुकिंग करने के 30 मिनट के अंदर मशीन मालिक आपको कॉल करेगा। अधिकांश बुकिंग उसी दिन कन्फर्म हो जाती हैं।" },
        { q: "क्या operator मशीन के साथ आता है?", a: "हाँ। KhudaiWala पर सभी मशीनें verified operator के साथ आती हैं। Rate में operator का payment शामिल है।" },
        { q: "पेमेंट कैसे करें? क्या यह सुरक्षित है?", a: "पेमेंट Razorpay के through UPI, card, या net banking से होती है — बिल्कुल सुरक्षित। आपका पैसा काम पूरा होने तक हमारे पास सुरक्षित रहता है।" },
        { q: "मशीन खराब हो गई तो क्या होगा?", a: "KhudaiWala पर हर मशीन से एक verified mechanic लिंक है। खराबी की स्थिति में 2 घंटे के अंदर mechanic पहुंचेगा। Emergency के लिए 1800-KHUDAI-FIX पर call करें।" },
        { q: "क्या मैं अपनी JCB KhudaiWala पर list कर सकता हूँ?", a: "बिल्कुल! मुफ़्त में list करें। 24 घंटे में verification, verified badge, WhatsApp पर booking alerts, और free IoT GPS tracker मिलेगा।" },
        { q: "KhudaiWala कौन-कौन से शहरों में उपलब्ध है?", a: "हम गुजरात, उत्तर प्रदेश, महाराष्ट्र, राजस्थान, मध्य प्रदेश, तेलंगाना, और पश्चिम बंगाल के 500+ शहरों में हैं।" },
        { q: "KhudaiWala पर listing बिल्कुल free है?", a: "हाँ। Listing, profile, और basic features बिल्कुल free हैं। हम सिर्फ successful booking पर 5% platform fee लेते हैं।" },
      ]
    },
    gu: {
      title: "વારંવાર પૂછાતા સવાલો",
      sub: "તમારા બધા સવાલોના જવાબ",
      faqs: [
        { q: "KhudaiWala શું છે?", a: "KhudaiWala ભારતનું પ્રથમ ડિજિટલ અર્થમૂવર માર્કેટ્પ્લેસ છે. અહીં JCB, ખોદકામ મશીન, Poclain અને અન્ય ભારે સાધનો ભાડે બુક કરો — ચકાસાયેલ માલિકો પાસેથી, સુરક્ષિત પેમેન્ટ સાથે." },
        { q: "JCB બુક કરવામાં કેટલો સમય લાગે છે?", a: "બુકિંગ કર્યાના 30 મિનિટમાં મશીન માલિક તમને ફોન કરશે. મોટા ભાગની બુકિંગ તે જ દિવસે કન્ફર્મ થઈ જાય છે." },
        { q: "શું ઓપરેટર મશીન સાથે આવે છે?", a: "હા. KhudaiWala પર બધા મશીનો ચકાસાયેલ ઓપરેટર સાથે આવે છે. ઓપરેટરની ફી દરમાં સામેલ છે." },
        { q: "પેમેન્ટ કેવી રીતે કરવું? શું તે સુરક્ષિત છે?", a: "પેમેન્ટ Razorpay દ્વારા UPI, કાર્ડ, અથવા નેટ બેન્કિંગ દ્વારા — સંપૂર્ણ સુરક્ષિત. કામ પૂર્ણ ન થાય ત્યાં સુધી તમારા પૈસા સુરક્ષિત." },
        { q: "જો મશીન બગડે તો શું?", a: "KhudaiWala પર દરેક મશીન સાથે ચકાસાયેલ મિકેનિક જોડાયેલ છે. ખામી હોય તો 2 કલાકમાં મિકેનિક આવશે. ઇમર્જન્સી માટે 1800-KHUDAI-FIX પર ફોન કરો." },
        { q: "શું હું મારી JCB KhudaiWala પર લિસ્ટ કરી શકું?", a: "બિલ્કુલ! મફત લિસ્ટ કરો. 24 કલાકમાં ચકાસણી, ચકાસાયેલ બેજ, WhatsApp પર બુકિંગ અલર્ટ, અને મફત IoT GPS ટ્રેકર મળશે." },
        { q: "KhudaiWala કયા શહેરોમાં ઉપલબ્ધ છે?", a: "અમે ગુજરાત, ઉત્તર પ્રદેશ, મહારાષ્ટ્ર, રાજસ્થાન, મધ્ય પ્રદેશ, તેલંગાણા અને પશ્ચિમ બંગાળના 500+ શહેરોમાં છીએ." },
        { q: "KhudaiWala પર લિસ્ટિંગ સંપૂર્ણ મફત છે?", a: "હા. લિસ્ટિંગ, પ્રોફાઇલ અને બેઝિક ફીચર સંપૂર્ણ મફત છે. અમે ફક્ત સફળ બુકિંગ પર 5% પ્લેટફોર્મ ફી લઈએ છીએ." },
      ]
    }
  };
  const c = content[lang] || content.en;
  return (
    <div style={{ padding: "32px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 20, fontWeight: 900, color: C.earth, marginBottom: 6 }}>{c.title}</div>
        <div style={{ background: C.earth, color: "#fff", borderRadius: 99, padding: "6px 18px", fontSize: 12, fontWeight: 600, display: "inline-block" }}>{c.sub}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {c.faqs.map((f, i) => (
          <div key={i} style={{ background: C.white, borderRadius: 12, border: `1px solid ${openIndex === i ? C.orange : C.gray200}`, overflow: "hidden" }}>
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)} style={{ width: "100%", padding: "16px 18px", background: "transparent", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left", gap: 12 }}>
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

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export function TestimonialsSection({ lang }) {
  const content = {
    en: {
      title: "What Machine Owners Say",
      rating: "4.8 Rating · 500+ Reviews",
      note: "* These are early adopter reviews. Google Reviews integration coming soon.",
      testimonials: [
        { name: "Rajan Singh", role: "JCB Owner, Lucknow", text: "After listing on KhudaiWala, I get 3-4 bookings every week. Payment is also secure.", initial: "R", color: "#1D4ED8" },
        { name: "Suresh Patel", role: "Contractor, Surat", text: "Earlier finding a JCB took hours. On KhudaiWala I get a machine in 30 minutes.", initial: "S", color: "#16A34A" },
        { name: "Deepak Kumar", role: "Mechanic, Noida", text: "After registering on KhudaiWala Mechanics section, I get new work daily.", initial: "D", color: "#7C3AED" },
      ]
    },
    hi: {
      title: "मशीन मालिक क्या कहते हैं",
      rating: "4.8 रेटिंग · 500+ रिव्यू",
      note: "* ये early adopters के reviews हैं। जल्द ही Google Reviews integration आएगा।",
      testimonials: [
        { name: "रजन सिंह", role: "JCB मालिक, लखनऊ", text: "KhudaiWala पर list करने के बाद मुझे हर हफ्ते 3-4 bookings मिल रही हैं। पेमेंट भी सुरक्षित है।", initial: "र", color: "#1D4ED8" },
        { name: "सुरेश पटेल", role: "ठेकेदार, सूरत", text: "पहले JCB ढूंढने में घंटों लगते थे। KhudaiWala पर 30 मिनट में machine मिल जाती है।", initial: "स", color: "#16A34A" },
        { name: "दीपक कुमार", role: "मैकेनिक, नोएडा", text: "KhudaiWala Mechanics section पर register करने के बाद मुझे रोज़ नया काम मिलता है।", initial: "द", color: "#7C3AED" },
      ]
    },
    gu: {
      title: "મશીન માલિકો શું કહે છે",
      rating: "4.8 રેટિંગ · 500+ સમીક્ષા",
      note: "* આ અર્લી એડોપ્ટર્સની સમીક્ષા છે. ટૂંક સમયમાં Google Reviews આવશે.",
      testimonials: [
        { name: "રજન સિંહ", role: "JCB માલિક, લખનઉ", text: "KhudaiWala પર લિસ્ટ કર્યા પછી મને દર અઠવાડિયે 3-4 બુકિંગ મળે છે. પેમેન્ટ પણ સુરક્ષિત છે.", initial: "ર", color: "#1D4ED8" },
        { name: "સુરેશ પટેલ", role: "ઠેકેદાર, સુરત", text: "પહેલા JCB શોધવામાં કલાકો લાગતા. KhudaiWala પર 30 મિનિટમાં મશીન મળી જાય છે.", initial: "સ", color: "#16A34A" },
        { name: "દીપક કુમાર", role: "મિકેનિક, નોઇડા", text: "KhudaiWala Mechanics section પર રજિસ્ટ્રેશન પછી મને રોજ નવું કામ મળે છે.", initial: "દ", color: "#7C3AED" },
      ]
    }
  };
  const c = content[lang] || content.en;
  return (
    <div style={{ padding: "32px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 900, color: C.earth, marginBottom: 6 }}>{c.title}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <span style={{ color: "#F59E0B", fontSize: 16 }}>★★★★★</span>
          <span style={{ fontSize: 13, color: C.gray600, fontWeight: 600 }}>{c.rating}</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {c.testimonials.map((t, i) => (
          <div key={i} style={{ background: C.white, borderRadius: 16, padding: 18, boxShadow: "0 2px 16px rgba(0,0,0,0.07)", border: `1px solid ${C.gray200}` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800, color: "#fff", flexShrink: 0 }}>{t.initial}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: C.earth }}>{t.name}</div>
                <div style={{ fontSize: 11, color: C.gray400 }}>{t.role}</div>
              </div>
              <div style={{ marginLeft: "auto", color: "#F59E0B", fontSize: 13 }}>★★★★★</div>
            </div>
            <div style={{ fontSize: 13, color: C.gray600, lineHeight: 1.7, fontStyle: "italic" }}>"{t.text}"</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, background: C.gray100, borderRadius: 10, padding: "10px 14px", fontSize: 11, color: C.gray400, textAlign: "center" }}>{c.note}</div>
    </div>
  );
}

// ─── CITIES FOOTER ────────────────────────────────────────────────────────────
export function CitiesFooter({ lang }) {
  const titles = {
    en: { title: "Available Across India", sub: "Book JCB and excavators in your city" },
    hi: { title: "इन शहरों में उपलब्ध", sub: "अपने शहर में JCB और खुदाई मशीन किराए पर लें" },
    gu: { title: "ભારતભરમાં ઉપલબ્ધ", sub: "તમારા શહેરમાં JCB અને ખોદકામ મશીન ભાડે લો" },
  };
  const stateLabels = {
    en: ["GUJARAT", "UTTAR PRADESH", "MAHARASHTRA", "RAJASTHAN", "MADHYA PRADESH", "TELANGANA", "WEST BENGAL", "DELHI NCR"],
    hi: ["गुजरात", "उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश", "तेलंगाना", "पश्चिम बंगाल", "दिल्ली एनसीआर"],
    gu: ["ગુજરાત", "ઉત્તર પ્રદેશ", "મહારાષ્ટ્ર", "રાજસ્થાન", "મધ્ય પ્રદેશ", "તેલંગાણા", "પશ્ચિમ બંગાળ", "દિલ્હી એનસીઆર"],
  };
  const footerLabel = {
    en: "India's Earth Mover Marketplace",
    hi: "भारत का अर्थमूवर मार्केटप्लेस",
    gu: "ભારતનું અર્થમૂવર માર્કેટ્પ્લેસ",
  };
  const cityGroups = [
    ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar", "Anand", "Godhra", "Bharuch"],
    ["Lucknow", "Kanpur", "Agra", "Varanasi", "Ghaziabad", "Noida", "Meerut", "Prayagraj"],
    ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Thane", "Kolhapur", "Solapur"],
    ["Jaipur", "Jodhpur", "Udaipur", "Ajmer", "Kota", "Bikaner"],
    ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
    ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
    ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
    ["Delhi", "Gurugram", "Faridabad", "Ghaziabad", "Noida"],
  ];
  const t = titles[lang] || titles.en;
  const states = stateLabels[lang] || stateLabels.en;
  const footer = footerLabel[lang] || footerLabel.en;
  return (
    <div style={{ background: C.earth, padding: "32px 16px", margin: "0 -16px" }}>
      <div style={{ maxWidth: 520, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 18, fontWeight: 900, color: "#fff", marginBottom: 6 }}>{t.title}</div>
          <div style={{ fontSize: 12, color: "#9CA3AF" }}>{t.sub}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {cityGroups.map((cities, gi) => (
            <div key={gi}>
              <div style={{ fontSize: 10, fontWeight: 800, color: C.orange, letterSpacing: 1.5, marginBottom: 8 }}>{states[gi]}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {cities.map((city) => (
                  <span key={city} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "5px 12px", fontSize: 12, color: "#CBD5E1" }}>{city}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 28, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, textAlign: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 900, color: "#fff", marginBottom: 4 }}>Khudai<span style={{ color: C.orange }}>Wala</span></div>
          <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 12 }}>{footer}</div>
          <div style={{ fontSize: 11, color: "#6B7280" }}>A product of Surplus Alloys · GST: 24IZEPS7481C1Z1 · Godhra, Gujarat</div>
          <div style={{ fontSize: 11, color: "#6B7280", marginTop: 4 }}>© 2026 KhudaiWala · khudaiwala.online</div>
          <div style={{ marginTop: 16, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => window.dispatchEvent(new CustomEvent('showPrivacy'))} style={{ background: "none", border: "none", color: "#9CA3AF", fontSize: 11, cursor: "pointer", textDecoration: "underline" }}>Privacy Policy</button>
          <button onClick={() => window.dispatchEvent(new CustomEvent('showTerms'))} style={{ background: "none", border: "none", color: "#9CA3AF", fontSize: 11, cursor: "pointer", textDecoration: "underline" }}>Terms & Conditions</button>
</div>
        </div>
      </div>
    </div>
  );
}
