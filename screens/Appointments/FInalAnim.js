import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { colors, windowHeight, windowWidth } from "../../assets/colors";
import { carAnim } from "../../assets/IconFactory";
import MenuButton from "../../tools/MenuButton";

export default function FInalAnim({ navigation, route }) {

  return (
    <>
      <MenuButton
        isBack={true}
        isRight={true}
        navigation={navigation}
        btnColor={colors.text}
        title="KAL&ROK für Sie unterwegs"
      />
      <View
        style={{
          width: windowWidth,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LottieView
          source={carAnim}
          speed={1}
          autoPlay={true}
          loop={true}
          resizeMode="contain"
          style={styles.touchContainer}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  touchContainer: {
    width: windowWidth,
    height: windowWidth * 0.65,
  },
  country: {
    width: "100%",
    height: 300,
  },
  InviteButtonLogin: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: colors.primary,
    alignSelf: "flex-start",
    backgroundColor: colors.bg,
    overflow: "hidden",
    borderRadius: 12,
    shadowColor: colors.text,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 3,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: windowHeight * 0.05,
  },
  InviteButtonTextLogin: {
    fontFamily: "Manrope_700Bold",
    color: colors.primary,
    fontSize: 15,
    textAlign: "center",
    padding: 15,
    // paddingRight: 40,
    // paddingLeft: 40,
  },
  desc: {
    fontFamily: "Manrope_600SemiBold",
    fontSize: windowWidth * 0.04,
    textAlign: "center",
  },
  desctime: {
    fontFamily: "Inter_400Regular",
    fontSize: windowWidth * 0.04,
    textAlign: "center",
  },
});
