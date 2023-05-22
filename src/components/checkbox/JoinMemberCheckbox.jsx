import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, StyleSheet, Pressable } from 'react-native';
// UTILE
import { align } from '../../styles/commonStyle';
export default function JoinMemberScreen(props) {
  const { name, color, label, size, onPress } = props;

  return (
    <Pressable style={[align.basicRow, styles.checkbox]} onPress={onPress}>
      <AntDesign name={name} size={size} color={color} />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    gap: 10,
  },
  label: {
    fontWeight: 400,
    fontSize: 18,
  },
});
