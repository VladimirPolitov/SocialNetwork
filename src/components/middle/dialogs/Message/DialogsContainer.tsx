import React from "react";
import Dialogs from "../dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Navigate} from "react-router-dom";


let mapStateToProps = (state: AppStateType) => {
    return {
        messagePage: state.messagePage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body: any) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

let AuthRedirectComponent = (props: any) => {
    if (!props.isAuth) return <Navigate to={"/login"} />;
    return <Dialogs {...props}/>
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

