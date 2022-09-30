import { Entypo } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, windowHeight, windowWidth } from "../../assets/colors";
import { allemagne, france, maroc } from "../../assets/IconFactory";
import { TrackingContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";

export default function OneStep({ navigation }) {
  const { steps, status } = useContext(TrackingContext);
  //console.log(status?.tripId?.status);
  return (
    <>
      <MenuButton
        isBack={true}
        btnColor={colors.text}
        navigation={navigation}
        title="Aktueller Status Ihrer Sendung"
        rightBtn={<HistoryBtn navigation={navigation} />}
      />
      <View>
        <TrackingSteps
          step={
            status?.tripId?.status &&
            status?.tripId?.status >= 0 &&
            status?.tripId?.status < steps.length
              ? steps[status?.tripId?.status ?? 0]
              : steps[0]
          }
        />
      </View>
    </>
  );
}

const TrackingSteps = ({ step, tIndex }) => {
  return (
    <View style={styles.stepCont}>
      <Image source={step.icon} resizeMode="contain" style={styles.step} />
      <View style={styles.center}>
        <View style={styles.flagcont}>
          <Image
            source={allemagne}
            resizeMode="contain"
            style={styles.langicon}
          />
          <Text style={styles.stepName}>{step.name.gr}</Text>
        </View>
        <View style={styles.flagcont}>
          <Image source={france} resizeMode="contain" style={styles.langicon} />
          <Text style={styles.stepName}>{step.name.fr}</Text>
        </View>
        <View style={styles.flagcont}>
          <Image source={maroc} resizeMode="contain" style={styles.langicon} />
          <Text style={styles.stepName}>{step.name.ar}</Text>
        </View>
      </View>
    </View>
  );
};

const HistoryBtn = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("TrackInfos")}>
      <Entypo name="info-with-circle" size={25} color={colors.text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cont: {
    margin: 10,
    flex: 1,
  },
  center: {
    display: "flex",
    // backgroundColor: "red",
    justifyContent: "center",
    position:'relative',
    // alignItems:"flex-start",
    // width:"100%"
  },
  langicon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
    // position: "absolute",
  },
  flagcont: {
    // height: 30,
    // display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "99%",
    alignSelf: "center",
    // backgroundColor:"green",
    // paddingHorizontal: 15,
    marginBottom: 8,
    // justifyContent: "space-between",
  },
  timlineicon: {
    marginLeft: 55,
    opacity: 0.7,
    alignSelf: "flex-start",
    transform: [{ rotate: "90deg" }],
    // marginBottom: 5,
  },
  disabled: {
    opacity: 0.7,
  },
  stepCont: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    // backgroundColor: "red",
    alignItems: "center",
    // backgroundColor: "white",
    borderRadius: 12,
    padding: 5,
  },
  step: {
    width: windowWidth - 20,
    height: windowHeight * 0.6,
  },
  stepName: {
    fontFamily: "Manrope_600SemiBold",
    // fontSize: windowWidth * 0.045,
    color: colors.text,
    textAlign:"left",
    // position:"absolute",
    // alignSelf: "center",
    // flexGrow: 1,
    // marginLeft: 62,
  },
  desc: {
    fontFamily: "Inter_300Light",
    color: colors.text,
    lineHeight: 25,
    fontSize: 18,
    marginBottom: 15,
  },
});
