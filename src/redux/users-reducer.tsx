let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'


export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: any
}


let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false

};

export type InitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean

}

let userReducer = (state = initialState,
                   action: { type: any; userId: any; users: any; currentPage: any; count: any }): InitialStateType => {
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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }

        default:
            return state;
    }
}


export let followAC = (userId: any) => ({type: FOLLOW, userId})
export let unfollowAC = (userId: any) => ({type: UNFOLLOW, userId})
export let setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users})
export let setCurrentPageAC = (currentPage: any) => ({type: SET_CURRENT_PAGE, currentPage})
export let setUsersTotalCountAC = (totalUsersCount: any) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

export default userReducer

