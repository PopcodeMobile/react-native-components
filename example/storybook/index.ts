import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { name as appName } from '../app.json';

// import stories
configure(() => {
  require('../src/Stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
// Community AsyncStorage typings are different from React Native AsyncStorage typings
// Casting to 'any' to supress error
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
  disableWebsockets: true,
});

// If you are using React Native vanilla write your app name here.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
