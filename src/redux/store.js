import { configureStore , combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userslice";
import authReducer from "./slices/authslice";

const rootreducer=combineReducers({
    user:userReducer,
    auth:authReducer
})

const store=configureStore({
    reducer:rootreducer
})

export default store;