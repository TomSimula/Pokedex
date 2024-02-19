import {  Icon } from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

type IPokemonInfoInconNavComponent = {
    id: number,
    isNext: boolean
  }

const PokemonInfoInconNavComponent: React.FC<IPokemonInfoInconNavComponent> = ({ id, isNext }) => {
  return id>0?(
    <Link replace href={{pathname: "/pokemonDetails", params: { id: id }}} asChild>
        <TouchableOpacity>
            <Icon as={isNext? ChevronRightIcon : ChevronLeftIcon} size='xl'/>
        </TouchableOpacity>
    </Link>
  ): null;
}

export default PokemonInfoInconNavComponent;