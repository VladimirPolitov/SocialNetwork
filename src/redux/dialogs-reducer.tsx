import {rerenderEntireTree} from "../render";

let UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
let SEND_MESSAGE = 'SEND_MESSAGE';

let dialogsReducer = (state: any, action: any) => {

    if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
        state.newMessageBody = action.body;
        //rerenderEntireTree(this._state)
    } else if (action.type === 'SEND_MESSAGE') {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({id: '6', message: body});
        //rerenderEntireTree(this._state)
    }
    return state;
}



export let sendMessageCreator = () => ({type: SEND_MESSAGE})
export let updateNewMessageBodyCreator = (body: any) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer

