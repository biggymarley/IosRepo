import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import LottieView from "lottie-react-native";

import moment from "moment";
import React, { useContext, useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import SwipeButton from "rn-swipe-button";
import { colors, windowWidth } from "../../assets/colors";
import axios, { ToursUrl } from "../../tools/Apis";
import {
  ToursContext,
  ToursProvider,
  UserContext,
  UserTourContext,
} from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";
import TourModal from "./ToursModal";
import {
  checkIcon,
  checkSuccess,
  sliderButtonAnimation,
} from "../../assets/IconFactory";
export default function SubscribeToTour({ navigation }) {
  const [tours, settours] = useState([]);
  const [Localtour, setLocaltour] = useState(null);
  const [ModalIndexActive, setModalIndexActive] = useState(-1);
  const { SubTotour } = useContext(UserTourContext);
  const { setisLoading, userData } = useContext(UserContext);
  const fetchTours = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(ToursUrl);
      res.data.data.map((e, index) => {
        if (e.Tname?.trim() === "Nürnberg & Peripherie")
          setLocaltour({ localtour: e, tIndex: index });
      });
      settours([...res.data.data]);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchTours();
    }, [])
  );

  const ShowTourInfo = (index) => {
    setModalIndexActive(index);
  };
  const CloseTourInfo = () => {
    setModalIndexActive(-1);
  };
  if (tours.length > 0)
    return (
      <ToursProvider
        value={{ ModalIndexActive, ShowTourInfo, CloseTourInfo, tours }}
      >
        <MenuButton
          isBack={true}
          btnColor={colors.text}
          navigation={navigation}
          isRight={true}
          title={"Tour abonnieren"}
        />
        <ScrollView>
          <View style={styles.toursRoot}>
            <View
              style={{
                borderRadius: 8,
                elevation: 4,
                backgroundColor: colors.bg,
                padding: 15,
                paddingVertical: 15,
                marginBottom: 15,
                borderWidth: 2,
                borderColor: colors.primary,
              }}
            >
              <Text style={styles.desc}>
                Tour abonnieren je nach Wohnort wie folgt:
              </Text>

              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingTop: 15,
                }}
              >
                <Text style={styles.subdesc}>-{">"} Menü abrufen</Text>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={24}
                  color={colors.primary}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  paddingTop: 15,
                }}
              >
                <Text style={styles.subdesc}>
                  -{">"} Fenster ganz oben rechts schließen
                </Text>
                <Ionicons name="close" size={24} color={colors.text} />
              </View>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  paddingTop: 15,
                }}
              >
                <Text style={styles.subdesc}>-{">"} Tour abonnieren</Text>
                <SwipeButton
                  shouldResetAfterSuccess={true}
                  containerStyles={{ borderRadius: 25, width: 150 }}
                  height={30}
                  railBackgroundColor={colors.primary}
                  railBorderColor={colors.primary}
                  railFillBackgroundColor={colors.bg}
                  titleColor={colors.bg}
                  railFillBorderColor={colors.bg}
                  railStyles={{ borderRadius: 25 }}
                  thumbIconBorderColor={colors.bg}
                  thumbIconComponent={CheckoutButton}
                  titleStyle={{ fontFamily: "Inter_500Medium" }}
                  titleFontSize={15}
                  title="abonnieren"
                />
              </View>

              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  paddingTop: 15,
                }}
              >
                <Text style={styles.subdesc}>
                  -{">"} Ganz unten rechts Auswahl bestätigen{" "}
                </Text>
                <TouchableOpacity
                  style={{
                    ...styles.next,
                    padding: 5,
                    paddingHorizontal: 5,
                    marginLeft: 5,
                  }}
                  activeOpacity={1}
                >
                  <Text style={{ ...styles.nextText, fontSize: 14 }}>
                    Auswahl bestätigen
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <TourMap tours={tours} />
            {/* <Text
              style={{
                ...styles.desc,
                marginTop: 20,
                fontFamily: "Manrope_400Regular",
              }}
              >
              - Wird ihre Stadt nicht direkt von uns bei unseren wöchentlichen
              Tourneen bedient, so besteht die Möglichkeit für Sie, nach
              vorheriger Absprache mit uns ihre Sendungen über DHL direkt an
              unsere Filiale in Nürnberg zu schicken.
            </Text> */}

            <ChangeToLocalShippment Localtour={Localtour} />
            <TouchableOpacity
              style={styles.next}
              onPress={() => {
                SubTotour();
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.nextText}>Auswahl bestätigen</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TourModal />
      </ToursProvider>
    );
  else return null;
}

const SliderAnimatedButton = () => {
  return (
    <View
      style={{
        ...styles.dateCont,
        marginBottom: 20,
        marginHorizontal: 5,
        backgroundColor: colors.bg,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 25,
        justifyContent: "flex-end",
        paddingVertical: 5,
        position: "relative",
      }}
    >
      <View
        style={{
          position: "absolute",
          right: "40%",
          bottom: "50%",
          transform: [{ translateY: 8 }],
        }}
      >
        <Text
          style={{
            fontFamily: "Inter_500Medium",
            fontSize: 18,
            color: colors.secondary,
          }}
        >
          abonniert
        </Text>
      </View>
      <View
        style={{
          width: 35,
          height: 35,
          backgroundColor: "#ffffff",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          right: 5,
        }}
      >
        <LottieView
          source={sliderButtonAnimation}
          speed={0.7}
          autoPlay={true}
          loop={true}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

const ChangeToLocalShippment = ({ Localtour }) => {
  return (
    <View style={styles.Localshippment}>
      {/* <View style={styles.headContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or Change to Local Shippment</Text>
        <View style={styles.divider} />
      </View> */}

      {/* <Text
        style={{
          ...styles.desc,
          marginTop: 20,
          fontFamily: "Manrope_400Regular",
        }}
      >
        - Kunden aus Nürnberg, Fürth und der Umgebung haben die Möglichkeit,
        ihre Sendungen direkt bei uns in der Filiale abzugeben oder abzuholen.
      </Text> */}
      <TourCard tour={Localtour?.localtour} tIndex={Localtour?.tIndex} />
    </View>
  );
};

const TourMap = ({ tours }) => {
  return (
    tours.length >= 0 &&
    tours
      .filter((e) => e.Tname?.trim() !== "Nürnberg & Peripherie")
      .map((tour, index) => <TourCard tour={tour} key={index} tIndex={index} />)
  );
};

const CheckoutButton = () => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        backgroundColor: "#ffffff",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={checkIcon} style={{ width: "50%" }} resizeMode="contain" />
    </View>
  );
};
let forceResetLastButton = null;

const TourCard = ({ tour, tIndex }) => {
  const { ShowTourInfo } = useContext(ToursContext);
  const { tourId, setTourId } = useContext(UserTourContext);
  const ToggleTourId = (id) => {
    if (tourId === id) setTourId("");
  };

  useEffect(() => {
    if (tourId !== tour?._id && forceResetLastButton) forceResetLastButton();
  }, [tourId]);

  return (
    <TouchableOpacity
      style={{
        ...styles.tourCard,
        ...(tourId === tour?._id && {
          borderWidth: 1,
          borderColor: colors.primary,
        }),
      }}
      activeOpacity={tourId === tour?._id ? 0.7 : 1}
      onPress={() => tourId === tour?._id && setTourId("")}
      // onLongPress={() => {
      //   Vibration.vibrate();
      //   ShowTourInfo(tIndex);
      // }}
    >
      <View style={styles.dateCont}>
        <Text style={styles.tname}>{tour?.Tname} :</Text>
        <TouchableOpacity onPress={() => ShowTourInfo(tIndex)}>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color={colors.primary}
          />
        </TouchableOpacity>
      </View>

      {tourId === tour?._id ? (
        <SliderAnimatedButton />
      ) : (
        <SwipeButton
          containerStyles={{ borderRadius: 25, marginVertical: 25 }}
          height={40}
          onSwipeFail={() => ToggleTourId(tour?._id)}
          onSwipeSuccess={() => setTourId(tour?._id)}
          forceReset={(reset) => {
            forceResetLastButton = reset;
          }}
          railBackgroundColor={colors.primary}
          railBorderColor={colors.primary}
          railFillBackgroundColor={colors.bg}
          titleColor={colors.bg}
          railFillBorderColor={colors.bg}
          railStyles={{ borderRadius: 25 }}
          thumbIconBorderColor={colors.bg}
          thumbIconComponent={CheckoutButton}
          titleStyle={{ fontFamily: "Inter_500Medium", fontSize: 16 }}
          title="abonnieren"
        />
      )}

      <View style={styles.dateCont}>
        <Text style={styles.date}>
          {moment(tour?.startDate).format("DD/MM/YYYY")}
        </Text>
        <Text style={styles.date}>
          {moment(tour?.endDate).format("DD/MM/YYYY")}
        </Text>
      </View>
      <View
        style={{
          ...styles.dateCont,
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Cities citys={tour?.cities} />
      </View>
    </TouchableOpacity>
  );
};
const Cities = ({ citys }) => {
  return citys?.map((e, index) => (
    <View style={{ flexDirection: "row" }} key={index}>
      <Text style={styles.city}>{e.cityName ?? "none"}</Text>
      {index === citys.length - 1 ? null : <Dots />}
    </View>
  ));
};
const Dots = () => {
  return <Feather name="chevron-right" size={20} color={colors.primary} />;
};

const styles = StyleSheet.create({
  butn: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 8,
    borderColor: colors.success,
    borderWidth: 3,
    borderRadius: 12,
    marginHorizontal: 5,
    shadowColor: "#000",
  },
  btnred: {
    borderColor: "red",
  },
  btntxtred: {
    color: "red",
  },
  btnText: {
    color: colors.success,
    fontSize: 14,
    fontFamily: "Manrope_700Bold",
  },
  headContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    height: 2,
    flexGrow: 1,
    backgroundColor: "black",
    borderRadius: 1,
  },
  dividerText: {
    paddingHorizontal: 5,
  },
  toursRoot: { margin: 15, marginBottom: 0 },
  desc: {
    fontFamily: "Inter_700Bold",
    color: colors.text,
    // lineHeight: 25,
    fontSize: 14,
    marginBottom: 0,
  },
  subdesc: {
    fontFamily: "Inter_500Medium",
    color: colors.text,
    // lineHeight: 25,
    fontSize: 14,
    marginBottom: 5,
  },
  tname: {
    fontFamily: "Inter_500Medium",
    color: colors.primary,
    fontSize: 18,
    marginBottom: 15,
    opacity: 0.7,
    textTransform: "uppercase",
  },
  city: {
    fontFamily: "Manrope_800ExtraBold",
    color: colors.text,
    fontSize: 14,
    // marginBottom: 10,
  },
  date: {
    fontFamily: "Manrope_400Regular",
    color: colors.text,
    opacity: 0.7,
    marginBottom: 0,
  },
  dateCont: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems:"center",
    flexDirection: "row",
  },
  tourCard: {
    width: "100%",
    display: "flex",
    padding: 10,
    backgroundColor: colors.bg,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 15,
  },
  next: {
    backgroundColor: colors.bg,
    borderWidth: 2,
    borderColor: colors.primary,
    marginTop: "auto",
    marginBottom: 10,
    padding: 10,
    paddingHorizontal: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    flexDirection: "row",
    borderRadius: 10,
  },
  nextText: {
    fontFamily: "Inter_700Bold",
    color: colors.primary,
    fontSize: 17,
  },
});
