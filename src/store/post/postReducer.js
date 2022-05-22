import * as postActionType from "./postActionType";

const initialPostState = {
  postList: [],
  getPostLoading: false,
};

const postReducer = (state = initialPostState, { type, payload }) => {
  switch (type) {
    case postActionType.GET_POST_BEGINS:
      return {
        ...state,
        postList: payload,
        getPostLoading: true,
      };
    case postActionType.GET_POST_SUCCESS:
      return {
        ...state,
        postList: payload,
        getPostLoading: false,
      };
    case postActionType.GET_POST_FAILURE:
      return {
        ...state,
        getPostLoading: false,
      };
    default:
      return state;
  }
};
export default postReducer;
