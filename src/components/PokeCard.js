import React from "react";

const PokeCard = ({ name, image }) => {
  return (
    <div className="card-container">
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default PokeCard;
