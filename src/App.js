import { useEffect, useState } from "react";
import "./App.css";
import MovieItem from "./components/MovieItem";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchList, setSearchList] = useState([]); //List of movies resulting from the search
  const [searchValue, setSearchValue] = useState(""); //Text input of the search bar. e.g "The Lord of the Rings"
  const [nominatedList, setNominatedList] = useState([]); //List of nominated movies

  const getMovies = (search) => {
    if (searchValue) {
      fetch(`http://www.omdbapi.com/?s=${search}&apikey=45ae6804&type=movie`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setSearchList(result.Search);
        });
    }
  };

  const updateSearchValue = (newValue) => {
    setSearchValue(newValue);
  };

  const nominateMovie = (movie) => {
    console.log("Nominating a movie!");
    const newNominatedList = [...nominatedList, movie]; //append the new movie to the list of nominated movies
    setNominatedList(newNominatedList);
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
    getMovies(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <div className="AppTitle">
        <h1>The Shoppies</h1>
      </div>
      <div>
        <SearchBar handleChange={updateSearchValue} />
      </div>
      <div className="searchedMovies">
        <h2 className="movieListTitle">Search Results</h2>
        {searchList && searchList.length ? (
          <div className="searchList">
            {searchList.map((movie) => {
              return (
                <MovieItem
                  {...movie}
                  key={movie.imdbID}
                  buttonType="Nominate"
                  buttonHandler={nominateMovie}
                />
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="nominatedMovies">
        <h2 className="movieListTitle">Nominated Movies</h2>
        {nominatedList && nominatedList.length ? (
          <div className="searchList">
            {nominatedList.map((movie) => {
              return (
                <MovieItem
                  {...movie}
                  key={movie.imdbID}
                  buttonType="Remove"
                  buttonHandler={removeMovie}
                />
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
