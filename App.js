import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import {
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/manrope";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
// import { StatusBar } from 'expo-status-bar';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import {
  Alert,
  AppState,
  Modal,
  Pressable,
  StyleSheet,
  StatusBar,
  Text,
  View,
  NativeModules,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { io } from "socket.io-client";
import { colors, NavTheme, windowWidth } from "./assets/colors";
import { mandPng } from "./assets/IconFactory";
import { NotLoggedScreens, Screens } from "./screens/Screens";
import axios, { AuthUrl, BaseURL, MEurl, UpdateUserValues } from "./tools/Apis";
import { UserProvider } from "./tools/Context";
import CostumDrawer from "./tools/CostumDrawer";
import Loading from "./tools/Loading";
// import { createNavigationContainerRef } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const navigationRef = createNavigationContainerRef();
const { StatusBarManager } = NativeModules;
export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });
  const [screensData, setscreensData] = useState([...NotLoggedScreens]);
  const [isLoading, setisLoading] = useState(true);
  const [SHeight, setSheight] = useState();
  const [messagesData, setmessagesData] = useState([]);
  const [NeedPwd, setNeedPwd] = useState(false);
  const [NewMessage, setNewMessage] = useState(false);
  const [AcceptRules, setAcceptRules] = useState(false);
  const [rules, setrules] = useState({
    role1: false,
    role2: false,
    notification: false,
  });

  const [userData, setuserData] = useState({
    pic: mandPng,
    gender: "male",
    firstname: "user",
    lastname: "user",
    postcode: "154785",
    adress: "Kurfürstendamm 12  Allershagen Mecklenburg-Vorpommern",
    phone: "+49 0000000000",
    password: "123456",
    isVisible: false,
    tourId: "A",
  });
  const [IsLogged, setIsLogged] = useState({
    isLogged: false,
    token: "",
  });
  const [socket, setSocket] = useState(null);
  const [modalVisible, setAccountDeletedModal] = useState(false);

  useEffect(() => {
    askNotification();
    const listener =
      Notifications.addNotificationResponseReceivedListener(handleNotification);
    return () => listener.remove();
  }, []);
  useEffect(() => {
    if (IsLogged.isLogged === true) {
      ConnectSocket(setSocket);
    }
    // return () => disconnectSocket();
  }, [setSocket, IsLogged.isLogged]);
  useEffect(() => {
    AppState?.addEventListener("change", _handleAppStateChange);
  }, []);
  const ConnectSocket = async (setSocket) => {
    const Basesocket = io(BaseURL);
    const UserId = await AsyncStorage.getItem("userId");
    const res = UserId != null ? UserId : userData?._id ?? "";
    Basesocket.on("UsersId", (data) => {
      Basesocket.emit("userdata", [res, "user"]);
    });
    setSocket(Basesocket);
  };
  const CreatNotif = async (message) => {
    try {
      setNewMessage(true);
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: false,
        }),
      });
      await Notifications.scheduleNotificationAsync({
        identifier: `ChatNotif`,
        content: {
          title: "Kal&Rok :",
          body: `${message}`,
        },
        trigger: null,
      });
    } catch (error) {
      setNewMessage(false);
    }
  };

  const CloseRules = () => {
    setAcceptRules(false);
    Loggout();
  };

  const handleNotification = () => {
    setNewMessage(false);
    if (navigationRef.isReady()) {
      navigationRef.navigate("Chat", { screen: "LiveChat" });
    }
  };

  const askNotification = async () => {
    // We need to ask for Notification permissions for ios devices
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
      // onSubmit();
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
  };

  const SetRules = async () => {
    try {
      setisLoading(true);
      const res = await axios.put(
        UpdateUserValues,
        {
          role1: rules.role1,
          role2: rules.role2,
          notification: rules.notification,
        },
        {
          headers: {
            Authorization: `Bearer ${IsLogged.token}`,
          },
        }
      );
      setuserData({ ...res.data.data });
      setAcceptRules(false);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
  };

  const disconnectSocket = () => {
    if (socket) {
      socket.emit("forceDisconnect", userData._id);
      socket.close();
    }
  };

  const appState = useRef(AppState.currentState);

  useEffect(() => {
    socket?.on("newMessage", (data) => {
      setmessagesData([...messagesData, data.message]);
      CreatNotif(
        data.message.message.type === "text" ? data.message.message.content : ""
      );
    });
  }, [socket, messagesData]);

  useEffect(() => {
    socket?.on("Messages", (data) => {
      setmessagesData([...data.messages]);
    });
  }, [socket]);

  const _handleAppStateChange = async (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      const verification = await getMe();
      if (!verification) Loggout();
    }

    appState.current = nextAppState;
  };

  useEffect(() => {
    const fetchSession = async () => {
      try {
        setisLoading(true);
        const value = await AsyncStorage.getItem("IsLogged");
        const res = value != null ? JSON.parse(value) : null;
        setisLoading(false);
        if (res !== null && res.isLogged === true) {
          setIsLogged({ ...res });
          setscreensData([...Screens]);
        } else setscreensData([...NotLoggedScreens]);
      } catch (e) {
        setisLoading(false);
      }
    };
    fetchSession();
    if (IsLogged.isLogged === true) getMe();
  }, [IsLogged.isLogged]);

  const getMe = async () => {
    try {
      const value = await AsyncStorage.getItem("IsLogged");
      const token = value != null ? JSON.parse(value) : null;
      if (token !== null) {
        const res = await axios.get(MEurl, {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        });
        if (
          res?.data?.data?.role1 == false ||
          res?.data?.data?.role2 == false
        ) {
          setAcceptRules(true);
        }
        if (res?.data?.data?.blocked == true) {
          Loggout();
          return false;
        }
        if (!socket) ConnectSocket(setSocket);
        setuserData({ ...(res?.data?.data ?? userData) });
        return true;
      }
    } catch (error) {
      Loggout();
      return false;
    }
  };

  const Auth = async (phone, pwd, setload, close, save) => {
    try {
      if (phone === "" || pwd === "")
        Alert.alert("error", "fill all required fields");
      else {
        try {
          setload(true);
          const login = await axios.post(AuthUrl, {
            phone: phone,
            password: pwd,
          });
          close();
          setIsLogged({ token: login.data.token, isLogged: true });
          const jsonValue = JSON.stringify({
            isLogged: true,
            token: login.data.token,
          });
          await AsyncStorage.setItem("IsLogged", jsonValue);
          if (save) {
            const SavedData = JSON.stringify({
              phone: phone,
              password: pwd,
            });
            await AsyncStorage.setItem("SavedData", SavedData);
            await AsyncStorage.setItem("userId", login.data.user._id);
            setuserData({ ...login.data.user });
          }
          setload(false);
          return "true";
        } catch (error) {
          setload(false);
          if (
            error?.response?.data?.error ===
            "Account not Verified, Please verifie your acount"
          )
            Alert.alert(
              "Reset Password",
              "Welcom to KalRok Please Reset Your Password",
              [{ text: "OK", onPress: () => setNeedPwd(true) }]
            );
          else
            Alert.alert(
              "error",
              error?.response?.data?.error ?? "Server Error"
            );

          return error?.response?.data?.error ?? "Server Error";
        }
      }
    } catch (error) {}
  };
  const Loggout = async () => {
    try {
      disconnectSocket();
      setisLoading(true);
      await AsyncStorage.removeItem("IsLogged");
      await AsyncStorage.removeItem("userId");
      setIsLogged({ isLogged: false, token: "" });
      setisLoading(false);
    } catch (e) {
      setisLoading(false);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        await StatusBarManager.getHeight((height) => {
          setSheight(height.height);
        });
      } catch (error) {}
    };
    fetch();
  }, []);

  if (!fontsLoaded) return <Loading />;
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        {isLoading && <Loading />}
        <UserProvider
          value={{
            SetRules,
            IsLogged,
            CreatNotif,
            Auth,
            Loggout,
            setisLoading,
            isLoading,
            userData,
            setIsLogged,
            setuserData,
            socket,
            ConnectSocket,
            messagesData,
            setmessagesData,
            setNeedPwd,
            NeedPwd,
            AcceptRules,
            setAcceptRules,
            rules,
            setrules,
            CloseRules,
            NewMessage,
            setNewMessage,
            setAccountDeletedModal,
          }}
        >
          <StatusBar barStyle="dark-content" hidden={false} />
          <SafeAreaView
            style={{ flex: 1, marginTop: Platform.OS ? SHeight : 0 }}
          >
            <NavigationContainer theme={NavTheme} ref={navigationRef}>
              <Drawer.Navigator
                drawerContent={(props) => <CostumDrawer {...props} />}
                screenOptions={{
                  drawerStyle: {
                    width: windowWidth * 0.8,
                  },
                }}
              >
                {screensData.map((screen, index) => (
                  <Drawer.Screen
                    key={index}
                    name={screen.name}
                    component={screen.component}
                    options={{
                      drawerLabelStyle: {
                        fontFamily: "Manrope_600SemiBold",
                        fontSize: 14,
                      },
                      drawerActiveTintColor: colors.primary,
                      drawerInActiveTintColor: "rgba(255, 255, 255, 1)",
                      ...screen.options,
                    }}
                  />
                ))}
              </Drawer.Navigator>
              <AccountDeleted
                modalVisible={modalVisible}
                setModalVisible={setAccountDeletedModal}
              />
            </NavigationContainer>
          </SafeAreaView>
        </UserProvider>
      </SafeAreaView>
    </>
  );
}

const AccountDeleted = ({ modalVisible, setModalVisible }) => {
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
            {`Schade, dass Sie uns verlassen.\nWir hätten Sie doch gern dabei.\n\nIhr Account wurde erfolgreich gelöscht.`}
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
                { backgroundColor: colors.primary },
              ]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
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
    borderRadius: 6,
    padding: 10,
    paddingHorizontal: 30,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    fontFamily: "Inter_400Regular",
    color: "white",
    textAlign: "center",
    fontSize:16
  },
  modalText: {
    marginBottom: 45,
    fontFamily: "Manrope_700Bold",
    // textAlign: "start",
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
  loadingCont: {
    width: windowWidth,
    height: "100%",
    backgroundColor: colors.transBg,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
