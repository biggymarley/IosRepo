import LottieView from "lottie-react-native";
import React, { useEffect, useRef } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../../assets/colors";
import {
  du, m2, tap
} from "../../assets/IconFactory";
import MenuButton from "../../tools/MenuButton";

export default function Appointments({ navigation }) {
  const ref = useRef();
  const ref2 = useRef();
  useEffect(() => {
    ref?.current?.play();
    ref2?.current?.play();
  }, []);

  return (
    <>
      <MenuButton
        // isBack={true}
        isTrans={false}
        isRight={true}
        navigation={navigation}
        btnColor={colors.text}
        titleColor={colors.primary}
        title="Fahrten & Termine"
      />
      <View style={styles.touchContainer}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigation.navigate("ApToMa")}
        >
          <Image
            source={m2}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <LottieView
            source={tap}
            speed={1}
            autoPlay={true}
            loop={true}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 130,
              height: 130,
              top: "30%",
              right: "10%",
            }}
            ref={ref2}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.touch, borderRightWidth: 0 }}
          onPress={() => navigation.navigate("ApToDu")}
        >
            <Image
            source={du}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" , position:"relative", top:-20}}
          />
           <LottieView
            source={tap}
            speed={1}
            autoPlay={true}
            loop={true}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 130,
              height: 130,
              top: "30%",
              right: "10%",
            }}
            ref={ref}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  touchContainer: { flex: 1, flexDirection: "row" },
  flagIcon: {
    width: 100,
    height: 100,
  },
  touch: {
    flexBasis: "50%",
    width: "100%",
    borderRightWidth: 2,
    borderRightColor: colors.primary,
    position: "relative",
  },
  country: {
    width: "100%",
    height: "100%",
  },
  cover: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.3,
  },
  maroc: {
    position: "absolute",
    right: "5%",
    bottom: "15%",
  },
  allemagne: {
    position: "absolute",
    right: "5%",
    top: "15%",
  },
});
