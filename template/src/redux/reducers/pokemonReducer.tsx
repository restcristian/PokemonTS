import { IPokemonReducerState, PokemonActionTypes } from "../../types/redux";
import * as actionTypes from "../actions/types";
import { IPokemon } from "../../types";

const INITIAL_STATE: IPokemonReducerState = {
  pokemons: []
};

export default function(
  state = INITIAL_STATE,
  action: PokemonActionTypes
): IPokemonReducerState {
  switch (action.type) {
    case actionTypes.FETCH_POKEMONS:
      return {
        ...state,
        pokemons: [...action.payload]
      };
    case actionTypes.FETCH_POKEMON:
      return {
        ...state,
        currentPokemon: {
          ...(action.payload as IPokemon)
        }
      };
  }
  return state;
}
