import React, {ChangeEvent} from "react";
import d from "./dialogs.module.css"
import Message from "./Message/Message";
import Dialog from "./Dialog/dialog";
import {Navigate} from "react-router-dom";
import { Field, reduxForm } from "redux-form";


function Dialogs(props: any) {

    let state = props.messagePage
    let dialogsElement = state.dialogs.map((d: { id: any; nick: any; }) => <Dialog id={d.id} key={d.id}
                                                                                   nick={d.nick}/>);
    let messageElement = state.messages.map((m: { message: any; id: any }) => <Message key={m.id}
                                                                                       message={m.message}/>);
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    };


    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body)
    };

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody);
    };


    if (props.isAuth == false) return (<Navigate to={"/login"}/>);

    return (<div className={d.grandDialogs}>
            <div className={d.dialogs}>
                {dialogsElement}
            </div>
            <div className={d.messages}>
                <div>{messageElement}</div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const AddMessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter you message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>)
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;