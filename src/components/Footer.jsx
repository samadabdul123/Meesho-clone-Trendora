import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#f8f8f8",
        marginTop: 50,
        padding: "50px 40px",
        borderTop: "1px solid #ddd",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 40,
        }}
      >
        {/* COLUMN 1 */}
        <div>
          <h3 style={{ marginBottom: 15 }}>Customer Support</h3>
          <p>📞 +91 9876543210</p>
          <p>✉ support@ecommerce.com</p>
          <p>🕒 Mon – Sat: 9:00AM – 7:00PM</p>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 style={{ marginBottom: 15 }}>Our Policies</h3>
          <p>Become a Seller</p>
          <p>Careers</p>
          <p>Terms & Conditions</p>
          <p>Return & Refund Policy</p>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 style={{ marginBottom: 15 }}>Download App</h3>
          <img
  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
  alt="Play Store"
  style={{ width: 160, marginBottom: 12, cursor: "pointer" }}
/>

         <img
  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
  alt="App Store"
  style={{ width: 160, cursor: "pointer" }}
/>

        </div>

        {/* COLUMN 4 */}
        <div>
          <h3 style={{ marginBottom: 15 }}>Follow Us</h3>
          <div style={{ fontSize: 26, display: "flex", gap: 18 }}>
            <FaInstagram style={{ cursor: "pointer" }} />
            <FaYoutube style={{ cursor: "pointer" }} />
            <FaFacebook style={{ cursor: "pointer" }} />
            <FaTwitter style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div
        style={{
          marginTop: 40,
          textAlign: "center",
          paddingTop: 20,
          borderTop: "1px solid #ddd",
          fontSize: 15,
          color: "#444",
        }}
      >
        © {new Date().getFullYear()} E-Commerce — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
