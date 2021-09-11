import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import Person from './Person/Person';

const Dialogs = ({ personsData, messagesData }) => {
  return (
    <div className={classes.content}>
      <div className={classes.persons}>
        {personsData.map(({ id, name }) => {
          return <Person name={name} id={id} />;
        })}
      </div>
      <div className={classes.messages}>
        {messagesData.map(({ id, message, side }) => {
          return <Message message={message} side={side} />;
        })}
      </div>
    </div>
  );
};

export default Dialogs;
