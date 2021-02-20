const base_url = "https://api.themoviedb.org/3/movie/";

const api_key = "76092255094f42d113219df9cd6d44b0";

// popular movies url
export const popularUrl = () =>
  `${base_url}popular?api_key=${api_key}&page_size=10`;

// Top rated movies url
export const topRatedUrl = () =>
  `${base_url}top_rated?api_key=${api_key}&page_size=10`;

// Upcoming movies url
export const upcomingUrl = () =>
  `${base_url}upcoming?api_key=${api_key}&page_size=10`;

// Movie Detail url
export const movieDetailUrl = (movie_id) =>
  `${base_url}${movie_id}?api_key=${api_key}`;

// Movie Images url
export const movieImagesUrl = (movie_id) =>
  `${base_url}${movie_id}/images?api_key=${api_key}`;

// Similar Movies
export const similarMoviesUrl = (movie_id) =>
  `${base_url}${movie_id}/similar?api_key=${api_key}`;

// Search Movie url
const url = "https://api.themoviedb.org/3/search/movie";

export const searchMovieUrl = (movie_query) =>
  `${url}?api_key=${api_key}&query=${movie_query}`;

// Now Playing url

export const nowPlayingUrl = () =>
  `${base_url}now_playing?api_key=${api_key}&region=US`;
