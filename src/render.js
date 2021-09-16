import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost } from './redux/state';

const renderDOM = ({ profilePage, dialogPage }) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        personsData={dialogPage.personsData}
        messagesData={dialogPage.messagesData}
        postsData={profilePage.postsData}
        addPost={addPost}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

export default renderDOM;
