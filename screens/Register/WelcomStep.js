import LottieView from "lottie-react-native";
import React from "react";
import {
  StyleSheet, Text, TouchableOpacity, View
} from "react-native";
import { colors, windowHeight, windowWidth } from "../../assets/colors";
import { welcom } from "../../assets/IconFactory";
import MenuButton from "../../tools/MenuButton";

export default function WelcomStep({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <MenuButton btnColor={colors.text} navigation={navigation} />
      {/* <ScrollView> */}
        <View style={styles.helloCont}>
          <LottieView
            loop
            autoPlay
            source={welcom}
            speed={0.7}
            // ref={ref}
            resizeMode="cover"
          />
          {/* <Image
            source={helloPng}
            style={styles.helloImg}
            resizeMode="contain"
          /> */}
        </View>
        {/* <Text style={styles.welcomTrack}>Willkommen in unserer Community</Text>
        <Text style={styles.welcomDesc}>
          Erstelle Dir einen Account und genieße alle Vorzüge unserer App,
          verpasse keinen Abfahrt- oder Tourtermin mehr und verfolge Deine
          Sendungen auf ihrem Weg nach Marokko direkt von Deinem Handy aus.
          KAL&ROK GmbH ist die perfekte Verbindung zur Heimat.
        </Text> */}
      {/* </ScrollView> */}
      <TouchableOpacity
        style={styles.getStarted}
        onPress={() => navigation.navigate("getStarted")}
      >
        <Text style={styles.BtnText}>weiter</Text> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  helloCont: {
    borderRadius: 12,
    // backgroundColor: colors.primaryTrans,
    // margin: 10,
    // padding: 20,
    paddingBottom: 0,
    width: windowWidth - 20,
    height: windowHeight * 0.45,
    flex:1
  },
  welcomTrack: {
    margin: 10,
    fontFamily: "Inter_800ExtraBold",
    fontSize: windowWidth * 0.07,
    color: colors.primary,
    textAlign: "center",
  },
  welcomDesc: {
    margin: 10,
    fontFamily: "Inter_300Light",
    fontSize: 14,
    color: colors.text,
    lineHeight: 25,
    // textAlign: "center",
  },
  helloImg: {
    width: "100%",
    height: "100%",
  },
  getStarted: {
    backgroundColor: colors.primary,
    marginBottom: 10,
    marginTop: "auto",
    padding: 15,
    paddingHorizontal: windowWidth * 0.2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
  },
  BtnText: {
    fontFamily: "Inter_800ExtraBold",
    color: "white",
  },
});
