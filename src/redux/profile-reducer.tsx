import {profileAPI, usersAPI} from "../api/api";
import {rerenderEntireTree} from "../render";

let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let SET_USER_PROFILE = 'SET_USER_PROFILE';
let SET_STATUS = 'SET_STATUS';
let DELETE_POST = 'DELETE_POST'

let initialState = {
    myPostsData: [
        {id: '1', message: "Hi", likesCount: 12},
        {id: '2', message: "Whats up?", likesCount: 12},
        {id: '3', message: "Go over here!!!", likesCount: 12},
        {id: '4', message: "Wake up, Neo", likesCount: 12},
        {id: '5', message: "Best work ever!", likesCount: 12}
    ],
    newPostText: "it-kamasutra",
    profile: null,
    status: ""
}

let profileReducer = (state: { newPostText: string; myPostsData: { id: string; message: any; likesCount: number; }[]; } = initialState,
                      action: {
                          status: string | any;
                          type: string; newText: any; profile: any
                      }) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: any = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                myPostsData: [...state.myPostsData, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}

export let setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile})
export let addPostActionCreator = () => ({type: ADD_POST})
export let updateNewPostTextActionCreator = (text: any) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export let setStatus = (status: any) => ({type: SET_STATUS, status})
export const deletePost = (postId: any) => ({type: DELETE_POST, postId})

export let getUserProfile = (userId: any) => (dispatch: any) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}
export let getStatus = (userId: any) => (dispatch: any) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    })
}
export let updateStatus = (status: any) => (dispatch: any) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })
}

export default profileReducer

