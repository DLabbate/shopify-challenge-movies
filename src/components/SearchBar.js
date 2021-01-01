import React from "react";
import "./SearchBar.css";

const SearchBar = ({ handleChange }) => {
  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="Seach..."
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
