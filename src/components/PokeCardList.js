import { React, useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./PokeCard";

const PokeCardList = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const { results, next } = await res.json();

    console.log(results);

    const urls = results.map(({ url }) => url);

    const pokemons = await Promise.all(
      urls.map(async (url) => {
        const res = await fetch(url);
        return res.json();
      })
    );

    setLoadMore(next);
    setAllPokemons(allPokemons.concat(pokemons));
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
