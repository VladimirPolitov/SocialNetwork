// import {combineReducers, createStore} from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"

let rootReducer = combineReducers({
    postPage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;