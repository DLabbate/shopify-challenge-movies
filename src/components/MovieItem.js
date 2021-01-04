/**
 * @file This component is used for displaying a movie item, consiting of the movie poster, year and title.
 * @author Domenic Labbate
 */

import React, { useEffect, useState } from "react";
import "./MovieItem.css";
import { containsMovie, getMovieInfo } from "../api/APIUtils.js";

/**
 *
 * @param {string} Title - the title of a movie (given by OMDB API)
 * @param {string} Year - the release year of a movie (given by OMDB API)
 * @param {string} imdbID - the imdb identification key (given by OMDB API)
 * @param {string} Type - "movie". Note that we ONLY search for movies in our call to the OMDB API (no tv shows, etc.)
 * @param {string} Poster - url to the movie poster. If it does not exist, will return "N/A" (given by OMDB API)
 * @param {string} buttonType - This can be either "Nominate" or "Remove"
 * @param {Function} buttonHandler - Function that specifies what action the button should take
 * @param {Array} nominatedList - The list of movies the user has currently nominated
 */
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

  /**
   * This method checks if the given movie item has a poster, if not it will return a default image.
   * @param {string} Poster - link to movie poster. Value will be "N/A" if it does not exist.
   */
  const getImageURL = (Poster) => {
    if (Poster === "N/A") {
      return "https://cdn4.iconfinder.com/data/icons/basic-flat-ui-extra-set-200-item/76/ui_ux_minimalist_button_video_film_roll-512.png";
    } else {
      return Poster;
    }
  };

  /**
   * This method sets the buttonHandler of the MovieItem, depending on whether "Nominate" or "Remove".
   * This is done so that the component can be reused for both the list of search results, along with the list of nominated movies.
   */
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
    } else {
      console.log("Invalid buttonType for MovieItem");
    }
  };

  /**
   * This method checks if a given movie has already been nominated. If this is the case, the "Nominate" button (for this specific MovieItem) will be disabled.
   * Note however that the "Remove" button is never disabled. We always want the user to be able to remove a movie from the nomination list.
   */
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

  /**
   * Calls the OMDB API to retrieve detailed info (plot) of the movie.
   * We specify [], so it will only execute once
   */
  useEffect(() => {
    getMovieInfo(imdbID, setDetailedInfo);
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
