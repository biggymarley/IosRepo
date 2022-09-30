import LottieView from "lottie-react-native";
import React from "react";
import {
  StyleSheet, Text, TouchableOpacity, View
} from "react-native";
import { colors, windowHeight, windowWidth } from "../../assets/colors";
import { ToDuMap, ToMaMap } from "../../assets/IconFactory";
import MenuButton from "../../tools/MenuButton";

export default function RoadHandler({ navigation, route }) {
  // const { apData, fetchAps } = useContext(AppointmentsContext);
  const { mapName } = route.params;
  // useFocusEffect(
  //   React.useCallback(() => {
  //     fetchAps();
  //   }, [])
  // );
  return (
    <>
      <MenuButton
        isBack={true}
        isRight={true}
        navigation={navigation}
        btnColor={colors.text}
        title="Fahrtverlauf"
      />
      <View
        style={{
          width: "100%",
          height: windowHeight - 90,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LottieView
          source={mapName === "Du" ? ToDuMap :ToMaMap}
          speed={0.7}
          autoPlay={true}
          loop={true}
          resizeMode="cover"
          style={styles.touchContainer}
        />
        <TouchableOpacity
          style={styles.InviteButtonLogin}
          onPress={() => navigation.navigate("FInalAnim")}
        >
          <Text style={styles.InviteButtonTextLogin}>Weiter zum Werbespot</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  touchContainer: {
    width: windowWidth,
    height: windowWidth,
  },
  country: {
    width: "100%",
    height: 300,
  },
  InviteButtonLogin: {
    borderWidth: 1,
    borderColor: colors.primary,
    alignSelf: "flex-start",
    backgroundColor: colors.primary,
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
    color: colors.bg,
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
