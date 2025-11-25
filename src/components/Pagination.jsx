import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <div style={{ marginTop: 25, display: "flex", justifyContent: "center", gap: 10 }}>
      {/* Prev Btn */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        style={{ padding: "8px 14px", cursor: "pointer" }}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            padding: "8px 12px",
            cursor: "pointer",
            background: page === currentPage ? "black" : "#eee",
            color: page === currentPage ? "white" : "black",
            borderRadius: 5,
          }}
        >
          {page}
        </button>
      ))}

      {/* Next Btn */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        style={{ padding: "8px 14px", cursor: "pointer" }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
