import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import React, { useContext, useState } from "react";
import {
  Alert, BackHandler, Image, Modal,
  Pressable, StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../../assets/colors";
import { editTour } from "../../assets/IconFactory";
import { UserContext, UserTourContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";

import { useFocusEffect } from "@react-navigation/native";
import axios, {
  BaseURL,
  GetFileUrl,
  MEurl,
  UpdateUserValues
} from "../../tools/Apis";
export default function SubscribeToCity({ navigation }) {
  const { TourData } = useContext(UserTourContext);
  const [modalVisible, setModalVisible] = useState(null);

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
        navigation.navigate("Tours");
        setisLoading(false);
      } else Alert.alert("Error", "Please Wait until Tour is Active");
    } catch (error) {
      setisLoading(false);
      navigation.navigate("Tours");
      Alert.alert(
        "Error",
        "Please Wait until Tour is Active, or contact Support"
      );
    }
  };

  const AreYOUsure = (name, id) => {
    setModalVisible({ name: name, id: id });
  };

  useFocusEffect(
    React.useCallback(() => {
      if (userData.cityName !== null) navigation.jumpTo("KAL&ROK on Tour");
      BackHandler.addEventListener("hardwareBackPress", backAction);

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
              ...styles.container,
              justifyContent: "flex-start",
              alignItems: "center",
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
              flexDirection: "column",
            }}
          >
            <Text style={[styles.statustext, { paddingBottom: 5 }]}>
              - Anmeldungszeitraum :
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.date}>
                {moment(TourData.startDate).format("DD/MM/YYYY")} {" ->"}
              </Text>
              <Text style={styles.date}>
                {"  " + moment(TourData.endDate).format("DD/MM/YYYY")}
              </Text>
            </View>
          </View>
          <View
            style={{
              ...styles.container,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text style={{ ...styles.statustext, marginRight: 0 }}>
              - Tag der Tour :
            </Text>
            <Text style={{ ...styles.date, marginBottom: 0 }}>
              {"  " + moment(TourData.endDate).format("DD/MM/YYYY")}
            </Text>
          </View>
          <View style={{ padding: 20 }}>
            {/* <Text style={styles.date}>
              {moment(TourData.startDate).format("DD/MM/YYYY, HH:mm")}
            </Text> */}
            <CitysMap cities={TourData.cities} AreYOUsure={AreYOUsure} />
            {/* <Text style={styles.date}>
              {moment(TourData.endDate).format("DD/MM/YYYY, HH:mm")}
            </Text> */}
          </View>
        </ScrollView>
      </View>
      <CheckSubscription
        tname={TourData.Tname}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        Subscribe={Subscribe}
      />
    </>
  );
}

const CitysMap = ({ cities, AreYOUsure }) => {
  return cities.map((city, index) => (
    <View style={styles.timlinecont} key={index}>
      <Ionicons
        name="ios-git-commit-outline"
        size={25}
        color={colors.primary}
        style={styles.timlineicon}
      />
      <View style={styles.subsContainer}>
        <View style={styles.cityContainer}>
          <Text style={styles.city}>{city.cityName}</Text>
        </View>
        <TouchableOpacity
          style={styles.subs}
          onPress={() => AreYOUsure(city.cityName, city._id)}
          activeOpacity={0.8}
        >
          <Image
            source={editTour}
            resizeMode="contain"
            style={{ width: 25, height: 25 }}
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
}) => {
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
              {`Ihr Standort ist ${modalVisible?.name}, und Sie wollen eine Sendung abgeben ist das richtig?`}
            </Text>
          ) : (
            <Text style={styles.modalText}>
              {`Damit bestätigen Sie ihre Teilnahme an unserer Tour in ${modalVisible?.name}, ist das richtig?`}
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
              onPress={() => Subscribe(modalVisible.id)}
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
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 30,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    fontFamily: "Inter_900Black",
    color: "white",
    textAlign: "center",
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
    textTransform: "capitalize",
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
    backgroundColor: colors.bg,
  },
  subs: {
    padding: 5,
    backgroundColor: colors.bg,
  },
  subsContainer: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    borderWidth: 2,
    borderRadius: 12,
    overflow: "hidden",
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 5,
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

  tname: {
    fontFamily: "Inter_900Black",
    color: colors.text,
    fontSize: 18,
    marginBottom: 25,
    opacity: 0.7,
    textTransform: "uppercase",
  },
});
