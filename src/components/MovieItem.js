import React from "react";
import "./MovieItem.css";

const MovieItem = ({ Poster, Title, Year }) => {
  const getImageURL = (Poster) => {
    if (Poster === "N/A") {
      return "https://cdn4.iconfinder.com/data/icons/basic-flat-ui-extra-set-200-item/76/ui_ux_minimalist_button_video_film_roll-512.png";
    } else {
      return Poster;
    }
  };
  return (
    <div className="movieItemContainer">
      <img className="movieImage" src={getImageURL(Poster)} alt="" />
      <div className="movieInformation">
        <h3 className="movieTitle">
          {Title}
          <span> ({Year})</span>
        </h3>
      </div>
      <div className="buttonContainer">
        <button className="movieButton">Nominate</button>
      </div>
    </div>
  );
};

export default MovieItem;
