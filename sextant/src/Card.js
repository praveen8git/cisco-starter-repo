import './Card.css'
import React from 'react'

function Card(props) {
  return (
    <div className="card border-primary text-center text-bg-dark mt-5 mb-3 mx-auto bg-gradient shadow" >
      <div className="card-header">{props.title}</div>
      <div className="card-body p-4">
        <h5 className="card-title fs-3 text-primary">{props.content}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  )
}



export default Card