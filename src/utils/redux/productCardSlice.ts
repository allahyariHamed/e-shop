import { createSlice } from '@reduxjs/toolkit'

type State = {
    layout: string
}

const initialState: State = {
    layout: 'grid'
}

const productCardSlice = createSlice({
    name: 'cardLayout',
    initialState,
    reducers: {
        setLayout: (state, action) => {
            state.layout = action.payload
        }
    }
});

export const { setLayout } = productCardSlice.actions
export const selectCardLayout = (state: { cardLayout: { layout: string } }) => state.cardLayout.layout

export default productCardSlice.reducer