import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

const qtyBtn = {
  padding: "5px 12px",
  background: "#eee",
  border: "none",
  cursor: "pointer",
  fontSize: 18,
  borderRadius: 5,
};

const buyNowBtn = {
  padding: "10px 25px",
  background: "#F43399",
  border: "none",
  color: "white",
  fontSize: 16,
  borderRadius: 6,
  cursor: "pointer",
  fontWeight: 600,
  width: "140px",
};

const removeBtn = {
  padding: "10px 25px",
  background: "#ff4d6d",
  border: "none",
  color: "white",
  fontSize: 16,
  borderRadius: 6,
  cursor: "pointer",
  width: "140px",
};

const Cart = () => {
  const items = useSelector((state) => state.cart?.items || []);
  const totalAmount = useSelector((state) => state.cart?.totalAmount || 0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (items.length === 0)
    return (
      <h2
        style={{
          padding: 40,
          textAlign: "center",
          fontSize: 28,
          color: "#555",
        }}
      >
        🛒 Your cart is empty
      </h2>
    );

  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: 900,
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ fontSize: 32, marginBottom: 25, color: "#F43399" }}>
        My Cart
      </h2>

      {/* CART ITEMS */}
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
            padding: 20,
            marginBottom: 15,
            borderRadius: 10,
            border: "1px solid #eee",
            background: "white",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          {/* Image */}
          <img
            src={item.thumbnail}
            alt={item.title}
            style={{
              height: 100,
              width: 100,
              objectFit: "cover",
              borderRadius: 8,
            }}
          />

          {/* Product Info */}
          <div style={{ flexGrow: 1 }}>
            <h3 style={{ margin: "0 0 8px 0" }}>{item.title}</h3>
            <p style={{ fontSize: 18, fontWeight: 600, color: "#F43399" }}>
              ₹ {item.price}
            </p>

            {/* Quantity */}
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <button
                onClick={() => dispatch(decreaseQty(item.id))}
                style={qtyBtn}
              >
                -
              </button>

              <span style={{ fontSize: 18, fontWeight: 600 }}>{item.qty}</span>

              <button
                onClick={() => dispatch(increaseQty(item.id))}
                style={qtyBtn}
              >
                +
              </button>
            </div>
          </div>

          {/* BUTTONS BLOCK */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              alignItems: "flex-end",
            }}
          >
            {/* BUY NOW */}
            <button
              style={buyNowBtn}
              onMouseOver={(e) => (e.target.style.background = "#d1267f")}
              onMouseOut={(e) => (e.target.style.background = "#F43399")}
              onClick={() => {
                dispatch(clearCart());
                navigate("/order-success");
              }}
            >
              Buy Now
            </button>

            {/* REMOVE */}
            <button
              style={removeBtn}
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* TOTAL */}
      <div
        style={{
          marginTop: 30,
          padding: 20,
          background: "#fff0f8",
          borderRadius: 10,
          border: "1px solid #F9C4DD",
        }}
      >
        <h2 style={{ fontSize: 26, margin: 0, color: "#F43399" }}>
          Total Amount: ₹ {totalAmount.toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
