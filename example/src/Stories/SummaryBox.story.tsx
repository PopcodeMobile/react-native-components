import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Center from '../../storybook/Center';
import ReactNativeComponents from '@popcode.mobile/react-native-components';

storiesOf('SummaryBox', module)
  .addDecorator((storyFn: any) => <Center>{storyFn()}</Center>)
  .add('Default', () => (
    <ReactNativeComponents.SummaryBox label="Label" accessibilityHint="Label" />
  ))
  .add('with text', () => (
    <ReactNativeComponents.SummaryBox
      label="Label"
      text="Text"
      accessibilityHint="Label with Text"
    />
  ));
