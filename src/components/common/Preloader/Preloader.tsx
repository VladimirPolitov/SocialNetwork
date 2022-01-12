import preloader from "../../../assets/images/preloader.svg";
import React from "react";

let Preloader = (props: any) => {
    return <div style={{backgroundColor: 'white'}}>
            <img src={preloader} />
        </div>
}

export default Preloader