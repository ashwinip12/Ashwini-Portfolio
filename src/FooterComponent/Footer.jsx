import React from 'react';
import './_Footer.scss';
import pop from './images/pop-up.svg';
import email from './images/email.svg';
import linkedin from './images/linkedin.svg';
const Footer=()=>{

  return (
    <div className='footer'>
     <div className='footer-container'>
        <p className="footer-intro">I’m always up for a chat.</p>
        <div className="footer-maintext">
<p><span className='footer-highlight'>Pop me an email</span> at ashwinibms2020@gmail.com </p>
<h5>or give shoutout on social media.</h5>
        
        <div className='footer-image'>
        <img src={email} alt="illustration" className="footer-img1"></img>
        <img src={linkedin} alt="illustration" className="footer-img2"></img>
        </div>
        </div>
        <img src={pop} alt="illustration" className="footer-img3"></img>
     
         </div>
         
    </div>
  )
}

export default Footer;
