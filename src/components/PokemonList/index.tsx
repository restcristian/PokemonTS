import React, { useEffect } from "react";
import PokemonListItem from "./PokemonListItem";
import { ConnectedProps, connect } from "react-redux";
import { RootState } from "../../types/redux";
import { fetchPokemons } from "../../redux/actions";
import styles from "./PokemonList.module.css";

const mapStateToProps = (state: RootState) => ({
  pokemons: state.pokemonReducer.pokemons
});

const connector = connect(mapStateToProps, { fetchPokemons });

type PropsFromRedux = ConnectedProps<typeof connector>;

type props = PropsFromRedux;

const PokemonList: React.FC<props> = ({ pokemons, fetchPokemons }) => {
  useEffect(() => {
    fetchPokemons();
  }, [pokemons]);

  return (
    <ul className={styles.pokemonList}>
      {pokemons.map(pokemon => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </ul>
  );
};

export default connector(PokemonList);
