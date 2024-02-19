import { Theme } from '@react-navigation/native';
import { gluestackUIConfig } from './gluestack-ui.config';
import { DefaultTheme } from "@react-navigation/native";

const customTheme: Theme = {
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        background: gluestackUIConfig.tokens.colors.primary600,
    },
};

export default customTheme;
