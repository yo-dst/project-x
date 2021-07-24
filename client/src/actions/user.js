import * as api from "../api";

export const login = (email, password) => async (dispatch) => {
    try {
        let res = await api.login(email, password);
        localStorage.setItem("accessToken", res.data.accessToken);
        dispatch({type: "USER_LOADING"});
        dispatch(updateUser());
    } catch (err) {
        dispatch({type: "USER_FAILED", payload: err.response.data.msg});
    }
}

export const logout = () => async (dispatch) => {
    try {
        await api.logout();
        localStorage.removeItem("accessToken");
        dispatch({type: "LOGOUT_USER"});
    } catch (err) {
        dispatch({type: "USER_FAILED", payload: err.response.data.msg});
    }
}

export const updateUser = () => async (dispatch) => {
    try {
        let res = await api.fetchUser();
        dispatch({type: "UPDATE_USER", payload: res.data.user});
    } catch (err) {
        dispatch({type: "USER_FAILED", payload: err.response.data.msg});
    }
}
