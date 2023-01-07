import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { colors, windowWidth } from "../../assets/colors";
import { noPhoto } from "../../assets/IconFactory";
import { BaseURL, GetFileUrl } from "../../tools/Apis";
import { ToursContext, UserTourContext } from "../../tools/Context";
const TourModal = () => {
  const url = `${BaseURL}${GetFileUrl}/`;
  const [modalVisible, setModalVisible] = useState(false);
  const { CloseTourInfo, ModalIndexActive, tours } = useContext(ToursContext);
  const { tourId, setTourId } = useContext(UserTourContext);
  useEffect(() => {
    if (ModalIndexActive > -1 && tours[ModalIndexActive]) setModalVisible(true);
    else setModalVisible(false);
  }, [ModalIndexActive]);

  const ToggleTourId = (id) => {
    if (tourId === id) setTourId("");
    else setTourId(id);
  };

  if (tours[ModalIndexActive])
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={CloseTourInfo}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Header />
              <ScrollView>
                <Image
                  source={
                    tours[ModalIndexActive]?.pic !== "no-photo"
                      ? {
                          uri: `${url}${tours[ModalIndexActive]?.pic}`,
                        }
                      : noPhoto
                  }
                  style={styles.gif}
                  resizeMode="contain"
                />
                <View
                  style={{
                    ...styles.container,
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.statustext}>- Status :</Text>
                  <StatusHandler status={tours[ModalIndexActive].status} />
                </View>
                <View style={{ padding: 20 }}>
                  <Text style={styles.date}>
                    {/* {tours[ModalIndexActive].startDate} */}
                    {moment(tours[ModalIndexActive].startDate).format(
                      "DD/MM/YYYY"
                    )}
                  </Text>
                  <CitysMap cities={tours[ModalIndexActive].cities} />
                  <Text style={styles.date}>
                    {moment(tours[ModalIndexActive].endDate).format(
                      "DD/MM/YYYY"
                    )}
                  </Text>
                </View>
         
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    );
  else return null;
};

const CitysMap = ({ cities }) => {
  return cities.map((city, index) => (
    <View style={styles.timlinecont} key={index}>
      <Ionicons
        name="ios-git-commit-outline"
        size={25}
        color={colors.text}
        style={styles.timlineicon}
      />
      <Text style={styles.city}>{city.cityName}</Text>
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
const Header = () => {
  const { CloseTourInfo, ModalIndexActive, tours } = useContext(ToursContext);
  return (
    <View style={styles.container}>
      <Text style={styles.tname}>{tours[ModalIndexActive].Tname}</Text>
      <TouchableOpacity onPress={CloseTourInfo}>
        <Ionicons name="close" size={24} color={colors.text} />
      </TouchableOpacity>
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
    marginLeft: 20,
  },
  date: {
    fontFamily: "Manrope_600SemiBold",
    color: "black",
    opacity: 0.7,
    marginBottom: 5,
  },
  city: {
    fontFamily: "Inter_700Bold",
    color: colors.text,
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    // alignItems:'center',
    justifyContent: "center",
    // paddingTop: 50,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: windowWidth - 40,
    padding: 20,
    paddingBottom: 0,
  },
  gif: {
    width: "100%",
    height: 300,
    // height:"50%"
    // marginBottom: 20,
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
    fontFamily: "Inter_500Medium",
    fontSize: 15,
    marginRight: 20,
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
    margin: 10,
    marginVertical: 40,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
export default TourModal;
