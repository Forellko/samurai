import React from 'react';
import classes from './Post.module.css';

const Post = ({ message, likes }) => {
  return (
    <div className={classes.item}>
      <img
        className={classes.avatar}
        src="https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=20&m=1072093690&s=612x612&w=0&h=Ns3WeEm1VrIHhZOmhiGY_fYKvIlbJrVADLqfxyPQVPM="
        alt="avatar"
      />
      {message}
      <p>likes {likes}</p>
    </div>
  );
};

export default Post;
