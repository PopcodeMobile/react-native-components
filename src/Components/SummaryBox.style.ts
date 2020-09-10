import { StyleSheet } from 'react-native';

export const getStyles = () =>
  StyleSheet.create({
    mainContainer: {
      flex: 0.32,
      height: 48,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: 'rgba(195, 204, 210, 0.45)',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    text: {
      fontSize: 12,
      fontFamily: 'Lato',
      fontWeight: 'bold',
      letterSpacing: 0.03,
      textAlign: 'center',
    },
  });
