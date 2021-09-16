import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Friends.module.css';

const Friends = ({ id, personName }) => {
  return (
    <div className={styles.person}>
      <img
        className={styles.avatar}
        src="https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=20&m=1072093690&s=612x612&w=0&h=Ns3WeEm1VrIHhZOmhiGY_fYKvIlbJrVADLqfxyPQVPM="
        alt="avatar"
      />
      <div className="person">{personName}</div>
    </div>
  );
};

export default Friends;
