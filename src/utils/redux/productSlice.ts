import { productInitialState } from '@/src/types/types.';
import { createSlice } from '@reduxjs/toolkit'

const initialState: productInitialState = {
    products: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        storeProducts: (state, action) => {
            state.products = action.payload.products
        }
    }
});

export const { storeProducts } = productSlice.actions
export const selectProducts = (state: { product: productInitialState }) => state.product.products

export default productSlice.reducer