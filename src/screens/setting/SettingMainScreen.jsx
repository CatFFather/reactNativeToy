import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
// UTILE
import {
  withoutHeaderStyle,
  screenTitle,
  screenSubTitle,
  align,
} from '../../styles/commonStyle';
// STORE
import { useAuthStore } from '../../stores/AuthStore';
// COMPONENT
import ScrollScreenContainer from '../../components/layout/ScrollScreenContainer';
import Divider from '../../components/common/Divider';
import SettingMenuItem from '../../components/container/setting/SettingMenuItem';

export default function SettingMain({ navigation }) {
  const { user } = useAuthStore((state) => state);
  return (
    <ScrollScreenContainer isHeader={false}>
      <View style={styles.wrap}>
        {/* 이름 */}
        <View style={styles.userInfo}>
          <Text style={screenTitle}>
            <AntDesign name="user" size={28} color="black" />
          </Text>
          <Text style={screenTitle}>{user.name} 님</Text>
        </View>
        <Divider />
        {/* 정보설정 */}
        <View style={styles.itemsWrap}>
          <View>
            <Text style={styles.subTitle}>정보 설정</Text>
          </View>
          <SettingMenuItem iconName="form" />
          <SettingMenuItem iconName="logout" />
          <SettingMenuItem iconName="infocirlceo" />
        </View>
        <Divider />
        {/* 약관 */}
        <View style={styles.itemsWrap}>
          <View>
            <Text style={styles.subTitle}>약관</Text>
          </View>
          <SettingMenuItem iconName="filetext1" />
        </View>
      </View>
    </ScrollScreenContainer>
  );
}

const styles = StyleSheet.create({
  wrap: {
    ...withoutHeaderStyle,
    gap: 30,
    flex: 1,
  },
  userInfo: {
    ...align.basicRow,
    gap: 10,
  },
  itemsWrap: {
    gap: 30,
  },
  subTitle: {
    ...screenSubTitle,
    fontSize: 12,
  },
});
