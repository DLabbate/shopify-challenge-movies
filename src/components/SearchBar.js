/**
 * @file This component is used for entering a value in a search bar to query for a movie from the OMDB API
 * @author Domenic Labbate
 */

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
