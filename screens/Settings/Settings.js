import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { useFormik } from "formik";
import React, { useContext, useEffect, useRef, useState } from "react";
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
import { HelperText, TextInput } from "react-native-paper";
import { colors, theme, windowWidth } from "../../assets/colors";
import { uploadPng } from "../../assets/IconFactory";
import axios, {
  BaseURL,
  GetFileUrl, UpdateUserPhotoUrl,
  UpdateUserValues
} from "../../tools/Apis";
import {
  SettingsContext,
  SettingsProvider,
  UserContext
} from "../../tools/Context";
import CostumCamera, { Preview } from "../../tools/CostumCamera";
import { GenderInputList } from "../../tools/GenderInputList";
import MenuButton from "../../tools/MenuButton";
import ChooseModal from "../Register/ChooseModal";

export default function Step2({ navigation }) {
  const [loading, setloading] = useState(false);
  const [img, setimg] = useState({ src: "", type: "" });

  const { userData, IsLogged, setisLoading, setuserData } =
    useContext(UserContext);
  const [showCam, setshowCam] = useState({
    type: {},
    isOpen: false,
    isPreview: false,
  });
  const cam = useRef({});
  const [errors, seterrors] = useState({
    photo: "",
    gander: "",
    firstName: "",
    lastName: "",
    zipcode: "",
    address: "",
    phone: "",
    password: "",
    tour: "",
  });
  const formik = useFormik({
    initialValues: {
      photo: { src: "", name: "" },
      gander: "male",
      firstName: "firstName",
      lastName: "lastName",
      zipcode: "zipcode",
      address: "address",
      phone: "phone",
      notification: true,
    },
    // validationSchema: PersonalValidation,
    onSubmit: (values) => {
      const textFields = {
        gander: values.gander,
        firstName: values.firstName,
        lastName: values.lastName,
        zipcode: values.zipcode,
        address: values.address,
        phone: values.phone,
        notification: values.notification,
      };
      UpdateValues(textFields);
      if (values?.photo?.name) UpdatePhoto(values.photo.src);
      navigation.navigate("Profile");
    },
  });

  const UpdateValues = async (textFields) => {
    try {
      setisLoading(true);
      const res = await axios.put(UpdateUserValues, textFields, {
        headers: {
          Authorization: `Bearer ${IsLogged.token}`,
        },
      });
      setuserData({ ...res.data.data });
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      //console.log(error?.response?.data?.error ?? "Server Error Please Retry");
    }
  };

  const UpdatePhoto = async (src) => {
    try {
      setisLoading(true);
      BaseURL;
      await FileSystem.uploadAsync(`${BaseURL}${UpdateUserPhotoUrl}`, src, {
        headers: {
          Authorization: `Bearer ${IsLogged.token}`,
        },
        httpMethod: "PUT",
        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
        fieldName: "file",
        mimeType: formik.values.photo.type,
      });
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      //console.log(error?.response?.data?.error ?? "Server Error Please Retry");
    }
  };

  const getMe = async () => {
    try {
      formik.setValues({ ...userData });
      formik.setFieldValue("phone", userData.phone.toString());
      const userphoto = {
        src: userData.photo,
      };
      await formik.setFieldValue("photo", userphoto);
    } catch (error) {
      setisLoading(false);
    }
  };

  const pickImageLibrary = async () => {
    setloading(true);
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [2, 2],
      quality: 1,
    });
    if (!result.cancelled) {
      let filename = result.uri.split("/").pop();
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      // //console.log(blob)
      const source = {
        name: filename,
        type: type,
        src: result.uri,
      };
      formik.setFieldValue("photo", { ...source });
    }
    setloading(false);
  };

  const pickFromCamera = async () => {
    if (!showCam.isOpen) return;
    try {
      setloading(true);
      const result = await cam.current.takePictureAsync({ quality: 0.5 });
      if (!result.cancelled) {
        let filename = result.uri.split("/").pop();
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        // //console.log(blob)
        const source = {
          name: filename,
          type: type,
          src: result.uri,
        };
        formik.setFieldValue("photo", { ...source });
      }
      setshowCam({ ...showCam, isOpen: false, isPreview: true });
      setloading(false);
    } catch (error) {
      setloading(false);
      Alert.alert("error", "error");
    }
  };

  const PickGender = (field, gander) => {
    formik.setFieldValue("gander", gander);
  };

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
    getMe();
    checkForCameraRollPermission();
  }, []);

  return (
    <SettingsProvider
      value={{
        formik,
        pickImageLibrary,
        pickFromCamera,
        PickGender,
        errors,
        cam,
        showCam,
        setshowCam,
        loading,
        setloading,
      }}
    >
          <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : ""}
        style={{ flex: 1 }}
      >
        
      {showCam.isPreview && formik.values.photo.src !== "" && (
        <Preview Context={SettingsContext} />
      )}
      {showCam.isOpen && <CostumCamera Context={SettingsContext} />}
      <MenuButton
        isBack={true}
        btnColor={colors.text}
        navigation={navigation}
        title={"Einstellungen"}
        isRight={true}
        isTrans={showCam.isOpen === true}
      />
      <ScrollView style={{ backgroundColor: colors.bg }}>
        <View style={styles.step1Root}>
          <ImageHandler />
          <SexeHandler />
          <InfoInputs />
          <TouchableOpacity
            style={styles.next}
            onPress={() => formik.handleSubmit()}
          >
            <Text style={styles.nextText}>Speichern</Text>
            <FontAwesome5
              name="save"
              size={17}
              color="#fff"
              style={{ marginTop: 3 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SettingsProvider>
  );
}

const InfoInputs = () => {
  const { formik, errors } = useContext(SettingsContext);

  return (
    <View style={{ display: "flex" }}>
  
        <TextInput
          label="Name *"
          style={styles.input}
          theme={theme}
          disabled={true}
          onChangeText={formik.handleChange("lastName")}
          value={formik.values.lastName}
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
          visible={errors.lastName !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.lastName}
        </HelperText>
        <TextInput
          label="Vorname *"
          style={styles.input}
          theme={theme}
          disabled={true}
          onChangeText={formik.handleChange("firstName")}
          value={formik.values.firstName}
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
          visible={errors.firstName !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.firstName}
        </HelperText>
        <TextInput
          label="Postleitzahl *"
          onChangeText={formik.handleChange("zipcode")}
          value={formik.values.zipcode}
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
          visible={errors.zipcode !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.zipcode}
        </HelperText>
        <TextInput
          label="Wohnort *"
          onChangeText={formik.handleChange("address")}
          value={formik.values.address}
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
          visible={errors.address !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.address}
        </HelperText>
        {/* <TextInput
          label="Telefonnummer *"
          onChangeText={formik.handleChange("phone")}
          value={formik.values.phone}
          mode="outlined"
          keyboardType="number-pad"
          theme={theme}
          // disabled={true}
          activeOutlineColor={colors.primary}
          outlineColor="rgba(0,0,0,0.2)"
          style={styles.input}
          selectionColor={colors.primary}
          left={<TextInput.Icon name="plus" color={colors.primary} size={20} />}
        />
        <HelperText
          type="error"
          visible={errors.phone !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.phone}
        </HelperText> */}
      <TouchableOpacity
        style={styles.section}
        onPress={() =>
          formik.setFieldValue("notification", !formik.values.notification)
        }
      >
        <Checkbox
          style={styles.checkbox}
          value={formik.values.notification}
          color={colors.primary}
        />
        <Text style={styles.paragraph}>Benachrichtigungen</Text>
      </TouchableOpacity>
    </View>
  );
};

const SexeHandler = () => {
  const { errors } = useContext(SettingsContext);

  return (
    <View>
      <GenderInputList Context={SettingsContext} Vname="gander" />
      <HelperText
        type="error"
        visible={errors.gander !== ""}
        style={{ marginBottom: 0 }}
      >
        {errors.gander}
      </HelperText>
    </View>
  );
};

const ImageHandler = () => {
  const { formik } = useContext(SettingsContext);
  const [open, setopen] = useState(false);
  const ref = useRef();
  const HandleClose = () => {
    setopen(false);
  };

  const HandleOpen = () => {
    setopen(true);
  };
  const url = `${BaseURL}${GetFileUrl}/`;

  return (
    <>
      <View style={styles.ImgContainer}>
        <TouchableOpacity style={styles.ImgUpload} onPress={HandleOpen}>
          <View style={styles.avatarCon}>
            <Image
              ref={ref}
              source={
                formik.values.photo.src !== "" &&
                formik.values.photo.src !== "no-photo"
                  ? formik.values.photo.type
                    ? { uri: formik.values.photo.src }
                    : { uri: `${url}${formik.values.photo.src}?${new Date()}` }
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
        </TouchableOpacity>
      </View>
      <ChooseModal
        open={open}
        HandleClose={HandleClose}
        Context={SettingsContext}
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
  paragraph: {
    fontFamily: "Inter_600SemiBold",
    color: colors.text,
    fontSize: windowWidth * 0.04,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    width: windowWidth - 45,
    margin: 15,
  },
  checkbox: {
    marginRight: 10,
    marginTop: 2,
  },
});
