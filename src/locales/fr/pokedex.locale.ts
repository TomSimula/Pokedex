const pokedexFr = {
    POKEDEX: {
        TITLE: 'Pokedex',
        ALT: 'Image de pokemon',
    },
    INFO: {
        TITLE: 'Détails du pokemon',
        STATS: {
            TITLE: 'Stats',
            HP: 'PV',
            ATTACK: 'Attaque',
            DEFENSE: 'Défense',
            SPECIAL_ATTACK: 'Attaque spéciale',
            SPECIAL_DEFENSE: 'Defense spéciale',
            SPEED: 'Vitesse'
        },
        TYPES: "Types"
    },
    FORM: {
        INPUT: {
            NAME: 'Nom',
            HP: 'PV',
        },
        SELECT: {
            TYPES: [
                'Normal', 'Feu', 'Eau', 'Électrique', 'Plante',
                'Glace', 'Combat', 'Poison', 'Sol', 'Vol',
                'Psy', 'Insecte', 'Roche', 'Spectre', 'Ténèbres', 'Acier',
                'Fée', 'Dragon'],
            NAME: 'Type principal',
        },
        HELPER: {
            ONLY_CHARACTER: 'Doit seulement être constituer de caractères',
            ONLY_INTEGER: 'Doit être un nombre',
        },
        TITLE: {
            UPDATE: 'Met à jour ton pokemon',
            CREATE: 'Crée ton pokemon',
        },
        ERROR: {
            REQUIRED: 'Ce champ est obligatoire',
            MAX_CHARAC: 'Limité à {{max}} caractère',
        },
    },
    STORE: {
        ERROR: {
            ERROR_NOT_FOUND: "L'erreur ne peut pas être déterminé",
            POKEMON_NOT_FOUND: 'Erreur, pokemon introuvable',
        },
    },
};

export default pokedexFr;