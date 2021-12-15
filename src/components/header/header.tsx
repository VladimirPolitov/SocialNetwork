import React from "react";
import h from'./header.module.css'


function Header(props: any) {
    return  <div className={h.nav}>{props.value}</div>
}

export default Header;