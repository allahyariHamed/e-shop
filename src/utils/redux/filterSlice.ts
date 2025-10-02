import { filteredProducts } from '@/src/types/types';
import { createSlice } from '@reduxjs/toolkit'

const initialState: filteredProducts = {
    filteredProducts: [],
    type: 'no action'
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterBySearch: (state, action) => {
            const { products, search } = action.payload
            const matchedProducts = products.filter((product: { name: string; }) => product.name.toLowerCase().includes(search.toLowerCase()))
            state.filteredProducts = matchedProducts
            state.type = 'search'
        },
        filterBySort: (state, action) => {
            const { payload, type } = action.payload
            let tempProducts = []
            switch (type) {
                case 'Latest':
                    tempProducts = payload
                    break
                case 'Lowest Price':
                    tempProducts = [...payload].slice().sort((a: { price: number; }, b: { price: number; }) => a.price - b.price)
                    break
                case 'Highest Price':
                    tempProducts = [...payload].slice().sort((a: { price: number; }, b: { price: number; }) => b.price - a.price)
                    break
                case 'a - z':
                    tempProducts = [...payload].slice().sort((a: { name: string; }, b: { name: string; }) => a.name.localeCompare(b.name))
                    break
                case 'z - a':
                    tempProducts = [...payload].slice().sort((a: { name: string; }, b: { name: string; }) => b.name.localeCompare(a.name))
                    break
            }
            state.filteredProducts = tempProducts
        },
        filterByCategory: (state, action) => {
            const { products, category } = action.payload
            let tempProducts = []
            if (category == 'all') {
                tempProducts = products
            } else {
                tempProducts = products.filter((product: { category: string }) => product.category == category)
            }
            state.filteredProducts = tempProducts
        },
        filterByBrand: (state, action) => {
            const { products, brand } = action.payload
            let tempProducts = []
            if (brand == 'all') {
                tempProducts = products
            } else {
                tempProducts = products.filter((product: { brand: string }) => product.brand == brand)
            }
            state.filteredProducts = tempProducts
        },
        filterByPrice: (state, action) => {
            const { products, price } = action.payload
            let tempProducts = []
            tempProducts = products.filter((product: { price: number | string }) => product.price <= price)
            state.filteredProducts = tempProducts
        },
        reset: (state) => {
            state.filteredProducts = []
        }
    }
});

export const { filterBySearch, filterBySort, filterByCategory, filterByBrand, filterByPrice, reset } = filterSlice.actions
export const selectFilteredProducts = (state: { filter: filteredProducts }) => state.filter.filteredProducts
export const selectFilterAcrionType = (state: { filter: filteredProducts }) => state.filter.type

export default filterSlice.reducer