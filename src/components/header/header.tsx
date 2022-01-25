import React from "react";
import h from './header.module.css'
import {NavLink} from "react-router-dom";


function Header(props: any) {
    return <header className={h.nav}>
        <div>{props.value}</div>
        <div className={h.loginBlock}>
            {props.isAuth
                ? <div> {props.login} - <button onClick={props.logout}>Log Out</button></div>
                :<NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;