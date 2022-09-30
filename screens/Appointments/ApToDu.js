import { useFocusEffect } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import React, { useContext } from "react";
import {
  ScrollView, StyleSheet, Text, TouchableOpacity, View
} from "react-native";
import { colors, windowHeight, windowWidth } from "../../assets/colors";
import { AppointmentAnimDu } from "../../assets/IconFactory";
import { AppointmentsContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";

export default function ApToDu({ navigation }) {
  const { apData, fetchAps } = useContext(AppointmentsContext);
  useFocusEffect(
    React.useCallback(() => {
      fetchAps();
    }, [])
  );

  return (
    <>
      <MenuButton
        isBack={true}
        isRight={true}
        navigation={navigation}
        btnColor={colors.text}
        title="Nach Deutschland"
      />
      <ScrollView>
        <View style={{ padding: 5 }}>
          <View style={styles.touchContainer}>
            <LottieView
              source={AppointmentAnimDu}
              speed={0.7}
              autoPlay={true}
              loop={true}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 15,
              justifyContent: "center",
            }}
          >
            <Text style={styles.desctime}>
              Nächste planmäßige Fahrt nach Deutschland:{" "}
            </Text>
            <Text
              style={{
                ...styles.desctime,
                color: colors.secondary,
                fontFamily: "Inter_900Black",
              }}
            >
              {apData.ToDu}
            </Text>
          </View>
        </View>
            <TouchableOpacity
              style={styles.InviteButtonLogin}
              onPress={() => navigation.navigate("RoadHandler", {
                mapName:"Du"
              })}
            >
              <Text style={styles.InviteButtonTextLogin}>
                Weiter zum Fahrtverlauf
              </Text>
            </TouchableOpacity>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  touchContainer: {
    flex: 1,
    flexDirection: "column",
    width: windowWidth,
    height: windowHeight * 0.6,
  },
  country: {
    width: "100%",
    height: 300,
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
  InviteButtonLogin: {
    backgroundColor: colors.primary,
    marginBottom: 10,
    paddingHorizontal: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    flexDirection: "row",
    borderRadius: 10,
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:windowHeight * .06
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
});
