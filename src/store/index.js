import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./rootReducer";

const store = createStore(
  reducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
