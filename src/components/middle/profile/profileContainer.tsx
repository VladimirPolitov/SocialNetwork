import React from "react";
import {
    addPostActionCreator,
    getStatus,
    getUserProfile,
    updateNewPostTextActionCreator, updateStatus
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
        this.props.getStatus(userId)
    }

    render() {

            return (
                <div>
                    <Profile {...this.props}
                             profile={this.props.profile}
                             status={this.props.status}
                             updateStatus={this.props.updateStatus}/>
                </div>
            )
        }
}



let AuthRedirectComponent =
    (props: any) => {
    if (!props.isAuth) return <Navigate to={"/login"} />;
    return <ProfileContainer {...props}/>
}

// const mapStateToPropsForRedirect = (state: any) => {return {}}
// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)
//



const mapStateToProps = (state: any) => {
    return {
        profile: state.postPage.profile,
        posts: state.postPage.myPostsData,
        newPostText: state.postPage.newPostText,
        isAuth: state.auth.isAuth,
        status: state.postPage.status
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


export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, addPostActionCreator, updateNewPostTextActionCreator})(ProfileContainerURL);

