import { useEffect, useState } from "react";
import "./App.css";
import MovieItem from "./components/MovieItem";
import SearchBar from "./components/SearchBar";
import { containsMovie } from "./api/APIUtils.js";

function App() {
  const initialNominations = JSON.parse(
    window.localStorage.getItem("nominatedList")
  );
  const [searchList, setSearchList] = useState([]); //List of movies resulting from the search
  const [searchValue, setSearchValue] = useState(""); //Text input of the search bar. e.g "The Lord of the Rings"
  const [nominatedList, setNominatedList] = useState(initialNominations || []); //List of nominated movies

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

  // const getDetailedMovieInformation = () => {
  //   let i;
  //   for (i = 0; i < searchValue.length; i++) {
  //     console.log(i.imdbID);
  //     fetch(`http://www.omdbapi.com/?i=${i.imdbID}&apikey=45ae6804`)
  //       .then((res) => res.json())
  //       .then((result) => {
  //         console.log(result);
  //         if (result) {
  //         }
  //         return result;
  //       });
  //   }
  // };

  useEffect(() => {
    getMovies(searchValue);
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
                <MovieItem
                  {...movie}
                  key={movie.imdbID}
                  buttonType="Nominate"
                  buttonHandler={nominateMovie}
                  nominatedList={nominatedList}
                />
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
