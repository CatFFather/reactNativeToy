import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  StyleSheet,
} from 'react-native';
// UTILE
import { basicHeader } from '../../styles/commonStyle';

export default function ScreenContainer(props) {
  const { children, isHeader } = props;
  const insets = useSafeAreaInsets();
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
    <SafeAreaView
      style={[styles.common, { marginTop: isHeader ? -insets.top : 0 }]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        style={styles.common}
      >
        <ScrollView
          style={[
            styles.common,
            { maxHeight: windowHeight - (isHeader ? basicHeader.height : 0) },
          ]}
          contentContainerStyle={styles.scrollViewContentContainerStyle}
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
  scrollViewContentContainerStyle: {
    flexGrow: 1,
  },
});
