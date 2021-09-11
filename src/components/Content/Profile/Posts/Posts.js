import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';

const Posts = ({ postsData }) => {
  return (
    <div className={classes.posts}>
      <div>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
      </div>
      <div className={classes.items}>
        {postsData.map(({ id, text, likes }) => {
          return <Post text={text} likes={likes} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
