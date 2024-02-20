import { PokemonInfo } from "./pokemonInfo.model";

export interface PokemonInfoDto {
    id: number;
    name: string;
    image: string;
    stats: StatsDto[];
    types: TypeDto[];
};

export interface StatsDto {
    base_stat: number;
};

export interface TypeDto {
    type: {name: string};
};

export const pokemonInfoDtoToPokemonInfo = (pokemonInfoDto: PokemonInfoDto) => {
    let pokemonInfo: PokemonInfo = {
        id: pokemonInfoDto.id,
        name: pokemonInfoDto.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonInfoDto.id}.png`,
        stats: {
            hp: pokemonInfoDto.stats[0].base_stat,
            attack: pokemonInfoDto.stats[1].base_stat,
            defense: pokemonInfoDto.stats[2].base_stat,
            specialAttack: pokemonInfoDto.stats[3].base_stat,
            specialDefense: pokemonInfoDto.stats[4].base_stat,
            speed: pokemonInfoDto.stats[5].base_stat,
        },
        types: pokemonInfoDto.types.map((item: { type: { name: string }; }) => item.type.name),
    };

    return pokemonInfo;
}