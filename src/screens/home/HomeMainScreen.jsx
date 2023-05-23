import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
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

export default function Home({ navigation }) {
  return (
    <SafeAreaView header={false}>
      <View style={{ flex: 1 }}>
        <Text>HOME!!!!!!!!!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
