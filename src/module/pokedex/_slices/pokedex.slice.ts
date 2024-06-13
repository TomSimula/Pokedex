import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { remove } from "lodash";
import { useTranslation } from "react-i18next";
import { Pokemon } from "../model/pokemon.model";
import { getPokedex } from "./pokedex.api";

type PokedexState = {
  pokedex: Pokemon[];
  offset: number;
  isLoading: boolean;
  error?: string;
  isModal: boolean;
};

const initialState: PokedexState = {
  pokedex: [],
  offset: 0,
  isLoading: false,
  error: undefined,
  isModal: false,
};

const { t } = useTranslation(["pokedex"]);

export const fetchPokedex = createAsyncThunk(
  "pokedex/fetchPokedex",
  async (offset: number) => {
    const response = await getPokedex(offset)
    return response;
  }
);

const pokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.pokedex = [...state.pokedex, action.payload];
    },
    updatePokemon: (state, action: PayloadAction<Pokemon>) => {
      const index = state.pokedex.findIndex(
        (item) => item.id == action.payload.id
      );
      if (index) {
        state.pokedex[index] = action.payload;
      } else {
        state.error = t("pokedex:STORE.ERROR.POKEMON_NOT_FOUND");
      }
    },
    removePokemon: (state, action: PayloadAction<number>) => {
      state.pokedex = remove(state.pokedex, (item) => {
        return item.id != action.payload;
      });
    },
    showModal: (state, action: PayloadAction<boolean>) => {
      state.isModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokedex.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });

    builder.addCase(fetchPokedex.fulfilled, (state, action) => {
      state.isLoading = false;
      state.offset += 20;
      state.pokedex = [...state.pokedex, ...action.payload];
      state.error = undefined;
    });

    builder.addCase(fetchPokedex.rejected, (state, action) => {
      state.isLoading = false;
      state.error =
        action.error.message ?? t("pokedex:STORE.ERROR.ERROR_NOT_FOUND");
    });
  },
});

export default pokedexSlice.reducer;
export const { addPokemon, updatePokemon, removePokemon, showModal } =
  pokedexSlice.actions;
