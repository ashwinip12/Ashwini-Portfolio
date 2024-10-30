

// // import React from 'react';
// // import './_Project.scss';

// // export const Project = () => {
// //   return (
// //     <section className="card-section">
// //     <h2 className="card__title1">Projects</h2>
// //     <div className='cards'>
      
    
// //       <article className="card card--1">
      
// //         <div className="card__img card__img--1"></div>
        
// //         <div className="card__info">
// //           <span className="card__category">TravelTix</span>
// //           <h3 className="card__title">Bus Ticket  Booking</h3>

         
// //         </div>
// //       </article>

// //       <article className="card card--2">

// //         <div className="card__img card__img--2"></div>

// //         <div className="card__info">
// //           <span className="card__category">Travel</span>
// //           <h3 className="card__title">Discover the sea</h3>
// //           <span className="card__by">by <a href="#" className="card__author">John Doe</a></span>
// //         </div>
// //       </article>
// //        <article className="card card--3">

// //         <div className="card__img card__img--2"></div>
      
// //         <div className="card__info">
// //           <span className="card__category">Travel</span>
// //           <h3 className="card__title">Discover the sea</h3>
// //           <span className="card__by">by <a href="#" className="card__author">John Doe</a></span>
// //         </div>
// //       </article>
      
// //       <article className="card card--4">

// //         <div className="card__img card__img--4"></div>

// //         <div className="card__info">
// //           <span className="card__category">Travel</span>
// //           <h3 className="card__title">Discover the sea</h3>
// //           <span className="card__by">by <a href="#" className="card__author">John Doe</a></span>
// //         </div>
// //       </article>
// //        <article className="card card--5">

// //         <div className="card__img card__img--5"></div>

// //         <div className="card__info">
// //           <span className="card__category">Travel</span>
// //           <h3 className="card__title">Discover the sea</h3>
// //           <span className="card__by">by <a href="#" className="card__author">John Doe</a></span>
// //         </div>
// //       </article>
      
// //       </div>
      
// //     </section>
// //   );
// // };


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
            <h3 className="card__title">Bus Ticket Booking</h3>
          </div>
        </article>

        <article className="card card--2">
          <a href="https://github.com/manjunath-dalavaye/Trade_track" target="_blank" rel="noopener noreferrer">
            <div className="card__img card__img--2"></div>
          </a>
          <div className="card__info">
            <span className="card__category">Travel</span>
            <h3 className="card__title">Discover the Sea</h3>
            <span className="card__by">by <a href="#" className="card__author">John Doe</a></span>
          </div>
        </article>

        <article className="card card--3">
          <a href="https://example.com/discover-the-sea" target="_blank" rel="noopener noreferrer">
            <div className="card__img card__img--2"></div>
          </a>
          <div className="card__info">
            <span className="card__category">Travel</span>
            <h3 className="card__title">Discover the Sea</h3>
            <span className="card__by">by <a href="#" className="card__author">John Doe</a></span>
          </div>
        </article>

        <article className="card card--4">
          <a href="https://example.com/discover-the-sea" target="_blank" rel="noopener noreferrer">
            <div className="card__img card__img--4"></div>
          </a>
          <div className="card__info">
            <span className="card__category">Travel</span>
            <h3 className="card__title">Discover the Sea</h3>
            <span className="card__by">by <a href="#" className="card__author">John Doe</a></span>
          </div>
        </article>

        <article className="card card--5">
          <a href="https://github.com/ashwinip12/login-signup-page" target="_blank" rel="noopener noreferrer">
            <div className="card__img card__img--5"></div>
          </a>
          <div className="card__info">
            <span className="card__category">Login and SignUp page</span>
            <h3 className="card__title">HTML and CSS</h3>
            <span className="card__by">by <a href="#" className="card__author">John Doe</a></span>
          </div>
        </article>
        
      </div>
    </section>
  );
};


// import React from 'react';
// import './_Project.scss'; // Make sure to import your SCSS file

//  const projects = [
//   {
//     title: 'Mantis Dashboard',
//     description:
//       '',
//     icons: ['💻', '🔗'], // Replace with actual icon components or images
//   },
//   {
//     title: 'Task Manager ',
//     description:
//       " ",
//     icons: ['💻', '🔗'], // Replace with actual icon components or images
//   },
//   {
//     title: 'Shortest Pathfinder',
//     description:
//       '',
//     icons: ['💻', '🔗'], // Replace with actual icon components or images
//   },
// ];

// export const Project = () => {
//   return (
//     <section className="projects-section">
//       <h2>Discover my projects, where creativity meets innovation</h2>
//       <div className="projects-container">
//         {projects.map((project, index) => (
//           <div className="project-card" key={index}>
//             <div className="icons">
//               {project.icons.map((icon, iconIndex) => (
//                 <div className="icon" key={iconIndex}>
//                   {icon}
//                 </div>
//               ))}
//             </div>
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

