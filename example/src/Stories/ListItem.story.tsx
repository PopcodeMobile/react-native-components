import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Center from '../../storybook/Center';
import { Colors, Images } from '../Themes';
import ReactNativeComponents from '@popcode.mobile/react-native-components';

storiesOf('VerticalTimelineItem', module)
  .addDecorator((storyFn: any) => <Center>{storyFn()}</Center>)
  .add('Default', () => (
    <ReactNativeComponents.ListItem
      leftTitle={'R$ 200,00'}
      leftSubtitle={'automática diária'}
      rightTitle={'10001'}
      rightSubtitle={'ativo'}
    />
  ))
  .add('rounded indicator ', () => (
    <ReactNativeComponents.ListItem
      leftTitle={'R$ 200,00'}
      leftSubtitle={'automática diária'}
      rightTitle={'10001'}
      rightSubtitle={'ativo'}
      indicatorColor={Colors.a360}
      isRoundedIndicator
    />
  ))
  .add('rounded indicator with time ', () => (
    <ReactNativeComponents.ListItem
      leftTitle={'R$ 200,00'}
      leftSubtitle={'automática diária'}
      rightTitle={'10001'}
      rightSubtitle={'ativo'}
      indicatorColor={Colors.a360}
      isRoundedIndicator
      datetime="26/02"
    />
  ))
  .add('with datetime and flat indicator ', () => (
    <ReactNativeComponents.ListItem
      leftTitle={'R$ 200,00'}
      leftSubtitle={'automática diária'}
      rightTitle={'10001'}
      rightSubtitle={'ativo'}
      indicatorColor={Colors.a360}
      datetime="26/02"
    />
  ))
  .add('with datetime', () => (
    <ReactNativeComponents.ListItem
      leftTitle={'R$ 200,00'}
      leftSubtitle={'automática diária'}
      rightTitle={'10001'}
      rightSubtitle={'ativo'}
      datetime="26/02"
    />
  ))
  .add('with cancel status', () => (
    <ReactNativeComponents.ListItem
      leftTitle={'R$ 200,00'}
      leftSubtitle={'automática diária'}
      rightTitle={'10001'}
      rightSubtitle={'ativo'}
      canceled
    />
  ))
  .add('with custom right title', () => (
    <ReactNativeComponents.ListItem
      leftTitle={'Rei do Pirão'}
      leftSubtitle={'Av. Ivo do Prado'}
      rightTitle={'R$24,15'}
      rightSubtitle={'12:33'}
      rightTitleStyle={styles.titleSubtitle}
    />
  ))
  .add('with onPress action', () => (
    <ReactNativeComponents.ListItem
      leftTitle={'R$ 200,00'}
      leftSubtitle={'automática diária'}
      rightTitle={'10001'}
      rightSubtitle={'ativo'}
      onPressItem={() => {}}
      onPressIcon={Images.chevronRight}
    />
  ));

const styles = {
  titleSubtitle: {
    fontSize: 15,
    color: 'red',
  },
};
