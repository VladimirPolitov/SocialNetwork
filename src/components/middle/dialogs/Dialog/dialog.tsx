import d from "../dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


function Dialog(props: any) {
    return <div className={d.dialog + ' ' + d.active}>
        <NavLink to={'/dialogs/' + props.id}>{props.nick}</NavLink>
    </div>
}

export default Dialog;