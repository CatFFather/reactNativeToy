import React, { useState } from 'react';

export default function useInput(props) {
  const { placeholder, initValue } = props;
  const [value, setValue] = useState(initValue || '');

  return {
    placeholder,
    value,
    onChangeText: (v) => setValue(v),
  };
}
