import { IPokemonReducerState, PokemonActionTypes } from "../../types/redux";
import * as actionTypes from "../actions/types";

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
  }
  return state;
}
