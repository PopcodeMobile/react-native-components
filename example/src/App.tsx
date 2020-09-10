import * as React from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeColors, ThemeFonts } from './Themes';
import StorybookUI from '../storybook';

export default function App() {
  const darkMode = useColorScheme() === 'dark';
  const MyTheme: any = {
    dark: darkMode,
    colors: darkMode ? { ...ThemeColors.dark } : { ...ThemeColors.light },
    fonts: darkMode ? { ...ThemeFonts.dark } : { ...ThemeFonts.light },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <View style={styles.container}>
        <StorybookUI />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
