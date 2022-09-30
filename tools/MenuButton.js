import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import { colors, windowWidth } from "../assets/colors";
import { Logo } from "../assets/IconFactory";
import { UserContext } from "./Context";

export default function MenuButton({
  navigation,
  btnColor,
  isBack,
  title,
  rightBtn,
  isTrans,
  textSize,
  titleColor,
  isRight,
  isClose,
  backFunc,
}) {
  return (
    <View
      style={{
        ...styles.container,
        ...(isTrans === true && {
          backgroundColor: "transparent",
          position: "absolute",
          zIndex: 2,
        }),
      }}
    >
      {isClose ? null : isBack ? (
        <TouchableOpacity
          onPress={() => (backFunc ? backFunc() : navigation.goBack())}
          // style={{ position: "absolute", left: 15, zIndex: 2 }}
          style={isRight ? { position: "absolute", left: 15, zIndex: 2 } : {}}
        >
          <Feather name="arrow-left" size={25} color={btnColor ?? "white"} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={!rightBtn ? { position: "absolute", left: 15, zIndex: 2 } : {}}
        >
          <Feather name="menu" size={25} color={btnColor ?? "white"} />
        </TouchableOpacity>
      )}

      <Text
        style={{
          ...styles.title,
          fontSize: textSize,
          color: titleColor ?? colors.primary,
        }}
      >
        {title}
      </Text>
      {rightBtn}
    </View>
  );
}

export function Header({ navigation }) {
  const { IsLogged, NewMessage } = useContext(UserContext);
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={25} color={colors.text} />
      </TouchableOpacity>
      <Logo
        width={100}
        height={50}
        style={{ position: "absolute", left: windowWidth * 0.5 - 50 }}
      />
      {IsLogged.isLogged ? (
        <TouchableOpacity
          onPress={() => navigation.navigate("Chat")}
          style={{ position: "relative" }}
        >
          <Ionicons name="chatbubbles-outline" size={25} color={colors.text} />
          {NewMessage ? (
            <Entypo
              name="dot-single"
              size={40}
              color={colors.primary}
              style={{ position: "absolute", top: -15, right: -3 }}
            />
          ) : null}
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    padding: 15,
    backgroundColor: colors.greyBg,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.41,
    // shadowRadius: 4.11,
    // elevation: 14,
  },
  title: {
    fontFamily: "Inter_800ExtraBold",
    // color: colors.text,
    color: colors.primary,
    fontSize: 20,
    flexGrow: 1,
    textAlign: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: colors.greyBg,
    padding: 15,
  },
});
