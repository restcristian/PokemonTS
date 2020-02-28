import React from "react";
import PokemonsPage from "./pages/Pokemons";
import PokemonPage from "./pages/Pokemon";
import "./App.css";
import { Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/:name" component={PokemonPage} />
        <Route path="/" component={PokemonsPage} />
      </Switch>
    </div>
  );
};

export default App;
