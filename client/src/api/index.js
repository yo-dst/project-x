import axios from "axios";

const url = "http://localhost:5000";

// INTERCEPTORS ------------------------------------------------
axios.interceptors.request.use(
    (config) => {
        let accessToken = localStorage.getItem("accessToken");
        config.headers.Authorization = "Bearer " + accessToken;
        return config;
    },
    (error) => {
        throw error;
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        let originalReq = error.config;
        if (error.response.status == 401 && !originalReq._retry)
        {
            originalReq._retry = true;
            return axios.post(url + "/auth/refresh_token", undefined, {withCredentials: true}).then(res => {
                localStorage.setItem("accessToken", res.data.accessToken);
                return axios(originalReq);
            });
        }
        throw error;
    }
);

// AUTH ------------------------------------------------
export const login = (email, password) => axios.post(url + "/auth/login", {
    email: email,
    password: password
}, {withCredentials: true});

export const logout = () => axios.get(url + "/auth/logout", {withCredentials: true});

export const signup = (userData) => axios.post(url + "/auth/signup", userData);

// PRODUCT ------------------------------------------------
export const addProduct = (productData) => axios.post(url + "/products", productData);

export const delProduct = (productId) => axios.delete(url + `/products/${productId}`);

export const getProducts = () => axios.get(url + "/products");

export const updateProduct = (productId, newData) => axios.put(url + `/products/${productId}`, newData);

// USER ------------------------------------------------
export const fetchUser = () => axios.get(url + "/user");

export const fetchUserProducts = () => axios.get(url + "/user/products");