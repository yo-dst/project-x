import { combineReducers } from "redux";

import user from "./user.js";
import accessToken from "./accessToken.js";

export default combineReducers({
    user,
    accessToken
});