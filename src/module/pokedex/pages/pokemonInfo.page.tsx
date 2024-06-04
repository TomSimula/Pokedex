import { Box } from "@gluestack-ui/themed";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import React, { useCallback, useState } from "react";
import PokemonModalForm from "~src/module/pokedex/components/modal/pokemonModalForm.component";
import { PokemonInfo } from "~src/module/pokedex/model/pokemonInfo.model";
import { getPokemonInfo } from "../components/_slices/pokedex.api";
import PokemonInfoChacteristicComponent from "../components/pokemonInfo/pokemonInfoChacteristic.component";
import PokemonInfoProfilComponent from "../components/pokemonInfo/pokemonInfoProfil.component";

const PokemonInfoPage: React.FC = () => {
  const { id } = useLocalSearchParams();
  const [currentPokemon, setCurrentPokemon] = useState<PokemonInfo>();

  useFocusEffect(
    useCallback(() => {
    const init = async () => {
      const newPokemon = await getPokemonInfo(Number(id));
      setCurrentPokemon(newPokemon);
    };
    init();
  }, []));

  return (
    <>
      <Box flex={1}>
        {currentPokemon && (
          <>
            <PokemonInfoProfilComponent pokemon={currentPokemon} />
            <PokemonInfoChacteristicComponent pokemon={currentPokemon} />

            <PokemonModalForm pokemon={currentPokemon} />
          </>
        )}
      </Box>
    </>
  );
};

export default PokemonInfoPage;
