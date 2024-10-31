

// import React, { useState } from 'react';
// import './_Header.scss';
// import shelf from './image/shelf.svg';
// import lamp from './image/lamp.svg';
// import computer from './image/computer.svg';


// const Header = () => {
//   const [isCreatingVisible, setCreatingVisible] = useState(false);

//   const toggleCreatingContent = () => {
//     setCreatingVisible(!isCreatingVisible);
//   };

//   return (
//     <div className="header">
//       <div className="left-section">
//         <div className="left-section-top">
//           <p>Ashwini</p>
//         </div>
//         <img src={lamp} alt="lamp" className="lamp" />
//         <img src={shelf} alt="shelf" className="shelf" />
//         <div className="computer-screen">
//           <img src={computer} alt="Computer" />
//         </div>
//       </div>
//       <div className="right-section">
//         <div className="nav-links">
//           <a href="#about-me">About Me</a>
//           <a href="#skills">Skills</a>
//           <a href="#projects">Projects</a>
//           <a href="#certificates">Certificates</a>
//         </div>
//         <div className="header-description">
//           <p className="header-intro">
//             👋Hi, I'm <span className="name">Ashwini</span>
//           </p>
//           <h1 className="header-maintext">
//             Diving into coding with a focus on{' '}
//             <span
//               className="highlight cursor-pointer relative"
//               onClick={toggleCreatingContent}
//             >
//               creating ,
//             </span>{' '}
//             <span className="highlight">engaging</span> and <span className="highlight">interactive</span> things. Every project is a chance to learn something new, and I’m here to share it all!
//           </h1>
//           {isCreatingVisible && (
//             <div className="creating-content">
//               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEXx8/XCy9K/yND09vfw8vTP1tzp7O/i5ure4+fO1dvJ0dfT2d/EzNPt7/Lb4OXo6+4FeM7UAAAFL0lEQVR4nO2c24KrIAxFLdha7///t0dxOlWDSiAKztnrbR4G6SoJBKHZA6zJYncgQeCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ocEKBEwqcUOCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ot3Oi1KMq64FnWTVq+EueWzlRquqKVn/J+/ezEfdyHydKPYtc62yF1m1Xymq5ixPVdDnx8eslf1eCVu7hRFXFppAfLW39kNJyByeqOTJirGTvRsbKDZyozsHIpKUQsZK8E1Vu55GTrKTuRL0ZRoyVLviZaTtRVctUMuaVOnCoJO1E1WwjxsorbGZO2Qk7br5WuhApKTvpfZWMy5WAoZKuk6b1NhI4VJJ10uRBSsas0ng+OlUnVaARw9NvqCTqRERJpt9eUtJ0IqPEN36SdNIIKRnIPeafFJ0Ep9c5mr+qTdFJ2CRMpLAn5fScqJeokrFWZkoRdaImwtpw2T9iSnnxuiDoRFXda6hK28JzWTA14ryBxKFlTT9iTlT1W57o3Lta96yED8krRieknCw/DDuEP1TnKBlgzMlCTtZDXr+8pIjOwitK5x7JOKFD3mukiE85ix45S5FxYll46prdiv8ekpsU19wv4kS9LV1ouQPlrPzKliIzTuw9YDYiVfgFSxFx8rR+wcyMomSX9HYpTjlFwonqrB3gBc/JyYQjRcRJYe8Ay4l9rMlLcVi8iTjp7Y/nOBHcMjngWEoi4+TUlcmKw9rnxHzCWMqeU/ltkB9JEZl3SusnYmwQn1fm2GgPeiOzZrM9WZfu/3/BNDznYATLOLENffep+JppeMZBMSZUF9N6ljFM7KF3qpTduBZyQj4W53XTiRsEm1L2dr2k9k9W9Rtjq2BrJj9Zyk7pI7bP9lw8kfH+4KIFLGF77Sa3R90Un0POvHNCcYzsLVMk9+2buni1bd9xjMSJHMPmjCz7zov/fidW5GQ7OS/2e8BoRrLtrBfXScTIMVLsk09cJxEjZ8I6+cR1EmG1tsRaDsZ0EjlyDL0leuxOpulD4JTALtfXORRbnqVO1LDOePdtpoclWPsqulL+wt0P0SNnxFKrrp2opmuXl+5OuHA3PSmByDGQ9ezSydYdM+ELd4YUIsdANnoWTva2RSUv3JlnJRE5I2RbY+6kee1+dTrrhC7cPTZeMUdivZnydaIc3tdqqWuI6USOYZlSfp0oxzVlJxNByUSOYZlSPk6cDzqEXy17JDTn/LBMKRlTSRZ4X2giep2zZnEwZHLiGjifFt6BTtKKHMMspUxO2BkvDzoDm1jkGGa7bsaJx0t9XfgrOfuMlhezwsc48RrKufvhyiXXHatg8T2Zkm0eHzluxO8W4pXHKljkXycBt3h9blFdeqyCx2fPOguLbn6qTWsBu+Czxs/CopsdP4kmkx+mcZ8FRrfuWUqSTSYT005keDucW4iXnzRhMg17iYacC6A0VyZzzIQs0pBrUrn22JoXY4Us0pDjaZMzb+dIMX6/Qi0dHSU0XHySz48heqSaOs60vsvlq2mtpzj9OCh/Trgjew7afgLar63d6ec2SmTZm37+UyV7048K+Gmkm7O10A/8aaSbY7sEr8rYvYoNnX4Sr3EuYJVpVc35Ccu/innZbryMJ1n4v9f4N9FZ39XPZ931GYzMGH9VPHYfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADp8Q9+nG9anuOrfAAAAABJRU5ErkJggg==" alt="Creating Fun" className="creating-image" />

//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;




















// import React, { useState } from 'react';
// import './_Header.scss';
// import shelf from './image/shelf.svg';
// import lamp from './image/lamp.svg';
// import computer from './image/computer.svg';

// const Header = () => {
//   const [isCreatingVisible, setCreatingVisible] = useState(false);
//   const [isEngagingVisible, setEngagingVisible] = useState(false);
//   const [isInteractiveVisible, setInteractiveVisible] = useState(false);

//   const toggleCreatingContent = () => {
//     setCreatingVisible(!isCreatingVisible);
//   };

//   const toggleEngagingContent = () => {
//     setEngagingVisible(!isEngagingVisible);
//   };

//   const toggleInteractiveContent = () => {
//     setInteractiveVisible(!isInteractiveVisible);
//   };

//   return (
//     <div className="header">
//       <div className="left-section">
//         <div className="left-section-top">
//           <p>Ashwini</p>
//         </div>
//         <img src={lamp} alt="lamp" className="lamp" />
//         <img src={shelf} alt="shelf" className="shelf" />
//         <div className="computer-screen">
//           <img src={computer} alt="Computer" />
//         </div>
//       </div>
//       <div className="right-section">
//         <div className="nav-links">
//           <a href="#about-me">About Me</a>
//           <a href="#skills">Skills</a>
//           <a href="#projects">Projects</a>
//           <a href="#certificates">Certificates</a>
//         </div>
//         <div className="header-description">
//           <p className="header-intro">
//             👋Hi, I'm <span className="name">Ashwini</span>
//           </p>
//           <h1 className="header-maintext">
//             Diving into coding with a focus on{' '}
//             <span
//               className="highlight cursor-pointer relative"
//               onClick={toggleCreatingContent}
//             >
//               creating ,
//             </span>{' '}
//             <span
//               className="highlight cursor-pointer relative"
//               onClick={toggleEngagingContent}
//             >
//               engaging
//             </span>{' '}
//             and{' '}
//             <span
//               className="highlight cursor-pointer relative"
//               onClick={toggleInteractiveContent}
//             >
//               interactive
//             </span>{' '}
//             things. Every project is a chance to learn something new, and I’m here to share it all!
//           </h1>
//           {isCreatingVisible && (
//             <div className="creating-content">
//               <img src="" alt="Creating Fun" className="creating-image" />
//             </div>
//           )}
//           {isEngagingVisible && (
//             <div className="engaging-content">
//               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPWsfoMN-yeXC9yRE_-3-8JSIDKg8m-wZPA&s" alt="Engaging Fun" className="engaging-image" />
//             </div>
//           )}
//           {isInteractiveVisible && (
//             <div className="interactive-content">
//               <img src="" alt="Interactive Fun" className="interactive-image" />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;




import React, { useState } from 'react';
import './_Header.scss';
import shelf from './image/shelf.svg';
import lamp from './image/lamp.svg';
import computer from './image/computer.svg';
import iec from './image/iec.svg';

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
         
            Venturing into the world of coding, where every interactive project enhances my { } 
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
            <div className="creating-content">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPWsfoMN-yeXC9yRE_-3-8JSIDKg8m-wZPA&s" alt="Creating Fun" className="creating-image" />
            </div>
          )}
          {isEngagingVisible && (
            <div className="engaging-content">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPWsfoMN-yeXC9yRE_-3-8JSIDKg8m-wZPA&s" alt="Engaging Fun" className="engaging-image" />
            </div>
          )}
          {isInteractiveVisible && (
            <div className="interactive-content">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPWsfoMN-yeXC9yRE_-3-8JSIDKg8m-wZPA&s" alt="Interactive Fun" className="interactive-image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
