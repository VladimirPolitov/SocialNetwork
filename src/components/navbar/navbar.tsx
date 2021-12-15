import React from "react";
import n from "./navbar.module.css"
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <div className={n.nav}>NAVBAR
            <div><NavLink to="/profile" className={n.item}>Profile</NavLink></div>
            <div><NavLink to="/dialogs" className={n.item}>Dialogs</NavLink></div>
        </div>
    )
}

export default Navbar;