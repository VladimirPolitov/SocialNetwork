import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Profile from "./profile";
import store from "../../../redux/store";
import {connect} from "react-redux";


const mapStateToProps = (state: any) => {
    return {
        posts: state.postPage.myPostsData,
        newPostText: state.postPage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: any) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        },
        addPost: () => {
            store.dispatch(addPostActionCreator())
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;