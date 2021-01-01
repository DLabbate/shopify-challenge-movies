const containsMovie = (movie, movieList) => {
  let i;
  for (i = 0; i < movieList.length; i++) {
    if (movieList[i].imdbID === movie.imdbID) {
      return true;
    }
  }
  return false;
};

export { containsMovie };
