// ─── CITY PAGES + BLOG — KhudaiWala SEO Content System ───────────────────────
// Add this file as src/CityPages.jsx in your project
// Then update App.jsx to include routing (instructions at bottom)

const C = {
  orange: "#FF6B00", orangeDim: "#FFF0E6", earth: "#1A1208",
  earthMid: "#2D2010", soil: "#5C3D11", green: "#16A34A",
  greenLight: "#DCFCE7", gray50: "#F9FAFB", gray100: "#F3F4F6",
  gray200: "#E5E7EB", gray400: "#9CA3AF", gray600: "#4B5563",
  white: "#FFFFFF", blue: "#1D4ED8", blueLight: "#DBEAFE",
};

// ─── CITY DATA ────────────────────────────────────────────────────────────────
const CITIES = [
  {
    slug: "jcb-on-rent-surat",
    city: "Surat", state: "Gujarat",
    machine: "JCB", type: "Backhoe Loader",
    hindiName: "सूरत",
    metaTitle: "JCB on Rent in Surat | KhudaiWala — Backhoe Loader Hire Surat",
    metaDesc: "Book JCB on rent in Surat starting ₹1,800/hr. Verified operators. Excavator, backhoe loader hire in Surat, Gujarat. Call now on KhudaiWala.",
    rate: "₹1,800–₹2,200",
    topAreas: ["Udhna", "Katargam", "Varachha", "Adajan", "Hazira", "Sachin GIDC"],
    useCases: ["Factory construction", "Road work", "Drainage", "Foundation digging", "Industrial estate work"],
    hindiContent: "सूरत में JCB किराए पर चाहिए? KhudaiWala पर सूरत के सभी JCB मालिकों की लिस्ट है। तुरंत बुक करें।",
    faq: [
      { q: "JCB on rent in Surat — what is the hourly rate?", a: "JCB rental rates in Surat start from ₹1,800 per hour for a standard JCB 3DX backhoe loader. Larger excavators cost ₹2,500–₹3,500/hr." },
      { q: "Do you provide JCB with operator in Surat?", a: "Yes. All machines on KhudaiWala come with a verified operator included in the rate." },
      { q: "Which areas in Surat do you cover?", a: "We cover all of Surat including Udhna, Katargam, Varachha, Adajan, Hazira, Sachin GIDC, and surrounding areas." },
    ]
  },
  {
    slug: "jcb-on-rent-ahmedabad",
    city: "Ahmedabad", state: "Gujarat",
    machine: "JCB", type: "Backhoe Loader",
    hindiName: "अहमदाबाद",
    metaTitle: "JCB on Rent in Ahmedabad | KhudaiWala — Excavator Hire Ahmedabad",
    metaDesc: "Book JCB on rent in Ahmedabad starting ₹1,800/hr. Verified operators. Backhoe loader, excavator hire in Ahmedabad, Gujarat. Book now on KhudaiWala.",
    rate: "₹1,800–₹2,500",
    topAreas: ["Naroda", "Vatva GIDC", "Sanand", "Bopal", "Chandkheda", "Odhav"],
    useCases: ["Residential construction", "Road projects", "Metro work", "Industrial construction", "Plot development"],
    hindiContent: "अहमदाबाद में JCB किराए पर चाहिए? KhudaiWala पर अहमदाबाद के सभी JCB मालिकों की लिस्ट है। तुरंत बुक करें।",
    faq: [
      { q: "JCB on rent in Ahmedabad — minimum booking duration?", a: "Minimum booking is 4 hours. Full day (8 hours) bookings get a 10% discount." },
      { q: "Is JCB available on weekends in Ahmedabad?", a: "Yes. KhudaiWala machines are available 7 days a week including Sundays." },
      { q: "How quickly can I get a JCB in Ahmedabad?", a: "Most bookings are confirmed within 2 hours. Emergency same-day bookings are available." },
    ]
  },
  {
    slug: "jcb-on-rent-lucknow",
    city: "Lucknow", state: "Uttar Pradesh",
    machine: "JCB", type: "Backhoe Loader",
    hindiName: "लखनऊ",
    metaTitle: "JCB on Rent in Lucknow | KhudaiWala — JCB ka Kiraya Lucknow",
    metaDesc: "JCB on rent in Lucknow. JCB ka kiraya ₹1,600–₹2,000/ghanta. Verified operator saath. Book JCB, excavator in Lucknow on KhudaiWala.",
    rate: "₹1,600–₹2,000",
    topAreas: ["Gomti Nagar", "Hazratganj", "Aliganj", "Chinhat", "Alambagh", "Faizabad Road"],
    useCases: ["Foundation excavation", "Drainage work", "Road repair", "Plot clearing", "Sewer line work"],
    hindiContent: "लखनऊ में JCB किराए पर चाहिए? KhudaiWala पर लखनऊ के सभी JCB मालिकों की लिस्ट है। ₹1,600/घंटा से शुरू। तुरंत बुक करें।",
    faq: [
      { q: "Lucknow mein JCB ka kiraya kitna hai?", a: "Lucknow mein JCB ka kiraya ₹1,600 se ₹2,000 per ghanta hai. Rate machine type aur kaam ki jagah par depend karta hai." },
      { q: "JCB operator milega Lucknow mein?", a: "Haan. KhudaiWala par sabhi machines ke saath verified operator aata hai." },
      { q: "JCB booking kaise kare Lucknow mein?", a: "KhudaiWala app par Register karein, machine dhundhe, aur Book Now dabayein. Operator 30 minute mein call karega." },
    ]
  },
  {
    slug: "jcb-on-rent-pune",
    city: "Pune", state: "Maharashtra",
    machine: "JCB", type: "Backhoe Loader",
    hindiName: "पुणे",
    metaTitle: "JCB on Rent in Pune | KhudaiWala — Backhoe Loader Hire Pune",
    metaDesc: "Book JCB on rent in Pune from ₹1,800/hr. Verified JCB operators. Excavator, backhoe loader rental in Pune, Maharashtra. Book on KhudaiWala.",
    rate: "₹1,800–₹2,400",
    topAreas: ["Hinjawadi", "Hadapsar", "Kharadi", "Wagholi", "Chakan", "Talegaon"],
    useCases: ["IT park construction", "Residential projects", "Road widening", "Drainage", "Foundation work"],
    hindiContent: "पुणे में JCB किराए पर चाहिए? KhudaiWala पर पुणे के सभी JCB मालिकों की लिस्ट है। तुरंत बुक करें।",
    faq: [
      { q: "JCB on rent in Pune — which areas do you cover?", a: "We cover all of Pune including Hinjawadi, Hadapsar, Kharadi, Wagholi, Chakan, Talegaon, and Pimpri-Chinchwad." },
      { q: "What is the JCB 3DX rental rate in Pune?", a: "JCB 3DX rental in Pune starts from ₹1,800/hr with operator included." },
      { q: "Can I book a JCB for road construction in Pune?", a: "Yes. We have experienced operators for road work, NHAI projects, and municipal contracts." },
    ]
  },
  {
    slug: "excavator-rental-hyderabad",
    city: "Hyderabad", state: "Telangana",
    machine: "Excavator / Poclain", type: "Hydraulic Excavator",
    hindiName: "हैदराबाद",
    metaTitle: "Excavator on Rent in Hyderabad | Poclain Hire Hyderabad | KhudaiWala",
    metaDesc: "Book excavator / Poclain on rent in Hyderabad. Hitachi, Volvo, JCB excavators starting ₹2,200/hr. Verified operators. Book on KhudaiWala.",
    rate: "₹2,200–₹3,500",
    topAreas: ["Shamshabad", "Patancheru", "Kukatpally", "Miyapur", "LB Nagar", "Uppal"],
    useCases: ["Building demolition", "Deep excavation", "Pipeline work", "Metro construction", "Mining"],
    hindiContent: "हैदराबाद में खुदाई मशीन किराए पर चाहिए? KhudaiWala पर हैदराबाद के सभी Poclain/excavator मालिकों की लिस्ट है।",
    faq: [
      { q: "Excavator / Poclain on rent in Hyderabad — what is the rate?", a: "Excavator rental in Hyderabad starts from ₹2,200/hr for a 20-ton machine. Larger 30-ton machines cost ₹3,000–₹3,500/hr." },
      { q: "Which excavator brands are available in Hyderabad?", a: "We have Hitachi EX200, Volvo EC220, Tata Hitachi, JCB JS200, and Komatsu machines available in Hyderabad." },
      { q: "Is Poclain available for deep excavation work in Hyderabad?", a: "Yes. Our excavators can dig up to 7 meters depth for basement and foundation projects." },
    ]
  },
  {
    slug: "poclain-hire-kolkata",
    city: "Kolkata", state: "West Bengal",
    machine: "Poclain / Excavator", type: "Hydraulic Excavator",
    hindiName: "कोलकाता",
    metaTitle: "Poclain on Rent in Kolkata | Excavator Hire Kolkata | KhudaiWala",
    metaDesc: "Book Poclain / excavator on rent in Kolkata from ₹2,000/hr. Verified operators. JCB, backhoe, hydraulic excavator hire in Kolkata, West Bengal.",
    rate: "₹2,000–₹3,200",
    topAreas: ["Rajarhat", "New Town", "Howrah", "Durgapur", "Barasat", "Dum Dum"],
    useCases: ["Construction", "River dredging", "Road projects", "Industrial work", "Building demolition"],
    hindiContent: "कोलकाता में Poclain/खुदाई मशीन किराए पर चाहिए? KhudaiWala पर कोलकाता के सभी machine मालिकों की लिस्ट है।",
    faq: [
      { q: "Poclain on rent in Kolkata — minimum hire duration?", a: "Minimum hire is 4 hours. Full day bookings (8 hours) are available at discounted rates." },
      { q: "Which areas in Kolkata do you cover?", a: "We cover Rajarhat, New Town, Howrah, Salt Lake, Barasat, Dum Dum, and all of Greater Kolkata." },
      { q: "Is Poclain available for river bank and dredging work near Kolkata?", a: "Yes. We have amphibious and long-reach excavators available for river bank projects." },
    ]
  },
];

// ─── BLOG DATA ─────────────────────────────────────────────────────────────────
const BLOGS = [
  {
    slug: "jcb-rental-rates-gujarat-2025",
    title: "JCB Rental Rates in Gujarat 2025 — Complete Price Guide",
    hindiTitle: "गुजरात में JCB का किराया 2025 — पूरी जानकारी",
    date: "June 27, 2026",
    readTime: "5 min read",
    category: "Pricing Guide",
    excerpt: "Planning to hire a JCB in Gujarat? Here are the exact 2025 rental rates for backhoe loaders, excavators, and graders across Ahmedabad, Surat, Vadodara, and Rajkot.",
    content: [
      { h: "JCB Rental Rates in Gujarat — 2025 Updated Prices", p: "Whether you're a contractor in Surat or a builder in Ahmedabad, hiring the right earthmoving machine at the right price is critical. Here are the verified market rates for 2025." },
      { h: "JCB Backhoe Loader (3DX / 3CX) Rates", p: "The JCB 3DX is the most popular machine in Gujarat. Rental rates range from ₹1,800 to ₹2,200 per hour depending on location and machine condition. Full-day rates (8 hours) typically cost ₹12,000–₹16,000." },
      { h: "Excavator Rental Rates in Gujarat", p: "Hydraulic excavators (20-ton class like Hitachi EX200 or Volvo EC210) cost ₹2,500–₹3,500 per hour in Gujarat. For larger machines (30 ton+), expect ₹3,500–₹5,000/hr." },
      { h: "Motor Grader Hire Rates", p: "Motor graders for road leveling and highway work cost ₹2,200–₹3,000 per hour. Daily rates are ₹16,000–₹22,000." },
      { h: "What Affects JCB Rental Price?", p: "Machine age, operator experience, location distance, fuel (included or excluded), and weekend/holiday premium all affect the final price. Always clarify fuel costs before booking." },
      { h: "How to Get the Best JCB Rate in Gujarat", p: "Book through KhudaiWala to compare verified rates from multiple owners. Longer bookings (week or month) attract 15–25% discounts. Book in advance during peak construction season (October–March)." },
    ],
    hindiSummary: "गुजरात में JCB 3DX का किराया ₹1,800–₹2,200/घंटा है। खुदाई मशीन (excavator) का किराया ₹2,500–₹3,500/घंटा है। KhudaiWala पर सभी मशीनों के रेट compare करें और सबसे सस्ता रेट पाएं।",
  },
  {
    slug: "how-to-hire-excavator-uttar-pradesh",
    title: "How to Hire an Excavator in Uttar Pradesh — Step by Step Guide",
    hindiTitle: "उत्तर प्रदेश में खुदाई मशीन कैसे किराए पर लें",
    date: "June 27, 2026",
    readTime: "6 min read",
    category: "Hiring Guide",
    excerpt: "Hiring an excavator in UP can be confusing — unorganized market, no standard rates, and unreliable operators. Here's how to do it right.",
    content: [
      { h: "The Challenge of Hiring Machines in Uttar Pradesh", p: "Uttar Pradesh has one of India's largest construction equipment markets — with over 80,000 active machines — but it is almost entirely unorganized. Finding a reliable JCB or excavator means calling friends, visiting sites, or relying on word of mouth." },
      { h: "Step 1: Know What Machine You Need", p: "JCB (backhoe loader) for general digging, foundation work, trenching. Excavator (Poclain) for deep excavation, large volume earth moving. Compactor for road work. Don't pay for a 30-ton excavator if a JCB will do the job." },
      { h: "Step 2: Verify the Operator", p: "In UP, many operators are skilled but work informally. Ask for their experience in years, the types of projects they've done, and whether they have a valid operator licence. KhudaiWala verifies all operators before listing." },
      { h: "Step 3: Agree on Rate and Fuel Terms", p: "Always clarify: Is fuel included or extra? What is the minimum booking? What happens if the machine breaks down? Get this confirmed in writing — even a WhatsApp message is enough." },
      { h: "Step 4: Book Through a Platform", p: "Using KhudaiWala means you get a verified machine, a confirmed rate, and payment protection. Your money is held until the job is done — you're not paying upfront to an unknown owner." },
      { h: "Current Rates in UP Cities", p: "Lucknow: ₹1,600–₹2,000/hr | Kanpur: ₹1,500–₹1,900/hr | Agra: ₹1,600–₹2,000/hr | Varanasi: ₹1,500–₹1,800/hr | Noida/Ghaziabad: ₹1,800–₹2,200/hr" },
    ],
    hindiSummary: "UP में JCB किराए पर लेने के लिए: पहले सही मशीन चुनें, operator की जांच करें, rate और fuel के बारे में साफ बात करें, और KhudaiWala पर बुक करें। UP में JCB का किराया ₹1,500–₹2,200/घंटा है।",
  },
  {
    slug: "jcb-3dx-vs-3cx-india",
    title: "JCB 3DX vs 3CX — Which is Better for Road Work in India?",
    hindiTitle: "JCB 3DX बनाम 3CX — रोड वर्क के लिए कौन सा बेहतर है?",
    date: "June 27, 2026",
    readTime: "7 min read",
    category: "Machine Guide",
    excerpt: "India's two most popular backhoe loaders compared. Which one should you hire or buy for road construction, foundation digging, or general earthwork?",
    content: [
      { h: "JCB 3DX vs 3CX — The Most Searched Comparison in India", p: "If you've searched for 'JCB price India' or 'JCB on rent near me', you've probably seen both the 3DX and 3CX come up. They look similar but have important differences." },
      { h: "JCB 3DX — India's Most Popular Backhoe Loader", p: "The 3DX is built specifically for Indian conditions — dusty sites, hard soil, and rough usage. It has a 74HP engine, 4.2m dig depth, and 1-ton bucket. It's the go-to machine for contractors across India and accounts for the majority of all JCB rentals." },
      { h: "JCB 3CX — The International Model", p: "The 3CX is the global version with a more powerful engine (81HP), better hydraulics, and 4.3m dig depth. It's smoother to operate but costs 15–20% more to hire. Best for precision work and urban projects." },
      { h: "Which is Better for Road Work?", p: "For general road repair, drainage trenching, and highway shoulder work — the 3DX is sufficient and more cost-effective. For precision work near utilities or in tight spaces, the 3CX's smoother controls give better accuracy." },
      { h: "Rental Rate Comparison", p: "JCB 3DX: ₹1,600–₹2,000/hr | JCB 3CX: ₹1,800–₹2,400/hr. For a 5-day road project, the 3DX saves you ₹8,000–₹20,000 vs the 3CX with no meaningful difference in output." },
      { h: "Conclusion", p: "For most Indian road work — go with the 3DX. It's more available, better maintained by local mechanics, and 15–20% cheaper to hire. Choose the 3CX only if your project specifically requires its extra precision." },
    ],
    hindiSummary: "JCB 3DX और 3CX में मुख्य अंतर: 3DX भारतीय परिस्थितियों के लिए बना है, सस्ता है (₹1,600–₹2,000/घंटा), और ज्यादा उपलब्ध है। 3CX ज्यादा powerful है लेकिन महंगा है। सड़क के काम के लिए 3DX बेहतर है।",
  },
  {
    slug: "jcb-ka-kiraya-kitna-hota-hai",
    title: "JCB ka Kiraya Kitna Hota Hai — Puri Jaankari 2025",
    hindiTitle: "JCB का किराया कितना होता है — पूरी जानकारी 2025",
    date: "June 27, 2026",
    readTime: "4 min read",
    category: "Hindi Guide",
    excerpt: "JCB ka kiraya state aur machine type ke hisaab se alag hota hai. Yahan hai 2025 ki poori rate list — Hindi mein.",
    content: [
      { h: "JCB ka Kiraya — State-wise Rate List", p: "Gujarat: ₹1,800–₹2,200/ghanta | Uttar Pradesh: ₹1,500–₹2,000/ghanta | Maharashtra: ₹1,800–₹2,400/ghanta | Rajasthan: ₹1,500–₹1,900/ghanta | Bihar: ₹1,400–₹1,800/ghanta | West Bengal: ₹1,600–₹2,000/ghanta" },
      { h: "JCB ka Kiraya Kab Zyada Hota Hai?", p: "October se March tak construction season mein JCB ka kiraya 10–20% zyada hota hai. Chhoti booking (1–2 ghante) mein rate zyada hogi. Long-term booking (hafte ya mahine) mein discount milta hai." },
      { h: "JCB Kiraye Mein Kya-Kya Included Hota Hai?", p: "Zyaadatar booking mein: operator ka payment included hota hai, machine ka insurance included hota hai. Fuel alag se dena padta hai — ek shift mein lagbhag 15–20 litre diesel lagta hai." },
      { h: "Sasta JCB Kaise Milega?", p: "KhudaiWala par alag-alag owners ke rates compare karein. Seedha owner se book karein — beech mein dalaal na rakhe. Lambi booking ke liye discount maangein. Dopahar ke baad booking karne par kai baar rate kam milti hai." },
      { h: "JCB Kaise Book Karein?", p: "KhudaiWala.online par jaiye, apna shehar chuniye, machine dhundhiye, aur 'Abhi Book Karo' dabayein. Owner 30 minute mein call karega. Payment secure hai." },
    ],
    hindiSummary: "JCB ka kiraya ₹1,400 se ₹2,400/ghanta tak hota hai state ke hisaab se. Fuel alag se lagta hai. KhudaiWala par compare karke sabse sasta rate paiye.",
  },
  {
    slug: "jcb-mechanic-kaise-dhundhe",
    title: "JCB Mechanic Kaise Dhundhe — Machine Owners ke liye Tips",
    hindiTitle: "JCB मैकेनिक कैसे ढूंढें — मशीन मालिकों के लिए टिप्स",
    date: "June 27, 2026",
    readTime: "5 min read",
    category: "Mechanic Guide",
    excerpt: "JCB kharab ho gayi? Sahi mechanic dhundhna mushkil lagta hai. Yahan hai step-by-step guide — kaise paiye verified JCB mechanic apne shehar mein.",
    content: [
      { h: "JCB Breakdown — Sabse Pehle Kya Karein?", p: "Machine kharab hone par ghabrayein nahi. Pehle check karein: fuel hai ya nahi, battery charge hai ya nahi, hydraulic oil level theek hai ya nahi. 60% breakdowns in teen cheezon ki wajah se hoti hain." },
      { h: "JCB Mechanic Dhundhne ke Tarike", p: "1. Local JCB dealer se contact karein — woh authorized mechanic bhejte hain. 2. KhudaiWala app par 'Mechanics' section mein verified mechanics dhundhein. 3. Apne area ke construction contractors se referral maangein." },
      { h: "Mechanic Chunte Waqt Yeh Dekhen", p: "Kitne saal ka experience hai? Kaunse machines service karte hain — JCB, Hitachi, Volvo? Parts genuine laate hain ya duplicate? Rate pehle batate hain ya baad mein extra demand karte hain?" },
      { h: "Common JCB Problems aur Unka Kharcha", p: "Hydraulic hose repair: ₹800–₹2,000 | Bucket teeth replacement: ₹1,500–₹4,000 | Engine oil change: ₹2,500–₹4,000 | Hydraulic pump repair: ₹15,000–₹40,000 | Starter motor repair: ₹3,000–₹8,000" },
      { h: "KhudaiWala par Mechanic Kaise Book Karein?", p: "KhudaiWala.online kholen, 'Mechanics' tab par jaiye, apna shehar chuniye, specialist ki specialty dekhen (JCB, hydraulic, engine), aur 'Book Mechanic' ya 'Call' dabayein. Emergency mein 1800-KHUDAI-FIX par call karein." },
    ],
    hindiSummary: "JCB mechanic dhundhne ke liye KhudaiWala ka Mechanics section use karein. Emergency mein 1800-KHUDAI-FIX par call karein. Mechanic chunte waqt experience, specialty aur rate pehle confirm karein.",
  },
];

// ─── CITY PAGE COMPONENT ──────────────────────────────────────────────────────
export function CityPage({ slug, onBack }) {
  const city = CITIES.find(c => c.slug === slug);
  if (!city) return null;

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: C.gray50, minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: C.earth, color: "#fff", padding: "16px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onBack} style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 8, padding: "6px 12px", color: "#fff", cursor: "pointer", fontSize: 13 }}>← Back</button>
          <div>
            <div style={{ fontWeight: 900, fontSize: 16 }}>Khudai<span style={{ color: C.orange }}>Wala</span></div>
            <div style={{ fontSize: 10, color: "#9CA3AF" }}>{city.machine} on Rent in {city.city}</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 16px 60px" }}>
        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, ${C.earth}, #3D2505)`, borderRadius: 16, padding: 24, margin: "16px 0", color: "#fff" }}>
          <div style={{ fontSize: 11, color: C.orange, fontWeight: 800, letterSpacing: 1, marginBottom: 8 }}>📍 {city.city.toUpperCase()}, {city.state.toUpperCase()}</div>
          <h1 style={{ fontSize: 24, fontWeight: 900, lineHeight: 1.2, marginBottom: 8 }}>
            {city.machine} on Rent in {city.city}
          </h1>
          <p style={{ fontSize: 13, color: "#CBD5E1", marginBottom: 16 }}>{city.hindiContent}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <div style={{ background: "rgba(255,107,0,0.2)", borderRadius: 10, padding: "10px 16px" }}>
              <div style={{ fontSize: 10, color: C.orange }}>STARTING RATE</div>
              <div style={{ fontSize: 18, fontWeight: 800 }}>{city.rate}/hr</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "10px 16px" }}>
              <div style={{ fontSize: 10, color: "#9CA3AF" }}>MACHINE TYPE</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{city.type}</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: C.orange, borderRadius: 14, padding: 18, marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: "#fff" }}>Book {city.machine} in {city.city}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>Verified operator · Instant confirmation · Safe payment</div>
          </div>
          <button onClick={onBack} style={{ background: "#fff", color: C.orange, border: "none", borderRadius: 10, padding: "10px 20px", fontWeight: 800, cursor: "pointer", fontSize: 14 }}>
            Find Machines →
          </button>
        </div>

        {/* Areas covered */}
        <div style={{ background: C.white, borderRadius: 14, padding: 18, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: C.earth, marginBottom: 12 }}>Areas Covered in {city.city}</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {city.topAreas.map(a => (
              <span key={a} style={{ background: C.blueLight, color: C.blue, borderRadius: 8, padding: "4px 12px", fontSize: 12, fontWeight: 600 }}>📍 {a}</span>
            ))}
          </div>
        </div>

        {/* Use cases */}
        <div style={{ background: C.white, borderRadius: 14, padding: 18, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: C.earth, marginBottom: 12 }}>Common Uses in {city.city}</h2>
          {city.useCases.map(u => (
            <div key={u} style={{ display: "flex", gap: 10, alignItems: "center", padding: "8px 0", borderBottom: `1px solid ${C.gray100}` }}>
              <span style={{ color: C.orange, fontSize: 16 }}>✓</span>
              <span style={{ fontSize: 14, color: C.gray600 }}>{u}</span>
            </div>
          ))}
        </div>

        {/* Why KhudaiWala */}
        <div style={{ background: C.orangeDim, borderRadius: 14, padding: 18, marginBottom: 16 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: C.soil, marginBottom: 12 }}>Why Book Through KhudaiWala in {city.city}?</h2>
          {[
            "All machine owners are verified before listing",
            "Transparent pricing — no hidden charges",
            "IoT tracking — see machine fuel and status live",
            "Payment protection — money held until job done",
            "Mechanic support available 24/7",
            "Hindi + English support",
          ].map(b => (
            <div key={b} style={{ display: "flex", gap: 8, marginBottom: 8, fontSize: 13, color: C.soil }}>
              <span style={{ color: C.orange }}>✓</span>{b}
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div style={{ background: C.white, borderRadius: 14, padding: 18, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: C.earth, marginBottom: 16 }}>Frequently Asked Questions</h2>
          {city.faq.map((f, i) => (
            <div key={i} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: i < city.faq.length - 1 ? `1px solid ${C.gray100}` : "none" }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: C.earth, marginBottom: 6 }}>Q: {f.q}</div>
              <div style={{ fontSize: 13, color: C.gray600, lineHeight: 1.6 }}>A: {f.a}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ background: C.earth, borderRadius: 14, padding: 20, textAlign: "center", color: "#fff" }}>
          <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 8 }}>Ready to book {city.machine} in {city.city}?</div>
          <div style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 16 }}>Join 10,000+ contractors already using KhudaiWala</div>
          <button onClick={onBack} style={{ background: C.orange, color: "#fff", border: "none", borderRadius: 12, padding: "14px 32px", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
            Book Now — Free →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── BLOG POST COMPONENT ──────────────────────────────────────────────────────
export function BlogPost({ slug, onBack }) {
  const post = BLOGS.find(b => b.slug === slug);
  if (!post) return null;

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: C.gray50, minHeight: "100vh" }}>
      <div style={{ background: C.earth, color: "#fff", padding: "16px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onBack} style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 8, padding: "6px 12px", color: "#fff", cursor: "pointer", fontSize: 13 }}>← Back</button>
          <div style={{ fontWeight: 900, fontSize: 16 }}>Khudai<span style={{ color: C.orange }}>Wala</span> <span style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 400 }}>Blog</span></div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 16px 60px" }}>
        <div style={{ padding: "24px 0 16px" }}>
          <span style={{ background: C.orangeDim, color: C.orange, fontSize: 11, fontWeight: 700, borderRadius: 6, padding: "3px 10px" }}>{post.category}</span>
          <h1 style={{ fontSize: 22, fontWeight: 900, color: C.earth, marginTop: 12, marginBottom: 8, lineHeight: 1.3 }}>{post.title}</h1>
          <div style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 16 }}>{post.date} · {post.readTime}</div>
          <p style={{ fontSize: 15, color: C.gray600, lineHeight: 1.7, marginBottom: 20, borderLeft: `3px solid ${C.orange}`, paddingLeft: 14 }}>{post.excerpt}</p>
        </div>

        {/* Hindi summary box */}
        <div style={{ background: C.earthMid, borderRadius: 12, padding: 16, marginBottom: 24, color: "#fff" }}>
          <div style={{ fontSize: 11, color: C.orange, fontWeight: 700, marginBottom: 8 }}>🇮🇳 हिंदी में संक्षेप</div>
          <p style={{ fontSize: 13, color: "#CBD5E1", lineHeight: 1.7 }}>{post.hindiSummary}</p>
        </div>

        {/* Article content */}
        {post.content.map((section, i) => (
          <div key={i} style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 17, fontWeight: 800, color: C.earth, marginBottom: 10 }}>{section.h}</h2>
            <p style={{ fontSize: 14, color: C.gray600, lineHeight: 1.8 }}>{section.p}</p>
          </div>
        ))}

        {/* CTA */}
        <div style={{ background: `linear-gradient(135deg, ${C.earth}, #3D2505)`, borderRadius: 14, padding: 20, textAlign: "center", color: "#fff", marginTop: 32 }}>
          <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 8 }}>Find Verified Machines on KhudaiWala</div>
          <div style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 16 }}>Compare rates · Book instantly · Pay safely</div>
          <button onClick={onBack} style={{ background: C.orange, color: "#fff", border: "none", borderRadius: 12, padding: "14px 32px", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
            Find JCB Near Me →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── CITY + BLOG LISTING PAGE ─────────────────────────────────────────────────
export function CityBlogHome({ onCityClick, onBlogClick, onBack }) {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: C.gray50, minHeight: "100vh" }}>
      <div style={{ background: C.earth, color: "#fff", padding: "16px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onBack} style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 8, padding: "6px 12px", color: "#fff", cursor: "pointer", fontSize: 13 }}>← Home</button>
          <div style={{ fontWeight: 900, fontSize: 16 }}>Khudai<span style={{ color: C.orange }}>Wala</span></div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 16px 60px" }}>
        {/* City Pages */}
        <div style={{ padding: "20px 0 12px" }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, color: C.earth, marginBottom: 4 }}>Find JCB by City</h2>
          <p style={{ fontSize: 13, color: C.gray400, marginBottom: 16 }}>JCB and excavator rental in your city</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {CITIES.map(c => (
              <button key={c.slug} onClick={() => onCityClick(c.slug)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: C.white, border: `1.5px solid ${C.gray200}`, borderRadius: 14, padding: "14px 18px", cursor: "pointer", textAlign: "left", boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: C.earth }}>{c.machine} on Rent in {c.city}</div>
                  <div style={{ fontSize: 12, color: C.gray400 }}>{c.state} · {c.rate}/hr · {c.type}</div>
                </div>
                <span style={{ color: C.orange, fontSize: 18 }}>→</span>
              </button>
            ))}
          </div>
        </div>

        {/* Blog */}
        <div style={{ padding: "20px 0 12px" }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, color: C.earth, marginBottom: 4 }}>Knowledge Centre</h2>
          <p style={{ fontSize: 13, color: C.gray400, marginBottom: 16 }}>Guides, rates, and tips for machine owners and contractors</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {BLOGS.map(b => (
              <button key={b.slug} onClick={() => onBlogClick(b.slug)} style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", background: C.white, border: `1.5px solid ${C.gray200}`, borderRadius: 14, padding: "14px 18px", cursor: "pointer", textAlign: "left", boxShadow: "0 1px 8px rgba(0,0,0,0.05)", gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <span style={{ background: C.orangeDim, color: C.orange, fontSize: 10, fontWeight: 700, borderRadius: 6, padding: "2px 8px", marginBottom: 6, display: "inline-block" }}>{b.category}</span>
                  <div style={{ fontWeight: 700, fontSize: 14, color: C.earth, marginBottom: 4, lineHeight: 1.3 }}>{b.title}</div>
                  <div style={{ fontSize: 11, color: "#9CA3AF" }}>{b.date} · {b.readTime}</div>
                </div>
                <span style={{ color: C.orange, fontSize: 18, flexShrink: 0 }}>→</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { CITIES, BLOGS };
