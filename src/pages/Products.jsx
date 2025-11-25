import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/ProductSlice";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { addToCart } from "../redux/CartSlice";
import { toast } from "react-toastify";

const Products = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [debounceSearch, setDebounceSearch] = useState("");

  const [category, setCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  const [sort, setSort] = useState("none");

  const { items, loading, error } = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const PageSize = 12;

  // Debounce Search
  useEffect(() => {
    const timer = setTimeout(() => setDebounceSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.log("Category fetch error:", error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch Products
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter Logic
  const filteredItem = items.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(debounceSearch.toLowerCase());
    const matchCategory = category === "All" || item.category === category;

    return matchSearch && matchCategory;
  });

  // Sort Logic
  let sortedProducts = [...filteredItem];
  if (sort === "lowhigh") sortedProducts.sort((a, b) => a.price - b.price);
  if (sort === "highlow") sortedProducts.sort((a, b) => b.price - a.price);

  // Pagination Logic
  const totalPages = Math.ceil(sortedProducts.length / PageSize);
  const startIndex = (currentPage - 1) * PageSize;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + PageSize);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, sort]);

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={{ padding: "30px" }}>
      {/* FILTER BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          marginBottom: 25,
        }}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: 10,
            width: 250,
            borderRadius: 6,
            border: "1px solid #ccc",
            outline: "none",
          }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: 10,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        >
          <option value="All">All</option>

          {categories.map((cat, i) => {
            const value = cat?.slug || cat?.name || cat;
            const label = cat?.name || cat?.slug || cat;

            return (
              <option key={i} value={value}>
                {String(label).toUpperCase()}
              </option>
            );
          })}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          style={{
            padding: 10,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        >
          <option value="none">Sort By</option>
          <option value="lowhigh">Price: Low → High</option>
          <option value="highlow">Price: High → Low</option>
        </select>
      </div>

      {/* PRODUCTS GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 25,
        }}
      >
        {paginatedProducts.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 15,
              background: "#fff",
            }}
          >
            <Link
              to={`/product/${p.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={p.thumbnail}
                alt={p.title}
                height={150}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />

              <h3 style={{ marginTop: 10 }}>{p.title.slice(0, 28)}...</h3>
              <p style={{ color: "#F43399", fontWeight: 600, fontSize: 18 }}>
                ₹ {p.price}
              </p>
            </Link>

            <button
              onClick={(e) => {
                e.preventDefault();
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
                borderRadius: 6,
              }}
               onMouseEnter={(e) => (e.target.style.background = "#d72685")}
  onMouseLeave={(e) => (e.target.style.background = "#F43399")}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
            window.scrollTo(0, 0);
          }}
        />
      )}
    </div>
  );
};

export default Products;
