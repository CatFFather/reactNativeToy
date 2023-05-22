import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
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
  colors,
} from '../../styles/commonStyle';
export default function LoginScreen({ navigation }) {
  const userId = useInput({ placeholder: '아이디 입력' });
  const userPw = useInput({ placeholder: '비밀번호 입력' });
  // login
  function login() {
    console.log('userId', userId);
    console.log('userPw', userPw);
  }
  return (
    <SafeAreaView header={false}>
      <View style={{ flex: 1, gap: 60 }}>
        <View>
          <Text style={screenTitle}>로그인</Text>
          <Text style={{ ...screenSubTitle }}>안녕하세요, 회원님!</Text>
        </View>
        <View style={{ gap: 25 }}>
          <LabelInput
            labelProps={{ name: '아이디' }}
            inputProps={{ ...userId }}
          />
          <LabelInput
            labelProps={{ name: '비밀번호' }}
            inputProps={{ ...userPw, secureTextEntry: true }}
          />
          <View style={{ gap: 15 }}>
            <Button
              title="로그인"
              onPress={login}
              color={colors.signatureColor}
            />
            <View style={{ ...align.rowAlignCenter, gap: 8 }}>
              <Text>아이디 찾기</Text>
              <Dot />
              <Text>비밀번호 찾기</Text>
            </View>
          </View>
          <View style={{ ...align.rowAlignCenter, gap: 4 }}>
            <Text>계정이 없으신가요?</Text>
            <Text
              style={{ color: colors.signatureColor, gap: 4 }}
              onPress={() => navigation.navigate('JoinMemberScreen')}
            >
              회원가입
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
