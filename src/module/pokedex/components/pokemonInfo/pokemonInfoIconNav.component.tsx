import { Icon } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { findIndex } from "lodash";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { appRoutes } from "~src/rooting/routes.config";
import { useAppSelector } from "~src/store/store.hook";

type IPokemonInfoInconNavComponent = {
  id: number;
  isNext: boolean;
};

const PokemonInfoInconNavComponent: React.FC<IPokemonInfoInconNavComponent> = ({
  id,
  isNext,
}) => {
  const { pokedex } = useAppSelector((state) => state.pokedex);

  const currentIndex = findIndex(pokedex, (item) => {
    return item.id === id;
  });
  const newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
  const isValidId = newIndex >= 0 && newIndex < pokedex.length;

  return isValidId ? (
    <Link
      replace
      href={{
        pathname: appRoutes.pokedex.pokemonInfo,
        params: { id: pokedex[newIndex].id },
      }}
      asChild
    >
      <TouchableOpacity>
        <Icon as={isNext ? ChevronRightIcon : ChevronLeftIcon} size="xl" />
      </TouchableOpacity>
    </Link>
  ) : null;
};

export default PokemonInfoInconNavComponent;
