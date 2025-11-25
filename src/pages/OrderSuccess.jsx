import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 20,
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ color: "#F43399", fontSize: 40 }}>🎉 Order Placed!</h1>
      <p style={{ fontSize: 20, marginTop: 10 }}>
        Thank you for shopping with us.  
        Your order has been placed successfully.
      </p>

      <Link
        to="/products"
        style={{
          marginTop: 20,
          background: "#F43399",
          padding: "12px 24px",
          borderRadius: 8,
          fontSize: 18,
          color: "white",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Continue Shopping →
      </Link>
    </div>
  );
};

export default OrderSuccess;
