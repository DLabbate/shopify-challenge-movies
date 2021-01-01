import React from "react";
import "./MovieItem.css";

const MovieItem = ({
  Title,
  Year,
  imdbID,
  Type,
  Poster,
  buttonType,
  buttonHandler,
}) => {
  const getImageURL = (Poster) => {
    if (Poster === "N/A") {
      return "https://cdn4.iconfinder.com/data/icons/basic-flat-ui-extra-set-200-item/76/ui_ux_minimalist_button_video_film_roll-512.png";
    } else {
      return Poster;
    }
  };

  const nominateOrRemove = () => {
    const movieObject = {
      Title: Title,
      Year: Year,
      imdbID: imdbID,
      Type: Type,
      Poster: Poster,
    };
    if (buttonType === "Nominate") {
      console.log(movieObject);
      buttonHandler(movieObject);
    } else if (buttonType === "Remove") {
      buttonHandler(movieObject);
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
        <button className="movieButton" onClick={nominateOrRemove}>
          {buttonType}
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
