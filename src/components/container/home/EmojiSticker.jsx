import { useEffect } from 'react';
import { View, Image } from 'react-native';
// ※ react-native-gesture-handler, react-native-reanimated 이거 두개는 이런게 있다 정도로 알고있기
import {
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
if (typeof window !== 'undefined') {
  // web에서 오류 발생하여 넣어주는 코드임
  window._frameTimestamp = null;
}
const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedImage = Animated.createAnimatedComponent(Image);
export default function EmojiSticker({ imageSize, stickerSource }) {
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onDoubleTap = useAnimatedGestureHandler({
    onActive: () => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else if (scaleImage.value === imageSize * 2) {
        scaleImage.value = scaleImage.value / 2;
      }
    },
  });
  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const onDrag = useAnimatedGestureHandler({
    onStart: (event, context) => {
      // 여기서 context 는 계속 메모리에 값이 저장 되는듯
      // [객체] - 일부 상태를 저장하는 데 사용할 수 있는 일반 JS 객체입니다. 이 개체는 선택한 모든 상태에 대해 이벤트와 worklet 핸들러 간에 유지되며 모든 데이터를 읽고 쓸 수 있습니다.
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
  });
  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onDrag}>
      <AnimatedView style={[containerStyle, { top: -350 }]}>
        <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
          <AnimatedImage
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </TapGestureHandler>
      </AnimatedView>
    </PanGestureHandler>
  );
}
