/**
 * @file This file is used for general API utils, and methods that can be reused between components.
 * @author Domenic Labbate
 */

/**
 * This method checks if a given movie is in an array of movies
 * We do this by referring to the imdbID (unique)
 * @param {Object} movie - the movie we want to check
 * @param {Array} movieList the array of movies resulting from the search bar
 */
const containsMovie = (movie, movieList) => {
  let i;
  for (i = 0; i < movieList.length; i++) {
    if (movieList[i].imdbID === movie.imdbID) {
      return true;
    }
  }
  return false;
};

/**
 * This method makes a call to the OMDB API (using a search term such as "lord of the rings")
 * It retrieves an array of movies matching the search term
 * @param {string} search - the string in the search bar
 * @param {Function} action - function to be executed when the fetch has completed (e.g. setState)
 */
const getMovies = (search, action) => {
  if (search) {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=45ae6804&type=movie`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        action(result.Search);
      });
  }
};

/**
 * This method makes a call to the OMDB API (using an imdbID such as "tt0241527")
 * It retrieves detailed information, including the movie plot, year, and so forth
 * @param {string} imdbID - unique imdb identification of the movie
 * @param {Function} action - function to be executed when the fetch has completed (e.g. setState)
 */
const getMovieInfo = (imdbID, action) => {
  fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=45ae6804`)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      action(result);
    });
};

export { containsMovie, getMovieInfo, getMovies };
