import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
      <footer>footer</footer>
    </div>
  );
}

export default App;
