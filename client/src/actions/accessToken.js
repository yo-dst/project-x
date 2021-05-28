import * as api from "../api";

export const addAccessToken = (accessToken) => (dispatch) => {
    dispatch({type: "ADD_ACCESS_TOKEN", payload: accessToken})
}