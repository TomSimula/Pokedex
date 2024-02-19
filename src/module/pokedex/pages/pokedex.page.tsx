
import { Box, HStack, Text, Image, Card, Icon, ChevronRightIcon, Center, Spinner } from '@gluestack-ui/themed';
import React, { useEffect } from 'react';
import { Pokemon } from '~src/model/pokemon.model';
import { ListRenderItem, TouchableOpacity, FlatList } from 'react-native';
import { Link } from 'expo-router';
import { useAppDispatch, useAppSelector } from '~src/redux/store/store.hook';
import { fetchPokedex } from '~src/redux/slice/pokedexSlice';
import PokemonModalForm from '~src/module/modal/pokemonModalForm.component';


const PokedexPage: React.FC = () => {

    const { pokedex, pointer, isLoading, error } = useAppSelector((state) => state.pokedex);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPokedex(pointer));
    }, []);

    const handleEndFlatList = () => {
        if(!isLoading) {
            dispatch(fetchPokedex(pointer));
        }
    }

    interface IPokemonItem {
        prop: Pokemon;
      }

    const PokemonItem: React.FC<IPokemonItem> = ({ prop }) => (
        <Link href={{pathname: "/pokemonDetails", params: { id: prop.id }}} asChild>
            <TouchableOpacity>
                <Card m="$2" borderColor='$black' borderWidth='$4'>
                    <HStack alignItems='center'>
                        <Image source={{uri: prop.image}} alt=''/>
                        <Text ml="$2" textTransform='capitalize'>{prop.name}</Text>
                        <Box alignItems='flex-end' flexGrow={1}>
                            <Icon as={ChevronRightIcon} size='xl'/>
                        </Box>
                    </HStack>
                </Card>
            </TouchableOpacity>
        </Link>
    )

    const RenderPokemonItem: ListRenderItem<Pokemon> = ({ item }) => <PokemonItem prop={item}/>;

  return (
    <>
        <Box flex={1}>
            {
                /*isLoading ? <Center><Text>Loading</Text></Center> 
                : */error ? <Center><Text>{error}</Text></Center> 
                : <FlatList
                    data={pokedex}
                    renderItem={RenderPokemonItem}
                    onEndReachedThreshold={0.5}
                    onEndReached={handleEndFlatList}
                    ListFooterComponent={() => isLoading?<Spinner size="large" color="$yellow300"/>:<></>}
                />
            }
        </Box>
        <PokemonModalForm />
    </>
  );
}

export default PokedexPage;