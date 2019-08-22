import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profile-reducer'

const MyPosts = (props) => {

  let postElem = props.posts.map (p => <Post message={p.message} like={p.like}/>);

  let newPostElement = React.createRef();

  let addPosts = () => {
    let text = newPostElement.current.value;
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

    return(
      <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
          <div>
          <textarea onChange = {onPostChange} ref={newPostElement}></textarea>
          </div>
          <div>
          <button onClick={addPosts}>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
          {postElem};
        </div>
      </div>

    );
}

export default MyPosts;