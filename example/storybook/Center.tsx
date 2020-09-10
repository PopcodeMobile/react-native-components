import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../src/Themes';

interface Props {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
}

export default ({ children, width, height }: Props) => (
  <View style={styles.decorator}>
    <View style={[styles.inner, !!width && { width }, !!height && { height }]}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  inner: {
    alignSelf: 'center',
  },
});
