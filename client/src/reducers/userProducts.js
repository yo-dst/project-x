const initialState = {
    loading: false,
    products: [],
    err: null
}

export default (userProducts = initialState, action) => {
    switch (action.type) {
        case "USER_PRODUCT_ADDED":
            return {loading: false, products: [...userProducts.products, action.payload], err: null};
        case "USER_PRODUCT_DELETED":
            return {loading: false, products: userProducts.products.filter(product => product._id != action.payload._id), err: null};
        case "USER_PRODUCT_UPDATED":
            console.log(userProducts.products);
            let productsUpdated = userProducts.products.map(product => {
                if (product._id == action.payload._id)
                    product = action.payload
            });
            console.log(productsUpdated);
            return userProducts;
        case "USER_PRODUCTS_LOADING":
            return {...userProducts, loading: true};
        case "USER_PRODUCTS_LOADED":
            return {loading: false, products: action.payload, err: null};
        case "USER_PRODUCTS_FAILED":
            return {...userProducts, loading: false, err: action.payload};
        default:
            return userProducts;
    }
}