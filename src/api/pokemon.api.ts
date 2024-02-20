import { PokemonDto, pokemonDtoToPokemon, PokemonListDto } from "~src/module/pokedex/model/pokemon.dto";
import { PokemonInfoDto, pokemonInfoDtoToPokemonInfo} from "~src/module/pokedex/model/pokemonInfo.dto";
import { Pokemon } from "~src/module/pokedex/model/pokemon.model";
import { PokemonInfo } from "~src/module/pokedex/model/pokemonInfo.model";
import axios from "axios";

export const getPokedex = async(offset: number, limit?: number): Promise<Pokemon[]> => {
    let pokedex: Pokemon[] = [];

    const response = await axios.get<PokemonListDto>(`https:\\pokeapi.co/api/v2/pokemon?limit=${limit??20}&offset=${offset}`);
    if(response) {
        response.data.results.map((item: PokemonDto, index: number) => {
            let id= index+offset+1;
            pokedex.push(pokemonDtoToPokemon(item, id));
        });
    }

    return pokedex;
}

export const getPokemonInfo = async(id: number): Promise<PokemonInfo> => {

    const response = await axios.get<PokemonInfoDto>(`https:\\pokeapi.co/api/v2/pokemon/${id}`);

    return pokemonInfoDtoToPokemonInfo(response.data);
}