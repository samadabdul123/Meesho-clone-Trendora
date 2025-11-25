import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      return toast.error("Please fill all fields!");
    }

    toast.success("Message sent successfully! 🎉");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ fontFamily: "sans-serif", lineHeight: 1.6 }}>

      {/* PAGE HEADER */}
      <section
        style={{
          background: "linear-gradient(135deg, #ff2e93, #ff5dc0)",
          padding: "60px 40px",
          color: "white",
          textAlign: "center",
          borderRadius: "0 0 15px 15px"
        }}
      >
        <h1 style={{ fontSize: 42, marginBottom: 10 }}>Contact Us</h1>
        <p style={{ fontSize: 18 }}>We are here to help you 24/7</p>
      </section>

      {/* CONTACT SECTION */}
      <section
        style={{
          display: "flex",
          gap: 40,
          padding: "50px 40px",
          flexWrap: "wrap",
        }}
      >
        {/* CONTACT FORM */}
        <div style={{ flex: 1, minWidth: 320 }}>
          <h2 style={{ fontSize: 28, marginBottom: 20 }}>Send us a message</h2>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 15,
            }}
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              style={{
                padding: 12,
                fontSize: 16,
                borderRadius: 8,
                border: "1px solid #ccc",
              }}
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              style={{
                padding: 12,
                fontSize: 16,
                borderRadius: 8,
                border: "1px solid #ccc",
              }}
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              style={{
                padding: 12,
                fontSize: 16,
                borderRadius: 8,
                border: "1px solid #ccc",
              }}
            ></textarea>

            <button
              type="submit"
              style={{
                padding: "12px 25px",
                fontSize: 18,
                background: "#F43399",
                border: "none",
                color: "white",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: 600,
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.background = "#d1257e")}
              onMouseOut={(e) => (e.target.style.background = "#F43399")}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* CONTACT INFORMATION */}
        <div
          style={{
            flex: 1,
            minWidth: 320,
            background: "#fff5fb",
            padding: 30,
            borderRadius: 10,
            border: "1px solid #f3d0e7",
          }}
        >
          <h2 style={{ fontSize: 28, marginBottom: 20 }}>Contact Information</h2>

          <p style={{ marginBottom: 15, fontSize: 17 }}>
            📍 <strong>Address:</strong>
            123 Market Street, New Delhi, India
          </p>

          <p style={{ marginBottom: 15, fontSize: 17 }}>
            📞 <strong>Phone:</strong>
            +91 98765 43210
          </p>

          <p style={{ marginBottom: 15, fontSize: 17 }}>
            📧 <strong>Email:</strong>
            support@meesho.com
          </p>

          <p style={{ fontSize: 17 }}>
            🕒 <strong>Working Hours:</strong>
            Mon – Sat: 9:00AM – 8:00PM
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
