import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'
import {persistReducer,persistStore} from "redux-persist"
import AuthSlice from "../Features/AuthSlice";
import thunk from 'redux-thunk'
const persistConfig={
    key:'root',
    version:1,
    storage
}
const rootReducer=combineReducers({
 authentication:AuthSlice,
})
const persistedReducer=persistReducer(persistConfig,rootReducer);
export const store=configureStore({
    reducer:persistedReducer,
    middleware:[thunk]
})
export const persistor=persistStore(store)