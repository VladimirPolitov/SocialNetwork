import React from "react";
import {Navigate} from "react-router-dom";

export const WithAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Navigate to={"/login"} />
            return <Component {...this.props}/>
        }
    }
}