import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// UTILE
import { align } from '../../../styles/commonStyle';
// STORE
import { useAuthStore } from '../../../stores/AuthStore';
const iconValue = {
  form: { label: '내 정보 수정', path: 'HomeMain' },
  logout: { label: '로그아웃', path: 'HomeMain' },
  infocirlceo: { label: '버전 정보', path: 'HomeMain' },
  filetext1: { label: '이용 약관', path: 'HomeMain' },
};
export default function SettingMenuItem(props) {
  const navigation = useNavigation();
  const { iconName } = props;
  const { logout, user } = useAuthStore((state) => state);

  function goToPage() {
    if (iconName == 'logout') logout();
    else navigation.navigate(iconValue[iconName].path);
  }

  return (
    <Pressable style={styles.pressableWrap} onPress={goToPage}>
      <View style={styles.labelWrap}>
        <AntDesign name={iconName} size={28} color="black" />
        <Text style={styles.label}>{iconValue[iconName].label}</Text>
      </View>
      <AntDesign name="right" size={28} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: 400,
    fontSize: 18,
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
