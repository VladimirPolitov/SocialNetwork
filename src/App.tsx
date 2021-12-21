import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfileContainer from "./components/middle/profile/profileContainer";
import DialogsContainer from "./components/middle/dialogs/Message/DialogsContainer";

function App(props: any) {

    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header value="HEADER"/>
                <Navbar/>
                <div className='onMiddle'>
                    <Routes>
                        <Route path='/profile' element={<ProfileContainer store = {props.store}
                        />}/>
                        <Route path='/dialogs' element={<DialogsContainer store={props.store}
                        />}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;
