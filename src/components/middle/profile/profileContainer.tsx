import React from "react";
import {addPostActionCreator, setUserProfile, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Profile from "./profile";
import {connect} from "react-redux";
import axios from "axios";
import {withRouter} from "react-router-dom";



class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        })
    }

    render() {
            return (
                <div>
                    <Profile {...this.props} profile={this.props.profile}/>
                </div>
            )
        }
}


const mapStateToProps = (state: any) => {
    return {
        profile: state.postPage.profile,
        posts: state.postPage.myPostsData,
        newPostText: state.postPage.newPostText
    }
}

withRouter (ProfileContainer)

export default connect(mapStateToProps, {setUserProfile, addPostActionCreator, updateNewPostTextActionCreator})(ProfileContainer);

