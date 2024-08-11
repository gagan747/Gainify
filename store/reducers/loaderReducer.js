import { type } from "os";

// store/reducers/loaderReducer.js
const initialState = {
  isLoading: true,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_LOADER":
      return { isLoading: true };
    case "HIDE_LOADER":
      return { isLoading: false };
    default:
      return state;
  }
};

export default loaderReducer;
