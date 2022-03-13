import React from "react";
import "./PokeCard.css";

const PokeCard = ({ name, image }) => {
  return (
    <div className="card-container">
      <img src={image} alt={name} data-testid="image" />
      <div className="detail-wrapper">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default PokeCard;
