import { Entypo, Ionicons } from "@expo/vector-icons";
import moment from "moment";
import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../../assets/colors";
import { BaseURL, GetFileUrl } from "../../tools/Apis";
import { UserContext, UserTourContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";

export default function UserTour({ navigation }) {
  const { TourData } = useContext(UserTourContext);
  const { IsLogged, userData } = useContext(UserContext);
  const url = `${BaseURL}${GetFileUrl}/`;

  return (
    <>
      <MenuButton
        isBack={true}
        btnColor={colors.text}
        navigation={navigation}
        title={`${TourData.Tname}`}
        isRight={true}
      />
      <View style={styles.modalView}>
        <ScrollView>
          <Image
            source={{ uri: `${url}${TourData.pic}` }}
            style={styles.gif}
            resizeMode="contain"
          />
          <View
            style={{
              ...styles.container,
              paddingBottom: 0,
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: colors.bg,
            }}
          >
            <Text style={styles.statustext}>- Status :</Text>
            <StatusHandler status={TourData.status} />
          </View>
          <View
            style={{
              ...styles.container,
              justifyContent: "flex-start",
              // alignItems: "center",
              paddingTop: 6,

              flexDirection: "row",
            }}
          >
            <Text style={[styles.statustext, { paddingBottom: 5 }]}>
              - Anmeldungszeitraum :
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.date}>
                {moment(TourData.startDate).format("DD/MM")} {" ->"}
              </Text>
              <Text style={styles.date}>
                {"  " + moment(TourData.endDate).format("DD/MM/YYYY")}
              </Text>
            </View>
          </View>

          {userData.cityId && TourData.cities?.length > 0 && (
            <View
              style={{
                ...styles.container,
                paddingBottom: 0,
                paddingTop: 0,
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: colors.bg,
              }}
            >
              <Text style={styles.statustext}>- Angemeldet für: </Text>
              <Text style={styles.date}>
                {userData.cityId &&
                  TourData.cities?.length > 0 &&
                  TourData.cities.filter((e) => e._id === userData.cityId)[0]
                    .cityName}
              </Text>
            </View>
          )}
          <View
            style={{
              ...styles.container,
              justifyContent: "flex-start",
              alignItems: "center",
              backgroundColor: colors.bg,
              paddingTop: 0,

            }}
          >
            <Text style={styles.statustext}>- Tag der Tour :</Text>
            <Text style={styles.date}>
              {"  " + moment(TourData.endDate).format("DD/MM/YYYY")}
            </Text>
          </View>
          <View style={{ padding: 20, backgroundColor: colors.bg }}>
            <CitysMap cities={TourData.cities} cindex={TourData.citiesStatus} />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const CitysMap = ({ cities, cindex }) => {
  return cities.map((city, index) => (
    <View style={styles.timlinecont} key={index}>
      <Ionicons
        name="ios-git-commit-outline"
        size={25}
        color={colors.primary}
        style={styles.timlineicon}
      />
      <View style={styles.subCont}>
        <Text style={styles.city}>{city.cityName}</Text>
        <Entypo
          name="flag"
          size={24}
          color={cindex >= index ? colors.success : colors.primary}
        />
      </View>
    </View>
  ));
};

const StatusHandler = ({ status }) => {
  switch (status) {
    case true:
      return (
        <View style={[styles.chip, styles.active]}>
          <Text style={[styles.chiptext, styles.textactive]}>aktiv</Text>
        </View>
      );

    default:
      return (
        <View style={[styles.chip, styles.hold]}>
          <Text style={[styles.chiptext, styles.texthold]}>
            in der Warteschlange
          </Text>
        </View>
      );
  }
};
const CityFinder = ({ id }) => {
  const { TourData } = useContext(UserTourContext);
  return (
    <View style={styles.container}>
      <Text style={styles.tname}>{TourData.Tname}</Text>
      {/* <TouchableOpacity onPress={CloseTourInfo}>
        <Ionicons name="close" size={24} color={colors.text} />
      </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
  butn: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 12,
    borderColor: colors.success,
    borderWidth: 3,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  subCont: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems:"center",
    width: "60%",
    marginBottom: 10,
    flexDirection: "row",
  },
  btnred: {
    borderColor: "red",
  },
  btntxtred: {
    color: "red",
  },
  btnText: {
    color: colors.success,
    fontSize: 16,
    fontFamily: "Manrope_700Bold",
  },
  timlineicon: {
    marginRight: 15,
    opacity: 0.5,
    transform: [{ rotate: "90deg" }],
  },
  timlinecont: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 5,
    // marginLeft: 20,
  },
  date: {
    fontFamily: "Manrope_600SemiBold",
    color: "black",
    opacity: 0.7,
    marginBottom: 5,
  },
  CitySubs: {
    fontFamily: "Manrope_600SemiBold",
    color: "black",
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: colors.bg,
  },
  city: {
    fontFamily: "Inter_700Bold",
    color: colors.text,
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 30,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
    paddingBottom: 0,
  },
  gif: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  active: {
    borderColor: colors.success,
  },
  hold: {
    borderColor: "#ffa500",
  },
  textactive: {
    color: colors.success,
  },
  texthold: {
    color: "#ffa500",
  },
  chiptext: {
    fontFamily: "Manrope_700Bold",
  },
  statustext: {
    fontFamily: "Manrope_700Bold",
    fontSize: 15,
    marginRight: 8,

    // textTransform: "uppercase",
    color: colors.text,
  },
  chip: {
    padding: 2,
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 50,
    borderWidth: 2,
  },
  modalView: {
    flex: 1,
  },
  tname: {
    fontFamily: "Inter_900Black",
    color: colors.text,
    fontSize: 18,
    marginBottom: 25,
    opacity: 0.7,
    textTransform: "uppercase",
  },
});
