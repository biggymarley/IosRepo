import LottieView from "lottie-react-native";
import React, { useEffect, useRef } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { colors, windowHeight, windowWidth } from "../../assets/colors";
import { du, m2, tap, tomaAp, toduAp } from "../../assets/IconFactory";
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
          <LottieView
            source={tomaAp}
            speed={1}
            autoPlay={true}
            loop={true}
            resizeMode="contain"
            style={{
              position: "relative",
              left: "-5%",
              height:  windowHeight * .8,
            }}
            ref={ref2}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.touch, borderRightWidth: 0 }}
          onPress={() => navigation.navigate("ApToDu")}
        >
          <LottieView
            source={toduAp}
            speed={1}
            autoPlay={true}
            loop={true}
            resizeMode="contain"
            style={{
              position: "relative",
              right:'3%',
              height:  windowHeight * .70,
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
    // width: "100%",
    borderRightWidth: 2,
    borderRightColor: colors.primary,
    position: "relative",
    flex: 1,
    justifyContent:'center',
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
