import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "@/src/utils/redux/authSlice";
import productReducer from "@/src/utils/redux/productSlice";
import filterReducer from "@/src/utils/redux/filterSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    filter: filterReducer
})
const store = configureStore({
    reducer: rootReducer
})
export default store