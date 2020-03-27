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
      <NavLink className="blue item is-active" to="/streams/new">
        Streamy
      </NavLink>
      <div className="right menu">
        <NavLink className="blue item is-active" to="/streams/show">
          All Streams
        </NavLink>

        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
