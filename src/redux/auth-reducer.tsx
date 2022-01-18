let SET_USER_DATA = 'SET_USER_DATA';


let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,

};

export type InitialStateType = {
    userId: any,
    email: any,
    login: any
}

let authReducer = (state = initialState, action: {
    data: any;
    type: any; }):
    InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
}


export let setUserData = (userId: any, email: any, login: any) => ({type: SET_USER_DATA, data:{userId, email, login}})

export default authReducer

