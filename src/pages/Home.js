import React from "react";
import { Link } from "react-router-dom";

import PokeCardList from "../components/PokeCardList/PokeCardList";

const Home = () => {
  return (
    <div className="app-container">
      <h1>PokeApi</h1>
      <Link to="find">
        <button className="find-more">
          Click here to search for a pokemon
        </button>
      </Link>
      <PokeCardList />
    </div>
  );
};

export default Home;
