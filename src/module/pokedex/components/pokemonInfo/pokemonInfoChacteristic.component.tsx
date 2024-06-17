import {
  Box,
  Button,
  ButtonIcon,
  Card,
  HStack,
  Text,
  TrashIcon,
} from "@gluestack-ui/themed";
import { useRouter } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { PokemonInfo } from "~src/module/pokedex/model/pokemonInfo.model";
import { useAppDispatch } from "~src/store/store.hook";
import { removePokemon } from "../../_slices/pokedex.slice";

type IPokemonInfoChacteristicComponent = {
  pokemon: PokemonInfo;
};

const PokemonInfoChacteristicComponent: React.FC<
  IPokemonInfoChacteristicComponent
> = ({ pokemon }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { t } = useTranslation(["pokedex"]);

  const deleteHandler = () => {
    dispatch(removePokemon(pokemon.id));
    router.back();
  };

  return (
    <Card flex={2} m="$3" borderColor="$black" borderWidth="$4">
      <Box w="$full" h="$full" alignItems="center">
        <Text fontWeight="bold" size="2xl" m="$2">
          {t("pokedex:INFO.TYPES")}
        </Text>
        <HStack w="$full" justifyContent="space-evenly">
          {pokemon.types.map((item: string) => (
            <Text key={item} textTransform="capitalize">
              {item}
            </Text>
          ))}
        </HStack>
        <Text fontWeight="bold" size="2xl" m="$2">
          {t("pokedex:INFO.STATS.TITLE")}
        </Text>
        <Text>{t("pokedex:INFO.STATS.HP") + ": " + pokemon.stats.hp}</Text>
        <Text>
          {t("pokedex:INFO.STATS.ATTACK") + ": " + pokemon.stats.attack}
        </Text>
        <Text>
          {t("pokedex:INFO.STATS.DEFENSE") + ": " + pokemon.stats.defense}
        </Text>
        <Text>
          {t("pokedex:INFO.STATS.SPECIAL_ATTACK") +
            ": " +
            pokemon.stats.specialAttack}
        </Text>
        <Text>
          {t("pokedex:INFO.STATS.SPECIAL_DEFENSE") +
            ": " +
            pokemon.stats.specialDefense}
        </Text>
        <Text>
          {t("pokedex:INFO.STATS.SPEED") + ": " + pokemon.stats.speed}
        </Text>
        <Box flexGrow={1} justifyContent="flex-end">
          <Button
            size="xl"
            borderRadius="$full"
            action="negative"
            onPress={deleteHandler}
          >
            <ButtonIcon as={TrashIcon} color="$white" size="xl" />
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default PokemonInfoChacteristicComponent;
