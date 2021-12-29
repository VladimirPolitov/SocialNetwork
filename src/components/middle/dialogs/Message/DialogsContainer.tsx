import React from "react";
import Dialogs from "../dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";





let mapStateToProps = (state: AppStateType) => {
    return{messagePage: state.messagePage}
}

let mapDispatchToProps = (dispatch: any) => {
    return{
        sendMessage: ()=>{dispatch(sendMessageCreator())},
        updateNewMessageBody: (body: any)=>{dispatch(updateNewMessageBodyCreator(body))}
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

