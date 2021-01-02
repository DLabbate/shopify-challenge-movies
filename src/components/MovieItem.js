import React, { useEffect, useState } from "react";
import "./MovieItem.css";
import { containsMovie } from "../api/APIUtils.js";

const MovieItem = ({
  Title,
  Year,
  imdbID,
  Type,
  Poster,
  buttonType,
  buttonHandler,
  nominatedList,
}) => {
  const [detailedInfo, setDetailedInfo] = useState({});

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

  const isButtonDisabled = () => {
    const movieObject = {
      Title: Title,
      Year: Year,
      imdbID: imdbID,
      Type: Type,
      Poster: Poster,
    };
    if (
      buttonType === "Nominate" &&
      containsMovie(movieObject, nominatedList)
    ) {
      return true;
    }
    return false;
  };

  let plot = "";
  const getMovieInfo = () => {
    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=45ae6804`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        plot = result.Plot;
        console.log(plot);
        setDetailedInfo(result);
      });
  };

  useEffect(() => {
    getMovieInfo();
  }, []);
  return (
    <div className="movieItemContainer">
      <div className="imageContainer">
        <img className="movieImage" src={getImageURL(Poster)} alt="" />
        <div className="overlay">
          <p className="detailedInfo">{detailedInfo.Plot}</p>
        </div>
      </div>

      <div className="movieInformation">
        <h3 className="movieTitle">
          {Title}
          <span> ({Year})</span>
        </h3>
      </div>
      <div className="buttonContainer">
        <button
          className="movieButton"
          onClick={nominateOrRemove}
          disabled={isButtonDisabled()}
        >
          {buttonType}
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
