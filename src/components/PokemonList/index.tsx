import React from 'react'
import { IPokemon } from '../../types';
import PokemonListItem from './PokemonListItem';
import styles from './PokemonList.module.css';

interface PokemonListProps {
	pokemons: Array<IPokemon>
}

const PokemonList: React.FC<PokemonListProps> = ({pokemons}) => {
	const renderContent = () => {
		return pokemons.map(pokemon => (
			<PokemonListItem 
				key = {pokemon.id} 
				pokemon = {pokemon} 
			/>
		));
	}
	return (
		<ul className = {styles.pokemonList}>
			{renderContent()}
		</ul>
	)
}
export default PokemonList;
