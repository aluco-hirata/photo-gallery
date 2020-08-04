import { combineReducers } from "redux";

import {authReducer} from "./auth/reducer";
import { themeReducer } from "./theme/reducer";



export const rootReducer = combineReducers({
    theme: themeReducer,
    auth: authReducer
})