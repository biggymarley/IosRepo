import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import LottieView from "lottie-react-native";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, windowWidth } from "../../assets/colors";
import { rulesanimation } from "../../assets/IconFactory";
import MenuButton from "../../tools/MenuButton";
export default function Step4({ navigation }) {
  const [rules, setrules] = useState({ agb: true, rule: true });

  return (
    <>
      <MenuButton
        isBack={true}
        btnColor={colors.text}
        navigation={navigation}
        textSize={14}
      />
      <ScrollView>
        <View style={styles.cont}>
          {/* <Text
            style={{
              fontFamily: "Manrope_500Medium",
              color: colors.primary,
              fontSize: 25,
              // marginBottom: 15,
              textAlign: "center",
            }}
          >
            Danke für lhren Versandauftrag Danke für lhr Vertrauen
          </Text> */}
          <LottieView
            source={rulesanimation}
            speed={1}
            resizeMode="contain"
            autoPlay={true}
            loop={true}
            style={{ height: windowWidth *.9, width: windowWidth }}
          />
          {/* <Image
            source={rulesPng}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
            }}
          /> */}
        </View>
        <AGBrules rules={rules} setrules={setrules} />
      </ScrollView>
      <TouchableOpacity
        style={{
          ...styles.next,
          ...((rules.rule === false || rules.agb === false) && {
            backgroundColor: "grey",
          }),
        }}
        onPress={() => navigation.navigate("Done")}
        disabled={rules.rule === false || rules.agb === false}
      >
        <Text style={styles.nextText}>Abschicken</Text>
        <Ionicons name="send" size={17} color="#fff" style={{ marginTop: 3 }} />
      </TouchableOpacity>
    </>
  );
}

const AGBrules = ({ rules, setrules }) => {
  return (
    <>
      <TouchableOpacity
        style={styles.section}
        onPress={() => setrules({ ...rules, agb: !rules.agb })}
      >
        <Checkbox
          style={styles.checkbox}
          value={rules.agb}
          color={colors.primary}
        />
        <Text style={styles.paragraph}>
          Hiermit wird die Identität des Absenders und die zollrechtliche
          Unbedenklichkeit des Sendungsinhaltes bestätigt.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.section}
        onPress={() => setrules({ ...rules, rule: !rules.rule })}
      >
        <Checkbox
          style={styles.checkbox}
          value={rules.rule}
          color={colors.primary}
        />
        <Text style={styles.paragraph}>
          Es gelten die Beförderungsbedingungen, die AGB´s im Allgemeinen und
          die Datenschutzbestimmungen der KAL&ROK GmbH in ihrer neusten Fassung.
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  cont: {
    display: "flex",
    alignItems: "center",
    margin: 15,
    // backgroundColor: colors.primaryTrans,
    // height: windowWidth * 2,
    // flex:1
    // overflow: "hidden",
    // borderRadius: 12,
  },
  paragraph: {
    fontFamily: "Inter_600SemiBold",
    color: colors.text,
    fontSize: 14,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    width: windowWidth - 45,
    margin: 15,
  },
  checkbox: {
    marginRight: 10,
    marginTop: 2,
  },
  next: {
    backgroundColor: colors.primary,
    marginTop: "auto",
    padding: 15,
    paddingHorizontal: windowWidth * 0.2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 15,
    marginBottom: 10,
  },
  nextText: {
    fontFamily: "Inter_700Bold",
    color: "white",
    fontSize: 17,
    marginRight: 15,
  },
});
