import React from 'react'
import { Stack } from 'expo-router';
import { Button, ButtonIcon, HStack, Switch, Text } from '@gluestack-ui/themed';
import PokedexPage from '~src/module/pokedex/pages/pokedex.page';
import { Plus } from 'lucide-react-native';
import { useAppDispatch } from '~src/redux/store/store.hook';
import { showModal } from '~src/redux/slice/pokedexSlice';
import { changeLanguage } from '~src/i18n.config';
import { useTranslation } from 'react-i18next';

const Home = () => {

  const dispatch = useAppDispatch();

  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen options={{ 
        title: t('pokedex:TITLE'),
        headerLeft: () => (
          <HStack alignItems='center'>
            <Text color='$white'>FR</Text>
            <Switch size="md" mr="$1" ml="$1" onValueChange={(val) => changeLanguage(val? 'en' : 'fr')}/>
            <Text color='$white'>EN</Text>
          </HStack>
        ),
        headerRight: () => (
          <Button size= "sm" borderRadius="$full" onPress={() => dispatch(showModal(true))}>
              <ButtonIcon as={Plus} size='md'/>
          </Button>
        ),
      }} 
      />
      <PokedexPage />
    </>
  );
}

export default Home;