import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { totalQty } = useSelector((state) => state.cart);

  const activeStyle = {
    color: "#F43399",
    borderBottom: "2px solid #F43399",
    paddingBottom: 2,
    fontWeight: 600,
  };

  const linkStyle = {
    color: "#333",
    fontWeight: 500,
    textDecoration: "none",
    fontSize: 18,
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 35px",
        background: "#ffffff",
        borderBottom: "1px solid #ddd",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* LOGO */}
      <h2 style={{ color: "#F43399", fontWeight: 700, margin: 0 }}>Trendora</h2>

      {/* MENU LINKS */}
      <div style={{ display: "flex", gap: 20 }}>
        <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>Home</NavLink>
        <NavLink to="/products" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>Products</NavLink>
        <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>About</NavLink>
        <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>Contact</NavLink>
      </div>

      {/* RIGHT SIDE */}
      <div style={{ display: "flex", alignItems: "center", gap: 25, fontSize: 18 }}>
        
        {/* NEW — Become a Seller */}
        <NavLink to="/seller" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
          🧾 Become a Seller
        </NavLink>

        <NavLink to="/login" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
          👤 Login
        </NavLink>

        <NavLink to="/cart" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
          🛒 Cart {totalQty > 0 && `(${totalQty})`}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
