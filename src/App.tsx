import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar";
import ProfileContainer from "./components/middle/profile/profileContainer";
import {DialogsContainer} from "./components/middle/dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";


function App(props: any) {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <HeaderContainer value="HEADER"/>
                <Navbar/>
                <div className='onMiddle'>
                    <Routes>
                        <Route path='/profile' element={<ProfileContainer />}/>
                        <Route path='/dialogs' element={<DialogsContainer />}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<UsersContainer/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;
