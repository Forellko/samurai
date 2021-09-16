import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Person.module.css';

const Person = ({ id, name }) => {
  return (
    <div className={styles.person}>
      <img
        className={styles.avatar}
        src="https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=20&m=1072093690&s=612x612&w=0&h=Ns3WeEm1VrIHhZOmhiGY_fYKvIlbJrVADLqfxyPQVPM="
        alt="avatar"
      />
      <NavLink to={`/Dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

export default Person;
