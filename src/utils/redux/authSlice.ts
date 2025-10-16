import { AuthState } from "@/src/types/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
    LoggedIn: false,
    email: '',
    userName: '',
    userId: 'ّ'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            const { email, userName, userId } = action.payload;
            state.LoggedIn = true;
            state.userName = userName;
            state.email = email;
            state.userId = userId;
        },
        removeActiveUser: (state) => {
            state.LoggedIn = false;
            state.userName = '';
            state.email = '';
            state.userId = '';
        }
    }
})
// console.log('state.auth.email',state.auth.email)
export const { setActiveUser, removeActiveUser } = authSlice.actions
export const selectLoggedIn = (state: { auth: AuthState }) => state.auth.LoggedIn
export const selectEmail = (state: { auth: AuthState }) => state.auth.email
export const selectUserName = (state: { auth: AuthState }) => state.auth.userName
export const selectUserId = (state: { auth: AuthState }) => state.auth.userId
export const selectAuth = (state: { auth: AuthState }) => state.auth
export default authSlice.reducer