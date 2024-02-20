export interface Pokemon {
    id: number;
    name: string;
    image: string;
};

export interface PokemonInfos {
    id: number;
    name: string;
    image: string;
    stats: Stats;
    types: string[];
};

export interface Stats {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
};

export type PokemonEdit = {
    name: string;
    hp: string;
    mainType: string;
};