import React from "react";
import p from "./profile.module.css";
import Post from "./Posts/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Profile from "./profile";



function ProfileContainer(props: any) {

    let state = props.store.getState()

    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
            props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text: any) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action);
    }

    return (<Profile
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.postPage.myPostsData}
        newPostText={state.postPage.newPostText}

    />)
}

//
// myPostsData2={props.state.postPage.myPostsData}
// newPostText={props.state.postPage.newPostText}
// dispatch={props.dispatch}

export default ProfileContainer;