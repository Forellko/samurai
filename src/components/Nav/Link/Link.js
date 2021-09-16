import React from 'react';
import styles from './Link.module.css';
import { NavLink } from 'react-router-dom';

const Link = ({ path }) => {
  return (
    <nav>
      <div className={styles.item}>
        <NavLink to={`/${path}`} activeClassName={styles.activeLink}>
          {path}
        </NavLink>
      </div>
    </nav>
  );
};

export default Link;
