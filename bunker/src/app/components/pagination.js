import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center my-4">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`mx-2 px-5 py-2 text-2xl bg-red-800 text-yellow-200 rounded ${
            currentPage === number ? "font-bold" : ""
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
