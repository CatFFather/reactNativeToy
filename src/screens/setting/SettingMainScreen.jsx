import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
// UTILE
import { screenTitle, screenSubTitle, align } from '../../styles/commonStyle';
// STORE
import { useAuthStore } from '../../stores/AuthStore';
// COMPONENT
import SafeAreaView from '../../components/layout/SafeAreaView';
import Divider from '../../components/common/Divider';
import SettingMenuItem from '../../components/container/setting/SettingMenuItem';

export default function SettingMain({ navigation }) {
  const { user } = useAuthStore((state) => state);
  return (
    <SafeAreaView header={true}>
      <ScrollView>
        <View style={{ gap: 30 }}>
          {/* 이름 */}
          <View style={styles.userInfo}>
            <Text style={screenTitle}>
              <AntDesign name="user" size={28} color="black" />
            </Text>
            <Text style={screenTitle}>{user.name} 님</Text>
          </View>
          <Divider />
          {/* 정보설정 */}
          <View style={{ gap: 30 }}>
            <View>
              <Text style={styles.subTitle}>정보 설정</Text>
            </View>
            <SettingMenuItem iconName="form" />
            <SettingMenuItem iconName="logout" />
            <SettingMenuItem iconName="infocirlceo" />
          </View>
          <Divider />
          {/* 약관 */}
          <View style={{ gap: 30 }}>
            <View>
              <Text style={styles.subTitle}>정보 설정</Text>
            </View>
            <SettingMenuItem iconName="filetext1" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  userInfo: {
    ...align.basicRow,
    gap: 10,
  },
  subTitle: {
    ...screenSubTitle,
    fontSize: 12,
  },
});
