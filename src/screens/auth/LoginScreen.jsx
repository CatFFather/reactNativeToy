import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// UTILE
import {
  withoutHeaderStyle,
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
import ScrollScreenContainer from '../../components/layout/ScrollScreenContainer';
import SafeAreaView from '../../components/layout/SafeAreaView';
import LabelInput from '../../components/input/LabelInput';
import Dot from '../../components/common/Dot';
import CommonBtn from '../../components/button/CommonBtn';

export default function LoginScreen({ navigation }) {
  const { login } = useAuthStore((state) => state);
  const userId = useInput({ placeholder: '아이디 입력' });
  const userPw = useInput({ placeholder: '비밀번호 입력' });
  // login
  function setLogin() {
    const params = { id: userId.value, pw: userPw.value, name: userId.value };
    login(params);
  }
  function setDisabled() {
    const id = userId.value;
    const pw = userPw.value;
    return (
      id == '' || id == ' ' || id == null || pw == '' || pw == ' ' || pw == null
    );
  }
  return (
    <ScrollScreenContainer isHeader={false}>
      <View style={styles.mainWrap}>
        <View>
          <Text style={screenTitle}>로그인</Text>
          <Text style={{ ...screenSubTitle }}>안녕하세요, 회원님!</Text>
        </View>
        <View style={styles.contentsWrap}>
          <LabelInput
            labelProps={{ name: '아이디' }}
            inputProps={{ ...userId }}
          />
          <LabelInput
            labelProps={{ name: '비밀번호' }}
            inputProps={{ ...userPw, secureTextEntry: true }}
          />
          <View style={{ gap: 15 }}>
            <CommonBtn
              disabled={setDisabled()}
              label="로그인"
              onPress={setLogin}
            />
            <View style={styles.textWrap}>
              <Text>아이디 찾기</Text>
              <Dot />
              <Text>비밀번호 찾기</Text>
            </View>
          </View>
          <View style={styles.textWrap}>
            <Text>계정이 없으신가요?</Text>
            <Text
              style={{ color: colors.signatureColor }}
              onPress={() => navigation.navigate('JoinMember')}
            >
              회원가입
            </Text>
          </View>
        </View>
      </View>
    </ScrollScreenContainer>
  );
}
const styles = StyleSheet.create({
  mainWrap: {
    ...withoutHeaderStyle,
    gap: 60,
    flex: 1,
  },
  contentsWrap: {
    gap: 25,
  },
  textWrap: {
    ...align.rowAlignCenter,
    gap: 8,
  },
});
