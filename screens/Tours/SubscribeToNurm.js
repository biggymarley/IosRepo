import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons
} from "@expo/vector-icons";
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

export default function SubscribeToNurm({ navigation }) {
  const [tours, settours] = useState([]);
  const [ModalIndexActive, setModalIndexActive] = useState(-1);
  const { SubTotour } = useContext(UserTourContext);
  const { setisLoading, userData } = useContext(UserContext);
  const fetchTours = async () => {
    try {
      // if (await userData.tour?._id == null) {
      setisLoading(true);
      const res = await axios.get(ToursUrl);
      let tours = [];
      tours = res.data.data.filter(
        (e) => e.Tname?.trim() === "Nürnberg & Peripherie"
      );
      settours([...tours]);
      setisLoading(false);
      // } else navigation.navigate("Tours");
    } catch (error) {
      setisLoading(false);
      //console.log(error.response.data);
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

  return (
    <ToursProvider
      value={{ ModalIndexActive, ShowTourInfo, CloseTourInfo, tours }}
    >
      <MenuButton
        isBack={true}
        btnColor={colors.text}
        navigation={navigation}
        title={"Nürnberg & Peripherie"}
      />
      <ScrollView>
        <View style={styles.toursRoot}>
          {/* <Text style={styles.desc}>
            Bitte tragen Sie sich in einer unseren Tourneen je nach Wohnort in
            Deutschland ein.
          </Text> */}
          {/* <View style={{ display: "flex", alignItems: "center" }}>
            <Image
              source={dronePng}
              style={{ width: "80%", height: windowWidth * 0.8 }}
              resizeMode="contain"
            />
          </View> */}
          <Text
            style={{
              ...styles.desc,
              marginTop: 20,
              fontFamily: "Manrope_400Regular",
            }}
          >
            - Kunden aus Nürnberg, Fürth und der Umgebung haben die Möglichkeit,
            ihre Sendungen direkt bei uns in der Filiale abzugeben oder
            abzuholen.
          </Text>
          <TourMap tours={tours} />
         
          <TouchableOpacity style={styles.next} onPress={SubTotour}>
            <Text style={styles.nextText}>Auswahl bestätigen</Text>
            <FontAwesome5
              name="angle-right"
              size={17}
              color="#fff"
              style={{ marginTop: 3 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TourModal />
    </ToursProvider>
  );
}

const TourMap = ({ tours }) => {
  return (
    tours.length >= 0 &&
    tours.map((tour, index) => (
      <TourCard tour={tour} key={index} tIndex={index} />
    ))
  );
};

const TourCard = ({ tour, tIndex }) => {
  const { ShowTourInfo } = useContext(ToursContext);
  const { tourId, setTourId } = useContext(UserTourContext);
  return (
    <TouchableOpacity
      style={{
        ...styles.tourCard,
        ...(tourId === tour._id && {
          borderWidth: 2,
          borderColor: colors.primary,
        }),
      }}
      onPress={() => setTourId(tour._id)}
      onLongPress={() => {
        Vibration.vibrate();
        ShowTourInfo(tIndex);
      }}
    >
      <View style={styles.dateCont}>
        <Text style={styles.tname}>{tour.Tname} :</Text>
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
          {moment(tour.startDate).format("DD/MM/YYYY")}
        </Text>
        <Text style={styles.date}>
          {moment(tour.endDate).format("DD/MM/YYYY")}
        </Text>
      </View>
      <View style={styles.dateCont}>
        <Text style={styles.city}>{tour?.cities[0]?.cityName ?? "None"}</Text>
        <Dots />
        <Text style={styles.city}>
          {tour?.cities[tour.cities.length - 1]?.cityName ?? "None"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Dots = () => {
  return (
    <View
      style={{
        position: "absolute",
        right: "45%",
      }}
    >
      <Feather name="chevrons-right" size={20} color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  toursRoot: { margin: 15, marginBottom: 0 },
  desc: {
    fontFamily: "Inter_300Light",
    color: colors.text,
    lineHeight: 25,
    fontSize: 18,
    marginBottom: 15,
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
    marginRight: 15,
  },
});
