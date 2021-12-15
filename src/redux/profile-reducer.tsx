import {rerenderEntireTree} from "../render";

let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let profileReducer = (state: { newPostText: string; myPostsData: { id: string; message: any; likesCount: number; }[]; }, action: { type: string; newText: any; }) => {
    if (action.type === 'ADD-POST') {
        let newPost = {id: '6', message: state.newPostText, likesCount: 0};
        state.myPostsData.push(newPost);
        state.newPostText = '';
        //rerenderEntireTree(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText;
        //rerenderEntireTree(this._state)
    }
    return state;
}

export let addPostActionCreator = () => ({type: ADD_POST})
export let updateNewPostTextActionCreator = (text: any) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer

