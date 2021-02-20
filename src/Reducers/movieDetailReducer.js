const initialState = {
  detail: [],
  images: [],
  similar: [],
};
const movieDetail = (state = initialState, action) => {
  switch (action.type) {
    case "Fetch_Detail":
      return {
        ...state,
        detail: action.payload.details,
        images: action.payload.image,
        similar: action.payload.similar,
      };
    default:
      return {
        ...state,
      };
  }
};
export default movieDetail;
