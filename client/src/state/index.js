import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: 'dark',
    userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'dark' ? 'light' : 'dark'
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload,
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout: (state) => {
            state.userInfo = null
            localStorage.removeItem('userInfo')
        },
    },
})

export const { setMode, setUserInfo, logout } = globalSlice.actions

export default globalSlice.reducer