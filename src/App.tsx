import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/middle/profile/profile";
import Dialogs from "./components/middle/dialogs/dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props: any) {

    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header value="HEADER"/>
                <Navbar/>
                <div className='onMiddle'>
                    <Routes>
                        <Route path='/profile' element={<Profile myPostsData2={props.state.postPage.myPostsData}
                                                                 newPostText={props.state.postPage.newPostText}
                                                                 dispatch={props.dispatch}
                        />}/>
                        <Route path='/dialogs' element={<Dialogs store={props.store}
                        />}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;
