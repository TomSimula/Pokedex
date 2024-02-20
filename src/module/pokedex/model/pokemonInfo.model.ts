export interface PokemonInfo {
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