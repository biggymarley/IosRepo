import { Entypo } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import React, { useContext } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { colors, windowWidth } from "../../assets/colors";
import { bell, EmptyButtonBg, noTour, nurem } from "../../assets/IconFactory";
import { HomeTourContext } from "../../tools/Context";

export default function TourInfos({ navigation }) {
  const { isLoading, indicator } = useContext(HomeTourContext);

  return (
    <View
      style={{
        ...styles.root,
      }}
    >
      {/* <BackgroundAnimation /> */}
      <ImageBackground
        source={EmptyButtonBg}
        resizeMode="stretch"
        style={styles.image}
      >
        {isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator color={colors.primary} size="large" />
          </View>
        ) : (
          <TourHandler indocator={indicator} />
        )}
      </ImageBackground>
    </View>
  );
}

const TourHandler = ({ indocator }) => {
  switch (indocator) {
    case 0:
      return <SubscribeToTour />;
    case 1:
      return <SubscribeToCity />;
    default:
      return <Text>Loading</Text>;
  }
};

const SubscribeToCity = () => {
  const { TourData, userData, navigation } = useContext(HomeTourContext);
  return (
    <View style={styles.subtocity}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          ...styles.tourCard,
        }}
        onPress={() =>
          TourData.status === true && userData.cityId === null
            ? navigation.navigate("KAL&ROK on Tour", {
                screen: "SubscribeToCity",
              })
            : navigation.navigate("KAL&ROK on Tour", {
                screen: "UserTour",
              })
        }
      >
        <View style={styles.head}>
          <View style={{ width: 100, height: 100 }}>
            <LottieView
              loop={true}
              autoPlay={TourData.status === true}
              source={bell}
              speed={0.8}
              resizeMode="contain"
            />
          </View>
          <View style={{ flexGrow: 1 }}>
            {TourData.Tname === "Nürnberg & Peripherie" ? (
              <>
                <Text style={styles.statusTour} numberOfLines={9}>
                  {TourData.status === true
                    ? `Sendungsabgabe in der${"\n"}Filiale aktiviert`
                    : `Sendungsabgabe in der${"\n"}Filiale nicht aktiviert`}
                </Text>
                {TourData.status === true && userData.cityId === null ? (
                  <>
                    <View
                      style={{
                        height: 2,
                        backgroundColor: colors.primary,
                        width: "80%",
                        alignSelf: "center",
                        marginVertical: 5,
                        borderRadius: 5,
                      }}
                    />
                    <Text style={styles.statusTour}>
                      Weiter zur Anmeldung {">"}
                    </Text>
                  </>
                ) : null}
              </>
            ) : (
              <>
                <Text style={styles.statusTour} numberOfLines={9}>
                  {TourData.status === true
                    ? `Ihre Tour ist aktuell aktiv`
                    : `Es tut mir leid,${"\n"}Ihre Tour ist aktuell${"\n"} nicht aktiv`}
                </Text>
                {TourData.status === true && userData.cityId === null ? (
                  <>
                    <View
                      style={{
                        height: 2,
                        backgroundColor: colors.primary,
                        width: "80%",
                        alignSelf: "center",
                        marginVertical: 5,
                        borderRadius: 5,
                      }}
                    />
                    <Text style={styles.statusTour}>
                      Weiter zur Anmeldung {">"}
                    </Text>
                  </>
                ) : null}
              </>
            )}
          </View>
        </View>
        {/* {TourData.status === true && userData.cityId === null
              ? "Tour is active click to subscribe to city"
              : TourData.status === true
              ? "Tour is active click to see more details"
            : "Tour is Not active click to see more details"} */}
        {userData.cityId && TourData.cities?.length > 0 && (
          <View style={styles.subCont}>
            <Text style={styles.subcity}>
              {userData.cityId &&
                TourData.cities?.length > 0 &&
                TourData.cities.filter((e) => e._id === userData.cityId)[0]
                  ?.cityName}
            </Text>
            <Entypo
              name="flag"
              size={24}
              color={
                TourData.cities[TourData.citiesStatus]?.cityName ===
                TourData.cities.filter((e) => e._id === userData.cityId)[0]
                  ?.cityName
                  ? colors.success
                  : colors.primary
              }
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const SubscribeToTour = () => {
  const { navigation } = useContext(HomeTourContext);
  return (
    <View
      style={{
        ...styles.tourCard,
        borderRadius: 10,
        // backgroundColor: colors.primaryTrans,
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        height: windowWidth * 0.4,
        paddingBottom: 5,
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          flexGrow: 50,
          // backgroundColor: "red",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRightWidth: 2,
          borderColor: colors.primary,
        }}
        onPress={() =>
          navigation.navigate("KAL&ROK on Tour", {
            screen: "SubscribeToTour",
          })
        }
      >
        <View style={styles.cont}>
          <LottieView
            loop={false}
            autoPlay
            source={noTour}
            speed={0.3}
            style={{ marginTop: 15 }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{ ...styles.subtocity, marginBottom: windowWidth * 0.095 }}
        >
          <Text style={{ ...styles.city, color: colors.primary }}>
            Tour Costumer
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexGrow: 1,
          // backgroundColor: "red",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        activeOpacity={0.6}
        onPress={() =>
          navigation.navigate("KAL&ROK on Tour", {
            screen: "SubscribeToNurm",
          })
        }
      >
        <View
          style={{ ...styles.subtocity, marginBottom: windowWidth * 0.095 }}
        >
          <Text
            style={{ ...styles.city, color: colors.primary }}
            numberOfLines={20}
          >
            Nürnberg & Peripherie
          </Text>
        </View>
        <View style={styles.cont}>
          <Image
            source={nurem}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 10,
    backgroundColor: colors.bg,
    // minHeight: 100,
    // borderWidth: 2,
    // borderColor: colors.primary,
    borderRadius: 10,
    // padding: 5,
    // overflow: "hidden",
    // elevation: 2,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 180,
  },
  subtocity: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    position: "relative",
  },
  toursRoot: { margin: 15, marginBottom: 0 },
  desc: {
    fontFamily: "Inter_300Light",
    color: colors.primary,
    lineHeight: 25,
    fontSize: 18,
    marginBottom: 15,
  },
  cont: {
    display: "flex",
    alignItems: "flex-start",
    width: "100%",
    height: windowWidth * 0.3,
    opacity: 0.6,
    position: "absolute",
    // top: ,
    zIndex: -1,
    // top: -windowWidth * 0.1,
    // right: -windowWidth * 0.28,
    // bottom:0
  },
  tname: {
    fontFamily: "Inter_900Black",
    color: colors.primary,
    fontSize: 18,

    textTransform: "uppercase",
  },
  statusTour: {
    fontFamily: "Manrope_800ExtraBold",
    color: colors.primary,
    fontSize: windowWidth * 0.035,
    textAlign: "center",
  },
  city: {
    fontFamily: "Manrope_800ExtraBold",
    color: colors.text,
    fontSize: windowWidth * 0.03,
    textAlign: "center",
    position: "relative",
    top: -windowWidth * 0.11,
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 5,
    paddingHorizontal: 10,
    borderTopWidth: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    // marginBottom: 10,
  },
  date: {
    fontFamily: "Manrope_400Regular",
    color: colors.text,
    marginBottom: 0,
  },
  subcity: {
    fontFamily: "Manrope_800ExtraBold",
    color: colors.primary,
    fontSize: 15,
    // marginBottom: 10,
  },
  dateCont: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems:"center",
    flexDirection: "row",
  },
  subCont: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 2,
    borderColor: colors.primary,
    flexDirection: "row",
  },
  head: {
    display: "flex",
    width: "100%",
    // margin: 25,
    // justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    // flexDirection: "column",
  },
  tourCard: {
    width: "100%",
    display: "flex",
  },
});
