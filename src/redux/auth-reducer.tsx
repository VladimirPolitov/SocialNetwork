import {authAPI} from "../api/api";

let SET_USER_DATA = 'SET_USER_DATA';


let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export type InitialStateType = {
    userId: any,
    email: any,
    login: any,
    isAuth: boolean
}

let authReducer = (state = initialState, action: {
    payload: any;
    type: any; }):
    InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}


export let setAuthUserData = (userId: any, email: any, login: any, isAuth: any) => ({type: SET_USER_DATA, payload:{userId, email, login, isAuth}})

export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const login = (email: any, password: any, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    })
}

export const logout = () => (dispatch: any) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    })
}

export default authReducer

