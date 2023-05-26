import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
// HOOK
import useInput from '../../hooks/useInput';
// UTILE
import { screenTitle, screenSubTitle, align } from '../../styles/commonStyle';
// STORE
import { useAuthStore } from '../../stores/AuthStore';
// COMPONENT
import SafeAreaView from '../../components/layout/SafeAreaView';
import Divider from '../../components/common/Divider';
import SettingMenuItem from '../../components/container/setting/SettingMenuItem';
import LabelInput from '../../components/input/LabelInput';

export default function SettingMain({ navigation }) {
  const { user } = useAuthStore((state) => state);
  const name = useInput({ placeholder: '홍길동', initValue: user.name });
  return (
    <SafeAreaView header={true}>
      <View style={{ gap: 30 }}>
        {/* 이름 */}
        <View>
          <Text style={screenTitle}>안녕하세요!</Text>
        </View>
        <View>
          <Text style={screenTitle}>{user.id} 님</Text>
        </View>
        <LabelInput labelProps={{ name: '이름' }} inputProps={{ ...name }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    ...screenSubTitle,
    fontSize: 12,
  },
});
