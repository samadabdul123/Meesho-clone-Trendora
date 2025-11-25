import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/ProductSlice";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/CartSlice";
import { toast } from "react-toastify";
import Kurti from '../assets/images/image.png'
const Home = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const featured = items.slice(0, 6);

  return (
    <div style={{ fontFamily: "sans-serif" }}>

      {/* 💥 OFFER SLIDER (Auto change) */}
      <section style={{ width: "100%", height: "70vh", overflow: "hidden", marginBottom: 40 }}>
        {(() => {
          const images = [
            "https://images.unsplash.com/photo-1475180098004-ca77a66827be",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
            "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
          ];

          const [index, setIndex] = React.useState(0);

          React.useEffect(() => {
            const timer = setTimeout(() => {
              setIndex((prev) => (prev + 1) % images.length);
            }, 2500);
            return () => clearTimeout(timer);
          }, [index]);

          return (
            <div style={{ width: "100%", height: "70vh", position: "relative" }}>
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Offer"
                  style={{
                    width: "100%",
                    height: "70vh",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: i === index ? 1 : 0,
                    transform: i === index ? "scale(1)" : "scale(1.05)",
                    transition: "opacity 1.2s ease-in-out, transform 1.2s ease-in-out",
                  }}
                />
              ))}
            </div>
          );
        })()}
      </section>

      {/* 🔥 HERO SECTION */}
      <section
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1523275335684-37898b6baf30")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          paddingLeft: 70,
          color: "white",
        }}
      >
        <div>
          <h1 style={{ fontSize: 50, fontWeight: "700", marginBottom: 10 }}>
            Latest Styles. Lowest Prices.
          </h1>
          <p style={{ fontSize: 22, marginBottom: 20 }}>
            Shop smart with free delivery & COD available!
          </p>
          <a
            href="/products"
            style={{
              background: "#F43399",
              padding: "12px 28px",
              borderRadius: 6,
              color: "white",
              fontSize: 18,
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Shop Now →
          </a>
        </div>
      </section>

      {/* ⭐ TRUST BADGES */}
      <section style={{ display: "flex", justifyContent: "center", gap: 80, padding: "40px 0" }}>
        <div style={{ textAlign: "center" }}>
          <h2>🚚 Free Delivery</h2>
          <p>No hidden charges ever</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2>💰 Lowest Prices</h2>
          <p>Best price guaranteed</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2>🤝 Cash on Delivery</h2>
          <p>Pay after you receive</p>
        </div>
      </section>

      {/* 🟣 CATEGORY SECTION */}
      <section style={{ padding: "50px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: 36, marginBottom: 30 }}>Shop by Category</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 25,
            padding: "0 40px",
          }}
        >
          {[
            { name: "Women Fashion", img: Kurti },
            { name: "Men Fashion", img: "https://images.unsplash.com/photo-1521334884684-d80222895322" },
            { name: "Electronics", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661" },
            { name: "Home & Kitchen", img: "https://images.unsplash.com/photo-1507668077129-56e32842fceb" },
          ].map((cat, i) => (
            <a
              key={i}
              href="/product"
              style={{
                textDecoration: "none",
                color: "#222",
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: 15,
                cursor: "pointer",
                background: "white",
              }}
            >
              <img
                src={cat.img}
                alt={cat.name}
                style={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
              <h3 style={{ marginTop: 15 }}>{cat.name}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* 🔥 TRENDING PRODUCTS */}
      <section style={{ padding: "45px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: 36, marginBottom: 30 }}>🔥 Trending Products</h2>

        {loading ? (
          <h3>Loading products...</h3>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 25 }}>
            {featured.map((p) => (
              <div
                key={p.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: 8,
                  padding: 15,
                  background: "#fff",
                }}
              >
                <Link to={`/product/${p.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <img src={p.thumbnail} alt={p.title} height={180} style={{ borderRadius: 8 }} />
                  <h3 style={{ marginTop: 15 }}>{p.title.slice(0, 25)}...</h3>
                  <p style={{ fontSize: 20, fontWeight: 600, color: "#F43399" }}>₹ {p.price}</p>
                </Link>

                <button
                  onClick={() => {
                    dispatch(addToCart(p));
                    toast.success("Added to cart!");
                  }}
                  style={{
                    marginTop: 10,
                    padding: "10px 20px",
                    background: "linear-gradient(135deg, #ff2e93, #ff5dc0)",
                    color: "white",
                    width: "100%",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: 5,
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
