import { AntDesign, Entypo } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import moment from "moment";
import React, { useContext, useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { boxes, calander } from "../../assets/IconFactory";
import { colors } from "../../assets/colors";
import axios, { BaseURL, GetFileUrl } from "../../tools/Apis";
import { UserContext, UserTourContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";
export default function UserTour({ navigation }) {
  const { TourData } = useContext(UserTourContext);
  const { IsLogged, userData } = useContext(UserContext);
  const url = `${BaseURL}${GetFileUrl}/`;
  const [apModalStatus, setApModalStatus] = useState({
    isOpen: false,
    value: "Anfang Januar",
  });
  const [driveStatus, setDriveStatus] = useState({
    deliveryInMo: "",
    driveToMo: "",
  });
  const OpenModal = (value, icon, isCalander) => {
    setApModalStatus({
      isOpen: true,
      value: value,
      icon: icon,
      isCalander: isCalander,
    });
  };

  const CloseModal = () => {
    setApModalStatus({ isOpen: false, value: "Anfang Januar", icon: calander });
  };

  const getApDrive = async () => {
    try {
      const data = await axios.get("/api/v1/appointmentshipping", {
        headers: {
          Authorization: `Bearer ${IsLogged.token}`,
        },
      });
      setDriveStatus({ ...data?.data?.appointments?.[0] });
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getApDrive();
    }, [])
  );

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
              backgroundColor: colors.bg,
              position: "relative",
              // flex: 1,
              margin: 6,
              marginBottom: 50,
              borderRadius: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.41,
              shadowRadius: 9.11,
              elevation: 14,
            }}
          >
            <AppointmentsButtons
              OpenModal={OpenModal}
              driveStatus={driveStatus}
            />
            <View
              style={{
                ...styles.container,
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: 8,
                // borderTopWidth: 1.8,
                marginTop: 60,
                borderColor: "#0000004f",
                // backgroundColor: colors.bg,
              }}
            >
              <Text style={styles.statustext}>Status :</Text>
              <StatusHandler status={TourData.status} />
            </View>
            <View
              style={{
                ...styles.container,
                justifyContent: "space-between",
                // alignItems: "center",
                paddingTop: 8,
                flexDirection: "row",
                paddingBottom: 8,
                // borderBottomWidth: 1,
                // borderColor: colors.primary,
              }}
            >
              <Text style={[styles.statustext]}>Anmeldungszeitraum :</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.date}>
                  {moment(TourData.startDate).format("DD/MM")} {" ->"}
                </Text>
                <Text style={styles.date}>
                  {"  " + moment(TourData.endDate).format("DD/MM/YYYY")}
                </Text>
              </View>
            </View>

            <View
              style={{
                ...styles.container,
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 8,
                flexDirection: "row",
                paddingBottom: 15,
                borderBottomWidth: 1.8,
                borderColor: colors.secondaryTrans,
              }}
            >
              <Text style={styles.statustext}>Tag der Tour :</Text>
              <Text style={styles.date}>
                {"  " + moment(TourData.endDate).format("DD/MM/YYYY")}
              </Text>
            </View>

            <ScrollView>
              <View
                style={{
                  padding: 10,
                  // flex: 1,
                  justifyContent: "center",
                }}
              >
                <CitysMap
                  cities={TourData.cities}
                  cindex={TourData.citiesStatus}
                />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
        <ApModal CloseModal={CloseModal} apModalStatus={apModalStatus} />
      </View>
    </>
  );
}

const ApModal = ({ apModalStatus, CloseModal }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={apModalStatus.isOpen}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={CloseModal}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "#0000004f",
        }}
      >
        <View
          style={{
            backgroundColor: colors.bg,
            padding: 20,
            paddingVertical: 20,
            width: "100%",
            // alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            borderWidth: 2,
            borderColor: colors.primary,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
            elevation: 14,
          }}
        >
          <View style={{justifyContent:'flex-end', flexDirection:'row'}}>
          <TouchableOpacity onPress={CloseModal}>
            <AntDesign name="close" size={25} color={colors.secondary} />
          </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <LottieView
              source={apModalStatus.icon}
              style={apModalStatus.isCalander ? { width: 200 } : { width: 160 }}
              resizeMode="contain"
              loop={true}
              autoPlay={true}
            />
          </View>
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 18,
              paddingVertical: 20,
              color: colors.text,
              textAlign: "center",
            }}
          >
            {apModalStatus.isCalander
              ? "Nächste planmäßige Fahrt nach MA:"
              : "Zustellung in MA erfolgt ab:"}
          </Text>
          <Text
            style={{
              fontFamily: "Inter_600SemiBold",
              fontSize: 18,
              color: colors.secondary,
            }}
          >
            {apModalStatus.value}
          </Text>
          <View
            style={{
              borderTopWidth: 1,
              borderColor: colors.primary,
              marginTop: 25,
              paddingTop: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "Inter_400Regular",
                fontSize: 14,
                color: colors.text,
              }}
            >
              {`Mit besten Grüßen aus Nürnberg\nIhr KAL&ROK Team\nAbdelhafid El K.`}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const AppointmentsButtons = ({ OpenModal, driveStatus }) => {
  return (
    <View
      style={{
        top: -35,
        position: "absolute",
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: colors.bg,
        borderRadius: 12,
        paddingVertical: 10,
        shadowColor: colors.text,
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            OpenModal(driveStatus.deliveryInMo, calander, true);
          }}
          style={{
            flexBasis: "50%",
            alignItems: "center",
            padding: 3,
            paddingVertical: 15,
            borderRightWidth: 2,
            borderColor: colors.secondaryTrans,
          }}
        >
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 16,
              color: colors.primary,
            }}
          >
            Fahrt nach MA
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            OpenModal(driveStatus.driveToMo, boxes, false);
          }}
          style={{
            flexBasis: "50%",
            alignItems: "center",
            padding: 3,
            paddingVertical: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 16,
              color: colors.primary,
            }}
          >
            Zustellung in MA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const CitysMap = ({ cities, cindex }) => {
  return cities.map((city, index) => (
    <View style={styles.timlinecont} key={index}>
      {/* <Ionicons
        name="ios-git-commit-outline"
        size={35}
        color={colors.primary}
        style={styles.timlineicon}
      /> */}
      <View style={styles.subCont}>
        <Text style={styles.city}>{city.cityName}</Text>
        <Entypo
          name="flag"
          size={24}
          color={cindex >= index ? colors.success : colors.bg}
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
    borderWidth: 2,
    borderRadius: 12,
    borderColor: colors.bg,
    padding: 10,
    paddingHorizontal: 20,
    width: "100%",
    flexDirection: "row",
    backgroundColor: colors.primary,
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
  },
  date: {
    fontFamily: "Inter_700Bold",
    color: "black",
    opacity: 0.7,
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
    color: colors.bg,
    fontSize: 16,
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
    paddingHorizontal: 10,
    paddingBottom: 0,
  },
  gif: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  active: {
    borderColor: colors.bg,
    backgroundColor: colors.success,
  },
  hold: {
    borderColor: colors.bg,
    backgroundColor: "#ffa500",
  },
  textactive: {
    color: colors.bg,
  },
  texthold: {
    color: colors.bg,
  },
  chiptext: {
    fontSize: 14,
    fontFamily: "Manrope_700Bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  statustext: {
    fontFamily: "Inter_300Light",
    fontSize: 16,
    marginRight: 8,
    color: colors.text,
  },
  chip: {
    padding: 2,
    backgroundColor: colors.bg,
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 6,
    borderWidth: 2,
    // width: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
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
