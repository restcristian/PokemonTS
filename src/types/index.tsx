export interface IResource {
	name: string
	url: string
}

export interface IPokemon{
	id: number
	name: string
	base_experience: number
	height: number
	is_default: boolean
	order: number
	weight: number
	abilities: Array<IAbilities>
	game_indices: Array<IGameIndex>
	held_items: Array<IHeldItem>
	location_area_encounters: string
	moves: Array<IMove>
	sprites: ISprite
	forms: Array<IResource>
	stats: Array<IStat>
	types: Array<IType>
	species: IResource
}

export interface IAbilities {
	is_hidden: boolean
	slot: number
	ability: IResource
}

export interface IGameIndex {
	game_index:number
	version: IResource
}
export interface IHeldItem {
	item: IResource
	version_details: Array<IHeldItemVersion>
}

export interface IHeldItemVersion {
	version: IResource
	rarity: number
}

export interface IMove {
	move: IResource
	version_group_details: Array<IMoveVersion>
}

export interface IMoveVersion {
	move_learn_method: IResource
	version_group: IResource
	level_learned_at: number
}

export interface ISprite {
	front_default: string
	front_shiny: string
	front_female: string
	front_shiny_female: string
	back_default: string
	back_shiny: string
	back_female: string
	back_shiny_female: string
}

export interface IStat {
	stat: IResource
	effort: number
	base_stat: number
}

export interface IType {
	slot: number
	type: IResource
}