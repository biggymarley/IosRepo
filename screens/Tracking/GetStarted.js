import { FontAwesome5 } from "@expo/vector-icons";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { colors, windowWidth } from "../../assets/colors";
import { location } from "../../assets/IconFactory";
import { TrackingContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";

export default function GetStarted({ navigation }) {
  const { status } = useContext(TrackingContext);

  const Navigate = () => {
    if (status?.tripGroup === "B") navigation.navigate("FromMa");
    else if (status?.finish === false) navigation.navigate("SingleStep");
    else navigation.navigate("NoTrack");
  };

  return (
    <>
      <MenuButton btnColor={colors.text} navigation={navigation} />
      <View style={styles.cont}>
        <Animatable.Image
          animation={"bounceInLeft"}
          source={location}
          resizeMode="contain"
          style={{ width: "80%", height: windowWidth * 0.8, marginTop: "auto" }}
        />
        <View style={{ display: "flex", alignItems: "center" }}>
          <Text style={styles.desc} numberOfLines={15} adjustsFontSizeToFit>
            Als registrierter Kunde profitieren Sie von allen Vorteilen unserer
            App, unter anderem die Möglichkeit bequem von ihrem Smartphone aus
            ihre Sendungen und Pakete auf ihrem Weg nach Marokko zu verfolgen.{" "}
          </Text>
        </View>
        <TouchableOpacity style={styles.next} onPress={Navigate}>
          <Text style={styles.nextText}>weiter</Text>
          <FontAwesome5
            name="angle-right"
            size={17}
            color="#fff"
            style={{ marginTop: 3 }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cont: {
    margin: 15,
    flex: 1,
  },
  desc: {
    fontFamily: "Inter_300Light",
    color: colors.text,
    lineHeight: 25,
    fontSize: windowWidth * 0.04,
    marginBottom: 15,
  },
  next: {
    backgroundColor: colors.primary,
    // marginBottom: 10,
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
  nextText: {
    fontFamily: "Inter_700Bold",
    color: "white",
    fontSize: 17,
    marginRight: 15,
  },
});
