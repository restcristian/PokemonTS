import React from 'react'
import { IPokemon } from '../../../types';
import styles from './PokemonListItem.module.css';

interface PokemonListItemProps {
	pokemon: IPokemon
}

const PokemonListItem: React.FC<PokemonListItemProps> = ({pokemon: {sprites, name}}) => {
	return (
		<li className = {styles.pokemonListItem}>
			<div className = {styles.inner}>
				<div className = {styles.wrapper}>
					<div className = {styles.front}>
						<img 
							src={sprites.front_default} 
							alt="" 
						/>
						<div>
							<span>{name}</span>
						</div>
					</div>
					<div className = {styles.back}>
						<img 
							src={sprites.back_default} 
							alt="" 
						/>
						<div>
							<span>{name}</span>
						</div>
					</div>
				</div>
			</div>
		</li>
	)
}
export default PokemonListItem;
