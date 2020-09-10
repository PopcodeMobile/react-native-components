import { useTheme, DefaultTheme } from '@react-navigation/native';
import type { ColorsType, CustomTheme, FontsType } from './Entities';
import { colors, fonts } from './design-tokens-light.json';
import Images from './Images';

// Exported for backwards compatibility
const Colors: ColorsType = colors;
// @ts-ignore
const Fonts: FontsType = fonts;

const MyTheme: any = {
  colors,
  fonts,
};

const useCustomTheme = () => {
  const theme = useTheme();
  const isThemeDefault = DefaultTheme === theme;
  return ((isThemeDefault ? MyTheme : theme) as unknown) as CustomTheme;
};

export { Colors, Fonts, useCustomTheme, Images };
export * from './Entities';
