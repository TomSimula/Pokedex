import { createConfig } from '@gluestack-style/react';
import { config as defaultConfig } from '@gluestack-ui/config';

export const gluestackUIConfig = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
        ...defaultConfig.tokens.colors,
        primary0: "#fffcfc",
        primary50: "#fef2f2",
        primary100: "#fee2e2",
        primary200: "#fecaca",
        primary300: "#fca5a5",
        primary400: "#f87171",
        primary500: "#ef4444",
        primary600: "#dc2626",
        primary700: "#b91c1c",
        primary800: "#991b1b",
        primary900: "#7f1d1d",

        bluePokemon: "#3b4cca",
    },
  },
});
