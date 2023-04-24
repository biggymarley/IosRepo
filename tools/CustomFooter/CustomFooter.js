import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../assets/colors";
import ContactIcon from "../../assets/JsIcons/ContactIcon";
import Location from "../../assets/JsIcons/Location";
import AppointmentsIcon from "../../assets/JsIcons/AppointmentsIcon";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const width = 40;
export default function CustomFooter({ navigation }) {
  return (
    <View style={classes.root}>
      <LinearGradient
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        locations={[0.0, 1.0]}
        colors={[colors.primary, colors.primaryText]}
      ></LinearGradient>
      {Links.map((link, index) => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={classes.link}
          onPress={() => navigation.navigate(link.path)}
          key={index}
        >
          {link.linkIcon}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const Links = [
  {
    linkIcon: (
      <MaterialIcons name="support-agent" size={width} color={colors.bg} />
    ),
    path: "Kontakt",
  },
  {
    linkIcon: (
      <MaterialIcons name="keyboard-arrow-up" size={width} color={colors.bg} />
    ),
    path: "Sendungsverfolgung",
  },
  {
    linkIcon: (
      <MaterialIcons name="calendar-today" size={width} color={colors.bg} />
    ),
    path: "Fahrten & Termine",
  },
];

const classes = {
  root: {
    height: 60,
    backgroundColor: colors.lightBlue,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    position:"absolute",
    bottom: 0

  },
  link: {
    flexBasis: "33.33%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
};
