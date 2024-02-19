import React from 'react';
import { PokemonInfos } from '~src/model/pokemon.model';
import { Box, Text, Card, HStack, TrashIcon, Button, ButtonIcon } from '@gluestack-ui/themed';
import { useNavigation } from 'expo-router';
import { useAppDispatch } from '~src/redux/store/store.hook';
import { removePokemon } from '~src/redux/slice/pokedexSlice';
import { useTranslation } from 'react-i18next';

type IPokemonInfoChacteristicComponent = {
  pokemon: PokemonInfos
}

const PokemonInfoChacteristicComponent: React.FC<IPokemonInfoChacteristicComponent> = ({ pokemon }) => {

  const navigator = useNavigation();
  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const deleteHandler = () => {
    dispatch(removePokemon(pokemon.id))
    navigator.goBack();
  }

  return (
    <Card flex={2} m="$3" borderColor='$black' borderWidth='$4'>
        <Box w="$full" h="$full" alignItems='center'>
          <Text fontWeight='bold' size='2xl' m="$2">{pokemon.types.length>1? t('infos:TYPES:TITLE_PLURAL'): t('infos:TYPES:TITLE')}</Text>
          <HStack w="$full" justifyContent='space-evenly'>
          {pokemon.types.map((item: string) => (
              <Text key={item} textTransform='capitalize' >{item}</Text>
          ))}
          </HStack>
          <Text fontWeight='bold' size='2xl' m="$2">{t('infos:STATS:TITLE')}</Text>
          <Text>{t('infos:STATS:HP') + ": " + pokemon.stats.hp}</Text>
          <Text>{t('infos:STATS:ATTACK') + ": " + pokemon.stats.attack}</Text>
          <Text>{t('infos:STATS:DEFENSE') + ": " + pokemon.stats.defense}</Text>
          <Text>{t('infos:STATS:SPECIAL_ATTACK') + ": " + pokemon.stats.specialAttack}</Text>
          <Text>{t('infos:STATS:SPECIAL_DEFENSE') + ": " + pokemon.stats.specialDefense}</Text>
          <Text>{t('infos:STATS:SPEED') + ": " + pokemon.stats.speed}</Text>
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