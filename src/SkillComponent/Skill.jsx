


import React, { useState } from 'react';
import './Skill.scss'; 
import html from './Image/html.svg';
import css from './Image/css-icon.svg';
import react from './Image/react-js-icon.svg';
import redux from './Image/redux-icon.svg';
import tailwind from './Image/tailwind-css-icon.svg';
import sass from './Image/sass-icon.svg';
import javaScript from './Image/javascript-programming-language-icon.svg';
import typescript from './Image/typescript-programming-language-icon.svg';
const Skill = () => {
    const [activeSection, setActiveSection] = useState('education');

    const handleClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="example-basic">
                    <div className="titles-container">
                        <h2 
                            className={`skills-heading ${activeSection === 'skills' ? 'active' : ''}`} 
                            onClick={() => handleClick('skills')}
                        >
                            Skills
                        </h2>
                        <span className="and-text">and</span> 
                        <h2 
                            className={`skills-heading ${activeSection === 'education' ? 'active' : ''}`} 
                            onClick={() => handleClick('education')}
                        >
                            Education
                        </h2>
                    </div>
                    <div className="col-xs-10 col-xs-offset-1">
                        {activeSection === 'skills' && (
                            <div className="skill-images">
                                <div className="image-container">
                                    <img className="skill-image" src={html} alt="HTML" />
                                    <img className="skill-image" src={css} alt="CSS" />
                                        <img className="skill-image" src={javaScript} alt="JavaScript" />
                                                                              <img className="skill-image" src={typescript} alt="TYPESCRIPT" />
                                    <img className="skill-image" src={sass} alt="SASS" />

                                    <img className="skill-image" src={tailwind} alt="Tailwind" />

                                    <img className="skill-image" src={react} alt="React" />
                                    <img className="skill-image" src={redux} alt="Redux" />
                                </div>
                            </div>
                        )}
                        {activeSection === 'education' && (
                            <ul className="timeline">
                                <li className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-info"> 
                                        <h3 className="timeline-title">Intern</h3>
                                        <p className="timeline-date">2024- Present</p>
                                    </div>
                                    <div className="timeline-content">
                                        <p>Interning at ivoyant</p>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-info"> 
                                        <h3 className="timeline-title">Bachelor of Engineering</h3>
                                        <p className="timeline-date">2020-2024</p>
                                    </div>
                                    <div className="timeline-content">
                                        <p>B.E in Information Science and Engineering-8.76(cgpa)</p>
                                    </div>
                                </li>
                                 <li className="timeline-item">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-info"> 
                                        <h3 className="timeline-title">class-12</h3>
                                        <p className="timeline-date">2020</p>
                                    </div>
                                    <div className="timeline-content">
                                        <p>PCMB-85%</p>
                                    </div>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
