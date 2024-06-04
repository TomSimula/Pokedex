import { Box, Card, HStack, Image, Text, VStack } from "@gluestack-ui/themed";
import React from "react";
import { PokemonInfo } from "~src/module/pokedex/model/pokemonInfo.model";
import PokemonInfoInconNavComponent from "./pokemonInfoIconNav.component";

type IPokemonInfoProfilComponent = {
  pokemon: PokemonInfo;
};

const PokemonInfoProfilComponent: React.FC<IPokemonInfoProfilComponent> = ({
  pokemon,
}) => {
  return (
    <Card flex={1} m="$3" borderColor="$black" borderWidth="$4">
      <VStack flex={1}>
        <HStack w="$full" h="$4/5" alignItems="center" justifyContent="center">
          <PokemonInfoInconNavComponent id={pokemon.id} isNext={false} />
          <Image source={{ uri: pokemon.image }} alt="" size="2xl" />
          <PokemonInfoInconNavComponent id={pokemon.id} isNext={true} />
        </HStack>
        <Box w="$full" h="$1/5" justifyContent="center" alignItems="center">
          <Text textTransform="capitalize" fontWeight="bold" size="3xl">
            {pokemon.name}
          </Text>
        </Box>
      </VStack>
    </Card>
  );
};

export default PokemonInfoProfilComponent;
