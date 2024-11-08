import React from 'react';
import './_Footer.scss';
import footergif from "./images/footergif.gif";
import linkedin from './images/linkedin-app-icon.svg';
import instagram from './images/ig-instagram-icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <p className="footer-intro">I'm always up for a chat.</p>
        <div className="footer-maintext">
          <p>
            <span className='footer-highlight'>Pop me an email</span> @ ashwinibms2020@gmail.com
          </p>
          <h5>or give a shoutout on social media.</h5>
          <div className='footer-image'>
            <a href='https://www.linkedin.com/in/ashwini-p-15a8b2224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="footer-img1" />
            </a>
            <a href='https://www.instagram.com/ashwiniedigar/' target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="footer-img2" />
            </a>
          </div>
        </div>
        <img src={footergif} alt="Profile" className="footer-img3" />
      </div>
    </div>
  );
}

export default Footer;
