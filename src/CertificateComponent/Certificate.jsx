
import React, { useState } from "react";
import "./_Certificate.scss";
import programing from './Images/c-programing.svg';
import Udyamsheel from './Images/Udyamsheel.svg';
import js from './Images/js.svg';
import fullstack from './Images/fullstack.svg';
import dbms from './Images/dbms.svg';
import technical from './Images/technical.svg';

export const Certificate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const certificates = [
    { title: "Internship Certificate", imgSrc:fullstack, text: "completed internship at genesis" },
    { title: "C-programing made easy", imgSrc: programing, text: "" },
    { title: "Javascript", imgSrc: js, text: "Learnt javascript for beginners" },
    { title: "udyamsheel-2022", imgSrc: Udyamsheel, text: "Participated in udyamsheel to present our ideas" },
   { title: "Technical Workshop", imgSrc: technical, text: "Participated in Technical Workshop" },
   { title: "Database Application Development", imgSrc: dbms, text: "Participated in Database Application Development " },

  ];

  const visibleCards = certificates.slice(currentIndex, currentIndex + 3);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 3 : Math.max(certificates.length - 3, 0)));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3 < certificates.length ? prevIndex + 3 : 0));
  };

  return (
    <div className="cert-main">
      <h1 className="cert-title">Certificates</h1>
      <div className="cert-cards-container">
        {visibleCards.map((certificate, index) => (
          <div className="cert-card" key={index}>
            <img src={certificate.imgSrc} alt={certificate.title} className="cert-card_image" />
            <div className="cert-card_content">
              <h2 className="cert-card_title">{certificate.title}</h2>
              <p className="cert-card_text">{certificate.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cert-buttons">
        <button className="scroll-button prev" onClick={handlePrev}>{"<"}</button>
        <button className="scroll-button next" onClick={handleNext}>{">"}</button>
      </div>
    </div>
  );
};


