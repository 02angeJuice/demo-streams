import React from 'react';
import '../utils/Footer.css';

const Footer = () => {
  return (
    <div className="ui inverted vertical footer segment form-page">
      <div className="ui container">
        <i className="big github alternate icon"></i>
        &nbsp;Streams <span>Mango</span> by bannditCode &copy;
        <div className="menu">
          <div className="item">
            <a href="/#">Home</a>
          </div>
          |
          <div className="item">
            <a href="/#">About</a>
          </div>
          |
          <div className="item">
            <a href="/#">Help</a>
          </div>
          |
          <div className="item">
            <a href="/#">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
