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
    data: any;
    type: any; }):
    InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}


export let setAuthUserData = (userId: any, email: any, login: any) => ({type: SET_USER_DATA, data:{userId, email, login}})

export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login))
        }
    })
}

export default authReducer

