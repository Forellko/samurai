import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Content/Profile/Profile';
import Dialogs from './components/Content/Dialogs/Dialogs';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';

function App({ personsData, messagesData, postsData, addPost }) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav personsData={personsData} />
        <div className="app-wrapper-content">
          <Route
            render={() => {
              return <Profile postsData={postsData} addPost={addPost} />;
            }}
            path="/Profile"
          />
          <Route
            render={() => (
              <Dialogs personsData={personsData} messagesData={messagesData} />
            )}
            path="/Dialogs"
          />
          <Route component={News} path="/News" />
          <Route component={Music} path="/Music" />
          <Route component={Settings} path="/Settings" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
