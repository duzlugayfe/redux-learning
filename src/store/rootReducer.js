import { combineReducers } from "redux";
import postReducer from "./post/postReducer";

const reducer = combineReducers({
  post: postReducer,
});

export default reducer;
