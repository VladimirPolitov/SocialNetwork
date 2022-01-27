import React, {useState} from "react";

const ProfileStatusWithHooks =(props: any)=> {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus()
    }


        return (
            <div>
                { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "---"}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} />
                </div>
                }
            </div>
        )
    }

export default ProfileStatusWithHooks