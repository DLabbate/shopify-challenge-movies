import React from "react";
import "./MovieItem.css";

const MovieItem = ({ Poster, Title, Year }) => {
  return (
    <div className="movieItemContainer">
      <div className="movieInformation">
        <h3 className="movieTitle">
          {Title}
          <span> ({Year})</span>
        </h3>
      </div>
      <img className="movieImage" src={Poster} alt="" />
    </div>
  );
};

export default MovieItem;
