import React from 'react';
import Rating from "./Rating";

function DriverCard (props){
    return (
        <div className="driverCard">
          <div className="driverCard-photo">
            <img src={props.img} alt="user" />
          </div>
        <div>
          <h2>{props.name}</h2>
          <Rating>{props.rating}</Rating>
          <p>
            {props.car.model} - {props.car.licensePlate}
          </p>
        </div>
      </div>
    )
}

export default DriverCard;