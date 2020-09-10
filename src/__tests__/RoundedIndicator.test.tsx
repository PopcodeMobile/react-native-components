import React from 'react';
import { render } from '@testing-library/react-native';

import RoundedIndicator from '../Components/RoundedIndicator';
import '@testing-library/jest-native/extend-expect';

describe('RoundedIndicator', () => {
  // https://convertingcolors.com/android-color-4294967235.html
  const yellowAndroidIntColor = 4294967210;

  const greenAndroidIntColor = 4278255360;

  test('with solid color', () => {
    const { getByTestId } = render(
      <RoundedIndicator size={15} solidColor="#FFFFAA" />
    );

    expect(getByTestId('roundIndicator')).toBeTruthy();
    expect(getByTestId('roundIndicator')).toHaveStyle([
      {
        borderRadius: 7.5,
        height: 15,
        width: 15,
      },
    ]);

    expect(getByTestId('roundIndicator')).toHaveProperty('props.colors', [
      yellowAndroidIntColor,
      yellowAndroidIntColor,
    ]);
  });

  test('with gradient color', () => {
    const { getByTestId } = render(
      <RoundedIndicator size={50} gradientColors={['#FFFFAA', '#00FF00']} />
    );

    expect(getByTestId('roundIndicator')).toBeTruthy();
    expect(getByTestId('roundIndicator')).toHaveStyle([
      {
        borderRadius: 25,
        height: 50,
        width: 50,
      },
    ]);

    expect(getByTestId('roundIndicator')).toHaveProperty('props.colors', [
      yellowAndroidIntColor,
      greenAndroidIntColor,
    ]);
  });
});
