import { combineReducers,configureStore } from "@reduxjs/toolkit";
import useReducer from "./users/users.slice.js"
import storage from 'redux-persist/lib/storage'
import { persistReducer,persistStore } from "redux-persist";
// redux -- store,Actions,reducers


const rootReducer = combineReducers({
    reducer:{
        user: useReducer
    }
})

const PersistConfig = {
    key : "root",
    storage
}

const persistReducer = persistedReducer(PersistConfig,rootReducer)

export const store = configureStore({
    reducer : persistReducer,
    middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
})


export const persistor = persistStore(store) 