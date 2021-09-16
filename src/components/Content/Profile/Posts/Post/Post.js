import React from 'react';
import styles from './Post.module.css';

const Post = ({ text, likes }) => {
  return (
    <div className={styles.item}>
      <img
        className={styles.avatar}
        src="https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=20&m=1072093690&s=612x612&w=0&h=Ns3WeEm1VrIHhZOmhiGY_fYKvIlbJrVADLqfxyPQVPM="
        alt="avatar"
      />
      {text}
      <p>likes {likes}</p>
    </div>
  );
};

export default Post;
