import React from 'react';
import Profile_Info from './Profile_Info/Profile_Info';
import Posts from './Posts/Posts';
import classes from './Profile.module.css';

const Profile = ({ postsData }) => {
  return (
    <div>
      <Profile_Info />
      <Posts postsData={postsData} />
    </div>
  );
};

export default Profile;
