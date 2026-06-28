// ─── LEGAL PAGES — Privacy Policy + Terms & Conditions ───────────────────────
// KhudaiWala · A product of Surplus Alloys · Godhra, Gujarat

const C = {
  orange: "#FF6B00", orangeDim: "#FFF0E6", earth: "#1A1208",
  gray50: "#F9FAFB", gray100: "#F3F4F6", gray200: "#E5E7EB",
  gray400: "#9CA3AF", gray600: "#4B5563", gray800: "#1F2937", white: "#FFFFFF",
};

function LegalHeader({ title, updated, onBack }) {
  return (
    <div style={{ background: C.earth, padding: "20px 16px 24px", marginBottom: 0 }}>
      <button onClick={onBack} style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 8, padding: "6px 14px", color: "#fff", cursor: "pointer", fontSize: 13, marginBottom: 16 }}>← KhudaiWala</button>
      <div style={{ fontWeight: 900, fontSize: 22, color: "#fff", marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 12, color: "#9CA3AF" }}>Last updated: {updated}</div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ fontWeight: 800, fontSize: 16, color: C.earth, marginBottom: 10, paddingBottom: 8, borderBottom: `2px solid ${C.orange}`, display: "inline-block" }}>{title}</div>
      <div style={{ fontSize: 13, color: C.gray600, lineHeight: 1.8 }}>{children}</div>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul style={{ paddingLeft: 18, margin: "8px 0" }}>
      {items.map((item, i) => <li key={i} style={{ marginBottom: 6, fontSize: 13, color: C.gray600, lineHeight: 1.7 }}>{item}</li>)}
    </ul>
  );
}

function InfoBox({ label, value }) {
  return (
    <div style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: `1px solid ${C.gray100}` }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: C.earth, minWidth: 140 }}>{label}</div>
      <div style={{ fontSize: 13, color: C.gray600, flex: 1 }}>{value}</div>
    </div>
  );
}

export function PrivacyPolicy({ onBack }) {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: C.gray50, minHeight: "100vh" }}>
      <LegalHeader title="Privacy Policy" updated="June 28, 2026" onBack={onBack} />
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "24px 16px 60px" }}>

        <div style={{ background: C.orangeDim, borderRadius: 12, padding: 16, marginBottom: 24, fontSize: 13, color: "#5C3D11", lineHeight: 1.7 }}>
          This Privacy Policy describes how <strong>KhudaiWala</strong> (a product of <strong>Surplus Alloys</strong>, GST: 24IZEPS7481C1Z1, Godhra, Gujarat) collects, uses, and protects your information when you use our platform at <strong>khudaiwala.online</strong>.
        </div>

        <Section title="1. Who We Are">
          <InfoBox label="Platform Name" value="KhudaiWala" />
          <InfoBox label="Legal Entity" value="Surplus Alloys (Proprietorship)" />
          <InfoBox label="Proprietor" value="Asmitakumari Indrajitsinh Solanki" />
          <InfoBox label="GST Number" value="24IZEPS7481C1Z1" />
          <InfoBox label="Address" value="33, Satkaival Society, Nr FCI Sampa Road, Bhuravav, Godhra, Panch Mahals, Gujarat 389001" />
          <InfoBox label="Website" value="khudaiwala.online" />
          <InfoBox label="Email" value="support@khudaiwala.online" />
        </Section>

        <Section title="2. Information We Collect">
          <p style={{ marginBottom: 10 }}><strong>Personal Information:</strong></p>
          <BulletList items={[
            "Name, mobile number, WhatsApp number",
            "City, state, and location details",
            "Machine registration number (RC) for owners",
            "Bank account details for payment settlements",
            "Profile photo (optional)",
          ]} />
          <p style={{ marginBottom: 10, marginTop: 12 }}><strong>Machine & Business Information:</strong></p>
          <BulletList items={[
            "Machine type, model, year, and specifications",
            "Hourly/daily rental rates",
            "Availability status and location",
            "IoT device data: fuel level, engine hours, GPS coordinates",
          ]} />
          <p style={{ marginBottom: 10, marginTop: 12 }}><strong>Automatically Collected:</strong></p>
          <BulletList items={[
            "Device type, browser, operating system",
            "IP address and approximate location",
            "Pages visited and features used",
            "Booking and transaction history",
          ]} />
        </Section>

        <Section title="3. How We Use Your Information">
          <BulletList items={[
            "To verify your identity and machine ownership before listing",
            "To facilitate bookings between machine owners and hirers",
            "To process payments via Razorpay (UPI, cards, net banking)",
            "To send booking confirmations and alerts via WhatsApp/SMS",
            "To display your machine listing to potential hirers",
            "To connect you with verified mechanics when needed",
            "To improve our platform, detect fraud, and ensure safety",
            "To send important service updates (not spam)",
          ]} />
        </Section>

        <Section title="4. Information Sharing">
          <p style={{ marginBottom: 10 }}>We share your information only in these situations:</p>
          <BulletList items={[
            "With Razorpay for payment processing (they are PCI-DSS compliant)",
            "With MSG91 for OTP verification via SMS",
            "Machine owner's name and contact with hirers after confirmed booking",
            "When required by Indian law, courts, or government authorities",
            "In case of fraud investigation or platform security",
          ]} />
          <p style={{ marginTop: 12, fontWeight: 700, color: C.earth }}>We never sell your personal information to any third party for marketing purposes.</p>
        </Section>

        <Section title="5. Data Security">
          <BulletList items={[
            "All data is stored on Supabase (PostgreSQL) with Row Level Security — each user can only access their own data",
            "All API connections use HTTPS/SSL encryption",
            "Payments are processed by Razorpay — we never store card numbers or CVVs",
            "OTP verification via MSG91 ensures only real phone numbers register",
            "Bank account details are stored encrypted and used only for settlements",
          ]} />
        </Section>

        <Section title="6. Data Retention">
          <InfoBox label="Active User Data" value="As long as your account is active" />
          <InfoBox label="Transaction Records" value="7 years (as per Indian tax law)" />
          <InfoBox label="Booking History" value="3 years after last booking" />
          <InfoBox label="Deleted Accounts" value="Data removed within 30 days of deletion request" />
        </Section>

        <Section title="7. Your Rights">
          <BulletList items={[
            "Right to access: Request a copy of all data we hold about you",
            "Right to correction: Update or correct your profile information anytime in the app",
            "Right to deletion: Request deletion of your account and associated data",
            "Right to opt-out: Unsubscribe from promotional WhatsApp messages anytime",
            "Right to portability: Request your data in a readable format",
          ]} />
          <p style={{ marginTop: 10 }}>To exercise any right, email: <strong>support@khudaiwala.online</strong></p>
        </Section>

        <Section title="8. Cookies">
          <BulletList items={[
            "Essential cookies: Required for login sessions and security",
            "Preference cookies: Remember your language setting (Hindi/Gujarati/English)",
            "Analytics: We use basic analytics to understand usage patterns",
            "No advertising cookies or cross-site tracking",
          ]} />
        </Section>

        <Section title="9. Children's Privacy">
          KhudaiWala is intended for adults (18+) engaged in business activities. We do not knowingly collect data from anyone under 18 years of age. If we discover an underage user, we will immediately delete their data.
        </Section>

        <Section title="10. Changes to This Policy">
          We may update this Privacy Policy as our platform grows. We will notify registered users via WhatsApp or SMS for any material changes. The updated date at the top of this page will always reflect the latest version.
        </Section>

        <Section title="11. Grievance Officer (Indian IT Act Requirement)">
          <InfoBox label="Name" value="Asmitakumari Indrajitsinh Solanki" />
          <InfoBox label="Designation" value="Proprietor / Grievance Officer" />
          <InfoBox label="Email" value="support@khudaiwala.online" />
          <InfoBox label="Address" value="33, Satkaival Society, Godhra, Gujarat 389001" />
          <InfoBox label="Response Time" value="Within 30 days of complaint" />
        </Section>

        <div style={{ background: C.earth, borderRadius: 14, padding: 20, textAlign: "center", marginTop: 32 }}>
          <div style={{ fontWeight: 900, fontSize: 16, color: "#fff", marginBottom: 8 }}>Questions about Privacy?</div>
          <div style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 4 }}>Email us at support@khudaiwala.online</div>
          <div style={{ fontSize: 11, color: "#6B7280" }}>We respond within 48 hours</div>
        </div>
      </div>
    </div>
  );
}

export function TermsConditions({ onBack }) {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: C.gray50, minHeight: "100vh" }}>
      <LegalHeader title="Terms & Conditions" updated="June 28, 2026" onBack={onBack} />
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "24px 16px 60px" }}>

        <div style={{ background: C.orangeDim, borderRadius: 12, padding: 16, marginBottom: 24, fontSize: 13, color: "#5C3D11", lineHeight: 1.7 }}>
          These Terms & Conditions constitute a legally binding agreement between you and <strong>Surplus Alloys</strong> (operating as <strong>KhudaiWala</strong>). By using khudaiwala.online, you agree to these terms. Please read carefully.
        </div>

        <Section title="1. About KhudaiWala">
          KhudaiWala is a digital marketplace platform that connects earth-moving machine owners, operators, mechanics, and contractors/builders. We facilitate bookings and payments but are not directly responsible for the machines or operators listed on the platform. We act as an intermediary marketplace.
        </Section>

        <Section title="2. Eligibility">
          <BulletList items={[
            "You must be 18 years or older to use KhudaiWala",
            "You must be legally capable of entering into a binding contract under Indian law",
            "For machine listing: you must be the owner or authorized representative of the equipment",
            "Businesses must be duly registered under applicable Indian laws",
          ]} />
        </Section>

        <Section title="3. Registration & Account">
          <BulletList items={[
            "You must provide accurate and complete information during registration",
            "Your mobile number is verified via OTP — one account per mobile number",
            "Machine owners must provide valid machine registration number (RC) for verification",
            "You are responsible for maintaining the security of your account",
            "KhudaiWala reserves the right to suspend or remove any account found providing false information",
          ]} />
        </Section>

        <Section title="4. Machine Listing (For Owners)">
          <BulletList items={[
            "Listing is completely free — no upfront charges",
            "KhudaiWala charges a 5% platform fee only on successful, completed bookings",
            "All listed machines undergo manual verification within 24 hours before going live",
            "Machine details (type, rate, availability) must be accurate and updated regularly",
            "Owners must honor confirmed bookings — repeated cancellations may lead to suspension",
            "The free IoT GPS tracker provided by KhudaiWala remains property of KhudaiWala",
          ]} />
        </Section>

        <Section title="5. Booking & Hiring (For Contractors/Builders)">
          <BulletList items={[
            "Bookings are confirmed only after payment is processed through our platform",
            "The machine owner will contact you within 30 minutes of booking confirmation",
            "You must provide accurate work location, date, and duration",
            "The hirer is responsible for site safety and obtaining necessary permissions",
            "Fuel costs are separate and to be arranged by the hirer unless stated otherwise",
          ]} />
        </Section>

        <Section title="6. Payment Terms">
          <InfoBox label="Platform Fee" value="5% of booking value (deducted from owner payout)" />
          <InfoBox label="Payment Methods" value="UPI, Debit/Credit Cards, Net Banking via Razorpay" />
          <InfoBox label="Owner Settlement" value="Within 24-48 hours after job completion" />
          <InfoBox label="Security" value="Payments held in escrow until job is confirmed complete" />
          <p style={{ marginTop: 12 }}><strong>GST:</strong> Applicable taxes will be added as per Indian GST law. Our GSTIN: 24IZEPS7481C1Z1.</p>
        </Section>

        <Section title="7. Cancellation & Refund Policy">
          <InfoBox label="7+ days before job" value="Full refund" />
          <InfoBox label="3–7 days before job" value="50% refund" />
          <InfoBox label="Less than 3 days" value="No refund (except machine failure)" />
          <InfoBox label="Machine breakdown" value="Full refund or replacement arranged" />
          <InfoBox label="Owner cancels" value="Full refund to hirer + owner account flagged" />
          <p style={{ marginTop: 10 }}>Refunds are processed within 5-7 business days to the original payment method.</p>
        </Section>

        <Section title="8. Operator Responsibilities">
          <BulletList items={[
            "All operators listed on KhudaiWala must be trained and experienced in operating the listed machine type",
            "Operators must follow all site safety protocols and wear appropriate safety gear",
            "KhudaiWala is not liable for accidents caused by operator negligence on site",
            "Operators must not operate equipment under the influence of alcohol or drugs",
          ]} />
        </Section>

        <Section title="9. Mechanic Services">
          <BulletList items={[
            "Mechanics listed on KhudaiWala are independent professionals, not KhudaiWala employees",
            "Emergency mechanic response is best-effort — target 2 hours, not guaranteed",
            "Mechanic charges are separate from machine rental charges",
            "KhudaiWala is not liable for repair quality — it is between the mechanic and owner",
          ]} />
        </Section>

        <Section title="10. IoT Device Terms">
          <BulletList items={[
            "The free IoT GPS tracker provided remains the property of KhudaiWala",
            "The device must be returned if the owner deregisters from the platform",
            "Tampering with or removing the IoT device will result in account suspension",
            "GPS data is used only for fleet tracking and is not shared with third parties",
          ]} />
        </Section>

        <Section title="11. Prohibited Activities">
          <BulletList items={[
            "Providing false information about yourself or your machines",
            "Using KhudaiWala for any illegal purpose under Indian law",
            "Attempting to circumvent the platform by doing off-platform deals after initial contact",
            "Harassing or threatening other users of the platform",
            "Listing machines you don't own or are not authorized to rent",
            "Creating multiple accounts to manipulate ratings or bookings",
          ]} />
        </Section>

        <Section title="12. Limitation of Liability">
          KhudaiWala is a marketplace intermediary. We are not liable for:
          <BulletList items={[
            "Accidents, injuries, or damage on construction sites",
            "Machine breakdowns during a rental period",
            "Disputes between machine owners and hirers",
            "Losses due to operator error or negligence",
            "Force majeure events (floods, strikes, pandemics, government orders)",
          ]} />
          Our maximum liability to any user is limited to the platform fee collected on that specific booking.
        </Section>

        <Section title="13. Intellectual Property">
          <BulletList items={[
            "The KhudaiWala brand, logo, app design, and content are owned by Surplus Alloys",
            "You may not copy, reproduce, or use our brand without written permission",
            "By listing on KhudaiWala, you grant us a non-exclusive license to display your machine photos",
          ]} />
        </Section>

        <Section title="14. Governing Law & Dispute Resolution">
          <InfoBox label="Governing Law" value="Laws of India" />
          <InfoBox label="Jurisdiction" value="Courts of Godhra, Panch Mahals, Gujarat, India" />
          <InfoBox label="First Step" value="Email support@khudaiwala.online — 30-day resolution attempt" />
          <InfoBox label="Arbitration" value="If unresolved, disputes go to arbitration under Indian Arbitration Act" />
        </Section>

        <Section title="15. Amendments">
          KhudaiWala reserves the right to modify these Terms at any time. Material changes will be notified to registered users via WhatsApp or SMS with 30 days notice. Continued use of the platform after changes constitutes acceptance.
        </Section>

        <Section title="16. Contact & Grievance Officer">
          <InfoBox label="Platform" value="KhudaiWala (Surplus Alloys)" />
          <InfoBox label="Grievance Officer" value="Asmitakumari Indrajitsinh Solanki" />
          <InfoBox label="Email" value="support@khudaiwala.online" />
          <InfoBox label="Address" value="33, Satkaival Society, Godhra, Gujarat 389001" />
          <InfoBox label="Phone" value="+91 (listed on platform)" />
          <InfoBox label="Response Time" value="Within 30 days as required under Indian IT Act" />
        </Section>

        <div style={{ background: C.earth, borderRadius: 14, padding: 20, textAlign: "center", marginTop: 32 }}>
          <div style={{ fontWeight: 900, fontSize: 16, color: "#fff", marginBottom: 8 }}>Legal Questions?</div>
          <div style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 4 }}>Email us at support@khudaiwala.online</div>
          <div style={{ fontSize: 11, color: "#6B7280" }}>By using KhudaiWala, you agree to these Terms & Conditions</div>
        </div>
      </div>
    </div>
  );
}
