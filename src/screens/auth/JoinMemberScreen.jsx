import React, { useState, startTransition, useEffect } from 'react';
import Checkbox from 'expo-checkbox';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
// HOOK
import useInput from '../../hooks/useInput';
// COMPONENT
import SafeAreaView from '../../components/layout/SafeAreaView';
import LabelInput from '../../components/input/LabelInput';
import Dot from '../../components/common/Dot';
// UTILE
import {
  screenTitle,
  screenSubTitle,
  align,
  signatureColor,
} from '../../styles/commonStyle';
export default function LoginScreen({ navigation }) {
  const [isChecked, setChecked] = useState(false);
  return (
    <SafeAreaView header={true}>
      <View style={{ flex: 1, gap: 60 }}>
        <View>
          <Text style={screenTitle}>회원가입</Text>
          <Text style={{ ...screenSubTitle }}>약관에 동의해 주세요.</Text>
        </View>
        <View style={{ gap: 25 }}>
          <View style={styles.section}>
            <Checkbox value={isChecked} onValueChange={setChecked} />
            <Text>Normal checkbox</Text>
          </View>
        </View>
      </View>
      <View>
        <Text>fixed footer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
