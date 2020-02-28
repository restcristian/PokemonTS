import React from "react";
import PokemonList from "../../components/PokemonList";
import { RouteComponentProps } from "react-router-dom";

interface PokemonPageProps extends RouteComponentProps {}

const Pokemons: React.FC<PokemonPageProps> = () => {
  return <PokemonList />;
};

export default Pokemons;
