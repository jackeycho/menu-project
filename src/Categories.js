import React from "react";

const Categories = ({ filtered, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            type="button"
            onClick={() => filtered(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
