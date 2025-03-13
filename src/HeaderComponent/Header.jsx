

import React, { useState } from 'react';
import './_Header.scss';



import animated from './image/animated.gif';

import skills from './image/skills.gif';
import engage1 from './image/engage1.gif';
import creativity from './image/creativity.gif';
const Header = () => {
  const [isCreatingVisible, setCreatingVisible] = useState(false);
  const [isEngagingVisible, setEngagingVisible] = useState(false);
  const [isInteractiveVisible, setInteractiveVisible] = useState(false);

  return (
    <div className="header">
      <div className="left-section">
        <div className="left-section-top">
          <p>Ashwini</p>
        </div>
     
      
        <div className="computer-screen">
          <img src={animated} alt="Computer" />
        </div>
      </div>
      <div className="right-section">
        <div className="nav-links">
          <a href="#Home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
        </div>
        <div className="header-description">
          <p className="header-intro">
            👋Hi, I'm <span className="name">Ashwini</span>
          </p>
          <h1 className="header-maintext">
            Venturing into the world of coding, where every interactive project enhances my{' '}
            <span
              className="highlight"
              onMouseEnter={() => setCreatingVisible(true)}
              onMouseLeave={() => setCreatingVisible(false)}
            >
              skills,
            </span>{' '}
            <span
              className="highlight "
              onMouseEnter={() => setEngagingVisible(true)}
              onMouseLeave={() => setEngagingVisible(false)}
            >
              creativity
            </span>{' '}
            and{' '}
            <span
              className="highlight"
              onMouseEnter={() => setInteractiveVisible(true)}
              onMouseLeave={() => setInteractiveVisible(false)}
            >
              engagement!
            </span>{' '}
          </h1>
          {isCreatingVisible && (
            <div className="skill-content">
              <img src={skills} alt="skill Fun" className="skill-image" />
            </div>
          )}
          {isEngagingVisible && (
            <div className="engage-content">
              <img src={creativity} alt="Engaging Fun" className="engage-image" />
            </div>
          )}
          {isInteractiveVisible && (
            <div className="creativity-content">
              <img src={engage1} alt="Creative Fun" className="creativity-image" />
            </div>
          )}
          
          <a href={`${process.env.PUBLIC_URL}/Ashwini _P- Resume.pdf`} download className="download-resume-button">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
