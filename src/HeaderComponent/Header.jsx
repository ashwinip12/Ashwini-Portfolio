

import React, { useState } from 'react';
import './_Header.scss';
import shelf from './image/shelf.svg';
import lamp from './image/lamp.svg';
import computer from './image/computer.svg';
import creativity1 from './image/creativity1.svg';
import skill from './image/skill.svg';
import engage from './image/engage.svg';

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
          <p className="header-intro">
            👋Hi, I'm <span className="name">Ashwini</span>
          </p>
          <h1 className="header-maintext">
            Venturing into the world of coding, where every interactive project enhances my{' '}
            <span
              className="highlight cursor-pointer relative"
              onMouseEnter={() => setCreatingVisible(true)}
              onMouseLeave={() => setCreatingVisible(false)}
            >
              skills,
            </span>{' '}
            <span
              className="highlight cursor-pointer relative"
              onMouseEnter={() => setEngagingVisible(true)}
              onMouseLeave={() => setEngagingVisible(false)}
            >
              creativity
            </span>{' '}
            and{' '}
            <span
              className="highlight cursor-pointer relative"
              onMouseEnter={() => setInteractiveVisible(true)}
              onMouseLeave={() => setInteractiveVisible(false)}
            >
              engagement!
            </span>{' '}
          </h1>
          {isCreatingVisible && (
            <div className="skill-content">
              <img src={skill} alt="skill Fun" className="skill-image" />
            </div>
          )}
          {isEngagingVisible && (
            <div className="engage-content">
              <img src={creativity1} alt="Engaging Fun" className="engage-image" />
            </div>
          )}
          {isInteractiveVisible && (
            <div className="creativity-content">
              <img src={engage} alt="Creative Fun" className="creativity-image" />
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
