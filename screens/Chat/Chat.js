import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, windowHeight, windowWidth } from "../../assets/colors";
import { chatAnim } from "../../assets/IconFactory";
import MenuButton from "../../tools/MenuButton";

export default function Chat({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <MenuButton
        btnColor={colors.text}
        title={"Live-Chat"}
        isRight={true}
        navigation={navigation}
      />
      <View
        style={{
          // flex: 1,
          alignItems: "center",
          margin: 10,
          marginTop: 0,
          justifyContent: "center",
        }}
      >
        <LottieView
          source={chatAnim}
          speed={1}
          resizeMode="contain"
          autoPlay={true}
          loop={true}
          style={{ width: windowWidth, height: windowWidth * 0.9 }}
        />
        <TouchableOpacity
          style={styles.callContainer}
          onPress={() => navigation.navigate("LiveChat")}
        >
          <Text style={styles.callText}>Chat starten</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  callContainer: {
    width: "80%",
    marginVertical: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.primary,
    height: 60,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 2,
    // marginTop: windowHeight * 0.2,
  },
  callText: {
    fontFamily: "Manrope_700Bold",
    color: colors.bg,
    fontSize: 15,
    textAlign: "center",
  },
  rightIocn: {
    width: 60,
    marginRight: 10,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sendEmail: {
    marginTop: "auto",
    marginBottom: "auto",
  },
});
