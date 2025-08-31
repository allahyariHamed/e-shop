import { createSlice } from '@reduxjs/toolkit'

type products = {
    products: []
}

const initialState: products = {
    products: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        storeProducts: (state, action) => {
            console.log(action.payload)
        }
    }
});

export const { storeProducts } = productSlice.actions
export const selectProducts = (state: { product: products }) => state.product.products

export default productSlice.reducer