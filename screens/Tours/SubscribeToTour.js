import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

import moment from "moment";
import React, { useContext, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View
} from "react-native";
import { colors } from "../../assets/colors";
import axios, { ToursUrl } from "../../tools/Apis";
import {
  ToursContext,
  ToursProvider,
  UserContext,
  UserTourContext
} from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";
import TourModal from "./ToursModal";

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
                  flexWrap: "wrap",
                  paddingTop: 15,
                }}
              >
                <Text style={styles.subdesc}>
                  -{">"} Bis unten scrollen und
                </Text>
                <TouchableOpacity
                  style={{
                    ...styles.butn,
                  }}
                  activeOpacity={1}
                >
                  <Text
                    style={{
                      ...styles.btnText,
                    }}
                  >
                    {"Tour abonnieren"}
                  </Text>
                </TouchableOpacity>
                <Text style={{ ...styles.subdesc }}>anklicken</Text>
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
                <Text style={styles.subdesc}>
                  -{">"} Bis ganz unten scrollen und
                </Text>
                <TouchableOpacity
                  style={{
                    ...styles.butn,
                    ...styles.btnred,
                  }}
                  activeOpacity={1}
                >
                  <Text
                    style={{
                      ...styles.btnText,
                      ...styles.btntxtred,
                    }}
                  >
                    {"Auswahl bestätigen"}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.subdesc}>anklicken</Text>
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
            <TouchableOpacity style={styles.next} onPress={SubTotour}>
              <Text style={styles.nextText}>Auswahl bestätigen</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TourModal />
      </ToursProvider>
    );
  else return null;
}

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

const TourCard = ({ tour, tIndex }) => {
  const { ShowTourInfo } = useContext(ToursContext);
  const { tourId, setTourId } = useContext(UserTourContext);
  const ToggleTourId = (id) => {
    if (tourId === id) setTourId("");
    else setTourId(id);
  };
  return (
    <TouchableOpacity
      style={{
        ...styles.tourCard,
        ...(tourId === tour?._id && {
          borderWidth: 2,
          borderColor: colors.primary,
        }),
      }}
      onPress={() => ToggleTourId(tour?._id)}
      onLongPress={() => {
        Vibration.vibrate();
        ShowTourInfo(tIndex);
      }}
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
    fontFamily: "Inter_900Black",
    color: colors.primary,
    fontSize: 18,
    marginBottom: 25,
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
    backgroundColor: colors.primary,
    // margin: 10,
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
    color: "white",
    fontSize: 17,
  },
});
