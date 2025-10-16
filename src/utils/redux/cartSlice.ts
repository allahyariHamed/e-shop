import { cart } from '@/src/components/ProductList'
import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

type state = {
    cartItems: {
        id: string
        image: string
        price: number
        name: string
        totalQuantity: number
    }[]
    totalQuantity: number
    totalAmount: number
    prevURL: string
}

const initialState: state = {
    cartItems: cart,
    totalQuantity: 0,
    totalAmount: 0,
    prevURL: '/',
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { product } = action.payload
            const storedCartItems = localStorage.getItem('cartItems')
            state.cartItems = storedCartItems ? JSON.parse(storedCartItems) : []
            state.cartItems = Array.isArray(state.cartItems) ? state.cartItems : [state.cartItems]
            const productIndex = state.cartItems.findIndex((item) => item.id === product.id)

            if (productIndex >= 0) {
                state.cartItems[productIndex].totalQuantity += 1
            } else {
                const tempProduct = { ...product, totalQuantity: 1 }
                state.cartItems.push(tempProduct)
                toast.success('item added !')
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        decrease: (state, action) => {
            const product = action.payload
            const storedCartItems = localStorage.getItem('cartItems')
            state.cartItems = storedCartItems ? JSON.parse(storedCartItems) : []
            const productIndex = state.cartItems.findIndex((item) => item.id === product.id)

            if (state.cartItems[productIndex].totalQuantity > 1) {
                state.cartItems[productIndex].totalQuantity -= 1

            } else if (state.cartItems[productIndex].totalQuantity == 1) {
                const newCArtItems = state.cartItems.filter((item) => item.id != product.id)
                state.cartItems = newCArtItems
                toast.error('item has been deleted !')
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        increase: (state, action) => {
            const product = action.payload
            const storedCartItems = localStorage.getItem('cartItems')
            state.cartItems = storedCartItems ? JSON.parse(storedCartItems) : []
            const productIndex = state.cartItems.findIndex((item) => item.id === product.id)
            state.cartItems[productIndex].totalQuantity += 1
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart: (state, action) => {
            const product = action.payload
            const newCArtItems = state.cartItems.filter((item) => item.id != product.id)
            state.cartItems = newCArtItems
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.error('item has been deleted !')
        },
        clearCart: (state) => {
            state.cartItems = []
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        calculateTotalAmount: (state) => {
            const total: number[] = []
            state.cartItems.forEach((item) => {
                total.push(item.price * item.totalQuantity)
            })
            const sumOfAllAmounts = total.reduce((a, b) => a + b, 0)
            state.totalAmount = sumOfAllAmounts
        },
        calculateTotalQuantity: (state) => {
            const total: number[] = []
            state.cartItems.forEach((item) => {
                total.push(item.totalQuantity)
            })
            const sumOfAllAmounts = total.reduce((a, b) => a + b, 0)
            state.totalQuantity = sumOfAllAmounts
        },
        saveUrl: (state, action) => {
            console.log(action.payload)
            state.prevURL = action.payload
        },
    }
});

export const { addToCart, decrease, increase, clearCart, removeFromCart, calculateTotalAmount, calculateTotalQuantity, saveUrl } = cartSlice.actions

export const selectCartItem = (state: { cart: state }) => state.cart.cartItems
export const selectTotalQuantity = (state: { cart: state }) => state.cart.totalQuantity
export const selectTotalAmount = (state: { cart: state }) => state.cart.totalAmount
export const selectPrevURL = (state: { cart: state }) => state.cart.prevURL

export default cartSlice.reducer