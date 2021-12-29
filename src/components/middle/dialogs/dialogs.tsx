import React, {ChangeEvent} from "react";
import d from "./dialogs.module.css"
import Message from "./Message/Message";
import Dialog from "./Dialog/dialog";



function Dialogs(props: any) {

    let state = props.messagePage
    let dialogsElement = state.dialogs.map((d: { id: any; nick: any; }) => <Dialog id={d.id} key= {d.id} nick={d.nick}/>);
    let messageElement = state.messages.map((m: { message: any; id: any}) => <Message key = {m.id} message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };


    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body)
    };

    return (<div className={d.grandDialogs}>
            <div className={d.dialogs}>
                {dialogsElement}
            </div>
            <div className={d.messages}>
                <div>{messageElement}</div>
                <div>
                    <div><textarea value = {newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter you message'/></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;