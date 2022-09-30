import { Dimensions } from "react-native";
import { DefaultTheme } from "@react-navigation/native";

export const NavTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFFFFF",
  },
};

export const colors = {
  primary: "#FF0000",
  primaryTrans: "rgba(219, 52, 69, .2)",
  primaryText: "rgb(69, 132, 247)",
  secondary: "#0000ff",
  secondaryTrans: "rgba(32, 170, 226, .2)",
  lightBg: "#70E0FF",
  transBg: "rgba(255,255, 255, .6)",
  BlackTransBg: "rgba(0,0, 0, .5)",
  text: "#212427",
  lightText: "#b6bfc2",
  textBg: "rgba(30, 79, 90, .2)",
  grey: "#1E4F5A",
  bg: "white",
  blueBg:'#FFFFFF',
  greyBg:"#FFFFFF",
  success: "#4BB543",
};
export const windowWidth = Math.round(Dimensions.get("window").width);
export const windowHeight = Math.round(Dimensions.get("window").height);
export const theme = { roundness: 10, colors: { background: "#FFFFFF" } };
