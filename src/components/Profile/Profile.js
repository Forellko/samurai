import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className="profile">
      <div>
        <img
          src="https://st2.depositphotos.com/1021974/11917/i/950/depositphotos_119175322-stock-photo-colorful-cubes-illustration.jpg"
          alt="image_in_profile"
        ></img>
      </div>
      <div>ava + desc</div>
      <div>
        My posts
        <div>New post</div>
      </div>
      <div className="posts">
        <div className={classes.item}>post 1</div>
        <div className={classes.item}>post 2</div>
        <div className={classes.item}>post 3</div>
      </div>
      profile
    </div>
  );
};

export default Profile;
