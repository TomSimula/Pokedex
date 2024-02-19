import { Button, ButtonIcon } from '@gluestack-ui/themed';
import { Stack } from 'expo-router';
import React from 'react';
import PokemonInfoPage from '~src/module/Infos/pages/pokemonInfo.page';
import { Pencil } from 'lucide-react-native';
import { showModal } from '~src/redux/slice/pokedexSlice';
import { useAppDispatch } from '~src/redux/store/store.hook';
import { useTranslation } from 'react-i18next';

const PokemonDetails = () => {

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen options={{ 
          title: t('infos:TITLE'), 
          headerRight: () => (
            <Button size= "sm" borderRadius="$full" onPress={() => dispatch(showModal(true))}>
                <ButtonIcon as={Pencil} size='md'/> 
            </Button>
          ),
        }} 
      />
      <PokemonInfoPage />
    </>
  );
}

export default PokemonDetails;