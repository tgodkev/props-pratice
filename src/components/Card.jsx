import React from 'react';

function Card(props){
return(
    
      <div className="card">
        <div className="top">
        <p> {props.id} </p>
          <h2 className="name">{props.name}</h2>
          <img className = "circle-img"
            src={props.imgURL}
            alt="card"
          />
        </div>
        <div className="bottom">
          <p className="info"> {props.phone} </p>
          <p
          className="info"> {props.email} </p>
        </div>
      </div>
)
}



export default Card;