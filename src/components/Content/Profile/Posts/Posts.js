import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';

const Posts = ({ postsData, addPost }) => {
  const newPostElement = React.createRef();

  return (
    <div className={styles.posts}>
      <div>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
          <div>
            <button
              onClick={() => {
                addPost(newPostElement.current.value);
                newPostElement.current.value = '';
              }}
            >
              Add post
            </button>
          </div>
        </div>
      </div>
      <div className={styles.items}>
        {postsData.map(({ id, text, likes }) => {
          return <Post text={text} likes={likes} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
