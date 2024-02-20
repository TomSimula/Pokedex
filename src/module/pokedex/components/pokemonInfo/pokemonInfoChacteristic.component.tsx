import React from 'react';
import { PokemonInfos } from '~src/module/pokedex/model/pokemon.model';
import { Box, Text, Card, HStack, TrashIcon, Button, ButtonIcon } from '@gluestack-ui/themed';
import { useNavigation } from 'expo-router';
import { useAppDispatch } from '~src/store/store.hook';
import { removePokemon } from '~src/module/pokedex/slices/pokedexSlice';
import { useTranslation } from 'react-i18next';

type IPokemonInfoChacteristicComponent = {
  pokemon: PokemonInfos
}

const PokemonInfoChacteristicComponent: React.FC<IPokemonInfoChacteristicComponent> = ({ pokemon }) => {

  const navigator = useNavigation();
  const dispatch = useAppDispatch();

  const { t } = useTranslation(['pokedex']);

  const deleteHandler = () => {
    dispatch(removePokemon(pokemon.id))
    navigator.goBack();
  }

  return (
    <Card flex={2} m="$3" borderColor='$black' borderWidth='$4'>
        <Box w="$full" h="$full" alignItems='center'>
          <Text fontWeight='bold' size='2xl' m="$2">{t('pokedex:INFO.TYPES.TITLE', {count: pokemon.types.length})}</Text>
          <HStack w="$full" justifyContent='space-evenly'>
          {pokemon.types.map((item: string) => (
              <Text key={item} textTransform='capitalize' >{item}</Text>
          ))}
          </HStack>
          <Text fontWeight='bold' size='2xl' m="$2">{t('pokedex:INFO.STATS.TITLE')}</Text>
          <Text>{t('pokedex:INFO.STATS.HP') + ": " + pokemon.stats.hp}</Text>
          <Text>{t('pokedex:INFO.STATS.ATTACK') + ": " + pokemon.stats.attack}</Text>
          <Text>{t('pokedex:INFO.STATS.DEFENSE') + ": " + pokemon.stats.defense}</Text>
          <Text>{t('pokedex:INFO.STATS.SPECIAL_ATTACK') + ": " + pokemon.stats.specialAttack}</Text>
          <Text>{t('pokedex:INFO.STATS.SPECIAL_DEFENSE') + ": " + pokemon.stats.specialDefense}</Text>
          <Text>{t('pokedex:INFO.STATS.SPEED') + ": " + pokemon.stats.speed}</Text>
          <Box flexGrow={1} justifyContent='flex-end' >
            <Button size= "xl" borderRadius="$full" action='negative' onPress={deleteHandler}>
                <ButtonIcon as={TrashIcon} color='$white' size='xl'/> 
            </Button>
          </Box>
        </Box>
    </Card>
  );
}

export default PokemonInfoChacteristicComponent;