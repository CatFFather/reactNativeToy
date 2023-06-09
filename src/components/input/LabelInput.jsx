import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { commonLabel } from '../../styles/commonStyle';

export default function labelInput(props) {
  const { labelProps, inputProps } = props;

  return (
    <View>
      <Text style={styles.label}>{labelProps.name}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#BBBBBB"
        {...inputProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    ...commonLabel,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    // outlineStyle: 'none',
  },
});
