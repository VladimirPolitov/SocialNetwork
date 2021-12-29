import React, {ChangeEvent} from "react";
import d from "./dialogs.module.css"
// import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import Dialogs from "../dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogs-reducer";
import {connect} from "react-redux";
// import StoreContext from "../../../../StoreContext";import {connect} from "react-redux";




let mapStateToProps = (state: any) => {
    return{messagePage:{state}}
}

let mapDispatchToProps = (dispatch: any) => {
    return{
        updateNewMessageBody: ()=>{dispatch(sendMessageCreator())},
        sendMessage: (body: any)=>{dispatch(updateNewMessageBodyCreator(body))}
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

