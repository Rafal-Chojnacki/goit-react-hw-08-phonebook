import React from 'react';
import { Link } from 'react-router-dom';
import css from './navigation.module.css'

const Navigation = () => {
  return (
    <nav >
      <ul className={css.navBox}>
        <li className={css.navBoxItem}>
          <Link to="/register">Register</Link>
        </li>
        <li className={css.navBoxItem}>
          <Link to="/login">Login</Link>
        </li>
        <li className={css.navBoxItem}>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
