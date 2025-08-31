import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "@/src/utils/redux/authSlice";
import productReducer from "@/src/utils/redux/productSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer
})
const store = configureStore({
    reducer: rootReducer
})
export default store