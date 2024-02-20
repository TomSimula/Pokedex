import { Box } from '@gluestack-ui/themed';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { PokemonInfo } from '~src/module/pokedex/model/pokemonInfo.model';
import { getPokemonInfo } from '~src/api/pokemon.api';
import PokemonModalForm from '~src/module/pokedex/components/modal/pokemonModalForm.component';
import PokemonInfoProfilComponent from '../components/pokemonInfo/pokemonInfoProfil.component';
import PokemonInfoChacteristicComponent from '../components/pokemonInfo/pokemonInfoChacteristic.component';

const PokemonInfoPage: React.FC = () => {
  const { id } = useLocalSearchParams();
  const [currentPokemon, setCurrentPokemon] = useState<PokemonInfo>();

  useEffect(() => {
    const init = async () => {
      const newPokemon = await getPokemonInfo(Number(id));
      setCurrentPokemon(newPokemon);
    }
  init();
  }, [])

  return (
    <>
      <Box flex={1}>
      {currentPokemon && (
          <>
              <PokemonInfoProfilComponent pokemon={currentPokemon}/>
              <PokemonInfoChacteristicComponent pokemon={currentPokemon}/>
              
              <PokemonModalForm pokemon={currentPokemon}/>
          </>
      )}
      </Box>
    </>
  );
}

export default PokemonInfoPage;