import { Stack } from "expo-router";
import React from "react";
import { gluestackUIConfig as config } from "~src/theme/gluestack-ui.config";

export default () => (
  <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: config.tokens.colors.bluePokemon,
      },
      headerTitleStyle: {
        fontFamily: "Pokemon",
      },
      headerTitleAlign: "center",
      headerTintColor: config.tokens.colors.yellow300,
    }}
  />
);
