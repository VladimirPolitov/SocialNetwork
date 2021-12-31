let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = "SET_USERS"


export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: any
}


let initialState: InitialStateType = {
    users: []
};

type InitialStateType = {
    users: Array<UserType>
}

let userReducer = (state = initialState,
                   action: { type: any; userId: any; users: any; }): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return{
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;
    }
}


export let followAC = (userId: any) => ({type: FOLLOW, userId})
export let unfollowAC = (userId: any) => ({type: UNFOLLOW, userId})
export let setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})

export default userReducer

