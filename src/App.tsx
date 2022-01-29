import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar";
import ProfileContainer from "./components/middle/profile/profileContainer";
import {DialogsContainer} from "./components/middle/dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginPage from "./components/login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";



class App extends React.Component<any> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <BrowserRouter>
                <div className='wrapper'>
                    <HeaderContainer value="HEADER"/>
                    <Navbar/>
                    <div className='onMiddle'>
                        <Routes>
                            <Route path='/profile' element={<ProfileContainer/>}/>
                            <Route path='/dialogs' element={<DialogsContainer/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/login' element={<LoginPage/>}/>
                        </Routes>
                    </div>

                </div>
            </BrowserRouter>
        )
    }
}

export default connect(null, {getAuthUserData}) (App);
