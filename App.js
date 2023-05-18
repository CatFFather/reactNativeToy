import { useState, useRef, startTransition } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import { Video, ResizeMode } from 'expo-av';
// import { Video } from 'react-native-compressor';
// import MapView from 'react-native-maps';
import {
  getDirectoryUri,
  readDir,
  createFile,
  readFile,
  deleteFile,
} from './src/services/fs';

export default function App() {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [directoryUri, setDirectoryUri] = useState('');
  const [filepath, setFilepath] = useState('');
  const [image, setImage] = useState(null);
  const [compressingProgress, setCompressingProgress] = useState(false);

  const pickImage = async (e) => {
    console.log('onPress', e);
    return;
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      allowMultipleSelection: true,
      // aspect: [4, 3],
      quality: 0.1,
      // videoExportPreset: ImagePicker.VideoExportPreset.H264_1280x720,
      // videoQuality:
      //   ImagePicker.UIImagePickerControllerQualityType.IFrame1280x720,
    });

    console.log(result);
    console.log('result', result);
    // const compressResult = await CompressorVideo.compress(
    //   result.assets[0].uri,
    //   {
    //     compressionMethod: 'auto',
    //   },
    //   (progress) => {
    //     if (backgroundMode) {
    //       console.log('Compression Progress: ', progress);
    //     } else {
    //       setCompressingProgress(progress);
    //     }
    //   },
    // );
    // console.log('compressResult', compressResult);
    if (!result.canceled) {
      // setImage(result.assets[0].uri);
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Button
            title="Pick an image from camera rollasd"
            onPress={pickImage}
          />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
            // <Video
            //   style={{ width: '100%', height: '100%' }}
            //   source={{ uri: image }}
            //   useNativeControls
            //   resizeMode={ResizeMode.CONTAIN}
            //   isLooping
            //   // onPlaybackStatusUpdate={status => setStatus(() => status)}
            // />
          )}
          {/* <MapView
            style={{
              width: '100%',
              height: '100%',
            }}
          /> */}
        </View>
        {/* <View>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
          <View style={styles.buttons}>
            <Button
              title={status.isPlaying ? 'Pause' : 'Play'}
              onPress={() =>
                status.isPlaying
                  ? video.current.pauseAsync()
                  : video.current.playAsync()
              }
            />
          </View>
        </View> */}

        {/* <View>
          <Text>{directoryUri || '폴더를 지정해주세요.'}</Text>
          <Text>{filepath || '파일을 생성해주세요.'}</Text>
          <Button
            title="폴더 지정"
            onPress={async () => {
              const uri = await getDirectoryUri();
              setDirectoryUri(uri || '');
            }}
          />
          <Button
            title="폴더 읽기"
            onPress={async () => {
              if (directoryUri === '') {
                alert('폴더를 지정해주세요.');
                return;
              }
              const fileList = await readDir(directoryUri);
              console.log(fileList);
            }}
          />
          <Button
            title="파일생성"
            onPress={async () => {
              if (directoryUri === '') {
                alert('폴더를 지정해주세요.');
                return;
              }
              const fileName = 'test.txt';
              const contents = 'text';
              const newFilepath = await createFile(
                directoryUri,
                fileName,
                contents,
              );
              setFilepath(newFilepath);
            }}
          />
          <Button
            title="파일 읽기"
            onPress={async () => {
              if (directoryUri === '') {
                alert('폴더를 지정해주세요.');
                return;
              }
              const file = await readFile(filepath);
              console.log(file);
            }}
          />
          <Button
            title="파일 삭제"
            onPress={async () => {
              if (directoryUri === '') {
                alert('폴더를 지정해주세요.');
                return;
              }
              await deleteFile(filepath);
              setFilepath('');
            }}
          />
        </View> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
