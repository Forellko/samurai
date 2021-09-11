import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

const { postsData } = state.profilePage;
const { personsData, messagesData } = state.dialogPage;

ReactDOM.render(
  <React.StrictMode>
    <App
      personsData={personsData}
      messagesData={messagesData}
      postsData={postsData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
