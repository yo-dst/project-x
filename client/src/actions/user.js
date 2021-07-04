import * as api from "../api";

export const addUser = () => (dispatch) => {
    dispatch({type: "LOADING"});

    api.fetchUser()
    .then((data) => {
        if (data.success)
            dispatch({type: "ADD_USER", payload: data.user});
        else
            dispatch({type: "FAILED", payload: data.message});
    })
    .catch((err) => {
        dispatch({type: "FAILED", payload: err});
    });
};

export const delUser = () => (dispatch) => {
    dispatch({type: "DEL_USER"});
};