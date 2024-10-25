// import React from "react";
// import './_Project.scss'

// export const Project=()=>
// {
// return(
//     <div className="Project-container">
//         <h1>Projects</h1>
//     </div>)

// }


import React from 'react';
import './_Project.scss';

export const Project = () => {
  return (
    <section className="car">
    <h2 className="card__title1">Projects</h2>
    <div className='cards'>
      
      <div className="cards">
      <article className="card card--1">
      
        <div className="card__img card__img--1"></div>
        
        <div className="card__info">
          <span className="card__category">Recipe</span>
          <h3 className="card__title">Crisp Spanish tortilla Matzo brei</h3>
          <span className="card__by">by <a href="#" className="card__author">Celeste Mills</a></span>
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
       <article className="card card--2">

        <div className="card__img card__img--2"></div>
      
        <div className="card__info">
          <span className="card__category">Travel</span>
          <h3 className="card__title">Discover the sea</h3>
          <span className="card__by">by <a href="#" className="card__author">John Doe</a></span>
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
      
      </div>
      </div>
    </section>
  );
};


