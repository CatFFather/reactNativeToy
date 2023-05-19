import React, { useState, startTransition, useEffect } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import SafeAreaView from '../../components/layout/SafeAreaView';
import useInput from '../../hooks/useInput';
import LabelInput from '../../components/input/LabelInput';
import { screenTitle, screenSubTitle } from '../../styles/commonStyle';
export default function LoginScreen({ navigation }) {
  const userId = useInput({ placeholder: '아이디 입력' });
  const userPw = useInput({ placeholder: '비밀번호 입력' });
  // login
  function login() {
    console.log('userId', userId);
    console.log('userPw', userPw);
  }
  return (
    <SafeAreaView>
      <View>
        <Text style={screenTitle}>로그인</Text>
        <Text style={{ ...screenSubTitle, marginBottom: 60 }}>
          안녕하세요, 회원님!
        </Text>
        <View style={{ gap: '25px' }}>
          <LabelInput
            labelProps={{ name: '아이디' }}
            inputProps={{ ...userId }}
          />
          <LabelInput
            labelProps={{ name: '비밀번호' }}
            inputProps={{ ...userPw, secureTextEntry: true }}
          />
          <View style={{ gap: '15px' }}>
            <Button title="로그인" onPress={login} />
            <Text>
              <Text onPress={() => navigation.navigate('JoinMemberScreen')}>
                아이디 찾기
              </Text>
              ////////////////////
              <Text onPress={() => navigation.navigate('JoinMemberScreen')}>
                비밀번호 찾기
              </Text>
            </Text>
          </View>
        </View>
        <View>
          <Text>
            계정이 없으신가요?
            <Text onPress={() => navigation.navigate('JoinMemberScreen')}>
              회원가입
            </Text>
          </Text>
        </View>
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
});
