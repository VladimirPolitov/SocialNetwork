import {rerenderEntireTree} from "../render";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";



let store = {
    _state: {
        postPage: {
            myPostsData: [
                {id: '1', message: "Hi", likesCount: 12},
                {id: '2', message: "Whats up?", likesCount: 12},
                {id: '3', message: "Go over here!!!", likesCount: 12},
                {id: '4', message: "Wake up, Neo", likesCount: 12},
                {id: '5', message: "Best work ever!", likesCount: 12}
            ],
            newPostText: "it-kamasutra"
        },
        messagePage: {
            messages: [
                {id: '1', message: "Hi"},
                {id: '2', message: "Whats up?"},
                {id: '3', message: "Go over here!!!"},
                {id: '4', message: "Wake up, Neo"},
                {id: '5', message: "Best work ever!"}
            ],
            dialogs: [
                {id: '1', nick: 'Subzero'},
                {id: '2', nick: 'Shang-Tsung'},
                {id: '3', nick: 'Tanya'},
                {id: '4', nick: 'Goro'},
                {id: '5', nick: 'Scorpion'}
            ],
            newMessageBody: "",
        }
    },
    getState() {
        return this._state;
    },


    dispatch(action: any) {
        this._state.postPage = profileReducer(this._state.postPage, action)
        this._state.messagePage = dialogsReducer(this._state.messagePage, action)
        rerenderEntireTree(this._state)
    }
}



export default store;
