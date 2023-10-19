import React from 'react';
import './Card.css'; // Підключіть стилі для карток


function Card({ id, title, description }) {
  return (
    <label htmlFor={`c${id}`} className="card">
      <div className="row">
        <div className="icon">{id}</div>
        <div className="descriptioncard">
          {/* <h4>{title}</h4> */}
          <p>{description}</p>
        </div>
      </div>
    </label>
  );
}

export default Card;
