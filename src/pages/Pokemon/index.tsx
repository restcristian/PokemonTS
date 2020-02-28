import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../types/redux";
import { fetchPokemon } from "../../redux/actions";

const mapStateToProps = (state: RootState) => {
  return {
    currentPokemon: state.pokemonReducer.currentPokemon
  };
};

const connector = connect(mapStateToProps, { fetchPokemon });

type PropsFromRedux = ConnectedProps<typeof connector>;

type TParams = {
  name: string;
};

interface PokemonPageProps
  extends RouteComponentProps<TParams>,
    PropsFromRedux {}

const Pokemon: React.FC<PokemonPageProps> = ({
  match,
  fetchPokemon,
  currentPokemon
}) => {
  const { name } = match.params;
  const renderContent = () => {
    if (currentPokemon) {
      const { name, sprites, weight, height } = currentPokemon;
      return (
        <div>
          <div>
            <img src={sprites.front_default} alt={name} />
          </div>
          <div>
            <div>{name}</div>
            <div>{weight}</div>
            <div>{height}</div>
          </div>
        </div>
      );
    }
    return null;
  };
  useEffect(() => {
    fetchPokemon(name);
  }, [fetchPokemon, name]);
  return <div>{renderContent()}</div>;
};

export default connector(Pokemon);
