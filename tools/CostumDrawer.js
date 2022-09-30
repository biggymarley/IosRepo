import { MaterialIcons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";
import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../assets/colors";
import { logoicon, mandPng } from "../assets/IconFactory";
import LogoutIcon from "../assets/JsIcons/LogoutIcon";
import SettingsIcon from "../assets/JsIcons/SettingsIcon";
import { BaseURL, GetFileUrl } from "./Apis";
import { UserContext } from "./Context";
export default function CostumDrawer(props) {
  const { IsLogged, Loggout } = useContext(UserContext);
  return (
    <View style={{ flex: 1 }}>
      <ProfileView {...props} IsLogged={IsLogged} />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      {/* {IsLogged.isLogged ? (
        <SettingsLogout Loggout={Loggout} {...props} />
      ) : null} */}
    </View>
  );
}

const SettingsLogout = ({ Loggout, navigation }) => {
  const LoggoutClose = async () => {
    navigation.closeDrawer();
    await Loggout();
  };
  return (
    <View style={styles.btView}>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 30,
        }}
        onPress={() => navigation.navigate("Settings")}
      >
        <SettingsIcon width={30} height={30} />
        {/* <Text
          style={{
            fontFamily: "Manrope_800ExtraBold",
            fontSize: 14,
            marginLeft: 40,
            // marginBottom: 5,
            color: colors.bg,
          }}
        >
          Einstellungen
        </Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={LoggoutClose}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <LogoutIcon
          width={30}
          height={30}
          style={{ right: -5, position: "relative" }}
        />
        {/* <Text
          style={{
            fontFamily: "Manrope_800ExtraBold",
            fontSize: 14,
            marginLeft: 40,

            // marginBottom: 5,
            color: colors.bg,
          }}
        >
          Ausloggen
        </Text> */}
      </TouchableOpacity>
    </View>
  );
};

const ProfileView = (props) => {
  const { IsLogged } = props;
  return (
    <View style={styles.Pview}>
      {IsLogged.isLogged ? (
        <UserIsLoggedInfo {...props} />
      ) : (
        <NotLogged {...props} />
      )}
      {/* <IconButton
        style={{ opacity: 1, position: "relative", right:  -10}}
        icon={() => <Feather name="chevron-left" size={28} color={colors.bg} />}
        onPress={() => props.navigation.closeDrawer()}
      /> */}
    </View>
  );
};
const NotLogged = (props) => {
  return (
    <View>
      <View style={styles.avatarCon}>
        <Image source={mandPng} style={styles.avatar} resizeMode="contain" />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // width: "100%",
        }}
      >
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={styles.userName}>Anmelden</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
          <Text style={styles.userPhone}>Hier registrieren</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const UserIsLoggedInfo = (props) => {
  const { userData, setuserData, Loggout } = useContext(UserContext);
  const url = `${BaseURL}${GetFileUrl}/`;
  const LoggoutClose = async () => {
    props.navigation.closeDrawer();
    await Loggout();
  };
  return (
    <>
      <View>
        <View style={{ ...styles.avatarCon, padding: 0 }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Profile")}
          >
            <Image
              source={
                userData.photo === "no-photo"
                  ? logoicon
                  : { uri: `${url}${userData.photo}?${new Date()}` }
              }
              style={styles.avatar}
              resizeMode={userData.photo === "no-photo" ? "contain" : "cover"}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.userName}>
          {userData.lastName} {userData.firstName}
        </Text>
        <Text style={styles.userPhone}>+{userData.phone}</Text>
      </View>
      <TouchableOpacity
        onPress={LoggoutClose}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          right: 0,
          padding: 8,
          paddingTop: 15,
        }}
      >
        <MaterialIcons name="logout" size={25} color={colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          right: 50,
          padding: 8,
          paddingTop: 15,
          // marginBottom: 30,
        }}
        onPress={() => props.navigation.navigate("Settings")}
      >
        <MaterialIcons name="settings" size={25} color={colors.primary} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btView: {
    padding: 10,
    paddingLeft: 25,
    backgroundColor: colors.primary,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  Pview: {
    margin: 5,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    position: "relative",
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  userName: {
    fontFamily: "Manrope_700Bold",
    opacity: 1,
    marginLeft: 5,
    fontSize: 15,
    color: colors.text,
    // marginBottom: 5,
  },
  userPhone: {
    fontFamily: "Manrope_700Bold",
    opacity: 1,
    // marginLeft: 5,
    color: colors.text,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  avatarCon: {
    width: 60,
    height: 60,
    marginBottom: 20,
    backgroundColor: colors.primaryTrans,
    padding: 2,
    paddingBottom: 0,
    borderRadius: 30,
    elevation: 4,
    overflow: "hidden",
  },
});
