import * as postActionType from "./postActionType";

const initialPostState = {
  postList: [],
  getPostLoading: false,
  addPostLoading: false,
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

    case postActionType.ADD_POST_BEGINS:
      return {
        ...state,
        addPostLoading: true,
      };
    case postActionType.ADD_POST_SUCCESS:
      return {
        ...state,
        postList: [...state.postList, payload],
        addPostLoading: false,
      };
    case postActionType.ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
      };

    ///////////////////

    default:
      return state;
  }
};
export default postReducer;
