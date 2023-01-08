import LottieView from "lottie-react-native";
import moment from "moment";
import React, { useContext, useState } from "react";
import {
  Alert,
  BackHandler,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  CalendarIcon,
  blueRedArrow,
  editTour,
  man,
  calander,
  boxes,
} from "../../assets/IconFactory";
import { colors } from "../../assets/colors";
import { UserContext, UserTourContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";

import { useFocusEffect } from "@react-navigation/native";
import axios, {
  BaseURL,
  GetFileUrl,
  MEurl,
  UpdateUserValues,
} from "../../tools/Apis";
export default function SubscribeToCity({ navigation }) {
  const { TourData } = useContext(UserTourContext);
  const [modalVisible, setModalVisible] = useState(null);
  const [driveStatus, setDriveStatus] = useState({
    deliveryInMo: "",
    driveToMo: "",
  });
  const [apModalStatus, setApModalStatus] = useState({
    isOpen: false,
    value: "Anfang Januar",
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
  const { IsLogged, setuserData, setisLoading, userData } =
    useContext(UserContext);
  const url = `${BaseURL}${GetFileUrl}/`;
  const Subscribe = async (id) => {
    try {
      setModalVisible(null);
      setisLoading(true);
      if ((await TourData.status) === true) {
        const Subs = await axios.put(
          UpdateUserValues,
          { cityId: id },
          {
            headers: {
              Authorization: `Bearer ${IsLogged.token}`,
            },
          }
        );
        const me = await axios.get(MEurl, {
          headers: {
            Authorization: `Bearer ${IsLogged.token}`,
          },
        });
        setuserData({ ...me.data.data });
        // navigation.navigate("Tours");
        setisLoading(false);
      } else
        Alert.alert("Fehler", "Bitte warten Sie, bis Ihre Tour aktiv ist.");
    } catch (error) {
      setisLoading(false);
      // navigation.navigate("Tours");
      Alert.alert("Fehler", "Bitte warten Sie, bis Ihre Tour aktiv ist.");
    }
  };

  const AreYOUsure = (name, id, endDate) => {
    setModalVisible({ name: name, id: id, endDate });
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
      if (userData.cityName !== null) navigation.jumpTo("KAL&ROK on Tour");
      BackHandler.addEventListener("hardwareBackPress", backAction);
      getApDrive();
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, [userData])
  );

  const backAction = () => {
    navigation.jumpTo("KAL&ROK on Tour");
  };

  return (
    <>
      <MenuButton
        isBack={true}
        btnColor={colors.text}
        navigation={navigation}
        title={`${TourData.Tname}`}
        isRight={true}
        backFunc={() => navigation.navigate("Tours")}
      />
      <View style={{ flex: 1 }}>
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
                paddingTop: 30,
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
              <Text style={[styles.statustext, { paddingBottom: 5 }]}>
                Anmeldungszeitraum :
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
            <View
              style={{
                ...styles.container,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                paddingBottom: 15,
                borderBottomWidth: 1.8,
                borderColor: colors.secondaryTrans,
              }}
            >
              <Text style={{ ...styles.statustext, marginRight: 0 }}>
                Tag der Tour :
              </Text>
              <Text style={{ ...styles.date, marginBottom: 0 }}>
                {"  " + moment(TourData.endDate).format("DD/MM/YYYY")}
              </Text>
            </View>
            <ScrollView>
              <View
                style={{
                  padding: 10,
                  justifyContent: "center",
                }}
              >
                <CitysMap
                  cities={TourData.cities}
                  AreYOUsure={AreYOUsure}
                  endDate={TourData.endDate}
                />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <CheckSubscription
        tname={TourData.Tname}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        Subscribe={Subscribe}
        navigation={navigation}
      />
      <ApModal CloseModal={CloseModal} apModalStatus={apModalStatus} />
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
          <Text
            style={{
              fontFamily: "Inter_400Regular",
              fontSize: 14,
              color: colors.text,
              borderTopWidth: 1,
              borderColor: colors.primary,
              marginTop: 25,
              paddingTop: 15,
            }}
          >
            {`Mit besten Grüßen aus Nürnberg\nIhr KAL&ROK Team\nAbdelhafid El K.`}
          </Text>
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

const CitysMap = ({ cities, AreYOUsure, endDate }) => {
  return cities.map((city, index) => (
    <View style={styles.timlinecont} key={index}>
      <View style={styles.subsContainer}>
        <View style={styles.cityContainer}>
          <Text style={styles.city}>{city.cityName}</Text>
        </View>
        <TouchableOpacity
          style={styles.subs}
          onPress={() => AreYOUsure(city.cityName, city._id, endDate)}
          activeOpacity={0.8}
        >
          <LottieView
            source={blueRedArrow}
            speed={1}
            resizeMode="cover"
            autoPlay={true}
            loop={true}
            style={{ width: 30, height: 30 }}
            // style={{ width: windowWidth, height: windowWidth * 0.9 }}
          />
          <Image
            source={editTour}
            resizeMode="contain"
            style={{ width: 35, height: 30 }}
          />
        </TouchableOpacity>
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
            In der Wartestellung
          </Text>
        </View>
      );
  }
};
const CheckSubscription = ({
  modalVisible,
  setModalVisible,
  Subscribe,
  tname,
  navigation,
}) => {
  console.log(modalVisible);
  return (
    // <View style={styles.centeredView}>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible !== null}
      onRequestClose={() => {
        setModalVisible(null);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {tname?.trim() === "Nürnberg & Peripherie" ? (
            <Text style={styles.modalText}>
              {`Ihr Standort ist ${
                modalVisible?.name
              } und Sie wollen eine Sendung am ${moment(
                modalVisible?.endDate
              )?.format("DD/MM/YYYY")} zum Versand abgeben.\n\nIst das richtig?`}
            </Text>
          ) : (
            <Text style={styles.modalText}>
              {`Damit bestätigen Sie Ihre Teilnahme\nan unserer Tour in ${
                modalVisible?.name
              } am ${moment(modalVisible?.endDate)?.format(
                "DD/MM/YYYY"
              )}.\n\nIst das richtig?`}
            </Text>
          )}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Pressable
              style={[
                styles.button,
                styles.buttonClose,
                { marginRight: 40, backgroundColor: colors.primary },
              ]}
              onPress={() => setModalVisible(null)}
            >
              <Text style={styles.textStyle}>Nein</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                Subscribe(modalVisible.id);
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.textStyle}>Ja</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>

    // </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 30,
    elevation: 3,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    fontFamily: "Inter_600SemiBold",
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
  },
  modalText: {
    marginBottom: 15,
    fontFamily: "Manrope_700Bold",
    // textAlign: "center",
  },
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
    marginHorizontal: 5,
    // marginLeft: 20,
  },
  date: {
    fontFamily: "Manrope_600SemiBold",
    color: "black",
    opacity: 0.7,
    // marginBottom: 5,
  },
  city: {
    fontFamily: "Inter_700Bold",
    color: colors.primary,
    fontSize: 14,
  },
  subscribe: {
    fontFamily: "Inter_700Bold",
    color: colors.primary,

    fontSize: 14,
  },
  cityContainer: {
    padding: 5,
    flexGrow: 1,
  },
  subs: {
    padding: 5,
    backgroundColor: colors.bg,
    flexDirection: "row",
  },
  subsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 2,
    borderRadius: 12,
    overflow: "hidden",
    borderColor: colors.primary,
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
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

  tname: {
    fontFamily: "Inter_900Black",
    color: colors.text,
    fontSize: 18,
    marginBottom: 25,
    opacity: 0.7,
    textTransform: "uppercase",
  },
});
