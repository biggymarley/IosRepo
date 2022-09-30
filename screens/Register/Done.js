import { FontAwesome5 } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import React, { useContext } from "react";
import {
  Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View
} from "react-native";
import { colors, windowWidth } from "../../assets/colors";
import { CombLock } from "../../assets/IconFactory";
import axios, { SendUrl } from "../../tools/Apis";
import { RegisterContext } from "../../tools/Context";

export default function Done({ navigation }) {
  const { CreateUser, formik } = useContext(RegisterContext);
  const ResendSms = async () => {
    try {
      if (formik.values.phone && formik.values.phone !== "") {
        await axios.post(`${SendUrl}`, {
          phone: formik.values.phone,
        });
      }
    } catch (error) {
      Alert.alert(
        "Error",
        error?.response?.data?.error ?? "Phone Invalid Please Retry"
      );
    }
  };
  const SendSms = () => {
    ResendSms();
    navigation.navigate("Vaccount");
  };
  return (
    <>
      <ScrollView>
        <View style={styles.cont}>
        <LottieView
            source={CombLock}
            speed={1}
            resizeMode="contain"
            autoPlay={true}
            loop={true}
            style={{  height: windowWidth , width: windowWidth }}
          />
          {/* <Image
            source={clapPng}
            resizeMode="contain"
            style={{
              width: "80%",
              height: windowWidth * 0.5,
              marginBottom: 20,
            }}
          /> */}
          {/* <Text style={styles.title}>Welcome to Kal&Rok</Text> */}
          <Text style={styles.desc}>
            Vielen Dank für ihre Anmeldung. Ein sechsstelliger
            Verifizierungscode wird an die von Ihnen angegebene Ruf-Nr.
            gesendet.
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.next} onPress={SendSms}>
        <Text style={styles.nextText}>Account verifizieren</Text>
        <FontAwesome5
          name="angle-right"
          size={17}
          color="#fff"
          style={{ marginTop: 3 }}
        />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  cont: {
    margin: 15,
    display: "flex",
    alignItems: "center",
  },
  desc: {
    fontFamily: "Inter_300Light",
    color: colors.text,
    lineHeight: 25,
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
  },
  title: {
    fontFamily: "Manrope_800ExtraBold",
    color: colors.primary,
    fontSize: 25,
    marginBottom: 15,
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
});
