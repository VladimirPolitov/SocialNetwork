import React from "react";
import Dialogs from "../dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Navigate} from "react-router-dom";
import {WithAuthRedirect} from "../../../../hoc/WithAuthRedirect";
import { compose } from "redux";


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

compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect)(Dialogs)

let AuthRedirectComponent = WithAuthRedirect(Dialogs)


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

