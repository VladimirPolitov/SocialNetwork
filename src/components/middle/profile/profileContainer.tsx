import React from "react";
import {
    addPostActionCreator,
    getUserProfile,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import Profile from "./profile";
import {connect} from "react-redux";
import {Navigate, useParams} from "react-router-dom";




class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        let userId = this.props.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {

            return (
                <div>
                    <Profile {...this.props} profile={this.props.profile}/>
                </div>
            )
        }
}


let AuthRedirectComponent = (props: any) => {
    if (!props.isAuth) return <Navigate to={"/login"} />;
    return <ProfileContainer {...props}/>
}

const mapStateToProps = (state: any) => {
    return {
        profile: state.postPage.profile,
        posts: state.postPage.myPostsData,
        newPostText: state.postPage.newPostText,
        isAuth: state.auth.isAuth
    }
}

export const withRouter = (WrappedComponent: (props: any) => (JSX.Element)) => {
    return (props: object) => {
        const params = useParams();
        return (
            <WrappedComponent {...props} params={params}/>
        )
    }
}
const ProfileContainerURL = withRouter(AuthRedirectComponent)


export default connect(mapStateToProps, {getUserProfile, addPostActionCreator, updateNewPostTextActionCreator})(ProfileContainerURL);

