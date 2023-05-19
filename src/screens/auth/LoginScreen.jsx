import React from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import SafeAreaView from '../../components/layout/SafeAreaView';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text>로그인</Text>
        <Text>안녕하세요, 회원님!</Text>
        <TextInput style={styles.input} placeholder="아이디 입력" />
        <TextInput
          style={styles.input}
          placeholder="비밀번호 입력"
          secureTextEntry
        />
        <Button
          title="로그인"
          onPress={() => navigation.navigate('JoinMemberScreen')}
        />
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
