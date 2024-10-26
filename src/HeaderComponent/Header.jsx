
import React from 'react';
import './_Header.scss';
import shelf from './image/shelf.svg';
import lamp1 from './image/lamp.svg';
import computer from './image/computer.svg';
const Header = () => {
  return (
    <div className="body-container">
    
      <div className="left-section">
      <div className="left-section-top">
      <p>Ashwini</p></div>
        
          <img src={lamp1} alt="lamp" className="lamp" />
         <img src={shelf} alt="shelf" className="shelf" />
        <div className="computer-screen">
          <img src={computer} alt="Computer"  />
        </div>
      </div>

      <div className="right-section">

       <div className="nav-links">
          <a href="About me">About Me</a>
          <a href="Skills">Skills</a>
          <a href="#workshop">workshop</a>
          <a href="#playing">playing</a>
        </div>
        
        <div className="desription"></div>
        <p className="intro"> 👋Hi, I'm <span className="name">Ashwini</span></p>
        <h1 className="main-text">
         Diving into coding with a focus on <span className='highlight'>creating</span> <span className='highlight'>engaging</span> and <span className='highlight'>interactive </span> things. Every project is a chance to learn something new, and I’m here to share it all!
        </h1>
         </div>

    </div>
  );
};

export default Header;
