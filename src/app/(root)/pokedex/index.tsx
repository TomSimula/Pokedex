import { Button, ButtonIcon, HStack, Switch, Text } from "@gluestack-ui/themed";
import { Stack } from "expo-router";
import { Plus } from "lucide-react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "~src/i18n.config";
import { showModal } from "~src/module/pokedex/_slices/pokedex.slice";
import PokedexPage from "~src/module/pokedex/pages/pokedex.page";
import { useAppDispatch } from "~src/store/store.hook";

const Home = () => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation(["pokedex"]);

  return (
    <>
      <Stack.Screen
        options={{
          title: t("pokedex:POKEDEX.TITLE"),
          headerLeft: () => (
            <HStack alignItems="center">
              <Text color="$white">FR</Text>
              <Switch
                size="md"
                mx="$1"
                onValueChange={(val) => changeLanguage(val ? "en" : "fr")}
              />
              <Text color="$white">EN</Text>
            </HStack>
          ),
          headerRight: () => (
            <Button
              size="sm"
              borderRadius="$full"
              onPress={() => dispatch(showModal(true))}
            >
              <ButtonIcon as={Plus} size="md" />
            </Button>
          ),
        }}
      />
      <PokedexPage />
    </>
  );
};

export default Home;
