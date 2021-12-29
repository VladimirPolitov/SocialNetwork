import React from "react";
import p from "./profile.module.css";
import Post from "./Posts/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Profile from "./profile";
import store from "../../../redux/store";
import {connect} from "react-redux";


// function ProfileContainer() {
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState()
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//                 let onPostChange = (text: any) => {
//                     let action = updateNewPostTextActionCreator(text)
//                     store.dispatch(action);
//                 }
//                 return <Profile
//                     updateNewPostText={onPostChange}
//                     addPost={addPost}
//                     posts={state.postPage.myPostsData}
//                     newPostText={state.postPage.newPostText}/>
//             }}
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state: any) => {
    return{posts: state.postPage.myPostsData, newPostText: state.postPage.newPostText}
}

const mapDispatchToProps = (dispatch: any) => {
    return{updateNewPostText: (text: any) => {let action = updateNewPostTextActionCreator(text)
           dispatch(action);},
        addPost: () => {store.dispatch(addPostActionCreator())}
    }
}

const ProfileContainer = connect (mapStateToProps, mapDispatchToProps) (Profile);

export default ProfileContainer;