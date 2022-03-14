import React from "react";
import "../index.css";

const Find = () => {
  return (
    <div className="search">
      <div className="title">
        <h1>Pokemon Stats</h1>
        <input type="text" placeholder="find a pokemon" />
        <button>Search Pokemon</button>
      </div>
    </div>
  );
};

export default Find;
