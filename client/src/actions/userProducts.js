import * as api from "../api";

export const addProduct = (productData) => (dispatch) => {
    api.addProduct(productData)
        .then(res => {
            dispatch({type: "USER_PRODUCT_ADDED", payload: res.data.newProduct})
        })
        .catch(err => {
            console.log(err);
            dispatch({type: "USER_PRODUCTS_FAILED", payload: err})
        })
}

export const fetchUserProducts = () => (dispatch) => {
    dispatch({type: "USER_PRODUCTS_LOADING"});
    api.fetchUserProducts()
        .then(res => {
            dispatch({type: "USER_PRODUCTS_LOADED", payload: res.data.products});
        })
        .catch(err => {
            console.log(err);
            dispatch({type: "USER_PRODUCTS_FAILED", payload: err});
        })
}

export const delProduct = (productId) => (dispatch) => {
    api.delProduct(productId)
        .then(res => {
            dispatch({type: "USER_PRODUCT_DELETED", payload: res.data.deletedProduct});
        })
        .catch(err => {
            console.log(err);
            dispatch({type: "USER_PRODUCTS_FAILED", payload: err});
        })
}

export const updateProduct = (productId, newData) => (dispatch) => {
    api.updateProduct(productId, newData)
        .then(res => {
            dispatch({type: "USER_PRODUCT_UPDATED", payload: res.data.productUpdated});
        })
        .catch(err => {
            dispatch({type: "USER_PRODUCTS_FAILED", payload: err});
        })
}