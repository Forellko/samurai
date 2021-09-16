import React from 'react';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import Person from './Person/Person';

const Dialogs = ({ personsData, messagesData }) => {
  const inputDataVD = React.createRef();

  const onInputMessage = () => {
    alert(inputDataVD.current.value);
  };

  return (
    <div className={styles.content}>
      <div className={styles.persons}>
        {personsData.map(({ id, name }) => {
          return <Person name={name} id={id} />;
        })}
      </div>
      <div className={styles.messages}>
        {messagesData.map(({ id, message, side }) => {
          return <Message message={message} side={side} />;
        })}
      </div>
      <div className={styles.input}>
        <textarea ref={inputDataVD}></textarea>
        <button onClick={onInputMessage}>ok</button>
      </div>
    </div>
  );
};

export default Dialogs;
