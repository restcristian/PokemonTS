import { FETCH_POKEMONS } from "./types";
import { PokemonActionTypes, RootState } from "../../types/redux";
import { IPokemon, IResource } from "../../types";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

async function fetchPokemon(pokemonResource: IResource): Promise<IPokemon> {
  const response: Response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonResource.name}`
  );
  return response.json();
}

export function fetchPokemons(): ThunkAction<
  void,
  RootState,
  unknown,
  PokemonActionTypes
> {
  return async function(dispatch: Dispatch<PokemonActionTypes>) {
    const response: Response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/"
    );
    const responseJson = await response.json();
    const resources: Array<IResource> = await responseJson.results;

    const pokemons = await Promise.all(
      resources.map(async (resource: IResource) => {
        const pokemon: IPokemon = await fetchPokemon(resource);
        return pokemon;
      })
    );
    return dispatch({
      type: FETCH_POKEMONS,
      payload: pokemons
    });
  };
}
