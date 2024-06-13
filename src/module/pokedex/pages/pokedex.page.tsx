import { Box, Center, Spinner, Text } from "@gluestack-ui/themed";
import React, { useEffect } from "react";
import { FlatList } from "react-native";
import PokemonModalForm from "~src/module/pokedex/components/modal/pokemonModalForm.component";
import { useAppDispatch, useAppSelector } from "~src/store/store.hook";
import { fetchPokedex } from "../_slices/pokedex.slice";
import PokedexPokemonItem from "../components/pokedex/pokedexPokemonItem.component";

const PokedexPage: React.FC = () => {
  const { pokedex, offset, isLoading, error } = useAppSelector((state) => state.pokedex);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchPokedex(offset));
  }, []);

  const handleEndFlatList = () => {
    if (!isLoading) {
      dispatch(fetchPokedex(offset));
    }
  };

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
            renderItem={({ item }) => (<PokedexPokemonItem prop={item} />)}
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
