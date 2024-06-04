import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pokedexReducer from "~src/module/pokedex/components/_slices/pokedex.slice";

const combinedReducer = combineReducers({
  pokedex: pokedexReducer,
});

const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;

export default store;
