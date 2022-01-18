import React from "react";
import h from './header.module.css'


function Header(props: any) {
    return
    <header>
        <div className={h.nav}>{props.value}</div>
        <div className={h.loginBlock}></div>
    </header>
}

export default Header;