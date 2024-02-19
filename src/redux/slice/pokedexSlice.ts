import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../../model/pokemon.model";
import { getPokedex } from "../../api/pokemon.api";

type State = {
    pokedex: Pokemon[];
    pointer: number;
    isLoading: boolean;
    error: string;
    isModal: boolean;
  };

const initialState: State = {
    pokedex: [],
    pointer: 0,
    isLoading: false,
    error: '',
    isModal: false,
};

export const fetchPokedex = createAsyncThunk(
    'pokedex/fetchPokedex',
    (pointer: number) => getPokedex(pointer)
)

const pokedexSlice = createSlice({
    name: 'pokedex',
    initialState,
    reducers: {
        addPokemon: (state, action:PayloadAction<Pokemon>) => {
            state.pokedex = [...state.pokedex, action.payload];
        },
        updatePokemon: (state, action:PayloadAction<Pokemon>) => {
            const index = state.pokedex.findIndex(item => item.id == action.payload.id);
            if (index) {
                state.pokedex[index] = action.payload;
            } else {
                console.log("Erreur, pokemon pas trouver");
            }
        },
        removePokemon: (state, action:PayloadAction<number>) => {
            let newPokedex: Pokemon[] = [];
            state.pokedex.map((item) => (item.id != action.payload)?newPokedex.push(item):'');
            state.pokedex = newPokedex;
        },
        showModal: (state, action:PayloadAction<boolean>) => {
            state.isModal = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchPokedex.pending, state => {
            state.isLoading = true;
        })

        builder.addCase(fetchPokedex.fulfilled, (state, action) => {
            state.isLoading = false;
            state.pointer += 20;
            state.pokedex = [...state.pokedex, ...action.payload];
            state.error = '';
        })

        builder.addCase(fetchPokedex.rejected, (state, action) => {
            state.isLoading = false;
            state.pokedex = [];
            state.error = action.error.message??'Error can\'t be determined';
        })
    }
});

export default pokedexSlice.reducer;
export const { addPokemon, updatePokemon, removePokemon, showModal } = pokedexSlice.actions;
