// // import React from 'react';
// // import './Skill.scss';

// // export const Skill=()=>
// // {
// //  return(
// //  <div className='Skill-container'>
// //  <div className='Skill-title'>
// //  <h3>Skill Title</h3>
// //  </div>
// //  <div className='Skill-image'>
// //  <img src='data:image/jpeg;base64,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' alt="skill-image">
// //  </img>
// //  </div>
    
 
// //  </div>
// //  )

// // }


// import React, { useState, useEffect } from 'react';
// import './Skill.scss'

// const Skill = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const workExperienceSection = document.getElementById('workexperience');
//       if (workExperienceSection) {
//         const sectionPosition = workExperienceSection.getBoundingClientRect().top;
//         const screenPosition = window.innerHeight / 1.3; // Trigger visibility when section is near the viewport
//         if (sectionPosition < screenPosition) {
//           setIsVisible(true);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div id="workexperience" className="sectionClass">
//       <div className="row">
//         <div className="sectiontitle">
//           <h2>Work experience</h2>
//           <span className="headerLine"></span>
//         </div>
//         <div className="fullWidth eight columns">
//           <ul className="cbp_tmtimeline">
//             {workExperiences.map((experience, index) => (
//               <li key={index}>
//                 <div className={`cbp_tmicon ${experience.iconClass}`}>
//                   <i className="faPra fa-briefcase"></i>
//                 </div>
//                 <div className={`cbp_tmlabel wow fadeInRight animated ${isVisible ? 'trans' : ''}`}>
//                   <h3>{experience.title}</h3>
//                   <div className="date">
//                     <i className="fa fa-calendar"></i>{experience.date}
//                   </div>
//                   <h4><i className="fa fa-flag"></i>{experience.company}</h4>
//                   <p className="projectParagraph">{experience.description}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

    
//     </div>
//   );
// };

// const workExperiences = [
//   {
//     title: 'Web developer',
//     date: 'April 2014 - Current',
//     company: 'Davic Company, Bratislava',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit obcaecati ipsa quae, iusto laudantium qui, nisi eum modi perspiciatis quasi facilis corporis iure soluta enim incidunt itaque aspernatur sequi tempora.',
//     iconClass: 'cbp_tmicon-phone',
//   },
//   {
//     title: 'Web designer',
//     date: 'June 2012 - April 2014',
//     company: 'Fannous Company, Prague',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quasi perspiciatis, aliquid sed maiores accusamus. Adipisci quidem nostrum quos quae doloremque esse a, ipsum earum, recusandae omnis dignissimos et sint.',
//     iconClass: 'cbp_tmicon-screen',
//   },
//   {
//     title: 'Web designer',
//     date: 'November 2009 - June 2012',
//     company: 'Techixs Company, London',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla labore atque alias ipsa, nam quod rerum repellat cumque, aliquam sequi vitae voluptatibus cum soluta incidunt tempore accusamus eius sed excepturi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora natus veritatis aperiam repellendus dolor vel, expedita assumenda eos, mollitia quae ullam esse voluptas vero. Dolores culpa eaque vitae eum quibusdam?',
//     iconClass: 'cbp_tmicon-mail',
//   },
//   {
//     title: 'Freelancer',
//     date: 'January 2006 - November 2009',
//     company: 'Freelance Work',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iusto, possimus hic at quisquam, incidunt illo asperiores et nobis, qui nulla consequatur molestiae quibusdam expedita dignissimos? Iste eum velit quos.',
//     iconClass: 'cbp_tmicon-phone',
//   },
// ];

// export default Skill;


import React from 'react';
import './Skill.scss'; // Import your SCSS file here

const Skill = () => {
    return (
        <div>
          
            <div className="container-fluid">
               
                <div className=" example-basic">
                    <div className="example-title">
                        <h2 className='skills-heading'>Skills</h2>
                        
                    </div>
                    <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                        <ul className="timeline">
                            {[
                                { date: 'July 24, 2024', title: 'Intern', description: 'Joined as an intern at Ivoyant ' },
                                { date: 'May 30, 2024', title: 'Bachelor of Engineering', description: 'Completed B.E with a CGPA of 8.68' },
                                { date: 'April 2020', title: null, description: null, period: true },
                                { date: 'December 02, 2020', title: 'Bachelor of Engineering' },
                                { date: 'April 28, 2018', title: 'class 12th', description: 'Completed with 85%' },
                                           { date: 'April 2018', title: null, description: null, period: true },
                                { date: 'April 02, 2018', title: 'class 10th', description: 'completed with 87%' },
                      
                            ].map((event, index) => (
                                <li className={`timeline-item ${event.period ? 'period' : ''}`} key={index}>
                                    <div className="timeline-info">
                                        {event.title ? <span>{event.date}</span> : null}
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        {event.title ? (
                                            <>
                                                <h3 className="timeline-title">{event.title}</h3>
                                                <p>{event.description}</p>
                                            </>
                                        ) : (
                                            <h2 className="timeline-title1">{event.date}</h2>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                  
            </div>
        </div>
    );
};
                           
export default Skill;
