import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../types/redux";
import { fetchPokemon } from "../../redux/actions";
import styles from "./Pokemon.module.css";
import { IAbilities } from "../../types";

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
      const { name, sprites, weight, height, abilities } = currentPokemon;
      return (
        <div className={styles.PokemonTable}>
          <div className={`${styles.PokemonCol} ${styles.PokemonImageCol}`}>
            <img src={sprites.front_default} alt={name} />
          </div>
          <div className={`${styles.PokemonCol} ${styles.PokemonTextCol}`}>
            <div>
              <span>Name:</span>
              {name.toUpperCase()}
            </div>
            <div>
              <span>Weight:</span>
              {weight}
            </div>
            <div>
              <span>Height:</span>
              {height}
            </div>
            <div>
              <span>Abilities:</span>
              <ul>
                {abilities.map((currentAbility: IAbilities, index: number) => {
                  return <li key={index}>{currentAbility.ability.name}</li>;
                })}
              </ul>
            </div>
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
