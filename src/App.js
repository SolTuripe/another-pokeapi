import { useState } from "react";

function App() {
  const [allPokemons, setAllPokemos] = useState([]);

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
