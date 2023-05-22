import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, StyleSheet } from 'react-native';
// UTILE
import { align } from '../../styles/commonStyle';
export default function JoinMemberScreen(props) {
  const { name, color, lable, size } = props;
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={[align.basicRow, styles.checkbox]}>
      <AntDesign name={name} size={size} color={color} />
      <Text style={styles.lable}>{lable}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    gap: 10,
  },
  lable: {
    fontWeight: 400,
    fontSize: 18,
  },
});
