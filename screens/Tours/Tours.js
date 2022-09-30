import LottieView from "lottie-react-native";
import React, { useContext, useEffect, useRef } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, windowWidth } from "../../assets/colors";
import { boredhand, editTour, noTour } from "../../assets/IconFactory";
import { UserContext, UserTourContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";
export default function Tours({ navigation }) {
  const { TourData } = useContext(UserTourContext);
  const { userData } = useContext(UserContext);
  const ref = useRef(null);
  useEffect(() => {
    ref?.current?.play();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <MenuButton
        btnColor={colors.text}
        title="KAL&ROK on Tour"
        navigation={navigation}
        rightBtn={<SubtoTour navigation={navigation} />}
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.title}>
          {TourData.status === false
            ? "Ihre Tour ist leider aktuell\nnicht aktiv"
            : null}
        </Text>
        <View style={styles.cont}>
          {TourData.status === true ? (
            <LottieView
              loop
              autoPlay
              source={noTour}
              speed={1}
              ref={ref}
              style={{ width: windowWidth, height: windowWidth * 0.75 }}
              resizeMode="cover"
            />
          ) : (
            <LottieView
              loop
              autoPlay
              source={boredhand}
              speed={0.5}
              ref={ref}
              style={{ width: windowWidth, height: windowWidth }}
              resizeMode="cover"
            />
          )}
        </View>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          userData.tour?._id == null
            ? navigation.navigate("SubscribeToTour")
            : TourData.status === true && userData.cityId === null
            ? navigation.navigate("SubscribeToCity")
            : navigation.navigate("UserTour")
        }
      >
        <Text style={styles.btntxt}>
          {userData.tour?._id == null
            ? "Tour abonnieren"
            : TourData.status === true && userData.cityId === null
            ? "Standort auswählen und anmelden"
            : "Ihre Tour"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const SubtoTour = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("SubscribeToTour")}>
      {/* <MaterialCommunityIcons
        name="selection-multiple-marker"
        size={25}
        color={colors.text}
      /> */}
      <Image source={editTour}  resizeMode="contain" style={{width: 25, height: 30}}/>
      {/* <MaterialCommunityIcons name="calculator" size={25} color={colors.text} /> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cont: {
    display: "flex",
    alignItems: "center",
    height: windowWidth,
    overflow: "hidden",
  },
  title: {
    color: colors.primary,
    textAlign: "center",
    fontFamily: "Manrope_600SemiBold",
    fontSize: windowWidth * 0.06,
    // textTransform: "capitalize",
    marginTop: 15,
    padding: 10,
  },
  btn: {
    backgroundColor: colors.primary,
    marginBottom: 10,
    marginTop: "auto",
    padding: 10,
    paddingHorizontal: windowWidth * 0.15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 12,
  },
  btntxt: {
    color: "white",
    textAlign: "center",
    fontFamily: "Manrope_700Bold",
    fontSize: 20,
  },
});
