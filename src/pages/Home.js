import React from "react";
import { BsSearch } from "react-icons/bs";
import PokeCardList from "../components/PokeCardList/PokeCardList";

const Home = () => {
  return (
    <div className="app-container">
      <h1>PokeApi</h1>
      <div className="find-more">
        <input className="input" placeholder="find a pokemon" />
        <BsSearch />
      </div>
      <PokeCardList />
    </div>
  );
};

export default Home;
