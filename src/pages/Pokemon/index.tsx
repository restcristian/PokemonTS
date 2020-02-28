import React from "react";
import { RouteComponentProps } from "react-router-dom";

type TParams = {
  name: string;
};

interface PokemonPageProps extends RouteComponentProps<TParams> {}

const Pokemon: React.FC<PokemonPageProps> = ({ match }) => {
  const { name } = match.params;
  return <div>{name}</div>;
};

export default Pokemon;
