import { AuthState } from "@/src/types/types.";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
    LoggedIn: false,
    email: null,
    userName: null,
    userId: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SET_ACTIVE_USER(state, action) {
            const { email, userName, userId } = action.payload;
            state.LoggedIn = true;
            state.userName = userName;
            state.email = email;
            state.userId = userId;
            console.log(email)
        },
        REMOVE_ACTIVE_USER(state) {
            state.LoggedIn = false;
            state.userName = null;
            state.email = null;
            state.userId = null;
        }
    }
})

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions
export const selectLoggedIn = (state: { auth: AuthState }) => state.auth.LoggedIn
export const selectEmail = (state: { auth: AuthState }) => state.auth.email
export const selectUserName = (state: { auth: AuthState }) => state.auth.userName
export const selectUserId = (state: { auth: AuthState }) => state.auth.userId
export default authSlice.reducer