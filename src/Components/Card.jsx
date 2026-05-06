import React from 'react'
import '../App.css'
const Card = ({title, email, phone}) => {


  return (
    <div className="card">
      <div className="card-image">
        <img src="https://via.placeholder.com/300x200" alt="Card Image" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">
          {email}
        </p>
        <p>
          {phone}
        </p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
)
}

export default Card
