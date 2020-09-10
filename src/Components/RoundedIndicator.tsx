import React from 'react';
import type { ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../Themes';
interface Props {
  size: number;
  solidColor?: string;
  gradientColors?: string[];
  style?: ViewStyle;
}

const RoundedIndicator: React.FC<Props> = ({
  size,
  solidColor = Colors.c800,
  style,
  gradientColors,
}) => {
  const proportions = { width: size, height: size, borderRadius: size / 2 };
  return (
    <LinearGradient
      testID="roundIndicator"
      style={[proportions, style]}
      colors={gradientColors || [solidColor, solidColor]}
      useAngle
      angle={45}
      angleCenter={{ x: 0.5, y: 0.5 }}
    />
  );
};

export default RoundedIndicator;
