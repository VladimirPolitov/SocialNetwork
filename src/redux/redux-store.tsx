import {combineReducers, createStore} from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let rootReducer = combineReducers({
    postPage: profileReducer,
    messagePage: dialogsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);

export default store;