

// CreativityCard.js
import React from 'react';
import { Card as AntCard } from 'antd'; // Rename Ant Design Card to avoid confusion
import './_Card.scss'; // Add your styles

const CreativityCard = ({ onClose }) => {
  return (
    <div className="creativity-card">
      <AntCard style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
        <div className="custom-image">
          <img 
            alt="example" 
            width="100%" 
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" 
          />
        </div>
        <div className="custom-card">
          <h3>Europe Street beat</h3>
          <p>www.instagram.com</p>
          <button onClick={onClose} className="close-button">Close</button> {/* Close button */}
        </div>
      </AntCard>
    </div>
  );
};

export default CreativityCard;
