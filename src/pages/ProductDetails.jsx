import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchProductById } from "../redux/ProductSlice";
import { addToCart } from "../redux/CartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selectedProduct, selectedLoading, selectedError } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (id) dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (selectedLoading)
    return <h2 style={{ padding: 20 }}>Loading product...</h2>;
  if (selectedError)
    return <h2 style={{ padding: 20 }}>{selectedError}</h2>;
  if (!selectedProduct) return null;

  const { images, thumbnail, title, description, price, category } =
    selectedProduct;

  return (
    <div
      style={{
        display: "flex",
        gap: 40,
        padding: "50px 70px",
        fontFamily: "sans-serif",
      }}
    >
      {/* LEFT IMAGE */}
      <div style={{ flex: 1 }}>
        <img
          src={images?.[0] || thumbnail}
          alt={title}
          style={{
            width: "100%",
            maxWidth: 400,
            objectFit: "cover",
            borderRadius: 8,
            border: "1px solid #eee",
          }}
        />
      </div>

      {/* RIGHT DETAILS */}
      <div style={{ flex: 2 }}>
        <h1 style={{ marginBottom: 10 }}>{title}</h1>

        <p>
          <strong>Category:</strong> {category}
        </p>

        <h2
          style={{
            fontSize: 35,
            fontWeight: "bold",
            color: "#F43399",
            margin: "15px 0",
          }}
        >
          ₹ {price}
        </h2>

        <p style={{ fontSize: 16, marginBottom: 30 }}>{description}</p>

        {/* BUTTONS */}
        <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
          <button
            onClick={() => {
              dispatch(addToCart(selectedProduct));
              toast.success("Added to Cart!");
            }}
            style={{
              padding: "12px 25px",
              background: "#F43399",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            Add to Cart
          </button>

          <button
           onClick={() => navigate("/order-success")}
            style={{
              padding: "12px 25px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontSize: 18,
              fontWeight: 600,
            }}
             onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            Buy Now
          </button>
        </div>

        <Link
          to="/products"
          style={{
            color: "#555",
            textDecoration: "underline",
            fontSize: 16,
          }}
        >
          ← Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
