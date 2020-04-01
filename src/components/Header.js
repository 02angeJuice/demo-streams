import React from 'react';
import '../utils/Header.css';
import GoogleAuth from './GoogleAuth';

import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui top fixed inverted menu">
      <Link to="/" className="item">
        <img src="https://i.imgur.com/xP3dzNn.png" alt="" />
      </Link>
      <NavLink exact className="blue item is-active" to="/">
        Streamy
      </NavLink>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
