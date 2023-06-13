import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
// UTILE
import { withoutHeaderStyle } from '../../styles/commonStyle';
// STORE
import { useAuthStore } from '../../stores/AuthStore';
// COMPONENT
import ScrollScreenContainer from '../../components/layout/ScrollScreenContainer';
import ImageViewer from '../../components/img/ImageViewer';
import Button from '../../components/button/Button';
import CircleButton from '../../components/button/CircleButton';
import IconButton from '../../components/button/IconButton';

import EmojiPicker from '../../components/modal/EmojiPicker';
import EmojiList from '../../components/container/home/EmojiList';
import EmojiSticker from '../../components/container/home/EmojiSticker';

const PlaceholderImage = require('../../assets/images/background-image.png');
// TODO 최신 Expo 환경에서 복수 이미지 업로드하는 방법 https://joonfluence.tistory.com/m/634 이것도 해보기 , https://snack.expo.dev/S1SSmaE6z?platform=web
export default function HomeMainScreen({ navigation }) {
  const { user } = useAuthStore((state) => state);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const [selectedImage, setSelectedImage] = useState(null);

  const askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    // you would probably do something to verify that permissions
    // are actually granted, but I'm skipping that for brevity
  };

  useEffect(() => {
    askPermissionsAsync();
  }, []);

  const pickImageAsync = async () => {
    console.log('status', status);
    const test = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log('test', test);
    if (!status?.granted) {
      const option = {
        canAskAgain: true,
      };
      const permission = await requestPermission(option);
      console.log('permission', permission);
      if (!permission.granted) {
        return null;
      }
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      // allowsMultipleSelection: true, 다중 사용이랑 allowsEditing 는 같이 사용못함
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // we will implement this later
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };
  const onModalClose = () => {
    setIsModalVisible(false);
  };
  return (
    <ScrollScreenContainer isHeader={false}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer
            placeholderImageSource={PlaceholderImage}
            selectedImage={selectedImage}
          />
          {pickedEmoji !== null ? (
            <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
          ) : null}
        </View>
        {showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton
                icon="save-alt"
                label="Save"
                onPress={onSaveImageAsync}
              />
            </View>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button
              theme="primary"
              label="Choose a photo"
              onPress={pickImageAsync}
            />
            <Button
              label="Use this photo"
              onPress={() => setShowAppOptions(true)}
            />
          </View>
        )}
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
        </EmojiPicker>
        <StatusBar style="auto" />
      </View>
    </ScrollScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    ...withoutHeaderStyle,
    gap: 30,
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
