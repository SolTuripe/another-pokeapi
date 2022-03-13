import { React, useEffect, useState } from "react";
import axios from "axios";
import apiServer from "../../Globlal";
import PokeCard from "../PokeCard/PokeCard";
import "./PokeCardList.css";

const PokeCardList = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(apiServer);

  const getAllPokemons = async () => {
    const res = await axios.get(loadMore);
    const { next, results } = res.data;

    const urls = results.map(({ url }) => url);

    const pokemons = await Promise.all(
      urls.map(async (url) => {
        const res = await axios.get(url);
        return res.data;
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
