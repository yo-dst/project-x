import { combineReducers } from "redux";

import user from "./user";
import userProducts from "./userProducts"

export default combineReducers({
    user,
    userProducts
});