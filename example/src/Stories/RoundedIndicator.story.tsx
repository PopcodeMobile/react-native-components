import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Center from '../../storybook/Center';
import ReactNativeComponents from '@popcode.mobile/react-native-components';

storiesOf('Rounded Indicator', module)
  .addDecorator((storyFn: any) => <Center>{storyFn()}</Center>)
  .add('Solid color', () => (
    <ReactNativeComponents.RoundedIndicator size={30} solidColor="red" />
  ))
  .add('Solid w/ custom style', () => (
    <ReactNativeComponents.RoundedIndicator
      size={15}
      solidColor="blue"
      style={styles.indicator}
    />
  ))
  .add('Gradient color', () => (
    <ReactNativeComponents.RoundedIndicator
      size={30}
      gradientColors={['red', 'orange']}
    />
  ))
  .add('Gradient w/ custom style', () => (
    <ReactNativeComponents.RoundedIndicator
      size={30}
      gradientColors={['red', 'orange']}
      style={styles.indicator}
    />
  ));

const styles = {
  indicator: { borderRadius: 3 },
};
