import React from "react";
import p from "./profile.module.css";
import Post from "./Posts/Post";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import {updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


function Profile(props: any) {
        let postsElement = props.posts.map((p: { message: string; likesCount: number; }) =>
        <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let onAddPost = () => {
        props.addPostActionCreator()
    };
    let onPostChange = () => {
        let text = newPostElement.current?.value;
        props.updateNewPostTextActionCreator(text)
    }

    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        {/*<img className={p.backimg}*/}
        {/*     src='https://catherineasquithgallery.com/uploads/posts/2021-02/1612628363_112-p-salatovii-fon-estetika-142.jpg'/>*/}
        <div><img src={props.profile.photos.large}/></div>

        <ProfileStatus  status={props.status} updateStatus={props.updateStatus} />

        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>

        <button onClick={onAddPost}>КНОПКА</button>
        <div>
            {postsElement}
        </div>
    </div>
}

export default Profile;