import React from 'react';
import './_Project.scss'; 

const Project = ({ title, author, date, tags, content, imageUrl }) => {
  return (
    <div>
      <div className='Project-container'>
       <h2>Project</h2>
      </div>
      
      
      <div className="blogCard">
        <div className="meta">
          <div
            className="photo"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <ul className="details">
            <li className="author">{author}</li>
            <li className="date">{date}</li>
            <li className="tags">
              <ul>
                {tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h1>{title}</h1>
          <p>{content}</p>
          <p className="readMore">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
