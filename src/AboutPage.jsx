// ─── ABOUT PAGE — KhudaiWala ──────────────────────────────────────────────────
// Mission · Vision · Values · Leadership · Stats

const C = {
  orange: "#FF6B00", orangeLight: "#FF8C38", orangeDim: "#FFF0E6",
  earth: "#1A1208", earthMid: "#2D2010", soil: "#5C3D11",
  green: "#16A34A", greenLight: "#DCFCE7",
  gray50: "#F9FAFB", gray100: "#F3F4F6", gray200: "#E5E7EB",
  gray400: "#9CA3AF", gray600: "#4B5563", white: "#FFFFFF",
};

const CONTENT = {
  en: {
    // Header
    badge: "Our Story",
    heroTitle: "We Started With One Question",
    heroQ: "\"Why does a JCB owner in Godhra have no way to find work digitally — while his machine sits idle?\"",
    heroSub: "KhudaiWala was born to answer that. We are building India's largest digital marketplace for earth-moving equipment — not for corporates, but for the 80 lakh small machine owners, operators, mechanics, and contractors who power India's construction industry from the ground up.",

    // Mission
    missionBadge: "Our Mission",
    missionTitle: "Digitize the Last Mile of India's Construction Economy",
    missionText: "India builds the fastest of any country on earth — airports, highways, metros, and millions of homes. But the machines doing this work are owned by small operators with zero digital presence. They find work through phone calls, middlemen, and word of mouth. Payments are cash. Verification is trust by association.\n\nKhudaiWala exists to change that — permanently. Our mission is to bring every JCB owner, every excavator operator, every diesel mechanic and every contractor onto one verified, transparent, multilingual digital platform. Not just for metros. For Godhra, Meerut, Warangal, and every Tier 2 and Tier 3 city where India's real construction happens.",
    missionDiff: "What makes our mission different from competitors: We are not building for the organized 5%. We are building for the unorganized 95% — in their language, on their smartphone, at their level of digital literacy.",

    // Vision
    visionBadge: "Our Vision",
    visionTitle: "To Be the Operating System of India's Earth-Moving Industry",
    visionText: "Every industry has a digital backbone — hotels have MakeMyTrip, taxis have Ola, freelancers have Upwork. India's ₹4,000 crore earth-moving equipment rental market has no such backbone. We intend to build it.\n\nBy 2028, KhudaiWala will be the platform where every stakeholder in India's earth-moving ecosystem — owner, operator, mechanic, hirer — begins and ends their workday. Where IoT data from every machine creates India's first real-time construction equipment intelligence layer. Where a JCB owner in Lucknow and a builder in Surat can transact with full trust, full transparency, and zero middlemen.",
    visionAmbition: "Our 3-year ambition: 5 lakh registered users · ₹35 crore ARR · Present in 500+ cities · India's #1 earth-mover marketplace",

    // Values
    valuesBadge: "Our Values",
    valuesTitle: "What Drives Every Decision We Make",
    valuesSub: "We built KhudaiWala on four principles that are non-negotiable — in product, in operations, and in how we treat every user.",
    values: [
      {
        icon: "🤝",
        title: "Grassroots First",
        desc: "Every feature we build is designed for a JCB owner who may not have gone to college, but knows his machine better than any engineer. Simplicity is not a compromise — it is our highest standard."
      },
      {
        icon: "🔒",
        title: "Verified Trust",
        desc: "In an unorganized market, trust is the rarest commodity. Every machine, every owner, every mechanic on KhudaiWala is manually verified. We would rather have fewer listings than unverified ones."
      },
      {
        icon: "💰",
        title: "Fair Economics",
        desc: "The middleman has taken 15-20% from machine owners for decades. Our 5% platform fee is deliberate — owners keep more, hirers pay less, and the platform sustains itself on volume, not extraction."
      },
      {
        icon: "🌐",
        title: "Bharat-First Language",
        desc: "English is not India's language of construction. Hindi, Gujarati, and regional languages are. We built our platform trilingual from Day 1 — not as an afterthought, but as the foundation."
      },
    ],

    // Stats
    statsTitle: "KhudaiWala by the Numbers",
    stats: [
      { icon: "🚜", number: "7-10 Lakh+", label: "Active Machines in India We're Targeting" },
      { icon: "📍", number: "500+", label: "Cities Across India" },
      { icon: "👷", number: "20 Lakh+", label: "Operator Shortage by 2030" },
      { icon: "🏗️", number: "₹4,000 Cr+", label: "Annual Rental Market Size" },
      { icon: "📱", number: "95%+", label: "Market Currently Undigitized" },
      { icon: "⭐", number: "5%", label: "Fair Platform Fee — No Hidden Charges" },
    ],

    // Leadership
    leadershipBadge: "Leadership",
    leadershipTitle: "Built by Someone Who Knows the Ground",
    leadershipSub: "KhudaiWala is not built by people who read about construction in a boardroom. It is built by someone who has stood on construction sites and seen this problem firsthand.",
    leaders: [
      {
        name: "Indrajitsinh Solanki",
        title: "Founder & CEO",
        location: "Gujarat",
        exp: "Business & Operations",
        bio: "Indrajit founded KhudaiWala with a clear-eyed understanding of what India's unorganized construction equipment market needs: not a polished corporate app, but a practical, vernacular, trust-first marketplace. Operating under Surplus Alloys, he brings the entrepreneur's instinct for solving real problems for real people — starting with the JCB owners and contractors of India who have been underserved by every digital platform that came before.",
        badges: ["Solo Founder", "Gujarat-Based", "GST Registered", "Construction Market Expert"],
        initial: "A",
      }
    ],

    // Why different
    diffBadge: "Why We're Different",
    diffTitle: "KhudaiWala vs Every Other Platform",
    diffs: [
      { them: "Built for organized large fleet companies", us: "Built for individual owners with 1–5 machines" },
      { them: "English-only interface", us: "Hindi + Gujarati + English from Day 1" },
      { them: "Focus on metros (Mumbai, Delhi, Bengaluru)", us: "Focus on Tier 2/3 cities first (Godhra, Meerut, Warangal)" },
      { them: "15-20% commission to middlemen", us: "5% transparent platform fee, paid to platform" },
      { them: "No mechanic network", us: "Verified mechanic linked to every machine" },
      { them: "No IoT tracking for small owners", us: "Free IoT GPS device for every listed machine" },
      { them: "Payments settled in weeks", us: "Owner settlement within 24-48 hours" },
    ],

    // CTA
    ctaTitle: "Join the Movement",
    ctaSub: "Whether you own a JCB in Surat or build roads in Lucknow — KhudaiWala is being built for you.",
    ctaBtn: "Register Free Today →",
  },

  hi: {
    badge: "हमारी कहानी",
    heroTitle: "हमने एक सवाल से शुरुआत की",
    heroQ: "\"गोधरा में एक JCB मालिक के पास डिजिटल तरीके से काम खोजने का कोई रास्ता क्यों नहीं — जबकि उसकी मशीन खाली खड़ी है?\"",
    heroSub: "KhudaiWala इसी सवाल का जवाब देने के लिए बना है। हम भारत का सबसे बड़ा अर्थमूवर मार्केटप्लेस बना रहे हैं — कॉर्पोरेट के लिए नहीं, बल्कि 80 लाख छोटे मशीन मालिकों, ऑपरेटरों, मैकेनिकों और ठेकेदारों के लिए।",
    missionBadge: "हमारा मिशन",
    missionTitle: "भारत की निर्माण अर्थव्यवस्था के आखिरी छोर को डिजिटल करना",
    missionText: "भारत दुनिया में सबसे तेज़ निर्माण करता है। लेकिन यह काम करने वाली मशीनें छोटे ऑपरेटरों के पास हैं जिनकी कोई डिजिटल उपस्थिति नहीं है। वे काम फोन, बिचौलियों और मुँह-ज़बानी से खोजते हैं।\n\nKhudaiWala इसे हमेशा के लिए बदलने के लिए है — हर JCB मालिक, हर ऑपरेटर, हर मैकेनिक और हर ठेकेदार को एक verified, पारदर्शी, बहुभाषी डिजिटल प्लेटफॉर्म पर लाना।",
    missionDiff: "हमारा मिशन अलग क्यों है: हम संगठित 5% के लिए नहीं बना रहे। हम असंगठित 95% के लिए बना रहे हैं — उनकी भाषा में, उनके स्मार्टफोन पर।",
    visionBadge: "हमारा विज़न",
    visionTitle: "भारत के अर्थमूवर उद्योग का ऑपरेटिंग सिस्टम बनना",
    visionText: "हर उद्योग का एक डिजिटल बैकबोन होता है — होटल के लिए MakeMyTrip, टैक्सी के लिए Ola। भारत के ₹4,000 करोड़ के अर्थमूवर किराया बाज़ार का कोई ऐसा प्लेटफॉर्म नहीं है। हम उसे बनाने का इरादा रखते हैं।",
    visionAmbition: "हमारी 3 साल की महत्वाकांक्षा: 5 लाख registered users · ₹35 करोड़ ARR · 500+ शहर · भारत का #1 अर्थमूवर मार्केटप्लेस",
    valuesBadge: "हमारी मूल्य",
    valuesTitle: "हमारे हर फ़ैसले के पीछे क्या है",
    valuesSub: "KhudaiWala चार सिद्धांतों पर बना है जो गैर-समझौतावादी हैं।",
    values: [
      { icon: "🤝", title: "ज़मीनी स्तर पहले", desc: "हर फीचर एक JCB मालिक के लिए बनाया जाता है जो शायद कॉलेज नहीं गया, लेकिन अपनी मशीन किसी भी इंजीनियर से बेहतर जानता है।" },
      { icon: "🔒", title: "सत्यापित भरोसा", desc: "असंगठित बाज़ार में भरोसा सबसे दुर्लभ चीज़ है। KhudaiWala पर हर मशीन, मालिक और मैकेनिक मैन्युअली सत्यापित है।" },
      { icon: "💰", title: "उचित अर्थव्यवस्था", desc: "बिचौलिया दशकों से 15-20% ले रहा है। हमारी 5% platform fee जानबूझकर है — मालिक ज़्यादा कमाते हैं, किराएदार कम देते हैं।" },
      { icon: "🌐", title: "भारत-पहली भाषा", desc: "अंग्रेज़ी निर्माण की भाषा नहीं है। हिंदी, गुजराती और क्षेत्रीय भाषाएं हैं। हमने अपना प्लेटफॉर्म Day 1 से बहुभाषी बनाया।" },
    ],
    statsTitle: "KhudaiWala के आँकड़े",
    stats: [
      { icon: "🚜", number: "7-10 लाख+", label: "भारत में सक्रिय मशीनें (हमारा लक्ष्य)" },
      { icon: "📍", number: "500+", label: "भारत के शहर" },
      { icon: "👷", number: "20 लाख+", label: "2030 तक ऑपरेटर की कमी" },
      { icon: "🏗️", number: "₹4,000 Cr+", label: "वार्षिक किराया बाज़ार का आकार" },
      { icon: "📱", number: "95%+", label: "बाज़ार अभी अनडिजिटाइज़्ड" },
      { icon: "⭐", number: "5%", label: "उचित platform fee — कोई छुपा शुल्क नहीं" },
    ],
    leadershipBadge: "नेतृत्व",
    leadershipTitle: "ज़मीन को जानने वाले ने बनाया",
    leadershipSub: "KhudaiWala बोर्डरूम में नहीं बना। इसे उस व्यक्ति ने बनाया जिसने construction sites पर खड़े होकर यह समस्या देखी है।",
    leaders: [
      {
        name: "Asmitakumari Indrajitsinh Solanki",
        title: "Founder & CEO",
        location: "गोधरा, गुजरात",
        exp: "व्यवसाय एवं संचालन",
        bio: "असमिता ने KhudaiWala इस स्पष्ट समझ के साथ शुरू किया कि भारत के असंगठित निर्माण उपकरण बाज़ार को क्या चाहिए: एक व्यावहारिक, बहुभाषी, भरोसा-पहला मार्केटप्लेस। Surplus Alloys के तहत काम करते हुए, वे गुजरात के JCB मालिकों और ठेकेदारों की असली समस्याओं को हल करने के लिए प्रतिबद्ध हैं।",
        badges: ["Solo Founder", "गुजरात-स्थित", "GST Registered", "निर्माण बाज़ार विशेषज्ञ"],
        initial: "A",
      }
    ],
    diffBadge: "हम अलग क्यों हैं",
    diffTitle: "KhudaiWala बनाम हर दूसरा प्लेटफॉर्म",
    diffs: [
      { them: "बड़े fleet companies के लिए", us: "1-5 मशीन वाले छोटे मालिकों के लिए" },
      { them: "सिर्फ अंग्रेज़ी इंटरफेस", us: "हिंदी + गुजराती + अंग्रेज़ी Day 1 से" },
      { them: "मेट्रो शहरों पर ध्यान", us: "Tier 2/3 शहरों पर पहले ध्यान" },
      { them: "बिचौलियों को 15-20% कमीशन", us: "5% पारदर्शी platform fee" },
      { them: "कोई मैकेनिक नेटवर्क नहीं", us: "हर मशीन से verified मैकेनिक लिंक" },
      { them: "छोटे मालिकों के लिए IoT नहीं", us: "हर listed मशीन को मुफ़्त IoT GPS" },
      { them: "हफ्तों में settlement", us: "24-48 घंटे में मालिक को settlement" },
    ],
    ctaTitle: "इस आंदोलन से जुड़ें",
    ctaSub: "चाहे आप सूरत में JCB मालिक हों या लखनऊ में सड़क बनाते हों — KhudaiWala आपके लिए बना है।",
    ctaBtn: "आज मुफ़्त रजिस्टर करें →",
  },

  gu: {
    badge: "અમારી વાર્તા",
    heroTitle: "અમે એક સવાલથી શરૂ કર્યું",
    heroQ: "\"ગોધરામાં JCB માલિક પાસે ડિજિટલ રીતે કામ શોધવાનો કોઈ રસ્તો કેમ નથી — જ્યારે તેનું મશીન ખાલી ઊભું છે?\"",
    heroSub: "KhudaiWala આ સવાલનો જવાબ આપવા માટે બન્યું. અમે ભારતનું સૌથી મોટું અર્થ-મૂવિંગ ઇક્વિપમેન્ટ માર્કેટ્પ્લેસ બનાવી રહ્યા છીએ — 80 લાખ નાના મશીન માલિકો, ઓપરેટર, મિકેનિક અને ઠેકેદારો માટે.",
    missionBadge: "અમારું મિશન",
    missionTitle: "ભારતની બાંધકામ અર્થવ્યવસ્થાના છેલ્લા ભાગને ડિજિટલ કરવું",
    missionText: "ભારત દુનિયામાં સૌથી ઝડપથી બાંધકામ કરે છે. પરંતુ આ કામ કરનારા મશીનો નાના ઓપરેટરો પાસે છે જેમની ડિજિટલ હાજરી નથી. KhudaiWala આ કાયમ માટે બદલવા માટે છે.",
    missionDiff: "અમારું મિશન અલગ કેમ: અમે સંગઠિત 5% માટે નહીં, અસંગઠિત 95% માટે બનાવી રહ્યા છીએ — તેમની ભાષામાં, તેમના સ્માર્ટફોન પર.",
    visionBadge: "અમારી દ્રષ્ટિ",
    visionTitle: "ભારતના અર્થ-મૂવિંગ ઉદ્યોગનું ઓપરેટિંગ સિસ્ટમ બનવું",
    visionText: "દરેક ઉદ્યોગ પાસે ડિજિટલ બૅકબોન છે — હોટેલ માટે MakeMyTrip, ટૅક્સી માટે Ola. ભારતના ₹4,000 કરોડના અર્થ-મૂવર ભાડા બજારમાં આવો કોઈ પ્લૅટફૉર્મ નથી. અમે તે બનાવવાનો ઇરાદો ધરાવીએ છીએ.",
    visionAmbition: "અમારી 3 વર્ષની મહત્વાકાંક્ષા: 5 લાખ registered users · ₹35 કરોડ ARR · 500+ શહેર · ભારત #1 અર્થ-મૂવર માર્કેટ્પ્લેસ",
    valuesBadge: "અમારી કિંમતો",
    valuesTitle: "અમારા દરેક નિર્ણયની પાછળ શું છે",
    valuesSub: "KhudaiWala ચાર સિદ્ધાંતો પર બન્યું છે જે અટળ છે.",
    values: [
      { icon: "🤝", title: "જમીની સ્તર પ્રથમ", desc: "દરેક ફીચર એ JCB માલિક માટે બનાવ્યું છે જે કૉલેજ ન ગયો હોય, પણ તેનું મશીન કોઈ પણ એન્જિનિયર કરતાં સારી રીતે જાણે છે." },
      { icon: "🔒", title: "ચકાસાયેલ ભરોસો", desc: "અસંગઠિત બજારમાં ભરોસો સૌથી દુર્લભ છે. KhudaiWala પર દરેક મશીન, માલિક અને મિકેનિક manually ચકાસાયેલ છે." },
      { icon: "💰", title: "ઉચિત અર્થશાસ્ત્ર", desc: "દલાલ દાયકાઓથી 15-20% લઈ રહ્યો છે. અમારી 5% platform fee જાણી-જોઈને છે — માલિક વધુ કમાય, ભાડૂત ઓછું ચૂકવે." },
      { icon: "🌐", title: "ભારત-પ્રથમ ભાષા", desc: "અંગ્રેજી બાંધકામની ભાષા નથી. ગુજરાતી, હિન્દી અને પ્રાદેશિક ભાષા છે. અમે Day 1 થી ત્રિભાષી platform બનાવ્યું." },
    ],
    statsTitle: "KhudaiWala ના આંકડા",
    stats: [
      { icon: "🚜", number: "7-10 લાખ+", label: "ભારતમાં સક્રિય મશીનો (અમારો લક્ષ્ય)" },
      { icon: "📍", number: "500+", label: "ભારતના શહેરો" },
      { icon: "👷", number: "20 લાખ+", label: "2030 સુધી ઓપરેટરની ઘટ" },
      { icon: "🏗️", number: "₹4,000 Cr+", label: "વાર્ષિક ભાડા બજારનું કદ" },
      { icon: "📱", number: "95%+", label: "બજાર હજી અનડિજિટાઇઝ્ડ" },
      { icon: "⭐", number: "5%", label: "ઉચિત platform fee — કોઈ છૂપો ચાર્જ નહીં" },
    ],
    leadershipBadge: "નેતૃત્વ",
    leadershipTitle: "જમીન જાણનારે બનાવ્યું",
    leadershipSub: "KhudaiWala boardroom માં નહીં, construction sites પર ઊભા રહીને આ સમસ્યા જોઈ તેણે બનાવ્યું.",
    leaders: [
      {
        name: "Asmitakumari Indrajitsinh Solanki",
        title: "Founder & CEO",
        location: "ગોધરા, ગુજરાત",
        exp: "વ્યવસાય અને સંચાલન",
        bio: "અસ્મિતાએ KhudaiWala ની સ્થાપના ભારતના અસંગઠિત બાંધકામ ઉપકરણ બજારની જરૂરિયાત સ્પષ્ટ સમજ સાથે કરી — ગુજરાતના JCB માલિકો અને ઠેકેદારોની સાચી સમસ્યાઓ ઉકેલવા.",
        badges: ["Solo Founder", "ગુજરાત-સ્થિત", "GST Registered", "બાંધકામ બજાર નિષ્ણાત"],
        initial: "A",
      }
    ],
    diffBadge: "અમે અલગ કેમ",
    diffTitle: "KhudaiWala vs બીજા બધા platforms",
    diffs: [
      { them: "મોટી fleet companies માટે", us: "1-5 મશીન ધરાવતા નાના માલિકો માટે" },
      { them: "ફક્ત અંગ્રેજી interface", us: "ગુજરાતી + હિન્દી + અંગ્રેજી Day 1 થી" },
      { them: "Metro શહેરો પર ધ્યાન", us: "Tier 2/3 શહેરો પર પ્રથમ ધ્યાન" },
      { them: "દલાલોને 15-20% commission", us: "5% પારદર્શક platform fee" },
      { them: "કોઈ mechanic network નહીં", us: "દરેક મશીન સાથે verified mechanic" },
      { them: "નાના માલિકો માટે IoT નહીં", us: "દરેક listed મશીનને free IoT GPS" },
      { them: "અઠવાડિયે settlement", us: "24-48 કલાકમાં માલિકને settlement" },
    ],
    ctaTitle: "આ આંદોલનમાં જોડાઓ",
    ctaSub: "ભલે તમે સુરતમાં JCB માલિક હો અથવા Lucknow માં રોડ બનાવો — KhudaiWala તમારા માટે બન્યું છે.",
    ctaBtn: "આજે મફત રજિસ્ટર કરો →",
  }
};

export function AboutPage({ lang, onBack, onRegister }) {
  const c = CONTENT[lang] || CONTENT.en;

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: C.gray50, minHeight: "100vh" }}>

      {/* Header */}
      <div style={{ background: C.earth, padding: "16px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 520, margin: "0 auto", display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onBack} style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 8, padding: "6px 14px", color: "#fff", cursor: "pointer", fontSize: 13 }}>← KhudaiWala</button>
          <div style={{ fontWeight: 900, fontSize: 16, color: "#fff" }}>Khudai<span style={{ color: C.orange }}>Wala</span></div>
        </div>
      </div>

      <div style={{ maxWidth: 520, margin: "0 auto", padding: "0 16px 80px" }}>

        {/* Hero */}
        <div style={{ background: `linear-gradient(135deg, ${C.earth} 0%, #3D2505 100%)`, borderRadius: 16, padding: 24, margin: "16px 0" }}>
          <span style={{ background: C.orange, color: "#fff", fontSize: 10, fontWeight: 800, borderRadius: 99, padding: "3px 12px", letterSpacing: 1 }}>{c.badge}</span>
          <div style={{ fontWeight: 900, fontSize: 22, color: "#fff", marginTop: 12, marginBottom: 12, lineHeight: 1.2 }}>{c.heroTitle}</div>
          <div style={{ fontSize: 14, color: C.orange, fontStyle: "italic", lineHeight: 1.6, marginBottom: 14, borderLeft: `3px solid ${C.orange}`, paddingLeft: 12 }}>{c.heroQ}</div>
          <div style={{ fontSize: 13, color: "#CBD5E1", lineHeight: 1.7 }}>{c.heroSub}</div>
        </div>

        {/* Mission */}
        <div style={{ background: "#fff", borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <span style={{ background: C.orangeDim, color: C.orange, fontSize: 10, fontWeight: 800, borderRadius: 99, padding: "3px 12px" }}>{c.missionBadge}</span>
          <div style={{ fontWeight: 900, fontSize: 18, color: C.earth, marginTop: 12, marginBottom: 12 }}>{c.missionTitle}</div>
          {c.missionText.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontSize: 13, color: C.gray600, lineHeight: 1.8, marginBottom: 10 }}>{para}</p>
          ))}
          <div style={{ background: C.earth, borderRadius: 10, padding: "12px 16px", marginTop: 12, fontSize: 13, color: C.orange, fontWeight: 700, lineHeight: 1.6 }}>
            💡 {c.missionDiff}
          </div>
        </div>

        {/* Vision */}
        <div style={{ background: C.earth, borderRadius: 16, padding: 20, marginBottom: 16 }}>
          <span style={{ background: "rgba(255,107,0,0.2)", color: C.orange, fontSize: 10, fontWeight: 800, borderRadius: 99, padding: "3px 12px" }}>{c.visionBadge}</span>
          <div style={{ fontWeight: 900, fontSize: 18, color: "#fff", marginTop: 12, marginBottom: 12 }}>{c.visionTitle}</div>
          {c.visionText.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontSize: 13, color: "#CBD5E1", lineHeight: 1.8, marginBottom: 10 }}>{para}</p>
          ))}
          <div style={{ background: "rgba(255,107,0,0.15)", borderRadius: 10, padding: "12px 16px", marginTop: 12, fontSize: 12, color: C.orangeLight, fontWeight: 600, lineHeight: 1.6 }}>
            🎯 {c.visionAmbition}
          </div>
        </div>

        {/* Stats */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 900, fontSize: 18, color: C.earth, marginBottom: 14, textAlign: "center" }}>{c.statsTitle}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            {c.stats.map((s, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "14px 10px", textAlign: "center", boxShadow: "0 1px 8px rgba(0,0,0,0.06)", border: `1px solid ${C.gray200}` }}>
                <div style={{ fontSize: 22, marginBottom: 4 }}>{s.icon}</div>
                <div style={{ fontWeight: 900, fontSize: 15, color: C.orange }}>{s.number}</div>
                <div style={{ fontSize: 9, color: C.gray400, lineHeight: 1.4, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div style={{ background: "#fff", borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <span style={{ background: C.orangeDim, color: C.orange, fontSize: 10, fontWeight: 800, borderRadius: 99, padding: "3px 12px" }}>{c.valuesBadge}</span>
          <div style={{ fontWeight: 900, fontSize: 18, color: C.earth, marginTop: 12, marginBottom: 6 }}>{c.valuesTitle}</div>
          <div style={{ fontSize: 13, color: C.gray400, marginBottom: 16 }}>{c.valuesSub}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {c.values.map((v, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px", background: C.gray50, borderRadius: 12, border: `1px solid ${C.gray200}` }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: C.orangeDim, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>{v.icon}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14, color: C.earth, marginBottom: 4 }}>{v.title}</div>
                  <div style={{ fontSize: 12, color: C.gray600, lineHeight: 1.6 }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Different */}
        <div style={{ background: "#fff", borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <span style={{ background: C.greenLight, color: C.green, fontSize: 10, fontWeight: 800, borderRadius: 99, padding: "3px 12px" }}>{c.diffBadge}</span>
          <div style={{ fontWeight: 900, fontSize: 18, color: C.earth, marginTop: 12, marginBottom: 14 }}>{c.diffTitle}</div>
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <div style={{ flex: 1, background: "#FEE2E2", borderRadius: 8, padding: "6px 10px", fontSize: 10, fontWeight: 700, color: "#DC2626", textAlign: "center" }}>Others</div>
            <div style={{ flex: 1, background: C.greenLight, borderRadius: 8, padding: "6px 10px", fontSize: 10, fontWeight: 700, color: C.green, textAlign: "center" }}>KhudaiWala</div>
          </div>
          {c.diffs.map((d, i) => (
            <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              <div style={{ flex: 1, background: C.gray50, borderRadius: 8, padding: "10px 12px", fontSize: 11, color: C.gray600, border: "1px solid #FEE2E2" }}>❌ {d.them}</div>
              <div style={{ flex: 1, background: C.greenLight, borderRadius: 8, padding: "10px 12px", fontSize: 11, color: "#166534", fontWeight: 600, border: `1px solid ${C.green}` }}>✅ {d.us}</div>
            </div>
          ))}
        </div>

        {/* Leadership */}
        <div style={{ background: "#fff", borderRadius: 16, padding: 20, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <span style={{ background: "#DBEAFE", color: "#1D4ED8", fontSize: 10, fontWeight: 800, borderRadius: 99, padding: "3px 12px" }}>{c.leadershipBadge}</span>
          <div style={{ fontWeight: 900, fontSize: 18, color: C.earth, marginTop: 12, marginBottom: 6 }}>{c.leadershipTitle}</div>
          <div style={{ fontSize: 13, color: C.gray400, marginBottom: 16 }}>{c.leadershipSub}</div>
          {c.leaders.map((leader, i) => (
            <div key={i} style={{ background: C.gray50, borderRadius: 14, padding: 18, border: `1px solid ${C.gray200}` }}>
              <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 14 }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: `linear-gradient(135deg, ${C.orange}, ${C.orangeLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 900, color: "#fff", flexShrink: 0 }}>
                  {leader.initial}
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: 16, color: C.earth }}>{leader.name}</div>
                  <div style={{ fontSize: 12, color: C.orange, fontWeight: 700 }}>{leader.title}</div>
                  <div style={{ fontSize: 11, color: C.gray400 }}>📍 {leader.location} · {leader.exp}</div>
                </div>
              </div>
              <div style={{ fontSize: 13, color: C.gray600, lineHeight: 1.7, marginBottom: 12 }}>{leader.bio}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {leader.badges.map((b) => (
                  <span key={b} style={{ background: C.orangeDim, color: C.soil, fontSize: 10, fontWeight: 700, borderRadius: 99, padding: "3px 10px" }}>{b}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(135deg, ${C.earth}, #3D2505)`, borderRadius: 16, padding: 24, textAlign: "center" }}>
          <div style={{ fontWeight: 900, fontSize: 20, color: "#fff", marginBottom: 8 }}>{c.ctaTitle}</div>
          <div style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 20, lineHeight: 1.6 }}>{c.ctaSub}</div>
          <button onClick={onRegister} style={{ background: C.orange, color: "#fff", border: "none", borderRadius: 12, padding: "14px 32px", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
            {c.ctaBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
