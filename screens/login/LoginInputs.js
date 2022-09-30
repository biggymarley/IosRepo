import AsyncStorage from "@react-native-async-storage/async-storage";
import Checkbox from "expo-checkbox";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator, IconButton, TextInput } from "react-native-paper";
import { colors, theme, windowWidth } from "../../assets/colors";
import { UserContext } from "../../tools/Context";

const LoginInputs = ({
  open,
  HandleClose,
  navigation,
  phone,
  pwd,
  setPhone,
  setpwd,
  setNeedVerif,
  NeedPwd,
  setNeedPwd,
  Rpwd,
  Rphone,
  setRphone,
  setRpwd,
}) => {
  const { Auth } = useContext(UserContext);
  const [saveData, setsaveData] = useState(true);

  const [visible, setvisible] = useState(false);
  const [loading, setloading] = useState(false);
  const ref = useRef({});

  useEffect(() => {
    const log = async () => {
    try {
      const value = await AsyncStorage.getItem("SavedData");
      //console.log(value);
      const res = value != null ? JSON.parse(value) : null;
      if (res !== null) {
        setPhone(res.phone);
        setpwd(res.password);
        return true
      }
    } catch (error) {
      return false
    }
  }
  const res = log();
  return res;
}, []);

  const Login = async () => {
    const res = await Auth(phone, pwd, setloading, HandleClose, saveData);
    if (res.includes("not Verified")) setNeedVerif(true);
  };

  const handlePhone = (text) => {
    setPhone(text);
  };
  const handlepwd = (text) => {
    setpwd(text);
  };

  const GotoRegister = () => {
    HandleClose();
    navigation.navigate("Register");
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={HandleClose}
    >
      {NeedPwd ? (
        <RecoveryPassword
          HandleClose={HandleClose}
          setNeedPwd={setNeedPwd}
          Rpwd={Rpwd}
          Rphone={Rphone}
          setRphone={setRphone}
          setRpwd={setRpwd}
          setNeedVerif={setNeedVerif}
        />
      ) : (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : ""}
          style={{ flex: 2 }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ScrollView>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    icon={"close"}
                    size={26}
                    color={colors.text}
                    style={{ position: "relative", right: -10, opacity: 0.2 }}
                    onPress={HandleClose}
                  />
                </View>
                <TextInput
                  label="Telefonnummer"
                  value={phone}
                  onChangeText={(text) => handlePhone(text)}
                  mode="outlined"
                  keyboardType="number-pad"
                  theme={theme}
                  activeOutlineColor={colors.primary}
                  outlineColor="rgba(0,0,0,0.2)"
                  style={styles.input}
                  selectionColor={colors.primary}
                  left={
                    <TextInput.Icon
                      name="plus"
                      color={phone !== "" ? colors.primary : "rgba(0,0,0,0.3)"}
                      size={20}
                    />
                  }
                />
                <TextInput
                  label="Passwort"
                  value={pwd}
                  style={styles.input}
                  theme={theme}
                  onChangeText={(text) => handlepwd(text)}
                  mode="outlined"
                  keyboardType="default"
                  secureTextEntry={!visible}
                  activeOutlineColor={colors.primary}
                  outlineColor="rgba(0,0,0,0.2)"
                  selectionColor={colors.primary}
                  left={
                    <TextInput.Icon
                      name="lock-outline"
                      color={pwd !== "" ? colors.primary : "rgba(0,0,0,0.3)"}
                      size={20}
                    />
                  }
                  right={
                    visible ? (
                      <TextInput.Icon
                        name="eye-off-outline"
                        onPress={() => setvisible(!visible)}
                        color={colors.primary}
                        size={20}
                      />
                    ) : (
                      <TextInput.Icon
                        name="eye-outline"
                        onPress={() => setvisible(!visible)}
                        color={colors.primary}
                        size={20}
                      />
                    )
                  }
                />
                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                    }}
                    onPress={() => setsaveData(!saveData)}
                  >
                    <Checkbox
                      style={styles.checkbox}
                      value={saveData}
                      color={colors.primary}
                    />
                    <Text style={styles.paragraph}>Erinnere mich</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ width: "auto" }}
                    onPress={() => setNeedPwd(true)}
                  >
                    <Text
                      style={{
                        color: "#000",
                        textDecorationLine: "underline",
                        width: "auto",
                        opacity: 0.5,
                        marginBottom: 10,
                        fontFamily: "Manrope_600SemiBold",
                      }}
                    >
                      Passwort vergessen ?
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
                <View >
                  <TouchableOpacity
                    style={[styles.button, styles.buttonClose]}
                    onPress={Login}
                    disabled={loading}
                  >
                    {loading ? (
                      <ActivityIndicator size={28} color={colors.bg} />
                    ) : (
                      <Text style={styles.textStyle}>Anmelden</Text>
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity onPress={GotoRegister}>
                    <Text
                      style={{
                        ...styles.regtext,
                        color: "black",
                        textAlign: "center",
                        marginBottom: 5,
                      }}
                    >
                      Sie haben noch keinen Account? 
                      <Text
                        style={{
                          color: colors.text,
                          fontFamily: "Manrope_700Bold",
                          textTransform: "uppercase",
                          fontSize: 14,
                        }}
                      >
                        {" "}
                        Hier registrieren
                      </Text>
                    </Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      )}
    </Modal>
  );
};

const RecoveryPassword = ({
  HandleClose,
  setNeedPwd,
  Rpwd,
  Rphone,
  setRphone,
  setRpwd,
  setNeedVerif,
}) => {
  const [cpwd, setcpwd] = useState("");
  const [visible, setvisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            // marginBottom: 10,
          }}
        >
          <IconButton
            icon={"chevron-left"}
            size={26}
            color={colors.text}
            style={{ position: "relative", left: -20, opacity: 0.2 }}
            onPress={() => setNeedPwd(false)}
          />
          <IconButton
            icon={"close"}
            size={26}
            color={colors.text}
            style={{ position: "relative", right: -10, opacity: 0.2 }}
            onPress={HandleClose}
          />
        </View>
        <TextInput
          label="Telefonnummer"
          value={Rphone}
          onChangeText={(text) => setRphone(text)}
          mode="outlined"
          keyboardType="number-pad"
          theme={theme}
          activeOutlineColor={colors.primary}
          outlineColor="rgba(0,0,0,0.2)"
          style={styles.input}
          selectionColor={colors.primary}
          left={
            <TextInput.Icon
              name="plus"
              color={Rphone !== "" ? colors.primary : "rgba(0,0,0,0.3)"}
              size={20}
              // style={{ marginRight: 25 }}
            />
          }
        />

        <TextInput
          label="Neues Passwort"
          value={Rpwd}
          style={styles.input}
          theme={theme}
          onChangeText={(text) => setRpwd(text)}
          mode="outlined"
          keyboardType="default"
          secureTextEntry={!visible}
          activeOutlineColor={colors.primary}
          outlineColor="rgba(0,0,0,0.2)"
          selectionColor={colors.primary}
          left={
            <TextInput.Icon
              name="lock-outline"
              color={Rpwd !== "" ? colors.primary : "rgba(0,0,0,0.3)"}
              size={20}
              // style={{ marginRight: 25 }}
            />
          }
          right={
            visible ? (
              <TextInput.Icon
                name="eye-off-outline"
                onPress={() => setvisible(!visible)}
                color={colors.primary}
                size={20}
              />
            ) : (
              <TextInput.Icon
                name="eye-outline"
                onPress={() => setvisible(!visible)}
                color={colors.primary}
                size={20}
              />
            )
          }
        />

        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={() =>
            Rpwd !== "" &&
            Rpwd.length >= 6 &&
            Rphone !== "" &&
            Rphone.length >= 8
              ? setNeedVerif(true)
              : Alert.alert("Error", "Please Fill Fields")
          }
          // disabled={loading}
        >
          {/* {loading ? (
            <ActivityIndicator size={28} color={colors.bg} />
          ) : ( */}
          <Text style={styles.textStyle}>Passwort wiederherstellen</Text>
          {/* )} */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  logtext: {
    fontSize: 15,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#FFFFFF",
    fontFamily: "Manrope_800ExtraBold",
  },
  checkbox: {
    marginRight: 10,
    // marginTop: 2,
  },
  paragraph: {
    fontFamily: "Inter_300Light",
    color: "black",
    fontSize: 14,
  },
  regtext: {
    fontSize: 15,
    color: "#FFFFFF",
    letterSpacing: 1,
    // fontWeight: "b0old",
    fontFamily: "Manrope_400Regular",
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 2,
  },
  modalView: {
    backgroundColor: colors.bg,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 0,
    minHeight: "70%",
    width: "100%",
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
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginTop: 15,
    marginBottom: 15,
  },
  buttonClose: {
    backgroundColor: colors.primary,
    marginTop: "auto",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    // textTransform: "uppercase",
    fontFamily: "Manrope_800ExtraBold",
  },
  input: {
    backgroundColor: colors.bg,
    fontSize: 16,
    marginBottom: 30,
  },
  HeaderText: {
    fontFamily: "Manrope_300Light",
    fontSize: windowWidth * 0.06,
    color: colors.primary,
    opacity: 0.7,
  },
});

export default LoginInputs;
