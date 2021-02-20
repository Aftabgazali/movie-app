import axios from "axios";
import { popularUrl, topRatedUrl, upcomingUrl, searchMovieUrl,nowPlayingUrl} from "../api";

export const loadMovies = () => async (dispatch) => {
  const popularMovieData = await axios.get(popularUrl());
  const topRatedMovieData = await axios.get(topRatedUrl());
  const upcomingMovieData = await axios.get(upcomingUrl());
  const nowPlayingMovieData=await axios.get(nowPlayingUrl());
  dispatch({
    type: "Fetch_Movies",
    payload: {
      popular: popularMovieData.data.results,
      topRated: topRatedMovieData.data.results,
      upcoming: upcomingMovieData.data.results,
      nowPlaying: nowPlayingMovieData.data.results
    },
  });
};
export const searchMovies = (movie_query) => async (dispatch) => {
  const searchMovieData = await axios.get(searchMovieUrl(movie_query));
  dispatch({
    type: "Fetch_Search",
    payload: {
      searched: searchMovieData.data.results,
    },
  });
};
