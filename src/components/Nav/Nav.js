import React from 'react';
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import Link from './Link/Link';
import Friends from './Friends/Friends';

const Nav = ({ personsData }) => {
  return (
    <nav>
      <Link path="Profile" />
      <Link path="Dialogs" />
      <Link path="News" />
      <Link path="Music" />
      <Link path="Settings" />
      <h3>Friends</h3>
      <Friends personName={personsData[0].name}></Friends>
      <Friends personName={personsData[1].name}></Friends>
      <Friends personName={personsData[2].name}></Friends>
    </nav>
  );
};

export default Nav;
