import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// HOOK
import useInput from '../../hooks/useInput';
// UTILE
import {
  screenTitle,
  screenSubTitle,
  align,
  commonLabel,
  withHeaderStyle,
} from '../../styles/commonStyle';
// STORE
import { useAuthStore } from '../../stores/AuthStore';
// COMPONENT
import ScrollScreenContainer from '../../components/layout/ScrollScreenContainer';
import Divider from '../../components/common/Divider';
import CommonBtn from '../../components/button/CommonBtn';
import LabelInput from '../../components/input/LabelInput';

export default function SettingMain({ navigation }) {
  const { user } = useAuthStore((state) => state);
  const name = useInput({ placeholder: '홍길동', initValue: user.name });
  return (
    <ScrollScreenContainer isHeader>
      <View style={styles.wrap}>
        <View style={styles.nameWrap}>
          <View>
            <Text style={screenSubTitle}>안녕하세요!</Text>
          </View>
          <View>
            <Text style={styles.name}>{user.id}</Text>
            <Divider style={styles.nameDivider} />
          </View>
        </View>
        <View style={styles.infoWrap}>
          <View>
            <View>
              <Text style={commonLabel}>업체명</Text>
            </View>
            <View>
              <Text style={styles.dataValue}>일이삼 공업사</Text>
            </View>
          </View>
          <LabelInput labelProps={{ name: '이름' }} inputProps={{ ...name }} />
          <View style={styles.phoneWrap}>
            <View>
              <Text style={styles.dataName}>휴대폰 번호</Text>
            </View>
            <View style={{ ...align.basicRow, gap: 10 }}>
              <Text style={styles.dataValue}>01022221111</Text>
              <Button title="번호변경" style={styles.phoneBtn} />
            </View>
          </View>
          <View style={styles.pwWrap}>
            <View>
              <Text style={styles.dataName}>비밀번호 변경</Text>
            </View>
            <View>
              <AntDesign name="right" size={28} color="black" />
            </View>
          </View>
        </View>
        <View>
          <CommonBtn label="저장" />
        </View>
      </View>
    </ScrollScreenContainer>
  );
}

const styles = StyleSheet.create({
  wrap: {
    ...withHeaderStyle,
    gap: 60,
    flex: 1,
  },
  nameWrap: {
    ...align.alignCenter,
    gap: 5,
  },
  name: {
    ...screenTitle,
    zIndex: 5,
  },
  nameDivider: {
    borderBottomWidth: 8,
    borderColor: '#DB3E07',
    opacity: 0.4,
    marginTop: -8,
  },
  infoWrap: {
    gap: 30,
    flex: 1,
  },
  dataName: {
    fontSize: 16,
    color: '#000000',
  },
  dataValue: {
    fontSize: 16,
    color: '#BBBBBB',
  },
  phoneWrap: {
    ...align.basicRow,
    justifyContent: 'space-between',
  },
  phoneBtn: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  pwWrap: {
    ...align.basicRow,
    justifyContent: 'space-between',
  },
});
