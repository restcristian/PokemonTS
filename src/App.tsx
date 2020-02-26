import React from "react";
import PokemonList from "./components/PokemonList";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <PokemonList />
    </div>
  );
};

export default App;
