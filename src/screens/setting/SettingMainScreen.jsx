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
import Divider from '../../components/common/Divider';
import LabelInput from '../../components/input/LabelInput';
import CommonBtn from '../../components/button/CommonBtn';

export default function SettingMain({ navigation }) {
  const { logout, user } = useAuthStore((state) => state);
  function test() {}
  return (
    <SafeAreaView header={true}>
      <ScrollView>
        <View style={{ gap: 30 }}>
          {/* 이름 */}
          <View style={screenTitle}>{user.name} 님</View>
          <Divider />
          {/* 정보설정 */}
          <View style={{ gap: 30 }}>
            <View style={styles.subTitle}>정보 설정</View>
            <Pressable style={styles.pressableWrap}>
              <View style={styles.labelWrap}>
                <AntDesign name="form" size={28} color="black" />
                <Text style={styles.label} onPress={test}>
                  내 정보 수정
                </Text>
              </View>
              <AntDesign name="right" size={28} color="black" />
            </Pressable>
            <Pressable style={styles.pressableWrap}>
              <View style={styles.labelWrap}>
                <AntDesign name="logout" size={28} color="black" />
                <Text style={styles.label} onPress={logout}>
                  로그아웃
                </Text>
              </View>
              <AntDesign name="right" size={28} color="black" />
            </Pressable>
            <Pressable style={styles.pressableWrap}>
              <View style={styles.labelWrap}>
                <AntDesign name="infocirlceo" size={28} color="black" />
                <Text style={styles.label} onPress={test}>
                  버전 정보
                </Text>
              </View>
              <AntDesign name="right" size={28} color="black" />
            </Pressable>
          </View>
          <Divider />
          {/* 약관 */}
          <View style={{ gap: 30 }}>
            <View style={styles.subTitle}>정보 설정</View>
            <Pressable style={styles.pressableWrap}>
              <View style={styles.labelWrap}>
                <AntDesign name="filetext1" size={28} color="black" />
                <Text style={styles.label} onPress={test}>
                  이용 약관
                </Text>
              </View>
              <AntDesign name="right" size={28} color="black" />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    ...screenSubTitle,
    fontSize: 12,
  },
  checkbox: {
    gap: 10,
  },
  label: {
    fontWeight: 400,
    fontSize: 18,
  },
  agreeWrap: {
    justifyContent: 'space-between',
  },
  pressableWrap: {
    ...align.basicRow,
    justifyContent: 'space-between',
  },
  labelWrap: {
    ...align.basicRow,
    gap: 10,
  },
});
