import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    showPass: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      return toast.error("Please fill all fields!");
    }

    // Get user from localStorage
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      return toast.error("No user found! Please register first.");
    }

    if (
      form.email === savedUser.email &&
      form.password === savedUser.password
    ) {
      toast.success("Login Successful 🎉");

      // Save login status
      localStorage.setItem("loggedIn", true);

      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff5fb",
        padding: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 380,
          background: "white",
          padding: 30,
          borderRadius: 10,
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
          Login
        </h2>

        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column", gap: 18 }}
        >
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            style={{
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ccc",
              fontSize: 16,
            }}
          />

          <div style={{ position: "relative" }}>
            <input
              type={form.showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              style={{
                padding: 12,
                borderRadius: 8,
                border: "1px solid #ccc",
                fontSize: 16,
                width: "100%",
              }}
            />

            <span
              onClick={() =>
                setForm({ ...form, showPass: !form.showPass })
              }
              style={{
                position: "absolute",
                right: 12,
                top: 12,
                cursor: "pointer",
                color: "#555",
              }}
            >
              {form.showPass ? "👁️" : "👁️‍🗨️"}
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
            Login
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: 15 }}>
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            style={{ color: "#F43399", cursor: "pointer" }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
