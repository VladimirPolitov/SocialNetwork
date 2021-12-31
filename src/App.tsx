import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfileContainer from "./components/middle/profile/profileContainer";
import {DialogsContainer} from "./components/middle/dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props: any) {

    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header value="HEADER"/>
                <Navbar/>
                <div className='onMiddle'>
                    <Routes>
                        <Route path='/profile' element={<ProfileContainer />}/>
                        <Route path='/dialogs' element={<DialogsContainer />}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;
