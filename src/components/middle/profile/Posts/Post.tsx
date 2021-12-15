import React from "react";

type postType = {
    message: string
    likesCount: number
}

function Post (props: postType) {

    return <div>
        {props.message} {props.likesCount}
    </div>
}

export default Post;
