import axios from "axios";
import apiConfig from "../../config/api";
import * as postActionType from "./postActionType";

export const getPosts = () => async (dispatch) => {
  try {
    const result = await axios.get(`${apiConfig.API_BASE_URL}/posts`);
    dispatch({
      type: postActionType.GET_POST,
      payload: result.data,
    });
  } catch (error) {
    console.log(error);
  }
};
