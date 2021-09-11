import React from 'react';
import classes from './Link.module.css';
import { NavLink } from 'react-router-dom';

const Link = ({ path }) => {
  return (
    <nav>
      <div className={classes.item}>
        <NavLink to={`/${path}`} activeClassName={classes.activeLink}>
          {path}
        </NavLink>
      </div>
    </nav>
  );
};

export default Link;
