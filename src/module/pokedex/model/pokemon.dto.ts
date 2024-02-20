import { Pokemon } from "./pokemon.model";

export interface PokemonListDto {
    count: number;
    results: PokemonDto[];
}

export interface PokemonDto {
    name: string;
}

export const pokemonDtoToPokemons = (pokemonDTO: PokemonDto, id: number) => {
    let pokemon: Pokemon = {
        id: id,
        name: pokemonDTO.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };  
    return pokemon;
}