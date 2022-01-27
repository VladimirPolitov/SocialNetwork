import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let initialState = {
    myPostsData: [
        {id: '1', message: "Hi", likesCount: 12},
        {id: '2', message: "Whats up?", likesCount: 12},
        {id: '3', message: "Go over here!!!", likesCount: 12},
        {id: '4', message: "Wake up, Neo", likesCount: 12},
        {id: '5', message: "Best work ever!", likesCount: 12}
    ],
    newPostText: "it-kamasutra",
    profile: null,
    status: ""
};


it('new post should be added', () => {
    let action = addPostActionCreator();
    let newState = profileReducer(initialState, action);
    expect(newState.myPostsData.length).toBe( 6);
    expect(newState.myPostsData[3].message).toBe( "Wake up, Neo");
})

it('name test', () => {
    let action = deletePost(1);
    expect(newstate.posts.length).toBe(3)
})

