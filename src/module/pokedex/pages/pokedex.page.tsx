
import { Box, Text, Center, Spinner } from '@gluestack-ui/themed';
import React, { useEffect } from 'react';
import { Pokemon } from '~src/module/pokedex/model/pokemon.model';
import { ListRenderItem, FlatList } from 'react-native';
import { useAppDispatch, useAppSelector } from '~src/store/store.hook';
import { fetchPokedex } from '~src/module/pokedex/slices/pokedexSlice';
import PokemonModalForm from '~src/module/pokedex/components/modal/pokemonModalForm.component';
import PokedexPokemonItem from '../components/pokedex/pokedexPokemonItem.component';


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

    const renderPokemonItem: ListRenderItem<Pokemon> = ({ item }) => <PokedexPokemonItem prop={item}/>;

  return (
    <>
        <Box flex={1}>
            {
                /*isLoading ? <Center><Text>Loading</Text></Center> 
                : */error ? <Center><Text>{error}</Text></Center> 
                : <FlatList
                    data={pokedex}
                    renderItem={renderPokemonItem}
                    onEndReachedThreshold={0.5}
                    onEndReached={handleEndFlatList}
                    ListFooterComponent={() => isLoading?<Spinner size="large" color="$yellow300"/>:null}
                />
            }
        </Box>
        <PokemonModalForm />
    </>
  );
}

export default PokedexPage;