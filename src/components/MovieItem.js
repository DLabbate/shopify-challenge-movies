import React from "react";
import "./MovieItem.css";

const MovieItem = ({ Poster, Title, Year }) => {
  return (
    <div className="movieItemContainer">
      <img className="movieImage" src={Poster} alt="" />
      <div className="movieInformation">
        <h3 className="movieTitle">
          {Title}
          <span> ({Year})</span>
        </h3>
      </div>
    </div>
  );
};

export default MovieItem;
