import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const PAGE_SIZE = 20;

const getPaginatedPokemons = async (page = 0) => {
  const res = await axios.get(
    `${BASE_URL}?limit=${PAGE_SIZE}&offset=${page * PAGE_SIZE}`
  );
  const { results } = res.data;

  const urls = results.map(({ url }) => url);

  const pokemons = await Promise.all(
    urls.map(async (url) => {
      const res = await axios.get(url);
      return res.data;
    })
  );

  return pokemons.map(({ name, sprites }) => ({
    name,
    image: sprites.other.dream_world.front_default,
  }));
};

const getPokemonByName = async (name) => {
  const { data } = await axios.get(`${BASE_URL}/${name}`);
  return data;
};

const api = {
  getPaginatedPokemons,
  getPokemonByName,
};

export default api;
