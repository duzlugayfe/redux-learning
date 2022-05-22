import axios from "axios";
import apiConfig from "../../config/api";
import * as postActionType from "./postActionType";

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: postActionType.GET_POST_BEGINS });
    const result = await axios.get(`${apiConfig.API_BASE_URL}posts`);
    setTimeout(() => {
      dispatch({
        type: postActionType.GET_POST_SUCCESS,
        payload: result.data,
      });
    }, 3000);
  } catch (error) {
    console.log(error);
    dispatch({ type: postActionType.GET_POST_FAILURE });
  }
};
