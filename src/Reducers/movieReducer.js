const initialState = {
  popular: [],
  topRated: [],
  upcoming: [],
  searched: [],
  nowPlaying: [],
};
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Fetch_Movies":
      return {
        ...state,
        popular: action.payload.popular,
        topRated: action.payload.topRated,
        upcoming: action.payload.upcoming,
        nowPlaying: action.payload.nowPlaying,
      };
    case "Fetch_Search":
      return {
        searched: action.payload.searched,
      };
    default:
      return {
        ...state,
      };
  }
};
export default movieReducer;
