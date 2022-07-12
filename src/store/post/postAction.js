import axios from "axios";
import { toast } from "react-toastify";
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

export const addPosts = (posts) => async (dispatch) => {
  try {
    dispatch({ type: postActionType.ADD_POST_BEGINS });
    const result = await axios.post(`${apiConfig.API_BASE_URL}posts`, posts);
    setTimeout(() => {
      dispatch({
        type: postActionType.ADD_POST_SUCCESS,
        payload: result.data,
      });
      toast.success("Post delete succes");
    }, 3000);
  } catch (error) {
    console.log(error);
    dispatch({ type: postActionType.ADD_POST_FAILURE });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: postActionType.DELETE_POST_BEGINS });
    await axios.delete(`${apiConfig.API_BASE_URL}posts/${id}`);
    setTimeout(() => {
      dispatch({
        type: postActionType.DELETE_POST_SUCCESS,
        payload: id,
      });
    }, 3000);
  } catch (error) {
    console.log(error);
    dispatch({ type: postActionType.DELETE_POST_FAILURE });
  }
};
