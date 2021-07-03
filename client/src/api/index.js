import axios from "axios";

const url = "http://localhost:5000/";

const validStatusRange = (status) =>
{
    return 1;
} 

export const fetchUser = async () => {
    try {
        let accessToken = localStorage.getItem("accessToken");
        let res = await axios.get(url + "auth/", {
            headers: {"Authorization": "Bearer " + accessToken},
            validateStatus: validStatusRange
        });
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const login = async (email, password) => {
    try {
        let res = await axios.post(url + "auth/login/", {
            email: email,
            password: password
        }, {validateStatus: validStatusRange});
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const logout = async () => {
    try {
        localStorage.removeItem("accessToken");
        let res = await axios.delete(url + "auth/logout/", {validateStatus: validStatusRange});
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const signup = async (userData) => {
    try {
        let res = await axios.post(url + "auth/signup/", userData, {validateStatus: validStatusRange});
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const refreshToken = (refreshToken) => {
    return fetch(url + "auth/token", {
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