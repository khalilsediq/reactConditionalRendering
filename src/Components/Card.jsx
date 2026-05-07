import React from 'react'
import '../App.css'
const Card = ({title, email, phone}) => {


  return (
    <div className="card">
      <div className="card-image">
        <img src="https://img.magnific.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" alt="Card Image" />
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
