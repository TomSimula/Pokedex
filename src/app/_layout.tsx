import React from 'react';
import { Stack } from 'expo-router';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Provider } from 'react-redux';
import store from '~src/store/store';
import { gluestackUIConfig as config } from '~src/theme/gluestack-ui.config';
import { useFonts } from 'expo-font';
import { fontToLoad } from '~src/theme/font.theme';
import { ThemeProvider } from "@react-navigation/native";
import customTheme from '~src/theme/customTheme.theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '~src/i18n.config';

const Layout = () => {
  const [isFontsLoaded] = useFonts(fontToLoad);

  return isFontsLoaded ? (
    <Provider store={store}>
        <SafeAreaProvider>
            <ThemeProvider value={customTheme}>
                <GluestackUIProvider config={config}>
                    <Stack screenOptions={{ headerShown: false }}/>
                </GluestackUIProvider>
            </ThemeProvider>
        </SafeAreaProvider>
    </Provider>
  ) : null;
}

export default Layout;