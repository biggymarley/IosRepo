import { FontAwesome5 } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, windowWidth } from "../../assets/colors";
import { doneanimation } from "../../assets/IconFactory";
import { ToDuContext, ToMaContext } from "../../tools/Context";
export default function Done({ navigation }) {
  const { CreateOrder } = useContext(ToDuContext);

  const ResetForm = () => {
    CreateOrder();
    navigation.popToTop();
    navigation.navigate("Home");
  };
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <View style={styles.cont}></View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LottieView
          source={doneanimation}
          speed={1}
          resizeMode="contain"
          autoPlay={true}
          loop={true}
          style={{
            width: "100%",
            height: windowWidth * 1.07,
          }}
        />
        {/* <Text style={styles.title}>Hand drauf</Text>
        <Text style={styles.title}>
          Wir bringen Ihre Sendungen dahin. wo sie hingehören
        </Text> */}
      </View>

      <TouchableOpacity style={styles.next} onPress={ResetForm}>
        <Text style={styles.nextText}>Fertig</Text>
        <FontAwesome5
          name="check-circle"
          size={20}
          color="#fff"
          style={{ marginTop: 3 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    margin: 15,
    display: "flex",
    alignItems: "center",
  },
  desc: {
    fontFamily: "Inter_300Light",
    color: colors.text,
    lineHeight: 25,
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
  },
  title: {
    fontFamily: "Manrope_400Regular",
    color: colors.primary,
    fontSize: 25,
    // marginBottom: 15,
    textAlign: "center",
  },
  next: {
    backgroundColor: colors.primary,
    // marginTop: "auto",
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
