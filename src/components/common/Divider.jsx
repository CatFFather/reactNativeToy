import React from 'react';
import { View, StyleSheet } from 'react-native';
export default function Divider(props) {
  const { style } = props;
  return <View style={[styles.divider, style]}></View>;
}

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
});
