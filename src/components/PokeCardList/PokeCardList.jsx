import { React, useEffect, useState } from "react";
import api from "../../Global";
import PokeCard from "../PokeCard/PokeCard";
import "./pokeCardList.css";

const PokeCardList = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [page, setPage] = useState(0);

  const getNextPage = async () => {
    const pokemonPage = await api.getPaginatedPokemons(page);

    setAllPokemons((prevAllPokemons) => prevAllPokemons.concat(pokemonPage));
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    getNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pokemon-container">
      <div className="all-container" data-testid="list">
        {allPokemons.map((pokemon, index) => (
          <PokeCard name={pokemon.name} image={pokemon.image} key={index} />
        ))}
      </div>
      <button className="load-more" onClick={getNextPage}>
        More Pokemons
      </button>
    </div>
  );
};

export default PokeCardList;
