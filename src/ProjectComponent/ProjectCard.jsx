
import React from 'react';

import Project from './Project';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Online bus Ticket Booking System',
      subtitle: 'Opening a door to the future',
      author: 'Ashwini',
      date: 'Aug. 24, 2022',
      tags: ['Learnt', 'HTML', 'CSS','JavaScript'],
      content:'An online bus ticket booking system streamlines the process of purchasing bus tickets, allowing users to search routes, compare prices, and book tickets conveniently from anywhere. It offers features like real-time seat availability and instant booking confirmation, enhancing the travel experience.',
      imageUrl: 'data:image/jpeg;base64,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',
    }

    

  ];

  return (
    <div className="blog-container">
      {blogPosts.map((post, index) => (
        <Project key={index} {...post} />
      ))}
    </div>
  );
};

export default Blog;