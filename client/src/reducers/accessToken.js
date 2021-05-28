export default (accessToken = {
    accessToken: null
}, action) => {
    switch (action.type) {
        case "ADD_ACCESS_TOKEN":
            return {...accessToken, accessToken: action.payload};
        default:
            return accessToken;
    }
};