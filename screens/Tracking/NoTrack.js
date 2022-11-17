import LottieView from "lottie-react-native";
import React, { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { colors, windowWidth } from "../../assets/colors";
import { locationLoading } from "../../assets/IconFactory";
import MenuButton from "../../tools/MenuButton";

export default function NoTrack({ navigation }) {
  const ref = useRef();

  useEffect(() => {
    ref.current?.play();
  }, []);

  return (
    <>
      <MenuButton
        btnColor={colors.text}
        isBack={true}
        navigation={navigation}
        title="Sendungsverfolgung"
        isRight={true}
      />
      <View style={{ flex: 1, padding: 15 }}>
        <LottieView
          source={locationLoading}
          autoPlay
          loop
          ref={ref}
          speed={1.5}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    textAlign: "center",
    fontFamily: "Manrope_600SemiBold",
    fontSize: 25,
    textTransform: "capitalize",
  },
  btn: {
    backgroundColor: colors.primary,
    marginTop: "auto",
    padding: 10,
    paddingHorizontal: windowWidth * 0.15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 15,
  },
  btntxt: {
    color: "white",
    textAlign: "center",
    fontFamily: "Manrope_700Bold",
    fontSize: 20,
  },
});
