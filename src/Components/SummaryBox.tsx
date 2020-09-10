import * as React from 'react';
import { Text, View } from 'react-native';
import { getStyles } from './SummaryBox.style';

interface Props {
  label: string;
  text?: string | number;
  accessibilityHint?: string;
}

const SummaryBox = ({ accessibilityHint, label, text = '0' }: Props) => {
  const styles = getStyles();
  return (
    <View
      style={styles.mainContainer}
      accessible
      accessibilityLabel={`${label}: ${text}`}
      accessibilityHint={accessibilityHint}
    >
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default SummaryBox;
