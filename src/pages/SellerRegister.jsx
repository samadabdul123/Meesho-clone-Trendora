import React, { useState } from "react";
import { toast } from "react-toastify";

const SellerRegister = () => {
  const [form, setForm] = useState({
    name: "",
    shopName: "",
    phone: "",
    email: "",
    gst: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.shopName || !form.phone || !form.email) {
      toast.error("Please fill all fields!");
      return;
    }

    toast.success("Seller Registration Successful! 🎉");
    setForm({ name: "", shopName: "", phone: "", email: "", gst: "" });
  };

  return (
    <div style={{ fontFamily: "sans-serif", lineHeight: 1.6 }}>
      
      {/* HEADER */}
      <section
        style={{
          background: "linear-gradient(135deg, #ff2e93, #ff5dc0)",
          padding: "60px 40px",
          color: "white",
          textAlign: "center",
          borderRadius: "0 0 15px 15px",
        }}
      >
        <h1 style={{ fontSize: 42, marginBottom: 10 }}>Seller Registration</h1>
        <p style={{ fontSize: 18 }}>
          Join lakhs of sellers growing their business online 🚀
        </p>
      </section>

      {/* FORM SECTION */}
      <section
        style={{
          maxWidth: 650,
          margin: "40px auto",
          padding: 30,
          border: "1px solid #eee",
          borderRadius: 12,
          background: "#fff",
        }}
      >
        <h2 style={{ marginBottom: 20, fontSize: 26 }}>Fill your details</h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            style={{
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ccc",
              fontSize: 16,
            }}
          />

          <input
            type="text"
            name="shopName"
            value={form.shopName}
            onChange={handleChange}
            placeholder="Shop / Business Name"
            style={{
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ccc",
              fontSize: 16,
            }}
          />

          <input
            type="number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            style={{
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ccc",
              fontSize: 16,
            }}
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            style={{
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ccc",
              fontSize: 16,
            }}
          />

          <input
            type="text"
            name="gst"
            value={form.gst}
            onChange={handleChange}
            placeholder="GST Number (Optional)"
            style={{
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ccc",
              fontSize: 16,
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px 25px",
              background: "#F43399",
              border: "none",
              color: "white",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 18,
              fontWeight: 600,
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#d1267f")}
            onMouseOut={(e) => (e.target.style.background = "#F43399")}
          >
            Register Now
          </button>
        </form>
      </section>

      {/* WHY SELL WITH US SECTION */}
      <section
        style={{
          textAlign: "center",
          padding: "40px 30px",
          background: "#fff5fb",
          borderRadius: 12,
          margin: "0px 40px 50px 40px"
        }}
      >
        <h2 style={{ fontSize: 30, marginBottom: 25 }}>Why Sell With Us?</h2>

        <div style={{ display: "flex", justifyContent: "center", gap: 50, flexWrap: "wrap" }}>
          <div style={{ width: 260 }}>
            <h3>🚀 Business Growth</h3>
            <p>Grow your business with millions of customers.</p>
          </div>
          <div style={{ width: 260 }}>
            <h3>💰 Low Commission</h3>
            <p>Sell more, earn more — with lowest commission rates.</p>
          </div>
          <div style={{ width: 260 }}>
            <h3>📦 Easy Shipping</h3>
            <p>We handle pickup & delivery across India.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellerRegister;
