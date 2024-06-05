import { Box, Center, Spinner, Text } from "@gluestack-ui/themed";
import React, { useCallback } from "react";
import { FlatList, ListRenderItem } from "react-native";
import PokemonModalForm from "~src/module/pokedex/components/modal/pokemonModalForm.component";
import { Pokemon } from "~src/module/pokedex/model/pokemon.model";
import { useAppDispatch, useAppSelector } from "~src/store/store.hook";
import { fetchPokedex } from "../_slices/pokedex.slice";
import PokedexPokemonItem from "../components/pokedex/pokedexPokemonItem.component";
import { useFocusEffect } from "expo-router";

const PokedexPage: React.FC = () => {
  const { pokedex, pointer, isLoading, error } = useAppSelector(
    (state) => state.pokedex
  );
  const dispatch = useAppDispatch();

  useFocusEffect(
    useCallback(() => {
    dispatch(fetchPokedex(pointer));
  }, []));

  const handleEndFlatList = () => {
    if (!isLoading) {
      dispatch(fetchPokedex(pointer));
    }
  };

  const renderPokemonItem: ListRenderItem<Pokemon> = ({ item }) => (
    <PokedexPokemonItem prop={item} />
  );

  return (
    <>
      <Box flex={1}>
        {error ? (
          <Center>
            <Text>{error}</Text>
          </Center>
        ) : (
          <FlatList
            data={pokedex}
            renderItem={renderPokemonItem}
            onEndReachedThreshold={0.5}
            onEndReached={handleEndFlatList}
            ListFooterComponent={() =>
              isLoading ? <Spinner size="large" color="$yellow300" /> : null
            }
          />
        )}
      </Box>
      <PokemonModalForm />
    </>
  );
};

export default PokedexPage;
