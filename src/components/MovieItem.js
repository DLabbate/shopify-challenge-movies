import React from "react";

const MovieItem = ({ Poster, Title, Year }) => {
  return (
    <div className="movieItemContainer">
      <img src={Poster} alt="" />
      <h3>{Title}</h3>
      <span>({Year})</span>
    </div>
  );
};

export default MovieItem;
