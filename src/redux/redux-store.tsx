import {combineReducers, createStore} from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    postPage: profileReducer,
    messagePage: dialogsReducer
})

let store = createStore(reducers);

export default store;