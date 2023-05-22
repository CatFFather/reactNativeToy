import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
// UTILE
import { align, colors } from '../../styles/commonStyle';
export default function CommonBtn(props) {
  const { disabled, label, style, onPress } = props;
  const { disabled: disabledColors } = colors;
  const { trueBackground, falseBackground, trueText, falseText } =
    disabledColors;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: disabled ? trueBackground : falseBackground,
          ...style?.btn,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonLabel,
          {
            color: disabled ? trueText : falseText,
            ...style?.label,
          },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    padding: 10,
    borderRadius: 8,
    ...align.alignCenter,
  },
  buttonLabel: {
    fontSize: 16,
  },
});
