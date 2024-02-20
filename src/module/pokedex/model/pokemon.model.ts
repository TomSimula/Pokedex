export interface Pokemon {
    id: number;
    name: string;
    image: string;
};

export type PokemonEdit = {
    name: string;
    hp: string;
    mainType: string;
};