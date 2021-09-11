import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
  return (
    <div className="Posts">
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
      </div>
      <Post message="Hi, how are you" likes="5" />
      <Post message="First post" likes="10" />
    </div>
  );
};

export default Posts;
