import React from "react";
import "./SearchBar.css";

const SearchBar = ({ handleChange }) => {
  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="Seach for movies to nominate..."
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
