import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// UTILE
import { withoutHeaderStyle } from '../../styles/commonStyle';
// STORE
import { useAuthStore } from '../../stores/AuthStore';
// COMPONENT
import ScrollScreenContainer from '../../components/layout/ScrollScreenContainer';

export default function HomeMainScreen({ navigation }) {
  const { user } = useAuthStore((state) => state);
  return (
    <ScrollScreenContainer isHeader={false}>
      <View style={styles.container}>
        <Text>home!!!!</Text>
      </View>
    </ScrollScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    ...withoutHeaderStyle,
    gap: 30,
    flex: 1,
  },
});
