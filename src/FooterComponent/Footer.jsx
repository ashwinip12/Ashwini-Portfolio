import React from 'react';
import './_Footer.scss';
import pop from './images/pop.svg';
import email from './images/email.svg';
import linkedin from './images/linkedin.svg';
const Footer=()=>{

  return (
    <div className='footer'>
     <div className='box'>
        <p className="intro1">I’m always up for a chat.</p>
        <div className="main-text1">
<p><span className='highlight1'>Pop me an email</span> at ashwinibms2020@gmail.com </p>
<h5>or give shoutout on social media.</h5>
        
        <div className='image1'>
        <img src={email} alt="pop-up" className="pop-up1"></img>
        <img src={linkedin} alt="pop-up" className="pop-up2"></img>
        </div>
        </div>
        <img src={pop} alt="pop-up" className="pop-up"></img>
        <p className='last-name'>Hi there</p>
         </div>
         
    </div>
  )
}

export default Footer;
