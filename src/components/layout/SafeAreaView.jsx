import React from 'react';
import { StyleSheet } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { withHeaderStyle, withoutHeaderStyle } from '../../styles/commonStyle';

export default function SafeAreaLayout(props) {
  const { header } = props;
  const insets = useSafeAreaInsets();
  // console.log('insets', insets);
  return (
    <SafeAreaView
      style={[styles.wrap, header ? withHeaderStyle : withoutHeaderStyle]}
    >
      {props.children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1 },
});
