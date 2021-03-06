import React from "react";
import Header from "./header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData, logout, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";


class HeaderContainer extends React.Component<any, any> {


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logout}) (HeaderContainer);