import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
    showPass: false,
    showCPass: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.password || !form.cpassword) {
      return toast.error("Please fill all fields!");
    }

    if (form.password.length < 6) {
      return toast.error("Password must be at least 6 characters!");
    }

    if (form.password !== form.cpassword) {
      return toast.error("Passwords do not match!");
    }

    toast.success("Registration Successful! 🎉");

    setTimeout(() => {
      navigate("/login");
    }, 800);

    setForm({
      name: "",
      email: "",
      phone: "",
      password: "",
      cpassword: "",
      showPass: false,
      showCPass: false,
    });
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        background: "#fff5fb",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "white",
          padding: 30,
          borderRadius: 12,
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: 25,
            color: "#F43399",
            fontSize: 28,
          }}
        >
          Create an Account
        </h2>

        <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: 18 }}>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
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

          {/* Password */}
          <div style={{ position: "relative" }}>
            <input
              type={form.showPass ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              style={{
                padding: 12,
                borderRadius: 8,
                border: "1px solid #ccc",
                fontSize: 16,
                width: "100%",
              }}
            />

            <span
              onClick={() => setForm({ ...form, showPass: !form.showPass })}
              style={{
                position: "absolute",
                right: 12,
                top: 12,
                cursor: "pointer",
                color: "#666",
              }}
            >
              {form.showPass ? "🙈" : "👁️"}
            </span>
          </div>

          {/* Confirm Password */}
          <div style={{ position: "relative" }}>
            <input
              type={form.showCPass ? "text" : "password"}
              name="cpassword"
              value={form.cpassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              style={{
                padding: 12,
                borderRadius: 8,
                border: "1px solid #ccc",
                fontSize: 16,
                width: "100%",
              }}
            />

            <span
              onClick={() => setForm({ ...form, showCPass: !form.showCPass })}
              style={{
                position: "absolute",
                right: 12,
                top: 12,
                cursor: "pointer",
                color: "#666",
              }}
            >
              {form.showCPass ? "🙈" : "👁️"}
            </span>
          </div>

          <button
            type="submit"
            style={{
              padding: "12px",
              background: "#F43399",
              color: "white",
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 18,
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#d1267f")}
            onMouseOut={(e) => (e.target.style.background = "#F43399")}
          >
            Register
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: 15 }}>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ color: "#F43399", cursor: "pointer", fontWeight: 600 }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
