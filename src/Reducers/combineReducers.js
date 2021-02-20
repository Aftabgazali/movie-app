import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import movieDetailReducer from "./movieDetailReducer";
import movieDetail from "./movieDetailReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  details: movieDetailReducer,
});
export default rootReducer;
