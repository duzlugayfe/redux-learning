import * as postActionType from "./postActionType";

const initialPostState = {
  postList: [],
};

const postReducer = (state = initialPostState, { type, payload }) => {
  switch (type) {
    case postActionType.GET_POST:
      return {
        ...state,
        postList: payload,
      };
    default:
      return state;
  }
};
export default postReducer;
