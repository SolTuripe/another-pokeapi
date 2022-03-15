import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Find.css";

const Find = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [poke, setPoke] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });
  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((resp) => {
        setPoke({
          name: pokemonName,
          species: resp.data.species.name,
          img: resp.data.sprites.other.dream_world.front_default,
          hp: resp.data.stats[0].base_stat,
          attack: resp.data.stats[1].base_stat,
          defense: resp.data.stats[2].base_stat,
          type: resp.data.types[0].type.name,
        });
        setPokemonChosen(true);
      });
  };

  return (
    <div className="search">
      <div className="title">
        <h1>Pokemon Stats</h1>

        <input
          type="text"
          placeholder="find a pokemon"
          onChange={(e) => {
            setPokemonName(e.target.value);
          }}
        />
        <button onClick={searchPokemon}>Search Pokemon</button>
        <Link to="/">🔙</Link>
      </div>
      <div className="display">
        {!pokemonChosen ? (
          <h1>Please choose a Pokemon</h1>
        ) : (
          <>
            <h1>{poke.name}</h1>
            <img alt="" src={poke.img} />
            <h3>Species: {poke.species}</h3>
            <h3>Type: {poke.type}</h3>
            <h4>Hp: {poke.hp}</h4>
            <h4>Attack: {poke.attack}</h4>
            <h4>Defense: {poke.defense}</h4>
          </>
        )}
      </div>
    </div>
  );
};

export default Find;
