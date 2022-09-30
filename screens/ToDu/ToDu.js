import { createStackNavigator } from "@react-navigation/stack";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import { useFormik } from "formik";
import { useContext, useRef, useState } from "react";
import { Alert } from "react-native";
import axios, { BaseURL } from "../../tools/Apis";
import { ToDuProvider, UserContext } from "../../tools/Context";
import { ToDuValidation } from "../../tools/Validation";
import Done from "./Done";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import UploadId from "./UploadId";

const Stack = createStackNavigator();

export default function ToDuScreen() {
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
    cin: "",
  });
  const formik = useFormik({
    initialValues: {
      dgender: "male",
      dfirstname: "",
      dlastname: "",
      dpostcode: "",
      dadress: "",
      dphone: "49",
      mgender: "male",
      mfirstname: "",
      mlastname: "",
      mpostcode: "",
      madress: "",
      mphone: "212",
      mfaceId: "",
      mbackId: "",
      numItems: "1",
      cin: "",
      type: 1,
      payment: 1,
    },
    validationSchema: ToDuValidation,
    onSubmit: (values) => {
      // //console.log(JSON.stringify(values, null, 2));
    },
  });

  const pickImageLibrary = async (field) => {
    setloading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      // aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      formik.setFieldValue(field, result.uri);
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
        "mphone",
        "type",
        "payment",
        "cin",
        "numItems",
      ];
      const res = await formik.validateForm();
      let verified = {};
      Object.entries(res).map((e) => {
        if (values.includes(e[0])) verified = { ...verified, [e[0]]: e[1] };
      });
      seterrors(verified);
      if (Object.entries(verified).length === 0) func.navigate("UploadId");
      setloading(false);
    } catch (error) {
      setloading(false);
      Alert.alert("error", "error");
    }
  };
  const deleteId = (name) => {
    if (name === formik.values.mfaceId) formik.setFieldValue("mfaceId", "");
    else formik.setFieldValue("mbackId", "");
  };

  const UpdatePhoto = async (src, fieldName, id) => {
    try {
      // setisLoading(true);
      await FileSystem.uploadAsync(`${BaseURL}/api/v1/commands/${id}`, src, {
        headers: {
          Authorization: `Bearer ${IsLogged.token}`,
        },
        httpMethod: "PUT",
        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
        fieldName: fieldName,
        // mimeType: formik.values.photo.type,
      });
      // setisLoading(false);
    } catch (error) {
      // setisLoading(false);
    }
  };

  const CreateOrder = async () => {
    try {
      const data = {
        tripGroup: "B",
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
        cincode: formik.values.cin,
      };
      // setisLoading(true);
      const res = await axios.post("/api/v1/commands", data, {
        headers: {
          Authorization: `Bearer ${IsLogged.token}`,
        },
      });
      if (res?.data?.data) {
        await UpdatePhoto(
          formik.values.mfaceId,
          "frontId",
          res.data.data._id
        );
        await UpdatePhoto(
          formik.values.mbackId,
          "backId",
          res.data.data._id
        );
      }

      // setisLoading(false);
    } catch (error) {
      Alert.alert(
        "Error",
        error?.response?.data?.error ?? "Server Error Please Retry Later !"
      );
    }
  };

  return (
    <ToDuProvider
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
        deleteId,
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
          name="UploadId"
          component={UploadId}
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
    </ToDuProvider>
  );
}
