const initialState = {
    isLoading: true,
    err: null,
    user: null
}

export default (user = initialState, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return {isLoading: false, err: null, user: action.payload};
        case "LOGOUT_USER":
            return {isLoading: false, err: null, user: null};
        case "USER_LOADING":
            return {isLoading: true, err: null, user: null};
        case "USER_FAILED":
            return {isLoading: false, err: action.payload, user: null};
        default:
            return user;
    }
};