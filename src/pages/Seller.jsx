import React from 'react';
import { useNavigate } from 'react-router-dom';

const Seller = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ padding: 50, textAlign: "center" }}>
        <h1>Become a Seller</h1>
        <p style={{ fontSize: 20, marginTop: 15 }}>
          Grow your business with us. Start selling your products online today!
        </p>

        <button
          onClick={() => navigate("/seller-register")}
          style={{
            padding: "12px 25px",
            fontSize: 18,
            marginTop: 20,
            background: "#F43399",
            border: "none",
            color: "white",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Register as Seller
        </button>
      </div>
    </div>
  );
};

export default Seller;
