import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { colors, windowHeight, windowWidth } from "../../assets/colors";
import { BoxMa } from "../../assets/IconFactory";
import MenuButton from "../../tools/MenuButton";

export default function Step1({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <MenuButton btnColor={colors.text} navigation={navigation} />
      <ScrollView>
        <View style={styles.helloCont}>
          <Image source={BoxMa} style={styles.helloImg} resizeMode="contain" />
        </View>
        <Text style={styles.welcomTrack}>
          Wie funktioniert die Beförderung einer Sendung nach Marokko?
        </Text>
        <Text style={styles.welcomDesc}>
          Auftraggeber des Beförderungsauftrages ist der Absender in
          Deutschland.{"\n\n"}Alsbald Ihre Sendung in Marokko eingetroffen und
          abholbereit ist, wird der von Ihnen genannte Empfänger von unserem
          Partnerunternehmen in Marokko darüber benachrichtigt, wo und wann er
          die Sendung abholen kann.
        </Text>
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
    height: windowHeight * 0.35,
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
    // height: "100%",
    flex: 1,
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
