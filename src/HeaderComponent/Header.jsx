
import React from "react";
import './_Header.scss';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <div className="logo">
          <h1>Ashwini</h1>
        </div>
      </div>
      <div className="header-right">
        <div className="nav-links">
          <a href="">About me</a>
          <a href="">Contact</a>
          <a href="">Skills</a>
          <a href="">Certificate</a>
        </div>
      </div>
    </header>
  );
};

export default Header;