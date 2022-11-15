import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

function LocationPin({text}) {
  return (
    <div className="pin">
      <FontAwesomeIcon icon={faLocationPin}/>
      <p className="pin-text">{text}</p>
    </div>
  );
}

export default LocationPin;