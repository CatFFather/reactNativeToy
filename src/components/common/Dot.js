import React from 'react';
import { View, StyleSheet } from 'react-native';
export default function Dot() {
  return <View style={styles.dot}></View>;
}

const styles = StyleSheet.create({
  dot: {
    width: 4,
    height: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#000000',
    backgroundColor: '#000000',
  },
});
