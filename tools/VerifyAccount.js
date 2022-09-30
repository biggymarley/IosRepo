import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LottieView from "lottie-react-native";
import React, { useContext, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from "react-native-confirmation-code-field";
import { colors, windowWidth } from "../assets/colors";
import { Verified } from "../assets/IconFactory";
import axios, { SendUrl, VerifyUrl } from "./Apis";
import { UserContext } from "./Context";
const CELL_COUNT = 6;
export default function VerifyAccount({
  navigation,
  password,
  phone,
  isLoggin,
  setNeedVerif,
}) {
  const { setIsLogged, setuserData } = useContext(UserContext);
  const [value, setValue] = useState("");
  const [loading, setloading] = useState(false);
  const [Disabled, setDisabled] = useState(false);
  const [Timer, setTimer] = useState(60);
  const [sucess, setsucess] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const VerifyCode = async () => {
    try {
      setloading(true);
      const res = await axios.post(`${VerifyUrl}/${value}`, {
        password: password,
      });
      const jsonValue = JSON.stringify({
        isLogged: true,
        token: res.data.token,
      });
      await AsyncStorage.setItem("IsLogged", jsonValue);
      await AsyncStorage.setItem("userId", res.data.user._id);
      setuserData({ ...res.data.user });
      setloading(false);
      setsucess(true);
    } catch (error) {
      setloading(false);
      Alert.alert("Error", error?.response?.data?.error ?? "Invalid Token");
    }
  };
  const countdown = () => {
    const interval = setInterval(() => {
      setTimer((lastTimer) => (lastTimer >= 1 ? lastTimer - 1 : 0));
    }, 1000);
    return interval;
  };

  const ResendSms = async () => {
    try {
      setloading(true);
      const res = await axios.post(`${SendUrl}`, {
        phone: phone ?? "",
      });
      setDisabled(true);
      setTimer(60);
      let inter = countdown();
      setTimeout(() => {
        setDisabled(false), clearInterval(inter);
      }, 60000);
      setloading(false);
    } catch (error) {
      setloading(false);
      Alert.alert("Error", error?.response?.data?.error ?? "Server Error");
    }
  };
  const Jump = async () => {
    try {
      const value = await AsyncStorage.getItem("IsLogged");
      const res = value != null ? JSON.parse(value) : null;
      setIsLogged({ token: res.token, isLogged: true });
      navigation.jumpTo("Home");
      navigation.popToTop();
    } catch (error) {}
  };
  return (
    <>
      <ScrollView>
        {!sucess ? (
          <VerifyContainer
            reff={ref}
            props={props}
            getCellOnLayoutHandler={getCellOnLayoutHandler}
            value={value}
            setValue={setValue}
            ResendSms={ResendSms}
            Disabled={Disabled}
            Timer={Timer}
            phone={phone}
            setNeedVerif={setNeedVerif}
            isLoggin={isLoggin}
          />
        ) : (
          <VerifiedContainer />
        )}
        {loading && <ActivityIndicator size={45} color={colors.primary} />}
      </ScrollView>
      <TouchableOpacity
        style={styles.next}
        onPress={async () => (!sucess ? VerifyCode() : Jump())}
      >
        <Text style={styles.nextText}>
          {!sucess ? "Verifizieren Sie Ihren Account " : "Login"}
        </Text>
      </TouchableOpacity>
    </>
  );
}

const VerifyContainer = ({
  reff,
  props,
  getCellOnLayoutHandler,
  value,
  setValue,
  ResendSms,
  Disabled,
  Timer,
  phone,
  setNeedVerif,
  isLoggin,
}) => {
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Accountsverifizierung</Text>
        {isLoggin && (
          <TouchableOpacity
            style={{ position: "absolute", right: 5 }}
            onPress={() => setNeedVerif(false)}
          >
            <Entypo name="cross" size={30} color={colors.text} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.cont}>
        <Text style={styles.desc}>
        Code gesendet an  {phone ?? "+49 000 000 00"}
        </Text>
        <CodeField
          ref={reff}
          {...props}
          value={value}
          caretHidden={false}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              style={[styles.cell, isFocused && styles.focusCell]}
              key={index}
            >
              <Text
                style={{
                  fontSize: 24,
                  textAlign: "center",
                  fontFamily: "Manrope_800ExtraBold",
                }}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
        {!isLoggin && (
          <Text style={styles.norecive}>Keinen Code erhalten?</Text>
        )}
        <TouchableOpacity onPress={ResendSms} disabled={Disabled}>
          <Text style={{ ...styles.send, ...(Disabled && { opacity: 0.5 }) }}>
            {isLoggin ? "senden" : " Nochmal senden"} {Disabled && `${Timer} s`}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const VerifiedContainer = () => {
  return (
    <View style={styles.cont}>
      <LottieView
        source={Verified}
        speed={0.5}
        autoPlay={true}
        loop={false}
        style={{ width: windowWidth }}
      />
      <Text style={styles.desc}>Verification Completed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    margin: 15,
    display: "flex",
    alignItems: "center",
    paddingTop: 30,
  },
  desc: {
    fontFamily: "Manrope_500Medium",
    color: colors.text,
    lineHeight: 25,
    fontSize: 16,
    opacity: 0.7,
    textAlign: "center",
  },
  norecive: {
    fontFamily: "Manrope_500Medium",
    color: colors.text,
    lineHeight: 25,
    fontSize: 16,
    opacity: 0.5,
    marginTop: 15,
    textAlign: "center",
  },
  send: {
    fontFamily: "Manrope_700Bold",
    color: colors.text,
    lineHeight: 25,
    fontSize: 16,
    textAlign: "center",
  },
  title: {
    fontFamily: "Manrope_800ExtraBold",
    color: colors.primary,
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center",
    paddingTop: 10,
  },
  next: {
    backgroundColor: colors.primary,
    margin: 10,
    marginTop: "auto",
    marginBottom: 10,
    padding: 10,
    paddingHorizontal: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // alignSelf: "flex-end",
    flexDirection: "row",
    borderRadius: 10,
  },
  nextText: {
    fontFamily: "Inter_700Bold",
    color: "white",
    fontSize: 16,
    marginRight: 15,
  },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: windowWidth / 6 - 10,
    height: 60,
    borderRadius: 10,
    margin: 2,
    borderWidth: 1,
    borderColor: "#00000030",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
});
