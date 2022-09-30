import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ActivityIndicator, HelperText, TextInput } from "react-native-paper";
import { colors, theme, windowWidth } from "../../assets/colors";
import { uploadPng } from "../../assets/IconFactory";
import { RegisterContext, UserContext } from "../../tools/Context";
import CostumCamera, { Preview } from "../../tools/CostumCamera";
import { GenderInputList } from "../../tools/GenderInputList";
import MenuButton from "../../tools/MenuButton";
import ChooseModal from "./ChooseModal";

export default function Step2({ navigation }) {
  const { formik, VerifyPersonal, cam, showCam, pickFromCamera, loading } =
    useContext(RegisterContext);
  const { isLoading } = useContext(UserContext);
  const checkForCameraRollPermission = async () => {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Berechtigungen",
        "Bitte erteilen Sie in den Einstellungen Ihres Systems Kamerarollenberechtigungen"
      );
    } else {
      // //console.log("Media Permissions are granted");
    }
    await ImagePicker.requestCameraPermissionsAsync();
    const res = await ImagePicker.getCameraPermissionsAsync();
    if (res.status !== "granted") {
      Alert.alert(
        "Berechtigungen",
        "Bitte erteilen Sie in den Einstellungen Ihres Systems Kamerarollenberechtigungen"
      );
    } else {
      // //console.log("Media Permissions are granted");
    }
  };

  useEffect(() => {
    checkForCameraRollPermission();
  }, []);

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : ""}
    style={{ flex: 1 }}
     >
      {/* {isLoading && <Loading isLoading={true} />} */}
      {showCam.isPreview && formik.values.photo !== "" && (
        <Preview Context={RegisterContext} />
      )}
      {showCam.isOpen && <CostumCamera Context={RegisterContext} />}
      <MenuButton
        isBack={true}
        btnColor={colors.text}
        navigation={navigation}
        title={"Kontaktdaten"}
        isTrans={showCam.isOpen === true}
      />
      <ScrollView style={{ backgroundColor: colors.bg }}>
        <View style={styles.step1Root}>
          <ImageHandler />
          <SexeHandler />
          <InfoInputs />
          <TouchableOpacity
            style={styles.next}
            onPress={() => VerifyPersonal(navigation)}
          >
            {loading ? (
              <ActivityIndicator size={"small"} color={colors.bg} />
            ) : (
              <>
                <Text style={styles.nextText}>Weiter</Text>
                <FontAwesome5
                  name="angle-right"
                  size={17}
                  color="#fff"
                  style={{ marginTop: 3 }}
                />
              </>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
  );
}

const InfoInputs = () => {
  const { formik, errors } = useContext(RegisterContext);

  return (
    
    <View 
         style={{ flex: 1 }}
         >
     
        <TextInput
          label="Name *"
          style={styles.input}
          theme={theme}
          onChangeText={formik.handleChange("lastname")}
          value={formik.values.lastname}
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
              style={{ marginRight: 25 }}
            />
          }
        />
        <HelperText
          type="error"
          visible={errors.lastname !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.lastname}
        </HelperText>
        <TextInput
          label="Vorname *"
          style={styles.input}
          theme={theme}
          onChangeText={formik.handleChange("firstname")}
          value={formik.values.firstname}
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
              style={{ marginRight: 25 }}
            />
          }
        />
        <HelperText
          type="error"
          visible={errors.firstname !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.firstname}
        </HelperText>
        <TextInput
          label="Postleitzahl *"
          onChangeText={formik.handleChange("postcode")}
          value={formik.values.postcode}
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
              style={{ marginRight: 25 }}
            />
          }
        />
        <HelperText
          type="error"
          visible={errors.postcode !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.postcode}
        </HelperText>
        <TextInput
          label="Wohnort *"
          onChangeText={formik.handleChange("adress")}
          value={formik.values.adress}
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
              style={{ marginRight: 25 }}
            />
          }
        />
        <HelperText
          type="error"
          visible={errors.adress !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.adress}
        </HelperText>
        <TextInput
          label="Telefonnummer *"
          onChangeText={formik.handleChange("phone")}
          value={formik.values.phone}
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
              color={colors.primary}
              size={20}
              style={{ marginRight: 25 }}
            />
          }
          // render={(props) => (
          //   <TextInputMask
          //     {...props}
          //     type={"custom"}
          //     options={{
          //       mask: "+49 999 9999 999",
          //     }}
          //   />
          // )}
        />
        <HelperText
          type="error"
          visible={errors.phone !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.phone}
        </HelperText>
        <TextInput
          label="Passwort *"
          style={styles.input}
          onChangeText={(text) => formik.setFieldValue("password", text)}
          value={formik.values.password}
          theme={theme}
          mode="outlined"
          keyboardType="default"
          secureTextEntry={!formik.values.isVisible}
          activeOutlineColor={colors.primary}
          outlineColor="rgba(0,0,0,0.2)"
          selectionColor={colors.primary}
          left={
            <TextInput.Icon
              name="lock-outline"
              color={colors.primary}
              size={20}
              style={{ marginRight: 25 }}
            />
          }
          right={
            formik.values.isVisible ? (
              <TextInput.Icon
                name="eye-off-outline"
                onPress={() => formik.setFieldValue("isVisible", false)}
                color={colors.primary}
                size={20}
                // style={{ marginTop: 20 }}
              />
            ) : (
              <TextInput.Icon
                name="eye-outline"
                onPress={() => formik.setFieldValue("isVisible", true)}
                color={colors.primary}
                // style={{ marginTop: 20 }}
                size={20}
              />
            )
          }
        />
        <HelperText
          type="error"
          visible={errors.password !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.password}
        </HelperText>
    </View>

  );
};

const SexeHandler = () => {
  const { errors } = useContext(RegisterContext);

  return (
    <View>
      <GenderInputList Context={RegisterContext} Vname="gender" />
      <HelperText
        type="error"
        visible={errors.gender !== ""}
        style={{ marginBottom: 0 }}
      >
        {errors.gender}
      </HelperText>
    </View>
  );
};

const ImageHandler = () => {
  const { formik } = useContext(RegisterContext);
  const [open, setopen] = useState(false);

  const HandleClose = () => {
    setopen(false);
  };

  const HandleOpen = () => {
    setopen(true);
  };

  return (
    <>
      <View style={styles.ImgContainer}>
        <TouchableOpacity style={styles.ImgUpload} onPress={HandleOpen}>
          <View style={styles.avatarCon}>
            <Image
              source={
                formik.values.photo.src !== ""
                  ? { uri: formik.values.photo.src }
                  : uploadPng
              }
              style={{
                ...styles.avatar,
                ...(formik.values.photo.src !== "" && { marginTop: 0 }),
              }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.addIcon}>
            <MaterialCommunityIcons
              name="image-plus"
              size={24}
              color={colors.primary}
            />
          </View>
          {/* <Text style={styles.ImgDesc}>
            Bitte berühren Sie , um Ihr Profilbild hochzuladen
          </Text> */}
        </TouchableOpacity>
      </View>
      <ChooseModal
        open={open}
        HandleClose={HandleClose}
        Context={RegisterContext}
      />
    </>
  );
};

const styles = StyleSheet.create({
  step1Root: {
    margin: 15,
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
  title: {
    // fontFamily: "Inter_700Bold",
    color: "#000",
    opacity: 0.6,
    fontSize: 15,
    marginBottom: 15,
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
    backgroundColor: colors.primaryTrans,
    borderRadius: 60,
    overflow: "hidden",
  },
  ImgDesc: {
    // fontFamily: "Inter_400Regular",
    color: colors.text,
    opacity: 0.7,
  },
  input: {
    fontSize: 16,
  },
  ImgUpload: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  ImgContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
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
    // margin: 10,
    marginTop: "auto",
    padding: 10,
    paddingHorizontal: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    flexDirection: "row",
    borderRadius: 10,
  },
  nextText: {
    fontFamily: "Inter_700Bold",
    color: "white",
    fontSize: 17,
    marginRight: 15,
  },
});
