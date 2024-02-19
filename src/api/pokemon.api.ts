import { PokemonDto, PokemonDtoToPokemons } from "../model/pokemon.dto";
import { Pokemon, PokemonInfos } from "../model/pokemon.model";
import axios from "axios";

export const getPokedex = async(offset: number, limit?: number): Promise<Pokemon[]> => {
    let pokedex: Pokemon[] = [];

    const response = await axios.get<PokemonDto>(`https:\\pokeapi.co/api/v2/pokemon?limit=${limit??20}&offset=${offset}`);
    pokedex.push(...PokemonDtoToPokemons({data: response.data, offset: offset}));

    return pokedex;
}

export const getPokemonInfos = async(id: number): Promise<PokemonInfos> => {

    const response = await fetch(`https:\\pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    let pokemon: PokemonInfos = {
        id: id,
        name: data.name,
        image: data.sprites.front_default,
        stats: {
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            specialAttack: data.stats[3].base_stat,
            specialDefense: data.stats[4].base_stat,
            speed: data.stats[5].base_stat,
        },
        types: data.types.map((item: { type: { name: string }; }) => item.type.name),
    };

    return pokemon;
}