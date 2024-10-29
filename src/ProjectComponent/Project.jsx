

import React from 'react';
import './_Project.scss';

export const Project = () => {
  return (
    <section className="card-section">
    <h2 className="card__title1">Projects</h2>
    <div className='cards'>
      
    
      <article className="card card--1">
      
        <div className="card__img card__img--1"></div>
        
        <div className="card__info">
          <span className="card__category">TravelTix</span>
          <h3 className="card__title">Bus Ticket  Booking</h3>

         
        </div>
      </article>

      <article className="card card--2">

        <div className="card__img card__img--2"></div>

        <div className="card__info">
          <span className="card__category">Travel</span>
          <h3 className="card__title">Discover the sea</h3>
          <span className="card__by">by <a href="#" className="card__author">John Doe</a></span>
        </div>
      </article>
       <article className="card card--3">

        <div className="card__img card__img--2"></div>
      
        <div className="card__info">
          <span className="card__category">Travel</span>
          <h3 className="card__title">Discover the sea</h3>
          <span className="card__by">by <a href="#" className="card__author">John Doe</a></span>
        </div>
      </article>
     
      
      </div>
      
    </section>
  );
};


