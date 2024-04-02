import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("dribbletoken") ? JSON.parse(localStorage.getItem("dribbletoken")) : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem("dribbletoken", JSON.stringify(action.payload));
        },
        clearToken: (state) => {
            state.token = null;
            localStorage.removeItem("dribbletoken");
        },
    },
});

export const { setToken , clearToken } = authSlice.actions;
export default authSlice.reducer;
