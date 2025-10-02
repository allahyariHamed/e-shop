import { productInitialState } from '@/src/types/types';
import { createSlice } from '@reduxjs/toolkit'

const initialState: productInitialState = {
    products: [],
    minPrice: 0,
    maxPrice: 0
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        storeProducts: (state, action) => {
            state.products = action.payload.products
        },
        getPriceRange: (state, action) => {
            const { products } = action.payload
            const array: number[] = []
            products.map((element: { price: string }) => array.push(Number(element.price)))
            const max = Math.max(...array)
            const min = Math.min(...array)
            state.maxPrice = max
            state.minPrice = min
        },
    }
});

export const { storeProducts, getPriceRange } = productSlice.actions
export const selectProducts = (state: { product: productInitialState }) => state.product.products
export const selectMaxPrice = (state: { product: productInitialState }) => state.product.maxPrice
export const selectMinPrice = (state: { product: productInitialState }) => state.product.minPrice

export default productSlice.reducer