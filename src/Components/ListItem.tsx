import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleProp,
  TextStyle,
  Image,
} from 'react-native';
import { getStyles } from './ListItem.style';
import RoundedIndicator from './RoundedIndicator';
import { useCustomTheme, Images } from '../Themes';

export interface ListItemType {
  datetime?: string;
  leftTitle: string;
  leftSubtitle: string;
  rightTitle?: string;
  rightSubtitle?: string;
  onPressItem?: () => void;
  canceled?: boolean;
  indicatorColor?: string;
  isRoundedIndicator?: boolean;
  accessibilityLabel?: string;
  leftOverHeader?: string;
  rightTitleStyle?: StyleProp<TextStyle>;
}

const ListItem = ({
  datetime,
  leftTitle,
  leftSubtitle,
  rightTitle,
  rightSubtitle,
  onPressItem,
  canceled,
  indicatorColor,
  isRoundedIndicator,
  accessibilityLabel,
  leftOverHeader,
  rightTitleStyle,
}: ListItemType) => {
  const theme = useCustomTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      accessibilityLabel={accessibilityLabel}
      disabled={!onPressItem}
      activeOpacity={0.6}
      onPress={onPressItem}
      style={styles.mainContainer}
    >
      {indicatorColor && !isRoundedIndicator && (
        <View style={[styles.indicator, { backgroundColor: indicatorColor }]} />
      )}
      <View style={styles.containerPadding}>
        {!!datetime && <Text style={styles.datetime}>{datetime}</Text>}
        {indicatorColor && isRoundedIndicator && (
          <RoundedIndicator
            size={5}
            solidColor={indicatorColor}
            style={styles.roundedIndicator}
          />
        )}
        <View style={styles.textContainer}>
          <View style={styles.contentRow}>
            {leftOverHeader && (
              <Text style={styles.overHeader}>{leftOverHeader}</Text>
            )}
          </View>
          <View style={styles.contentRow}>
            {leftTitle && (
              <Text style={[styles.leftTitle, canceled && styles.canceled]}>
                {leftTitle}
              </Text>
            )}
            {rightTitle && (
              <Text style={[styles.rightTitle, rightTitleStyle]}>
                {rightTitle}
              </Text>
            )}
          </View>
          <View style={styles.contentRow}>
            {leftSubtitle && (
              <Text style={styles.subtitle}>{leftSubtitle}</Text>
            )}
            {rightSubtitle && (
              <Text style={styles.subtitle}>{rightSubtitle}</Text>
            )}
          </View>
        </View>
        {onPressItem && (
          <Image
            testID="onPressIcon"
            accessibilityIgnoresInvertColors
            source={Images.chevron.right['6px']}
            style={styles.chevron}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
