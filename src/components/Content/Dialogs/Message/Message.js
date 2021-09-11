import React from 'react';
import classes from './Message.module.css';

const Message = ({ message, side }) => {
  return (
    <div>
      <img
        className={classes.avatar + ' ' + classes[side]}
        src="https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=20&m=1072093690&s=612x612&w=0&h=Ns3WeEm1VrIHhZOmhiGY_fYKvIlbJrVADLqfxyPQVPM="
        alt="avatar"
      />
      <div className={classes[side]}>{message}</div>
    </div>
  );
};

export default Message;
