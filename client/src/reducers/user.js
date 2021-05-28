export default (user = {
    isLoading: true,
    err: null,
    user: null
}, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {...user, isLoading: false, err: null, user: action.payload};
        case "DEL_USER":
            return {...user, isLoading: false, err: null, user: null};
        case "LOADING":
            return {...user, isLoading: true, err: null};
        case "FAILED":
            return {...user, isLoading: false, err: action.payload, user: null}
        default:
            return user;
    }
};