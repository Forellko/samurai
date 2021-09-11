import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import Link from './Link/Link';

const Nav = () => {
  return (
    <nav>
      <Link path="Profile" />
      <Link path="Dialogs" />
      <Link path="News" />
      <Link path="Music" />
      <Link path="Settings" />
    </nav>
  );
};

export default Nav;
