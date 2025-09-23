import { filteredProducts } from '@/src/types/types.';
import { createSlice } from '@reduxjs/toolkit'

const initialState: filteredProducts = {
    filteredProducts: []
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterBySearch: (state, action) => {
            const { products, search } = action.payload
            const matchedProducts = products.filter((product: { name: string; }) => product.name.toLowerCase().includes(search.toLowerCase()))
            state.filteredProducts = matchedProducts
        }
    }
});

export const { filterBySearch } = filterSlice.actions
export const selectFilteredProducts = (state: { filter: filteredProducts }) => state.filter.filteredProducts

export default filterSlice.reducer