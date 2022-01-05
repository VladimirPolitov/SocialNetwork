import React from "react";
import n from "./navbar.module.css"
import {NavLink} from "react-router-dom";


function Navbar() {
    return (
        <div className={n.nav}>
            <p>NAVBAR</p>
            <div><NavLink to="/profile" className={n.item}>Profile</NavLink></div>
            <div><NavLink to="/dialogs" className={n.item}>Dialogs</NavLink></div>
            <div><NavLink to="/users" className={n.item}>Users</NavLink></div>
        </div>
    )
}

export default Navbar;