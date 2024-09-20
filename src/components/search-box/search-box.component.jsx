import React, { Children } from "react";
import "./search-box.style.css";


const SearchBox = ({ handleChange }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder="Search or filter results"
      onChange={handleChange}

    />
  );
};

export default SearchBox;