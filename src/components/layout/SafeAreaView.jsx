import React from 'react';
import { StyleSheet } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function SafeAreaLayout(props) {
  const insets = useSafeAreaInsets();
  // console.log('insets', insets);
  return (
    <SafeAreaView
    // style={{
    //   position: 'relative',
    //   ...insets,
    // }}
    >
      {props.children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
