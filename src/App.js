import { useEffect, useState } from "react";

function App() {
  const [allPokemons, setAllPokemos] = useState([]);
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon");

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    console.log(data);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <h1>PokeApi</h1>
      <div className="pokemon-container">
        <div className="all-container"></div>
        <button className="load-more">More Pokemons</button>
      </div>
    </div>
  );
}

export default App;
