import {rerenderEntireTree} from "../render";

let UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
let SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

let dialogsReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                ewMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}


export let sendMessageCreator = () => ({type: SEND_MESSAGE})
export let updateNewMessageBodyCreator = (body: any) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer

