import { createStackNavigator } from "@react-navigation/stack";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { useFormik } from "formik";
import React, { useContext, useRef, useState } from "react";
import { Alert } from "react-native";
import axios, {
  BaseURL,
  CheckNumUrl,
  RegisterUrl,
  UpdateUserPhotoUrl
} from "../../tools/Apis";
import {
  RegisterProvider,
  UserContext
} from "../../tools/Context";
import { PersonalValidation } from "../../tools/Validation";
import VerifyAccount from "../../tools/VerifyAccount";
import Done from "./Done";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step4 from "./Step4";
import WelcomStep from "./WelcomStep";
const Stack = createStackNavigator();

export default function Register() {
  const { setisLoading } = useContext(UserContext);
  const [loading, setloading] = useState(false);
  const [showCam, setshowCam] = useState({
    type: {},
    isOpen: false,
    isPreview: false,
  });
  const cam = useRef({});
  const [errors, seterrors] = useState({
    photo: "",
    gender: "",
    firstname: "",
    lastname: "",
    postcode: "",
    adress: "",
    phone: "",
    password: "",
    tour: "",
  });
  const formik = useFormik({
    initialValues: {
      photo: { src: "" },
      gender: "male",
      firstname: "",
      lastname: "",
      postcode: "",
      adress: "",
      phone: "49",
      password: "",
      isVisible: false,
      tour: "",
      role1: true,
      role2: true,
      notification: true,
    },
    validationSchema: PersonalValidation,
    onSubmit: (values) => {
      // //console.log(JSON.stringify(values, null, 2));
    },
  });

  const CreateUser = async () => {
    const data = {
      firstName: formik.values.firstname,
      lastName: formik.values.lastname,
      address: formik.values.adress,
      phone: formik.values.phone,
      zipcode: formik.values.postcode.trim(),
      gander: formik.values.gender,
      password: formik.values.password,
      // tour: formik.values.tour,
      role1: formik.values.role1,
      role2: formik.values.role2,
      notification: formik.values.notification,
    };
    try {
      setisLoading(true);
      const res = await axios.post(RegisterUrl, data);
      const token = res.data.token;
      if (formik.values.photo.src && formik.values.photo.src !== "") {
        await FileSystem.uploadAsync(
          `${BaseURL}${UpdateUserPhotoUrl}`,
          formik.values.photo.src,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            httpMethod: "PUT",
            uploadType: FileSystem.FileSystemUploadType.MULTIPART,
            fieldName: "file",
            mimeType: formik.values.photo.type,
          }
        );
      }
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      Alert.alert(
        "Error",
        error?.response?.data?.error ?? "Server Error Please Retry Later !"
      );
    }
  };

  const pickImageLibrary = async () => {
    // setloading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
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
      formik.setFieldValue("photo", source);
    }
    // setloading(false);
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

        const source = {
          name: filename,
          type: type,
          src: result.uri,
        };
        formik.setFieldValue("photo", source);
      }
      setshowCam({ ...showCam, isOpen: false, isPreview: true });
      setloading(false);
    } catch (error) {
      setloading(false);
      Alert.alert("error", "error");
    }
  };

  const PickGender = (field, gender) => {
    formik.setFieldValue("gender", gender);
  };

  const PickTour = (name) => {
    if (name === formik.values.tour) formik.setFieldValue("tour", "");
    else formik.setFieldValue("tour", name);
  };

  const VerifyPersonal = async (func) => {
    try {
      setloading(true);
      let res = await formik.validateForm({
        ...formik.values,
        postcode: formik.values.postcode.trim(),
      });
      if (!res.phone) {
        const checkPhone = await axios.post(CheckNumUrl, {
          phone: formik.values.phone,
        });
        if (checkPhone?.data?.exists === true)
          res = { ...res, phone: "Phone number already taken" };
      }
      seterrors(res);
      if (Object.entries(res).length === 0) func.navigate("Rules");
      setloading(false);
    } catch (error) {
      setloading(false);
      Alert.alert("error", "error");
    }
  };

  return (
    <RegisterProvider
      value={{
        formik,
        pickImageLibrary,
        pickFromCamera,
        PickGender,
        PickTour,
        VerifyPersonal,
        errors,
        cam,
        showCam,
        setshowCam,
        loading,
        setloading,
        CreateUser,
      }}
    >
      <Stack.Navigator>
      <Stack.Screen
          name="welcome"
          component={WelcomStep}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="getStarted"
          component={Step1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Personal"
          component={Step2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Rules"
          component={Step4}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Done"
          component={Done}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Vaccount"
          // component={VerifyAccount}
          options={{
            headerShown: false,
          }}
        >
          {(props) => (
            <VerifyAccount
              {...props}
              password={formik.values.password}
              phone={formik.values.phone}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </RegisterProvider>
  );
}
