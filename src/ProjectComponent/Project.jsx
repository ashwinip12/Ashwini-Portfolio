

import React from 'react';
import './_Project.scss';

export const Project = () => {
  return (
    <section className="card-section">
      <h2 className="card__title1">Projects</h2>
      <div className='cards'>
        
        <article className="card card--1">
          <a href="https://github.com/ashwinip12/online-system-for-reserving-bus-tickets" target="_blank" >
            <div className="card__img card__img--1"></div>
          </a>
          <div className="card__info">
            <span className="card__category">TravelTix</span>
        
          </div>
        </article>

        <article className="card card--2">
          <a href="https://github.com/manjunath-dalavaye/Trade_track" target="_blank" rel=" noreferrer">
            <div className="card__img card__img--2"></div>
          </a>
          <div className="card__info">
            <span className="card__category">Trade Track</span>
         
          </div>
        </article>

        <article className="card card--3">
          <a href="https://github.com/ashwinip12/Todo-app" target="_blank" rel=" noreferrer">
            <div className="card__img card__img--2"></div>
          </a>
          <div className="card__info">
            <span className="card__category">Todo list</span>
          
          </div>
        </article>

        <article className="card card--4">
          <a href="https://github.com/ashwinip12/Shortest-Path" target="_blank" rel="noreferrer">
            <div className="card__img card__img--4"></div>
          </a>
          <div className="card__info">
            <span className="card__category">Shortest Path</span>
         

          </div>
        </article>

        <article className="card card--5">
          <a href="https://github.com/ashwinip12/login-signup-page" target="_blank" rel=" noreferrer">
            <div className="card__img card__img--5"></div>
          </a>
          <div className="card__info">
            <span className="card__category">Login and SignUp page</span>
           

          </div>
        </article>

         <article className="card card--6">
          <a href="https://github.com/ashwinip12/Ecommerce-website" target="_blank" rel="noopener noreferrer">
            <div className="card__img card__img--6"></div>
          </a>
          <div className="card__info">
            <span className="card__category">Ecommerce website</span>
          
           
          </div>
        </article>
      </div>
    </section>
  );
};

