 
const MovieEndPoints = {
  key: "ca7d29d2a3480d6c675f326f4c5f117a",
  nowPlaying:   "https://api.themoviedb.org/3/movie/now_playing?api_key=ca7d29d2a3480d6c675f326f4c5f117a&language=en-US&page=1",
  imageLoader: imgUrl => ('https://image.tmdb.org/t/p/w500/' + imgUrl),
  movie: (id, key) => (`https://api.themoviedb.org/3/movie/${id}?api_key=${MovieEndPoints.key}&language=en-US`),
}

export default MovieEndPoints;