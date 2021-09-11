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

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          {/* <Profile /> */}
          <Route component={Profile} path="/Profile" />
          <Route component={Dialogs} path="/Dialogs" />
          <Route component={News} path="/News" />
          <Route component={Music} path="/Music" />
          <Route component={Settings} path="/Settings" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
