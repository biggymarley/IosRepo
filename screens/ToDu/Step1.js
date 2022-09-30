import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, windowHeight, windowWidth } from "../../assets/colors";
import { BoxDu } from "../../assets/IconFactory";
import { BackgroundAnimation } from "../../tools/animatedBg";
import MenuButton from "../../tools/MenuButton";

export default function Step1({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <MenuButton btnColor={colors.text} navigation={navigation} />
      <ScrollView>
        <View style={styles.helloCont}>
          <Image source={BoxDu} style={styles.helloImg} resizeMode="contain" />
        </View>
        <Text style={styles.welcomTrack}>
          Wie funktioniert die Abholung einer Sendung aus Marokko?
        </Text>
        <Text style={styles.welcomDesc} numberOfLines={15} adjustsFontSizeToFit>
          Auftraggeber des Abholungsauftrages ist der Sendungsempfänger hier in
          Deutschland.{"\n\n"}Füllen Sie bitte das nachstehende Abholungsformular aus
          und fügen Sie ihm Farbausweiskopien des Absenders der Sendung in
          Marokko bei. Sobald Ihr Abholungsauftrag uns vorliegt, leiten wir
          diesen an unser Partnerunternehmen in Marokko weiter, das Kontakt mit
          dem von Ihnen genannten Absender aufnimmt, und die Abholung Ihrer
          Sendung mit ihm koordiniert.
        </Text>
        {/* <Text style={styles.welcomDesc} numberOfLines={15} adjustsFontSizeToFit>
          Sobald der Abholungsauftrag uns vorliegt, nehmen wir Kontakt mit dem
          Absender auf und organisieren wir die Abholung ihrer Sendung.
        </Text> */}
      </ScrollView>
      <TouchableOpacity
        style={styles.getStarted}
        onPress={() => navigation.navigate("Personal")}
      >
        <Text style={styles.BtnText}>weiter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  helloCont: {
    margin: 10,
    paddingBottom: 0,
    width: windowWidth - 20,
    height: windowHeight * 0.33,
  },
  welcomTrack: {
    margin: 10,
    fontFamily: "Inter_800ExtraBold",
    fontSize: 20,
    color: colors.primary,
    backgroundColor: colors.bg,
  },
  welcomDesc: {
    margin: 10,
    fontFamily: "Inter_300Light",
    fontSize: windowHeight * 0.02,
    color: colors.text,
    backgroundColor: colors.bg,

    // lineHeight: 25,
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
    borderRadius: 8,
    elevation:2
  },
  BtnText: {
    fontFamily: "Inter_800ExtraBold",
    color: "white",
  },
});
