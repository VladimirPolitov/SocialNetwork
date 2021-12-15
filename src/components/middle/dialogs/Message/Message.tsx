import d from "../dialogs.module.css";
import React from "react";


function Message(props: any) {
    return <div className={d.message}>{props.message}</div>
}

export default Message;