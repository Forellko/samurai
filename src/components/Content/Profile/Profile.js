import React from 'react';
import Profile_Info from './Profile_Info/Profile_Info';
import Posts from './Posts/Posts';
import styles from './Profile.module.css';

const Profile = ({ postsData, renderDOM, addPost }) => {
  return (
    <div>
      <Profile_Info />
      <Posts postsData={postsData} addPost={addPost} />
    </div>
  );
};

export default Profile;
