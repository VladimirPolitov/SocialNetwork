import React from "react";
import h from './header.module.css'
import {NavLink} from "react-router-dom";


function Header(props: any) {
    return <header className={h.nav}>
        <div >{props.value}</div>
        <div className={h.loginBlock}>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    </header>
}

export default Header;