import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("dribbleuser") ? JSON.parse(localStorage.getItem("dribbleuser")) : null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("dribbleuser", JSON.stringify(action.payload));
        },
        clearUser: (state) => {
            state.user = null;
            localStorage.removeItem("dribbleuser");
        },
    },
});

export const { setUser , clearUser } = userSlice.actions;
export default userSlice.reducer;
