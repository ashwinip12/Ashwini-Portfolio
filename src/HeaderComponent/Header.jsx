
import React from 'react';
import './_Header.scss';
import shelf from './image/shelf.svg';
import lamp from './image/lamp.svg';
import computer from './image/computer.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="left-section">
        <div className="left-section-top">
          <p>Ashwini</p>
        </div>
        <img src={lamp} alt="lamp" className="lamp" />
        <img src={shelf} alt="shelf" className="shelf" />
        <div className="computer-screen">
          <img src={computer} alt="Computer" />
        </div>
      </div>

      <div className="right-section">
        <div className="nav-links">
          <a href="#about-me">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
        </div>

        <div className="header-description">
          <p className="header-intro">👋Hi, I'm <span className="name">Ashwini</span></p>
          <h1 className="header-maintext">
            Diving into coding with a focus on <span className='highlight'>creating</span> <span className='highlight'>engaging</span> and <span className='highlight'>interactive</span> things. Every project is a chance to learn something new, and I’m here to share it all!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
