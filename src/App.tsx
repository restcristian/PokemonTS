import React, {useEffect, useState} from 'react';
import PokemonList from './components/PokemonList';
import './App.css';
import { IPokemon, IResource } from './types';

const App: React.FC = () => {

  const [pokemonList, setPokemonList] = useState<Array<IPokemon>>([]);
  useEffect(() => {
	async function fetchPokemons():Promise<Array<IPokemon>>{
		const response: Response = await fetch('https://pokeapi.co/api/v2/pokemon/');
		const responseJson = await response.json();
		const resources: Array<IResource> = await responseJson.results;
		
		return await Promise.all(resources.map(async (resource: IResource) => {
			const pokemon = await fetchPokemon(resource);
			return pokemon;	  
		}));
	  }; 
	fetchPokemons().then(pokemons => setPokemonList(pokemons))
  }, []);
  
 async function fetchPokemon(pokemonResource: IResource):Promise<IPokemon> {
	const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonResource.name}`);
	return response.json();
  }
  return (
    <div className="App">
		<PokemonList pokemons = {pokemonList} />
    </div>
  );
}

export default App;
