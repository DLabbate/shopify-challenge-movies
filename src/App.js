import { useEffect, useState } from "react";
import "./App.css";
import MovieItem from "./components/MovieItem";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchList, setSearchList] = useState([]); //List of movies resulting from the search
  const [searchValue, setSearchValue] = useState(""); //Text input of the search bar. e.g "The Lord of the Rings"

  const getMovies = (search) => {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=45ae6804&type=movie`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setSearchList(result.Search);
      });
  };

  useEffect(() => {
    getMovies("The Lord of the Rings");
  }, []);

  return (
    <div className="App">
      <div className="AppTitle">
        <h1>The Shoppies</h1>
      </div>
      <SearchBar />
      <div className="searchList">
        {searchList.map((movie) => {
          return <MovieItem {...movie} key={movie.imdbID} />;
        })}
      </div>
    </div>
  );
}

export default App;
