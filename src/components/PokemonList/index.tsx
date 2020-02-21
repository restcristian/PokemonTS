import React, { useEffect } from 'react'
import { IPokemon } from '../../types';
import PokemonListItem from './PokemonListItem';
import styles from './PokemonList.module.css';
import { ConnectedProps, connect } from 'react-redux';
import { RootState } from '../../types/redux';
import { fetchPokemons } from '../../redux/actions';



const mapStateToProps = (state: RootState) => {
	return {
		pokemons: state.pokemonReducer.pokemons
	}
};

const connector = connect(mapStateToProps, {fetchPokemons});

type PropsFromRedux = ConnectedProps<typeof connector>;

type props = PropsFromRedux;

const PokemonList: React.FC<props> = ({pokemons, fetchPokemons}) => {

	useEffect(() => {
		fetchPokemons();
	},[fetchPokemons]);
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




export default connector(PokemonList);
