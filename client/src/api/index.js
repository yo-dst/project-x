import config from "../config";

const url = config.serverUrl;

export const fetchUser = () => {
    let accessToken = localStorage.getItem("accessToken");

    return fetch(url + "user/", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + accessToken
        }
    })
        .then((res) => res.json())
        .catch((err) => {
            throw err;
        });
};

export const login = (email, password) => {
    return fetch(url + "user/login", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
        body: JSON.stringify({
            email: email, 
            password: password
        })
    })
        .then((res) => res.json())
        .catch((err) => {
            throw err;
        });
};

export const logout = () => {
    localStorage.removeItem("refreshToken");

    return fetch(url + "user/logout", {
        method: "GET",
        credentials: "include",
    })
        .catch((err) => {
            throw err;
        });
};

export const register = (userData) => {
    return fetch(url + "user/register", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })
        .then((res) => res.json())
        .catch((err) => {
            throw err
        });
};

export const refreshToken = (refreshToken) => {
    return fetch(url + "user/token", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        credentials: "include",
        body: JSON.stringify({refreshToken: refreshToken})
    })
        .then((res) => res.json())
        .catch((err) => {
            throw err
        });
};