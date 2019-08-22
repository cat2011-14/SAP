import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return(
        <div className={s.item}>
            <img src='https://arte1.ru/images/detailed/4/23608.jpg'/>
            {props.message}
            <div>
                <span>like {props.like}</span>
            </div>
          </div >
     );
}

export default Post;