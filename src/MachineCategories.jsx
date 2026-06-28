// ─── MACHINE CATEGORIES — KhudaiWala ─────────────────────────────────────────
// Browse by category with icons + Equipment type list

const C = {
  orange: "#FF6B00", orangeDim: "#FFF0E6", earth: "#1A1208",
  earthMid: "#2D2010", gray50: "#F9FAFB", gray100: "#F3F4F6",
  gray200: "#E5E7EB", gray400: "#9CA3AF", gray600: "#4B5563", white: "#FFFFFF",
};

// Machine category data with SVG-style emoji representations
const MACHINE_CATEGORIES = [
  {
    key: "Backhoe Loader",
    emoji: "🚜",
    image: "backhoe",
    en: { name: "Backhoe Loader", desc: "JCB 3DX, 3CX", use: "Foundation, trenching, road work" },
    hi: { name: "बैकहो लोडर", desc: "JCB 3DX, 3CX", use: "नींव खुदाई, ट्रेंचिंग" },
    gu: { name: "બૅકહો લોડર", desc: "JCB 3DX, 3CX", use: "પાયો, ખાઈ, રોડ" },
    rate: "₹1,800–₹2,200/hr",
    color: "#FEF9C3",
    borderColor: "#FDE68A",
  },
  {
    key: "Excavator",
    emoji: "⛏️",
    image: "excavator",
    en: { name: "Excavator / Poclain", desc: "Hitachi, Volvo, Tata", use: "Deep digging, demolition, mining" },
    hi: { name: "खुदाई मशीन / Poclain", desc: "हिताची, वोल्वो, टाटा", use: "गहरी खुदाई, तोड़फोड़" },
    gu: { name: "ખોદકામ / Poclain", desc: "હિટાચી, વોલ્વો, ટાટા", use: "ઊંડી ખોદ, તોડ-ફોડ" },
    rate: "₹2,500–₹3,500/hr",
    color: "#DBEAFE",
    borderColor: "#BFDBFE",
  },
  {
    key: "Motor Grader",
    emoji: "🛣️",
    image: "grader",
    en: { name: "Motor Grader", desc: "CASE, CAT, BEML", use: "Road leveling, highway work" },
    hi: { name: "मोटर ग्रेडर", desc: "CASE, CAT, BEML", use: "सड़क समतल, हाईवे काम" },
    gu: { name: "મોટર ગ્રેડર", desc: "CASE, CAT, BEML", use: "રોડ સ્તર, હાઇવે" },
    rate: "₹2,200–₹3,000/hr",
    color: "#DCFCE7",
    borderColor: "#BBF7D0",
  },
  {
    key: "Compactor",
    emoji: "🔨",
    image: "compactor",
    en: { name: "Compactor / Roller", desc: "Dynapac, Hamm, CASE", use: "Road compaction, soil packing" },
    hi: { name: "कॉम्पैक्टर / रोलर", desc: "डाइनापैक, हैम", use: "सड़क दबाव, मिट्टी पैकिंग" },
    gu: { name: "કૉમ્પૅક્ટર / રોલર", desc: "ડાઇનાપૅક, હૅમ", use: "રોડ કૉમ્પૅક્શન" },
    rate: "₹1,500–₹2,000/hr",
    color: "#EDE9FE",
    borderColor: "#DDD6FE",
  },
  {
    key: "Crane",
    emoji: "🏗️",
    image: "crane",
    en: { name: "Crane", desc: "Liebherr, Tadano, ACE", use: "Heavy lifting, construction" },
    hi: { name: "क्रेन", desc: "लिबहेर, टडानो, ACE", use: "भारी सामान उठाना" },
    gu: { name: "ક્રેન", desc: "લીબહૅર, ટૅડૅનો, ACE", use: "ભારી સામાન ઉઠાવ" },
    rate: "₹3,000–₹8,000/hr",
    color: "#FEE2E2",
    borderColor: "#FECACA",
  },
  {
    key: "Bulldozer",
    emoji: "🚧",
    image: "bulldozer",
    en: { name: "Bulldozer", desc: "CAT, Komatsu, BEML", use: "Land clearing, earthmoving" },
    hi: { name: "बुलडोज़र", desc: "CAT, कोमात्सु", use: "ज़मीन साफ, मिट्टी हटाना" },
    gu: { name: "બુલડોઝર", desc: "CAT, કોમૅત્સુ", use: "જમીન સાફ, માટી" },
    rate: "₹2,000–₹3,000/hr",
    color: "#FEF3C7",
    borderColor: "#FDE68A",
  },
  {
    key: "Tipper",
    emoji: "🚛",
    image: "tipper",
    en: { name: "Tipper / Dumper", desc: "Tata, Ashok Leyland", use: "Material transport, sand, gravel" },
    hi: { name: "टिपर / डम्पर", desc: "टाटा, अशोक लेलैंड", use: "सामग्री परिवहन, रेत, बजरी" },
    gu: { name: "ટિપર / ડૅમ્પર", desc: "ટાટા, અશોક લૅઇલૅન્ડ", use: "સામગ્રી પ્રવહન" },
    rate: "₹800–₹1,500/hr",
    color: "#ECFDF5",
    borderColor: "#A7F3D0",
  },
  {
    key: "Wheel Loader",
    emoji: "⚙️",
    image: "loader",
    en: { name: "Wheel Loader", desc: "JCB, Komatsu, CAT", use: "Loading, stockpiling, material handling" },
    hi: { name: "व्हील लोडर", desc: "JCB, कोमात्सु, CAT", use: "लोडिंग, सामग्री हैंडलिंग" },
    gu: { name: "વ્હીલ લોડર", desc: "JCB, કોમૅત્સુ, CAT", use: "લોડિંગ, સામગ્રી" },
    rate: "₹1,800–₹2,500/hr",
    color: "#F0FDF4",
    borderColor: "#86EFAC",
  },
];

// Machine icon SVG components
function MachineIcon({ type, size = 60 }) {
  const icons = {
    backhoe: (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <rect x="5" y="35" width="30" height="12" rx="3" fill="#FF6B00" opacity="0.9"/>
        <rect x="8" y="30" width="14" height="8" rx="2" fill="#1A1208"/>
        <rect x="3" y="45" width="35" height="6" rx="3" fill="#1A1208"/>
        <circle cx="10" cy="51" r="5" fill="#374151" stroke="#FF6B00" strokeWidth="1.5"/>
        <circle cx="30" cy="51" r="5" fill="#374151" stroke="#FF6B00" strokeWidth="1.5"/>
        <rect x="22" y="20" width="4" height="16" rx="2" fill="#FF8C38" transform="rotate(-20 24 28)"/>
        <rect x="26" y="28" width="4" height="14" rx="2" fill="#FF6B00" transform="rotate(15 28 35)"/>
        <rect x="28" y="38" width="12" height="4" rx="2" fill="#1A1208" transform="rotate(-10 34 40)"/>
      </svg>
    ),
    excavator: (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <rect x="8" y="32" width="35" height="14" rx="3" fill="#1D4ED8" opacity="0.9"/>
        <rect x="12" y="25" width="16" height="10" rx="2" fill="#1A1208"/>
        <rect x="5" y="44" width="42" height="7" rx="3" fill="#1A1208"/>
        <circle cx="12" cy="51" r="4" fill="#374151" stroke="#1D4ED8" strokeWidth="1.5"/>
        <circle cx="25" cy="51" r="4" fill="#374151" stroke="#1D4ED8" strokeWidth="1.5"/>
        <circle cx="38" cy="51" r="4" fill="#374151" stroke="#1D4ED8" strokeWidth="1.5"/>
        <rect x="30" y="15" width="4" height="20" rx="2" fill="#3B82F6" transform="rotate(-25 32 25)"/>
        <rect x="35" y="25" width="4" height="15" rx="2" fill="#1D4ED8" transform="rotate(20 37 33)"/>
        <polygon points="38,38 50,35 52,40 40,43" fill="#1A1208"/>
      </svg>
    ),
    grader: (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <rect x="5" y="30" width="50" height="12" rx="3" fill="#16A34A" opacity="0.9"/>
        <rect x="12" y="22" width="20" height="10" rx="2" fill="#1A1208"/>
        <rect x="3" y="40" width="54" height="7" rx="2" fill="#1A1208"/>
        <circle cx="10" cy="47" r="5" fill="#374151" stroke="#16A34A" strokeWidth="1.5"/>
        <circle cx="30" cy="47" r="5" fill="#374151" stroke="#16A34A" strokeWidth="1.5"/>
        <circle cx="50" cy="47" r="5" fill="#374151" stroke="#16A34A" strokeWidth="1.5"/>
        <rect x="15" y="33" width="30" height="4" rx="2" fill="#FF6B00" transform="rotate(-5 30 35)"/>
      </svg>
    ),
    compactor: (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <rect x="10" y="25" width="40" height="15" rx="3" fill="#7C3AED" opacity="0.9"/>
        <rect x="15" y="18" width="18" height="10" rx="2" fill="#1A1208"/>
        <ellipse cx="30" cy="48" rx="22" ry="8" fill="#374151" stroke="#7C3AED" strokeWidth="2"/>
        <ellipse cx="30" cy="47" rx="18" ry="6" fill="#4B5563"/>
        <rect x="25" y="38" width="10" height="8" rx="1" fill="#1A1208"/>
      </svg>
    ),
    crane: (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <rect x="22" y="10" width="6" height="40" rx="2" fill="#DC2626" opacity="0.9"/>
        <rect x="22" y="10" width="32" height="5" rx="2" fill="#1A1208"/>
        <line x1="28" y1="15" x2="28" y2="35" stroke="#DC2626" strokeWidth="1.5"/>
        <rect x="26" y="33" width="4" height="10" rx="1" fill="#374151"/>
        <rect x="10" y="44" width="40" height="10" rx="3" fill="#1A1208"/>
        <circle cx="18" cy="54" r="4" fill="#374151" stroke="#DC2626" strokeWidth="1.5"/>
        <circle cx="42" cy="54" r="4" fill="#374151" stroke="#DC2626" strokeWidth="1.5"/>
      </svg>
    ),
    bulldozer: (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <rect x="5" y="28" width="42" height="14" rx="3" fill="#F59E0B" opacity="0.9"/>
        <rect x="10" y="20" width="22" height="11" rx="2" fill="#1A1208"/>
        <rect x="3" y="40" width="46" height="8" rx="2" fill="#1A1208"/>
        <circle cx="12" cy="48" r="5" fill="#374151" stroke="#F59E0B" strokeWidth="1.5"/>
        <circle cx="38" cy="48" r="5" fill="#374151" stroke="#F59E0B" strokeWidth="1.5"/>
        <rect x="2" y="30" width="8" height="16" rx="2" fill="#374151"/>
      </svg>
    ),
    tipper: (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <rect x="5" y="25" width="50" height="18" rx="3" fill="#6B7280" opacity="0.9"/>
        <rect x="5" y="20" width="18" height="8" rx="2" fill="#1A1208"/>
        <rect x="8" y="25" width="44" height="14" rx="2" fill="#9CA3AF" transform="rotate(-5 30 32)"/>
        <rect x="3" y="41" width="54" height="6" rx="2" fill="#1A1208"/>
        <circle cx="15" cy="47" r="5" fill="#374151" stroke="#6B7280" strokeWidth="1.5"/>
        <circle cx="45" cy="47" r="5" fill="#374151" stroke="#6B7280" strokeWidth="1.5"/>
      </svg>
    ),
    loader: (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <rect x="8" y="28" width="36" height="14" rx="3" fill="#0891B2" opacity="0.9"/>
        <rect x="12" y="20" width="16" height="10" rx="2" fill="#1A1208"/>
        <rect x="3" y="40" width="50" height="8" rx="2" fill="#1A1208"/>
        <circle cx="14" cy="48" r="6" fill="#374151" stroke="#0891B2" strokeWidth="2"/>
        <circle cx="46" cy="48" r="6" fill="#374151" stroke="#0891B2" strokeWidth="2"/>
        <rect x="2" y="26" width="10" height="6" rx="2" fill="#0891B2"/>
        <polygon points="2,22 12,22 12,28 2,32" fill="#374151"/>
      </svg>
    ),
  };
  return icons[type] || <div style={{ fontSize: size * 0.6, textAlign: "center" }}>🚜</div>;
}

// ─── BROWSE BY CATEGORY (Grid) ────────────────────────────────────────────────
export function CategoryGrid({ lang, onCategorySelect }) {
  const labels = {
    en: { title: "Browse by Category", sub: "Find the perfect machine for your construction needs" },
    hi: { title: "श्रेणी के अनुसार खोजें", sub: "अपने निर्माण कार्य के लिए सही मशीन खोजें" },
    gu: { title: "શ્રેણી પ્રમાણે શોધો", sub: "તમારા બાંધકામ માટે સાચું મશીન શોધો" };
  };
  const l = labels[lang] || labels.en;

  return (
    <div style={{ padding: "28px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div style={{ fontSize: 18, fontWeight: 900, color: "#1A1208", marginBottom: 6 }}>{l.title}</div>
        <div style={{ fontSize: 13, color: "#9CA3AF" }}>{l.sub}</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {MACHINE_CATEGORIES.map((cat) => {
          const info = cat[lang] || cat.en;
          return (
            <button
              key={cat.key}
              onClick={() => onCategorySelect && onCategorySelect(cat.key)}
              style={{ background: cat.color, border: `1.5px solid ${cat.borderColor}`, borderRadius: 14, padding: "14px 12px", cursor: "pointer", textAlign: "center", transition: "transform 0.15s" }}
            >
              <div style={{ marginBottom: 8, display: "flex", justifyContent: "center" }}>
                <MachineIcon type={cat.image} size={52} />
              </div>
              <div style={{ fontWeight: 800, fontSize: 13, color: "#1A1208", marginBottom: 3 }}>{info.name}</div>
              <div style={{ fontSize: 10, color: "#6B7280", marginBottom: 4 }}>{info.desc}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#FF6B00" }}>{cat.rate}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── EQUIPMENT LIST (Detailed, like Image 3) ──────────────────────────────────
export function EquipmentList({ lang, onSelect }) {
  const labels = {
    en: { title: "Choose Your Equipment", sub: "All machine types available for rent" },
    hi: { title: "अपनी मशीन चुनें", sub: "किराए पर उपलब्ध सभी मशीन प्रकार" },
    gu: { title: "તમારું મશીન પસંદ કરો", sub: "ભાડે ઉપલબ્ધ બધા મશીન પ્રકાર" },
  };
  const l = labels[lang] || labels.en;

  return (
    <div style={{ padding: "28px 0" }}>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div style={{ fontSize: 18, fontWeight: 900, color: "#1A1208", marginBottom: 6 }}>{l.title}</div>
        <div style={{ fontSize: 13, color: "#9CA3AF" }}>{l.sub}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {MACHINE_CATEGORIES.map((cat) => {
          const info = cat[lang] || cat.en;
          return (
            <button
              key={cat.key}
              onClick={() => onSelect && onSelect(cat.key)}
              style={{ background: "#fff", border: `1.5px solid #E5E7EB`, borderRadius: 14, padding: "14px 16px", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 14, boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}
            >
              <div style={{ flexShrink: 0 }}>
                <MachineIcon type={cat.image} size={48} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: "#1A1208", marginBottom: 2 }}>{info.name}</div>
                <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 4 }}>{info.desc}</div>
                <div style={{ fontSize: 11, color: "#6B7280" }}>{info.use}</div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#FF6B00" }}>{cat.rate}</div>
                <div style={{ fontSize: 10, color: "#9CA3AF", marginTop: 2 }}>→</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { MACHINE_CATEGORIES };
