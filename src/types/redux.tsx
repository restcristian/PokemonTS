import { IPokemon } from "./index";
import * as actionTypes from "../redux/actions/types";
import reducers from "../redux/reducers";

export interface IPokemonReducerState {
  pokemons: Array<IPokemon>;
  currentPokemon?: IPokemon;
}

// APP STATE
export type RootState = ReturnType<typeof reducers>;

// POKEMON ACTION CREATORS

interface FetchPokemonsAction {
  type: typeof actionTypes.FETCH_POKEMONS;
  payload: Array<IPokemon>;
}

interface FetchPokemonAction {
  type: typeof actionTypes.FETCH_POKEMON;
  payload: IPokemon;
}

export type PokemonActionTypes = FetchPokemonAction | FetchPokemonsAction;
