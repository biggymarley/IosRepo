import { FontAwesome5 } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useContext, useEffect } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { HelperText, TextInput } from "react-native-paper";
import { colors, theme, windowWidth } from "../../assets/colors";
import { ToDuContext, UserContext } from "../../tools/Context";
import { GenderInputList } from "../../tools/GenderInputList";
import MenuButton from "../../tools/MenuButton";

export default function Step2({ navigation }) {
  const { formik, VerifyPersonal, cam, showCam, pickFromCamera, loading } =
    useContext(ToDuContext);
  const { userData, setisLoading } = useContext(UserContext);
  const checkForCameraRollPermission = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Berechtigungen",
        "Bitte erteilen Sie in den Einstellungen Ihres Systems Kamerarollenberechtigungen"
      );
    } else {
      //console.log("Media Permissions are granted");
    }
    await ImagePicker.requestCameraPermissionsAsync();
    const res = await ImagePicker.getCameraPermissionsAsync();
    if (res.status !== "granted") {
      Alert.alert(
        "Berechtigungen",
        "Bitte erteilen Sie in den Einstellungen Ihres Systems Kamerarollenberechtigungen"
      );
    } else {
      //console.log("Media Permissions are granted");
    }
  };

  useEffect(() => {
    checkForCameraRollPermission();
    fillFilelds();
  }, []);

  const fillFilelds = async () => {
    try {
      formik.setValues({
        ...formik.values,
        dfirstname: userData.firstName,
        dlastname: userData.lastName,
        dgender: userData.gander,
        dpostcode: userData.zipcode,
        dadress: userData.address,
        dphone: userData.phone.toString(),
      });
    } catch (error) {
      setisLoading(false);
    }
  };
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : ""}
     style={{ flex: 1 }}
  >    
        <MenuButton
        isBack={true}
        btnColor={colors.text}
        navigation={navigation}
        title={"Kunde in Deutschland"}
        textSize={14}
        isTrans={showCam.isOpen === true}
      />
      <ScrollView>
        <View style={styles.step1Root}>
          <SexeHandler />
          <InfoInputs />
        </View>
      <TouchableOpacity
        style={styles.next}
        onPress={() => VerifyPersonal(navigation)}
        >
        <Text style={styles.nextText}>Weiter</Text>
        <FontAwesome5
          name="angle-right"
          size={17}
          color="#fff"
          style={{ marginTop: 3 }}
          />
      </TouchableOpacity>
          </ScrollView>
    </KeyboardAvoidingView>
  );
}

const InfoInputs = () => {
  const { formik, errors } = useContext(ToDuContext);

  return (
    
      <View style={{ display: "flex" }}>
        <TextInput
          label="Name *"
          style={styles.input}
          theme={theme}
          onChangeText={formik.handleChange("dlastname")}
          value={formik.values.dlastname}
          mode="outlined"
          keyboardType="default"
          activeOutlineColor={colors.primary}
          outlineColor="rgba(0,0,0,0.2)"
          selectionColor={colors.primary}
          left={
            <TextInput.Icon
              name="account-outline"
              color={colors.primary}
              size={20}
            />
          }
        />
        <HelperText
          type="error"
          visible={errors.dlastname !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.dlastname}
        </HelperText>
        <TextInput
          label="Vorname *"
          style={styles.input}
          theme={theme}
          onChangeText={formik.handleChange("dfirstname")}
          value={formik.values.dfirstname}
          mode="outlined"
          keyboardType="default"
          activeOutlineColor={colors.primary}
          outlineColor="rgba(0,0,0,0.2)"
          selectionColor={colors.primary}
          left={
            <TextInput.Icon
              name="account-outline"
              color={colors.primary}
              size={20}
            />
          }
        />
        <HelperText
          type="error"
          visible={errors.dfirstname !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.dfirstname}
        </HelperText>
        <TextInput
          label="Postleitzahl *"
          onChangeText={formik.handleChange("dpostcode")}
          value={formik.values.dpostcode}
          style={styles.input}
          theme={theme}
          mode="outlined"
          keyboardType="default"
          activeOutlineColor={colors.primary}
          outlineColor="rgba(0,0,0,0.2)"
          selectionColor={colors.primary}
          left={
            <TextInput.Icon
              name="map-marker-outline"
              color={colors.primary}
              // color={pwd !== "" ? colors.primary : "rgba(0,0,0,0.3)"}
              size={20}
            />
          }
        />
        <HelperText
          type="error"
          visible={errors.dpostcode !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.dpostcode}
        </HelperText>
        <TextInput
          label="Wohnort *"
          onChangeText={formik.handleChange("dadress")}
          value={formik.values.dadress}
          style={styles.input}
          theme={theme}
          mode="outlined"
          keyboardType="default"
          activeOutlineColor={colors.primary}
          outlineColor="rgba(0,0,0,0.2)"
          selectionColor={colors.primary}
          left={
            <TextInput.Icon
              name="home-city-outline"
              color={colors.primary}
              size={20}
            />
          }
        />
        <HelperText
          type="error"
          visible={errors.dadress !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.dadress}
        </HelperText>
        <TextInput
          label="Telefonnummer *"
          onChangeText={formik.handleChange("dphone")}
          value={formik.values.dphone}
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
              forceTextInputFocus={false}
              color={colors.primary}
              size={20}
            />
          }
        />
        <HelperText
          type="error"
          visible={errors.dphone !== ""}
          style={{ paddingBottom: 30 }}
        >
          {errors.dphone}
        </HelperText>
      </View>
  );
};

const SexeHandler = () => {
  const { errors } = useContext(ToDuContext);

  return (
    <View>
      <GenderInputList Context={ToDuContext} Vname="dgender" />
      <HelperText
        type="error"
        visible={errors.dgender !== ""}
        style={{ marginBottom: 0 }}
      >
        {errors.dgender}
      </HelperText>
    </View>
  );
};

const styles = StyleSheet.create({
  step1Root: {
    margin: 10,
  },
  addIcon: {
    position: "absolute",
    right: 2,
    bottom: 5,
    backgroundColor: colors.bg,
    padding: 4,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  avatar: {
    width: "100%",
    height: "100%",
    marginTop: 10,
  },
  avatarCon: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: 120,
    height: 120,
    marginBottom: 5,
    backgroundColor: colors.lightText,
    borderRadius: 60,
    overflow: "hidden",
  },
  //   ImgDesc: {
  //     // fontFamily: "Inter_400Regular",
  //     color: colors.text,
  //     opacity: 0.7,
  //   },
  input: {
    fontSize: 16,
  },
  //   ImgUpload: {
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     marginBottom: 30,
  //   },
  //   ImgContainer: {
  //     display: "flex",
  //     justifyContent: "center",
  //     flexDirection: "row",
  //   },
  sexeCont: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bigButton: {
    flexBasis: "45%",
    height: windowWidth * 0.45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightText,
    // overflow: "hidden",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  next: {
    backgroundColor: colors.primary,
    marginBottom: 10,
    marginTop: "auto",
    padding: 15,
    paddingHorizontal: windowWidth * 0.2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 15,
  },
  nextText: {
    fontFamily: "Inter_700Bold",
    color: "white",
    fontSize: 17,
    marginRight: 15,
  },
});
