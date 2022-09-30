import React, { useContext } from "react";
import {
  Image,
  ScrollView, StyleSheet, Text, View
} from "react-native";
import { colors, windowWidth } from "../../assets/colors";

import { Ionicons } from "@expo/vector-icons";
import { allemagne, france, maroc } from "../../assets/IconFactory";
import { BackgroundAnimation } from "../../tools/animatedBg";
import { TrackingContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";

export default function TrackInfos({ navigation }) {
  const { steps } = useContext(TrackingContext);
  return (
    <>
      <MenuButton
        isBack={true}
        navigation={navigation}
        btnColor={colors.text}
        title="Gesamtübersicht"
        isRight={true}
        // rightBtn={<HistoryBtn navigation={navigation} />}
      />
      <BackgroundAnimation />
      <ScrollView>
        <View style={styles.cont}>
          {steps.map((step, index) => (
            <View key={index}>
              <TrackingSteps step={step} tIndex={index} />
              {index + 1 < steps.length && (
                <Ionicons
                  name="ios-git-commit"
                  size={25}
                  color={colors.primary}
                  style={styles.timlineicon}
                />
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const TrackingSteps = ({ step, tIndex }) => {
  const { status } = useContext(TrackingContext);
  return (
    <View
      style={[
        styles.stepCont,
        status?.tripId?.status < tIndex && styles.disabled,
        (status?.tripId?.status > 6 ? 0 : status?.tripId?.status) ===
          tIndex && { borderWidth: 2, borderColor:colors.primary },
      ]}
    >
      <Image source={step.icon} resizeMode="contain" style={styles.step} />
      <View>
        <View style={styles.flagcont}>
          <Image
            source={allemagne}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: 8 }}
          />
          <Text style={styles.stepName}>{step.name.gr}</Text>
        </View>
        <View style={styles.flagcont}>
          <Image
            source={france}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: 8 }}
          />
          <Text style={styles.stepName}>{step.name.fr}</Text>
        </View>
        <View style={styles.flagcont}>
          <Image
            source={maroc}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: 8 }}
          />
          <Text style={styles.stepName}>{step.name.ar}</Text>
        </View>
      </View>
      <IconsHandler status={tIndex} activeStep={status?.tripId?.status ?? 0} />
    </View>
  );
};

const IconsHandler = ({ status, activeStep }) => {
  if (status === activeStep || (status === 0 && activeStep > 6))
    return (
      <Ionicons
        name="checkmark-circle-outline"
        size={25}
        color={colors.primary}
        style={{ marginLeft: "auto" }}
      />
    );
  if (activeStep > 6) return null;
  if (status < activeStep)
    return (
      <Ionicons
        name="checkmark-done-circle-outline"
        size={25}
        color={colors.success}
        style={{ marginLeft: "auto" }}
      />
    );

  return null;
};

const styles = StyleSheet.create({
  cont: {
    margin: 10,
    flex: 1,
  },
  flagcont: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // width:"100%",
    // paddingHorizontal:15,
    marginBottom: 8,
    justifyContent: "flex-start",
  },
  timlineicon: {
    // marginLeft: 55,
    opacity: 0.7,
    alignSelf: "center",
    transform: [{ rotate: "90deg" }],
    // marginBottom: 5,
  },
  disabled: {
    // opacity: 0.7,
    borderWidth: 0,
  },
  stepCont: {
    borderWidth: 1,
    borderColor: colors.success,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    // padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 2,
    shadowRadius: 4,
  },
  step: {
    width: 140,
    height: 140,
    alignSelf:"center"
    // marginRight: 20,
  },
  stepName: {
    fontFamily: "Manrope_700Bold",
    fontSize: windowWidth * 0.025,
    color: colors.text,
  },
  desc: {
    fontFamily: "Inter_300Light",
    color: colors.text,
    lineHeight: 25,
    fontSize: 18,
    marginBottom: 15,
  },
});
