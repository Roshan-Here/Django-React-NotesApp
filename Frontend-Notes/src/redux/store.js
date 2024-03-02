import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./users/users.slice.js"
// redux -- store,Actions,reducers


const store = configureStore({
    reducer:{
        user: useReducer
    }
})

