import "./App.css";
import MovieItem from "./components/MovieItem";

const movieList = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "The Making of 'The Lord of the Rings'",
    Year: "2002",
    imdbID: "tt0302751",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMmE3MzQwYjYtODFmOS00M2MxLWJjYTUtZTNjYjhmYjg4MzU2XkEyXkFqcGdeQXVyMTEyMDcwNw@@._V1_SX300.jpg",
  },
  {
    Title: "A Passage to Middle-earth: The Making of 'Lord of the Rings'",
    Year: "2001",
    imdbID: "tt0301246",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTc3NjA5MDYxNF5BMl5BanBnXkFtZTcwMTY4MzEyMQ@@._V1_SX300.jpg",
  },
  {
    Title:
      "National Geographic: Beyond the Movie - The Lord of the Rings: Return of the King",
    Year: "2003",
    imdbID: "tt0405185",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDBjNzI4MTItMWUyMy00MTU4LWI0Y2EtYTdkNjg5NmJkNjgxXkEyXkFqcGdeQXVyNTc0NjY1ODk@._V1_SX300.jpg",
  },
  {
    Title:
      "Master of the Rings: The Unauthorized Story Behind J.R.R. Tolkien's 'Lord of the Rings'",
    Year: "2001",
    imdbID: "tt0308561",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTI1ODc4OTEwOF5BMl5BanBnXkFtZTcwNzA0NTc0MQ@@._V1_SX300.jpg",
  },
  {
    Title:
      "Creating the Lord of the Rings Symphony: A Composer's Journey Through Middle-Earth",
    Year: "2004",
    imdbID: "tt0456052",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTViY2MyOTktNTEyYi00MjAwLWE4YWQtNDhmOTlkZTE2MzQ5XkEyXkFqcGdeQXVyNjU2MzA0OTE@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Quest Fulfilled",
    Year: "2003",
    imdbID: "tt0382814",
    Type: "movie",
    Poster: "N/A",
  },
];

function App() {
  return (
    <div className="App">
      <div className="AppTitle">
        <h1>The Shoppies</h1>
        <MovieItem {...movieList[0]} />
        {movieList.map((movie) => {
          return (
            <div>
              <img
                src={movie.Poster}
                alt=""
                key={movie.imdbID}
                height="350 px"
              />
              <br />
              <span>
                {movie.Title} ({movie.Year})
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
