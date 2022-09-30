import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { windowWidth } from "../assets/colors";
import { ruler } from "../assets/IconFactory";
const stepwidth = 19.13;

const SlideRuler = ({ HandlePrice, steps, width }) => {
  const [value, setvalue] = useState(1);
  const HandleSlide = (event) => {
    const res = parseInt((event.contentOffset.x + stepwidth) / stepwidth);
    setvalue(res);
    HandlePrice(res);
  };
  const imgs = [...Array(steps >= 10 ? steps / 10 : 1).keys()];
  return (
    <>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.unit}>Kg</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          flex: 1,
        }}
      >
        <ScrollView
          horizontal={true}
          onScroll={(props) => HandleSlide(props.nativeEvent)}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <View style={{ ...styles.rulerContainer, width: width }}>
            {imgs.map((e, index) => (
              <Image
                key={index}
                source={ruler}
                resizeMode="contain"
                style={styles.ruler}
              />
            ))}
          </View>
        </ScrollView>
        <View style={styles.indicatorContainer}>
          <View style={styles.indicator}></View>
        </View>
      </View>
    </>
  );
};

export default SlideRuler;

const styles = StyleSheet.create({
  value: {
    color: "black",
    textAlign: "center",
    fontSize: 22,
    paddingBottom: 5,
    fontFamily: "Manrope_700Bold",
  },
  unit: {
    color: "black",
    textAlign: "center",
    fontSize: 12,
    paddingBottom: 5,
    fontFamily: "Manrope_800ExtraBold",
    alignSelf: "flex-end",
  },
  rulerContainer: {
    width: 400,
    backgroundColor: "#FFFFFF",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: windowWidth / 2,
    marginRight: windowWidth - stepwidth / 2,
  },
  ruler: {
    width: 382,
    height: 60,
    position: "relative",
    left: -2,
  },
  indicatorContainer: {
    height: 60,
    position: "absolute",
    right: windowWidth / 2,
    display: "flex",
    top: "auto",
  },
  indicator: {
    width: 3,
    backgroundColor: "red",
    height: 60,
  },
});
