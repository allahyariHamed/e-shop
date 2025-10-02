import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "@/src/utils/redux/authSlice";
import productReducer from "@/src/utils/redux/productSlice";
import filterReducer from "@/src/utils/redux/filterSlice";
import cardLayoutReducer from "@/src/utils/redux/productCardSlice";
import soppingBascketReducer from "@/src/utils/redux/shoppingBascet";

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    filter: filterReducer,
    cardLayout: cardLayoutReducer,
    soppingBascket: soppingBascketReducer,
})
const store = configureStore({
    reducer: rootReducer
})
export default store