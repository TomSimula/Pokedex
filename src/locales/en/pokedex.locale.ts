const pokedexEn = {
    POKEDEX: {
        TITLE: 'Pokedex',
        ALT: 'Pokemon image',
    },
    INFO : {
        TITLE: 'Pokemon Details',
        STATS: {
            TITLE: 'Stats',
            HP: 'HP',
            ATTACK: 'Attack',
            DEFENSE: 'Defense',
            SPECIAL_ATTACK: 'Special attack',
            SPECIAL_DEFENSE: 'Special defense',
            SPEED: 'Speed',
        },
        TYPES: {
            TITLE_one: 'Type',
            TITLE_other: 'Types',
        },
    },
    FORM: {
        INPUT: {
            NAME: 'Name',
            HP: 'HP',
        },
        SELECT: {
            TYPES: [
                'Normal', 'Fire', 'Water', 'Electric', 'Grass', 
                'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 
                'Psychic', 'Bug', 'Rock', 'Ghost', 'Dark', 'Steel', 
                'Fairy', 'Dragon'],
            NAME: 'Main type',
        },
        HELPER: {
            ONLY_CHARACTER: 'Must only use character',
            ONLY_INTEGER: 'Must be an integer',
        },
        TITLE: {
            UPDATE: 'Update your pokemon',
            CREATE: 'Create your pokemon',
        },
        ERROR: {
            REQUIRED: 'This field is required',
            MAX_CHARAC: 'Limit to {{max}} character',
        },
    },
};

export default pokedexEn;