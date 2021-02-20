import axios from "axios";
import { movieDetailUrl, movieImagesUrl, similarMoviesUrl } from "../api";
import movieDetail from "../Reducers/movieDetailReducer";

export const fetchDetails = (movie_id) => async (dispatch) => {
  const movieDetailData = await axios.get(movieDetailUrl(movie_id));
  const movieImagesData = await axios.get(movieImagesUrl(movie_id));
  const similarMovieData = await axios.get(similarMoviesUrl(movie_id));
  dispatch({
    type: "Fetch_Detail",
    payload: {
      details: movieDetailData.data,
      image: movieImagesData,
      similar: similarMovieData.data.results,
    },
  });
};
