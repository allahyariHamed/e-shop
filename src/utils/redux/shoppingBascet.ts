import { createSlice } from '@reduxjs/toolkit'

type state = {
    items: Record<string, string>[],
    totalQuantity: number
    totalAmount: number
}

const initialState: state = {
    items: JSON.parse(localStorage.getItem('bascketItems') ?? '[]'),
    totalQuantity: 0,
    totalAmount: 0
}

const shoppingBascket = createSlice({
    name: 'shoppingBascket',
    initialState,
    reducers: {
        addToBascket: (state, action) => {
            const { product } = action.payload
            const productIndex = state.items.findIndex((item) => item.id === product.id)
            console.log('productIndex', productIndex)
            console.log('first', state.items)
            // if (productIndex >= 0) {
            //     state.items[productIndex].totalQuantity += 1
            // } else {
            //     const tempProduct = { ...action.payload, totalQuantity: 1 }
            //     state.items.push(tempProduct)
            //     toast.success('item added !')
            // }
        }
    }
});

export const { addToBascket } = shoppingBascket.actions

export const selectBascketItem = (state: { shoppingBascket: state }) => state.shoppingBascket.items
export const selectTotalQuantity = (state: { shoppingBascket: state }) => state.shoppingBascket.totalQuantity
export const selectTotalAmount = (state: { shoppingBascket: state }) => state.shoppingBascket.totalAmount

export default shoppingBascket.reducer