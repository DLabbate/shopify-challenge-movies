import { useEffect, useState } from "react";
import "./App.css";
import MovieItem from "./components/MovieItem";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchList, setSearchList] = useState([]); //List of movies resulting from the search
  const [searchValue, setSearchValue] = useState(""); //Text input of the search bar. e.g "The Lord of the Rings"

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
              return <MovieItem {...movie} key={movie.imdbID} />;
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="nominatedMovies">
        <h2 className="movieListTitle">Nominated Movies</h2>
        {searchList && searchList.length ? (
          <div className="searchList">
            {searchList.map((movie) => {
              return <MovieItem {...movie} key={movie.imdbID} />;
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
