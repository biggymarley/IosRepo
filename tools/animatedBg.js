import React, { useMemo } from "react";
import {
  Image,
  StyleSheet
} from "react-native";
import { View } from "react-native-animatable";
import Animated, { EasingNode, stopClock } from "react-native-reanimated";
import { windowHeight, windowWidth } from "../assets/colors";
import { pattern } from "../assets/IconFactory";

const imageSize = {
  width: windowWidth,
  height: windowHeight,
};

const animatedWidth = windowWidth + imageSize.width;

const {
  useCode,
  block,
  set,
  Value,
  Clock,
  eq,
  clockRunning,
  not,
  cond,
  startClock,
  timing,
  interpolateNode,
  and,
} = Animated;

const runTiming = (clock) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 50000,
    toValue: 1,
    easing: EasingNode.inOut(EasingNode.linear),
  };

  return block([
    // we run the step here that is going to update position
    cond(
      not(clockRunning(clock)),
      set(state.time, 0),
      timing(clock, state, config)
    ),
    cond(eq(state.finished, 1), [
      set(state.finished, 0),
      set(state.position, 0),
      set(state.frameTime, 0),
      set(state.time, 0),
    ]),
    state.position,
  ]);
};

export const BackgroundAnimation = () => {
  //   const [play, setPlay] = useState(true);
  const { progress, clock, isPlaying } = useMemo(
    () => ({
      progress: new Value(0),
      isPlaying: new Value(1),
      clock: new Clock(),
    }),
    []
  );

  //   useEffect(() => {
  //     isPlaying.setValue(play ? 1 : 0);
  //   }, [, isPlaying]);

  useCode(
    () =>
      block([
        cond(
          and(not(clockRunning(clock)), eq(isPlaying, 1)),
          startClock(clock)
        ),
        cond(and(clockRunning(clock), eq(isPlaying, 0)), stopClock(clock)),
        set(progress, runTiming(clock)),
      ]),
    [progress, clock]
  );

  const translateX = interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, -imageSize.width],
  });

  return (
    <View style={styles.container}>
      {/* <LinearGradient
        colors={['#FEE59E', "transparent"]}
        start={[0, 0]}
        end={[1, 1]}
        location={[0.25, 0.4, 1]}
        style={styles.container}
      /> */}
      {/* <Animated.View style={[styles.image, { transform: [{ translateX }] }]}> */}
      <Image style={styles.image} source={pattern} resizeMode="cover"   />
      {/* </Animated.View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: "absolute",
    width: windowWidth,
    height: windowHeight,
    zIndex: -1,
    opacity:1
  },
  image: {
    width: windowWidth,
    height: windowHeight,
  },
});
