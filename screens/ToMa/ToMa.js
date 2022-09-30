import { createStackNavigator } from "@react-navigation/stack";
import * as ImagePicker from "expo-image-picker";
import { useFormik } from "formik";
import React, { useContext, useRef, useState } from "react";
import { Alert } from "react-native";
import axios from "../../tools/Apis";
import { ToMaProvider, UserContext } from "../../tools/Context";
import { ToMaValidation } from "../../tools/Validation";
import Done from "./Done";
// import Done from "./Done";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
// import Step3 from "./Step3";
// import Step4 from "./Step4";

const Stack = createStackNavigator();

export default function ToMaScreen() {
  const { IsLogged } = useContext(UserContext);
  const [loading, setloading] = useState(false);
  const [showCam, setshowCam] = useState({ type: {}, isOpen: false });
  const cam = useRef({});
  const [errors, seterrors] = useState({
    gender: "",
    firstname: "",
    lastname: "",
    postcode: "",
    adress: "",
    phone: "",
  });
  const formik = useFormik({
    initialValues: {
      dgender: "male",
      dfirstname: "",
      dlastname: "",
      dpostcode: "",
      dadress: " ",
      dphone: "",
      mgender: "male",
      mfirstname: "",
      mlastname: "",
      madress: "",
      mphone: "212",
      numItems: "1",
      type: 1,
      payment: 1,
    },
    validationSchema: ToMaValidation,
    onSubmit: (values) => {
      // //console.log(JSON.stringify(values, null, 2));
    },
  });

  const pickImageLibrary = async () => {
    setloading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [2, 2],
      quality: 1,
    });
    if (!result.cancelled) {
      formik.setFieldValue("pic", result.uri);
    }
    setloading(false);
  };

  const ChooseType = (type) => {
    formik.setFieldValue("type", type);
  };
  const ChoosePayment = (payment) => {
    formik.setFieldValue("payment", payment);
  };

  const PickGender = (field, gender) => {
    formik.setFieldValue(field, gender);
  };

  const VerifyPersonal = async (func) => {
    try {
      setloading(true);
      const values = [
        "dgender",
        "dfirstname",
        "dlastname",
        "dpostcode",
        "dadress",
        "dphone",
      ];
      const res = await formik.validateForm();
      let verified = {};
      Object.entries(res).map((e) => {
        if (values.includes(e[0])) verified = { ...verified, [e[0]]: e[1] };
      });
      seterrors(verified);
      if (Object.entries(verified).length === 0) func.navigate("ToursSubs");
      setloading(false);
    } catch (error) {
      setloading(false);
      Alert.alert("error", "error");
    }
  };

  const VerifyMoroko = async (func) => {
    try {
      setloading(true);
      const values = [
        "mgender",
        "mfirstname",
        "mlastname",
        "madress",
        "cin",
        "mphone",
        "type",
        "payment",
        "numItems",
      ];
      const res = await formik.validateForm();
      let verified = {};
      Object.entries(res).map((e) => {
        if (values.includes(e[0])) verified = { ...verified, [e[0]]: e[1] };
      });
      seterrors(verified);
      if (Object.entries(verified).length === 0) func.navigate("Rules");
      setloading(false);
    } catch (error) {
      setloading(false);
      Alert.alert("error", "error");
    }
  };

  const CreateOrder = async () => {
    try {
      const data = {
        tripGroup: "A",
        recipient: {
          firstName: formik.values.mfirstname,
          lastName: formik.values.mlastname,
          phone: formik.values.mphone,
          address: formik.values.madress,
        },
        numofpackages: formik.values.numItems,
        wights: 20,
        type: formik.values.type,
        payment: formik.values.payment,
      };
      // setisLoading(true);
      const res = await axios.post("/api/v1/commands", data, {
        headers: {
          Authorization: `Bearer ${IsLogged.token}`,
        },
      });

      // setisLoading(false);
    } catch (error) {
      Alert.alert(
        "Error",
        error?.response?.data?.error ?? "Server Error Please Retry Later !"
      );
    }
  };

  return (
    <ToMaProvider
      value={{
        formik,
        pickImageLibrary,
        PickGender,
        VerifyPersonal,
        errors,
        cam,
        showCam,
        setshowCam,
        loading,
        setloading,
        VerifyMoroko,
        ChooseType,
        ChoosePayment,
        CreateOrder,
      }}
    >
      <Stack.Navigator>
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
          name="ToursSubs"
          component={Step3}
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
      </Stack.Navigator>
    </ToMaProvider>
  );
}
