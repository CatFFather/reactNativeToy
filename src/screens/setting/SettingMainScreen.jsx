import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, Pressable, StyleSheet, ScrollView } from 'react-native';
// UTILE
import {
  screenTitle,
  screenSubTitle,
  align,
  colors,
} from '../../styles/commonStyle';
// HOOK
import useInput from '../../hooks/useInput';
// STORE
import { useAuthStore } from '../../stores/AuthStore';
// COMPONENT
import SafeAreaView from '../../components/layout/SafeAreaView';
import LabelInput from '../../components/input/LabelInput';
import Dot from '../../components/common/Dot';
import CommonBtn from '../../components/button/CommonBtn';

export default function SettingMain({ navigation }) {
  const { logout } = useAuthStore((state) => state);
  return (
    <SafeAreaView header={true}>
      <ScrollView style={{ flex: 1 }}>
        <Text>SettingMain!!!!!!!!!</Text>
        <Pressable style={[align.basicRow, styles.checkbox]}>
          {/* <AntDesign name={name} size={size} color={color} /> */}
          <Text style={styles.label} onPress={logout}>
            로그아웃
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
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
