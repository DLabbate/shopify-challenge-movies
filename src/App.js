/**
 * @file The purpose of this project is to search for movies using the OMDB API and "nominate" a total of 5 movies
 * @author Domenic Labbate
 */

import { useEffect, useState } from "react";
import "./App.css";
import MovieItem from "./components/MovieItem";
import SearchBar from "./components/SearchBar";
import { containsMovie, getMovies } from "./api/APIUtils.js";

function App() {
  const initialNominations = JSON.parse(
    window.localStorage.getItem("nominatedList")
  );
  const [searchList, setSearchList] = useState([]); //List of movies resulting from the search
  const [searchValue, setSearchValue] = useState(""); //Text input of the search bar. e.g "The Lord of the Rings"
  const [nominatedList, setNominatedList] = useState(initialNominations || []); //List of nominated movies

  const updateSearchValue = (newValue) => {
    setSearchValue(newValue);
  };

  const nominateMovie = (movie) => {
    console.log("Nominating a movie!");
    console.log(movie);
    if (nominatedList.length < 5 && !containsMovie(movie, nominatedList)) {
      const newNominatedList = [...nominatedList, movie]; //append the new movie to the list of nominated movies
      setNominatedList(newNominatedList);
    }
  };

  //We use the imdbID as the unique index
  const removeMovie = (movie) => {
    const { imdbID } = movie;
    const newNominatedList = nominatedList.filter(
      (movie) => !(movie.imdbID === imdbID)
    );
    setNominatedList(newNominatedList);
    console.log("Removing a movie from the list of nominations.");
    console.log(movie);
  };

  useEffect(() => {
    getMovies(searchValue, setSearchList);
  }, [searchValue]);

  useEffect(() => {
    window.localStorage.setItem("nominatedList", JSON.stringify(nominatedList));
  }, [nominatedList]);

  return (
    <div className="App">
      {nominatedList.length === 5 ? (
        <div className="bannerContainer">
          <p className="banner">5 Nominations Selected! 🏆</p>
        </div>
      ) : (
        <></>
      )}

      <div className="AppTitle">
        <h1>The Shoppies</h1>
      </div>
      <div>
        <SearchBar handleChange={updateSearchValue} />
      </div>
      <div className="searchedMovies">
        <h2 className="sectionTitle">Search Results for "{searchValue}"</h2>
        {searchList && searchList.length ? (
          <div className="movieList">
            {searchList.map((movie) => {
              return (
                <>
                  <MovieItem
                    {...movie}
                    key={movie.imdbID}
                    buttonType="Nominate"
                    buttonHandler={nominateMovie}
                    nominatedList={nominatedList}
                  />
                  <div className="spaceBetweenMovies"></div>
                </>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="nominatedMovies">
        <h2 className="sectionTitle">
          Nominated Movies ({nominatedList.length}/5)
        </h2>
        {nominatedList && nominatedList.length ? (
          <div className="movieList">
            {nominatedList.map((movie) => {
              return (
                <>
                  <MovieItem
                    {...movie}
                    key={movie.imdbID}
                    buttonType="Remove"
                    buttonHandler={removeMovie}
                  />
                  <div className="spaceBetweenMovies"></div>
                </>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
