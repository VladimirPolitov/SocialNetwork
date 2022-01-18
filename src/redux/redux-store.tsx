import {combineReducers, createStore} from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let rootReducer = combineReducers({
    postPage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: userReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);

export default store;