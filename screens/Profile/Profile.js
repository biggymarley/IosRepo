import { Feather } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, windowWidth } from "../../assets/colors";
import { logoicon } from "../../assets/IconFactory";
import axios, {
  BaseURL,
  GetFileUrl,
  MEurl,
  MyCommandUrl,
  UsersUrl,
} from "../../tools/Apis";
import { UserContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";
// import { MapHistoryOrders } from "../Tracking/History";
export default function Profile({ navigation }) {
  const ref = useRef();
  useEffect(() => {
    ref?.current?.play();
  }, []);

  return (
    <>
      <MenuButton
        btnColor={colors.text}
        isBack={true}
        title="Profil"
        isRight={true}
        navigation={navigation}
      />
      {/* <BackgroundAnimation /> */}
      <ScrollView style={{ flex: 1 }}>
        <Nprofile navigation={navigation} />
      </ScrollView>
    </>
  );
}

const AlertDeleteModal = ({ modalVisible, setModalVisible, DeleteAccount }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            {`Möchten Sie wirklich Ihren Account löschen?`}
          </Text>
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
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Nein</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={DeleteAccount}
            >
              <Text style={styles.textStyle}>Ja</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const Nprofile = ({ navigation }) => {
  const {
    userData,
    setuserData,
    IsLogged,
    setisLoading,
    Loggout,
    setAccountDeletedModal,
  } = useContext(UserContext);
  const [total, settotal] = useState(0);
  const [recived, setrecived] = useState(0);
  const [onthway, setonthway] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const url = `${BaseURL}${GetFileUrl}/`;
  const getMe = async () => {
    try {
      const res = await axios.get(MEurl, {
        headers: {
          Authorization: `Bearer ${IsLogged.token}`,
        },
      });
      setuserData({ ...(res?.data?.data ?? userData) });
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
  };

  const DeleteAccount = async () => {
    try {
      setModalVisible(false);
      setisLoading(true);
      await axios.delete(`${UsersUrl}/${userData._id}`, {
        headers: {
          Authorization: `Bearer ${IsLogged.token}`,
        },
      });
      Loggout();
      setisLoading(false);
      setTimeout(() => {
        setAccountDeletedModal(true);
      }, 100);
    } catch (error) {
      setisLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      if (!userData._id) getMe();
      fetchTracking();
    }, [])
  );

  const fetchTracking = async () => {
    try {
      // setisLoading(true);
      const res = await axios.get(MyCommandUrl, {
        headers: {
          Authorization: `Bearer ${IsLogged.token}`,
        },
      });
      const history = res.data.data.filter((e) => e.history === true) ?? [];
      setrecived([...history].length);
      setonthway([...res.data.data].length - [...history].length);
      settotal([...res.data.data].length);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchTracking();
    }, [])
  );

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: "10%",
      }}
    >
      <View style={styles.picContainer}>
        <Image
          source={
            userData.photo === "no-photo"
              ? logoicon
              : { uri: `${url}${userData.photo}?${new Date()}` }
          }
          style={styles.pic}
          resizeMode="cover"
        />
      </View>
      <View style={{ ...styles.row, marginTop: 25 }}>
        <Text style={styles.gender}>
          {userData.gander === "male" ? "Herr" : "Frau"}{" "}
        </Text>
        <Text style={styles.userName}>
          {userData.lastName} {userData.firstName}
        </Text>
      </View>
      <View style={styles.col3row}>
        <View style={styles.col}>
          <Text style={styles.num}>{onthway}</Text>
          <Text style={styles.com}>unterwegs</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.num}>{recived}</Text>
          <Text style={styles.com}>geliefert</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.num}>{total}</Text>
          <Text style={styles.com}>insgesamt</Text>
        </View>
      </View>
      <View style={styles.paper}>
        <TouchableOpacity
          style={styles.settings}
          onPress={() => navigation.navigate("Settings")}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#B9D2FF4f",
                padding: 8,
                borderRadius: 5,
                marginRight: 16,
              }}
            >
              <Feather name="settings" size={24} color={"#4584F7"} />
            </View>
            <Text style={styles.buttontext}>Einstellungen</Text>
          </View>
          <Feather name="chevron-right" size={24} color={colors.text} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settings}
          onPress={() => navigation.navigate("Chat")}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#B9D2FF4f",
                padding: 8,
                borderRadius: 5,
                marginRight: 16,
              }}
            >
              <Feather name="message-circle" size={24} color={"#4584F7"} />
            </View>
            <Text style={styles.buttontext}>Chat</Text>
          </View>
          <Feather name="chevron-right" size={24} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.settings, marginBottom: 0 }}
          onPress={() => navigation.navigate("KAL&ROK on Tour")}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#B9D2FF4f",
                padding: 8,
                borderRadius: 5,
                marginRight: 16,
              }}
            >
              <Feather name="flag" size={24} color={"#4584F7"} />
            </View>
            <Text style={styles.buttontext}>Ihre Tour</Text>
          </View>
          <Feather name="chevron-right" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      <View style={{ ...styles.paper, marginVertical: 25 }}>
        <TouchableOpacity
          style={{ ...styles.settings }}
          onPress={() => navigation.navigate("Infos")}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#B9D2FF4f",
                padding: 8,
                borderRadius: 5,
                marginRight: 16,
              }}
            >
              <Feather name="info" size={24} color={"#4584F7"} />
            </View>
            <Text style={styles.buttontext}>Infos</Text>
          </View>
          <Feather name="chevron-right" size={24} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.settings }}
          onPress={() => setModalVisible(true)}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#FFE1E14f",
                padding: 8,
                borderRadius: 5,
                marginRight: 16,
              }}
            >
              <Feather name="trash" size={24} color={colors.primary} />
            </View>
            <Text style={styles.buttontext}>Account löschen</Text>
          </View>
          <Feather name="chevron-right" size={24} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.settings, marginBottom: 0 }}
          onPress={Loggout}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#FFE1E14f",
                padding: 8,
                borderRadius: 5,
                marginRight: 16,
              }}
            >
              <Feather name="log-out" size={24} color={colors.primary} />
            </View>
            <Text style={styles.buttontext}>Ausloggen</Text>
          </View>
          <Feather name="chevron-right" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      <AlertDeleteModal
        modalVisible={modalVisible}
        DeleteAccount={DeleteAccount}
        setModalVisible={setModalVisible}
      />
    </View>
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
    elevation: 2,
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
    textTransform:'uppercase'
  },
  modalText: {
    marginBottom: 15,
    fontFamily: "Manrope_700Bold",
    textAlign: "center",
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
  row: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    marginHorizontal: "10%",
    elevation: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  col3row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginTop: 25,
    marginBottom: 25,
    paddingTop: 25,
    borderTopWidth: 1,
    borderTopColor: "#EFEFEF",
  },
  col: {
    flexBasis: "33%",
  },
  icon: {
    marginRight: 10,
    marginTop: 2,
  },
  settings: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
  },
  pinfos: {
    margin: 5,
    overflow: "hidden",
    maxHeight: 300,
    paddingVertical: 40,
    backgroundColor: colors.primary,
    borderRadius: 15,
    padding: 10,
    display: "flex",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pic: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,

    backgroundColor: colors.BlackTransBg,
  },
  picContainer: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    overflow: "hidden",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  userName: {
    fontFamily: "Manrope_800ExtraBold",
    fontSize: windowWidth * 0.055,
    marginBottom: 10,
    color: colors.text,
  },
  gender: {
    fontFamily: "Manrope_700Bold",
    textTransform: "capitalize",
    fontSize: windowWidth * 0.03,
    alignSelf: "flex-end",
    marginRight: 3,
    opacity: 0.7,
    marginBottom: 10,
    color: colors.text,
  },
  phone: {
    fontFamily: "Manrope_600SemiBold",
    fontSize: windowWidth * 0.035,
    textAlign: "center",
    opacity: 0.7,
    color: colors.text,
  },
  num: {
    fontFamily: "Inter_900Black",
    fontSize: windowWidth * 0.045,
    textAlign: "center",
    color: colors.text,
  },
  com: {
    fontFamily: "Manrope_300Light",
    fontSize: windowWidth * 0.035,
    textAlign: "center",
    color: colors.text,
    opacity: 0.4,
  },
  buttontext: {
    fontFamily: "Manrope_700Bold",
    fontSize: windowWidth * 0.04,
    textAlign: "center",
    color: colors.text,
  },
  adress: {
    fontFamily: "Manrope_600SemiBold",
    fontSize: windowWidth * 0.035,
    textAlign: "center",
    marginBottom: 5,
    color: colors.text,
  },
});
