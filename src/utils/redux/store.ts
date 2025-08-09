import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "@/src/utils/redux/authSlice";

const rootReducer = combineReducers({
    auth: authReducer
})
const store = configureStore({
    reducer: rootReducer
})
export default store