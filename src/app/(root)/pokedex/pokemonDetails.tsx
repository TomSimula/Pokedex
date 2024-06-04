import { Button, ButtonIcon } from "@gluestack-ui/themed";
import { Stack } from "expo-router";
import { Pencil } from "lucide-react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { showModal } from "~src/module/pokedex/components/_slices/pokedex.slice";
import PokemonInfoPage from "~src/module/pokedex/pages/pokemonInfo.page";
import { useAppDispatch } from "~src/store/store.hook";

const PokemonDetails = () => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation(["pokedex"]);

  return (
    <>
      <Stack.Screen
        options={{
          title: t("pokedex:INFO.TITLE"),
          headerRight: () => (
            <Button
              size="sm"
              borderRadius="$full"
              onPress={() => dispatch(showModal(true))}
            >
              <ButtonIcon as={Pencil} size="md" />
            </Button>
          ),
        }}
      />
      <PokemonInfoPage />
    </>
  );
};

export default PokemonDetails;
