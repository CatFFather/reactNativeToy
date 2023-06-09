import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
} from 'react-native';

const headerHeight = 64; // headerHeight는 전역 관리 해야 할 듯

export default function ScreenContainer(props) {
  const { children } = props;
  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get('window').height,
  );

  useEffect(() => {
    // web 에서 ScrollView에 maxHeight를 설정해줘야 보임
    const updateHeight = ({ window }) => setWindowHeight(window.height);
    const onChangeDimensions = Dimensions.addEventListener(
      'change',
      updateHeight,
    );
    return () => onChangeDimensions.remove();
  }, []);

  return (
    <SafeAreaView style={styles.common}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        style={styles.common}
      >
        <ScrollView
          style={{ ...styles.common, maxHeight: windowHeight - headerHeight }}
          contentInsetAdjustmentBehavior="automatic"
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  common: {
    flex: 1,
  },
});
