import { Pokemon } from "./pokemon.model";

export interface PokemonDto {
    results: ResultsPokemonDto[];
}

export interface ResultsPokemonDto {
    name: string;
    url: string;
}

export const PokemonDtoToPokemons = ({data, offset}: {data: PokemonDto, offset: number}) => {
    let pokemons: Pokemon[] = [];
    data.results.map( (item: ResultsPokemonDto, index: number) => {
        let id: number = index+1+offset;
        pokemons.push({
            id: id,
            name: item.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        });
    });
    return pokemons;
}