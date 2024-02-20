import { Box } from '@gluestack-ui/themed';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { PokemonInfos } from '~src/module/pokedex/model/pokemon.model';
import { getPokemonInfos } from '~src/api/pokemon.api';
import PokemonModalForm from '~src/module/pokedex/components/modal/pokemonModalForm.component';
import PokemonInfoProfilComponent from '../components/pokemonInfo/pokemonInfoProfil.component';
import PokemonInfoChacteristicComponent from '../components/pokemonInfo/pokemonInfoChacteristic.component';

const PokemonInfoPage: React.FC = () => {
  const { id } = useLocalSearchParams();
  const [currentPokemon, setCurrentPokemon] = useState<PokemonInfos>();

  useEffect(() => {
    const init = async () => {
      const newPokemon = await getPokemonInfos(Number(id));
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