import React, { useState, startTransition, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// HOOK
// COMPONENT
import SafeAreaView from '../../components/layout/SafeAreaView';
import JoinMemberCheckbox from '../../components/checkbox/JoinMemberCheckbox';
import Divider from '../../components/common/Divider';
import CommonBtn from '../../components/button/CommonBtn';

// UTILE
import {
  screenTitle,
  screenSubTitle,
  align,
  colors,
} from '../../styles/commonStyle';
const initChecked = {
  ALL: false,
  TERM: false,
  PERSONAL: false,
  LOCATION: false,
};
export default function JoinMemberScreen() {
  const [isChecked, setChecked] = useState(initChecked);

  function onPressCheckbox(type) {
    let cloneIsChecked = { ...isChecked };
    if (type == 'ALL') {
      for (const key in cloneIsChecked) cloneIsChecked[key] = !isChecked[type];
      setChecked(cloneIsChecked);
    } else {
      let allValue = true;
      cloneIsChecked = { ...cloneIsChecked, [type]: !isChecked[type] };
      for (const key in cloneIsChecked) {
        if (allValue == false) break;
        if (key != 'ALL' && cloneIsChecked[key] == false) allValue = false;
      }
      setChecked({ ...cloneIsChecked, ALL: allValue });
    }
  }
  function test() {
    console.log('test!!!!');
  }
  return (
    <SafeAreaView header={true}>
      <View style={{ flex: 1, gap: 60 }}>
        <View>
          <Text style={screenTitle}>회원가입</Text>
          <Text style={{ ...screenSubTitle }}>약관에 동의해 주세요.</Text>
        </View>
        <View style={{ gap: 20 }}>
          <JoinMemberCheckbox
            name={'checkcircle'}
            size={28}
            color={isChecked['ALL'] ? colors.signatureColor : colors.blank}
            lable="전체동의"
            onPress={() => onPressCheckbox('ALL')}
          />
          <Divider></Divider>
          <View style={[align.basicRow, styles.agreeWrap]}>
            <JoinMemberCheckbox
              name="check"
              size={28}
              color={isChecked['TERM'] ? colors.signatureColor : colors.blank}
              lable="이용약관에 동의합니다."
              onPress={() => onPressCheckbox('TERM')}
            />
            <AntDesign name="right" size={24} color="black" />
          </View>
          <View style={[align.basicRow, styles.agreeWrap]}>
            <JoinMemberCheckbox
              name="check"
              size={28}
              color={
                isChecked['PERSONAL'] ? colors.signatureColor : colors.blank
              }
              lable=" 개인정보 취급방침에 동의합니다."
              onPress={() => onPressCheckbox('PERSONAL')}
            />
            <AntDesign name="right" size={24} color="black" />
          </View>
          <View style={[align.basicRow, styles.agreeWrap]}>
            <JoinMemberCheckbox
              name="check"
              size={28}
              color={
                isChecked['LOCATION'] ? colors.signatureColor : colors.blank
              }
              lable=" 위치기반 서비스 이용 약관에 동의합니다."
              onPress={() => onPressCheckbox('LOCATION')}
            />
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>
      </View>
      <View>
        <CommonBtn
          disabled={!isChecked['ALL']}
          label="다음"
          onPress={() => test('TERM')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  agreeWrap: {
    justifyContent: 'space-between',
  },
});
