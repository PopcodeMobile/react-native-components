import { Dimensions, StyleSheet } from 'react-native';
import type { CustomTheme } from '../Themes';

const TIME_CONTAINER_WIDTH = 64;
const BAR_INDICATOR_WIDTH = 2;
const CONTAINER_VERTICAL_PADDING = 12;
const MARGIN_BETWEEN_TEXTS = 4;

export const getStyles = ({ colors }: CustomTheme) =>
  StyleSheet.create({
    mainContainer: {
      overflow: 'hidden',
      width: Dimensions.get('window').width,
      justifyContent: 'center',
      height: 64,
    },
    datetime: {
      fontFamily: 'Lato',
      fontWeight: '500',
      fontSize: 12,
      color: colors.description,
      marginRight: 8,
      textAlign: 'right',
      width: TIME_CONTAINER_WIDTH,
    },
    contentRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 16 + BAR_INDICATOR_WIDTH,
    },
    subtitle: {
      fontFamily: 'Lato',
      marginTop: MARGIN_BETWEEN_TEXTS,
      fontWeight: '600',
      fontSize: 12,
      lineHeight: 12,
      color: colors.description,
    },
    overHeader: {
      fontFamily: 'Lato',
      marginBottom: MARGIN_BETWEEN_TEXTS,
      fontWeight: '600',
      fontSize: 12,
      lineHeight: 11,
      color: colors.description,
    },
    leftTitle: {
      fontFamily: 'Lato',
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: 17,
      color: colors.title,
    },
    rightTitle: {
      fontFamily: 'Lato',
      fontSize: 14,
      lineHeight: 17,
      color: colors.title,
    },
    containerPadding: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: CONTAINER_VERTICAL_PADDING,
      paddingRight: 16,
    },
    canceled: {
      textDecorationLine: 'line-through',
    },
    chevron: {
      marginLeft: 8,
      tintColor: colors.description,
    },
    indicator: {
      position: 'absolute',
      left: 72,
      height: 40,
      width: BAR_INDICATOR_WIDTH,
      borderRadius: 5,
      alignSelf: 'center',
    },
    roundedIndicator: {
      marginLeft: 16,
      marginRight: -BAR_INDICATOR_WIDTH,
    },
    textContainer: { flex: 1 },
  });
