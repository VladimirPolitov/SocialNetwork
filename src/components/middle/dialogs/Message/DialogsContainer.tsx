import React, {ChangeEvent} from "react";
import d from "./dialogs.module.css"
// import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "../dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogs-reducer";


function DialogsContainer(props: any) {

    let state = props.store.getState().messagePage
    // let dialogsElement = state.dialogs.map((d: { id: any; nick: any; }) => <Dialog id={d.id} nick={d.nick}/>);
    // let messageElement = state.messages.map((m: { message: any; }) => <Message message={m.message}/>);
    // let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };


    let onNewMessageChange = (body: any) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };

    return (<Dialogs updateNewMessageBody={onNewMessageChange}
                     sendMessage={onSendMessageClick}
                     messagePage={state}
    />)
}

export default DialogsContainer;