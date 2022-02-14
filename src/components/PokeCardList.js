import { React, useEffect, useState } from "react";
import PokeCard from "./PokeCard";

const PokeCardList = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }

    createPokemonObject(data.results);
    await console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="pokemon-container">
      <div className="all-container">
        {allPokemons.map((pokemon, index) => (
          <PokeCard
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            key={index}
          />
        ))}
      </div>
      <button className="load-more" onClick={() => getAllPokemons()}>
        More Pokemons
      </button>
    </div>
  );
};

export default PokeCardList;
