const formFr = {
    INPUT: {
        NAME: 'Nom',
        HP: 'PV',
    },
    SELECT: {
        TYPES: [
            'Normal', 'Feu', 'Eau', 'Électrik', 'Plante',
            'Glace', 'Combat', 'Poison', 'Sol', 'Vol',
            'Psy', 'Insecte', 'Roche', 'Spectre', 'Ténèbres', 'Acier',
            'Fée', 'Dragon'],
        NAME: 'Type principal',
    },
    HELPER: {
        ONLY_CHARACTER: 'Doit seulement être constituer de caracteres',
        ONLY_INTEGER: 'Doit être un nombre',
    },
    TITLE: {
        UPDATE: 'Met à jour ton pokémon',
        CREATE: 'Crée ton pokémon',
    },
    ERROR: {
        REQUIRED: 'Ce champ est obligatoire'
    },
};

export default formFr;