import { Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import React, { useContext } from "react";
import {
  ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View
} from "react-native";
import { colors, windowHeight, windowWidth } from "../assets/colors";
export default function CostumCamera({ Context }) {
  const { cam, showCam } = useContext(Context);
  
  return (
    <>
      <Camera type={showCam.type} style={styles.cam} ref={cam} />
      <Buttons Context={Context} />
    </>
  );
}

export const Preview = ({ Context }) => {
  const { formik, setshowCam, showCam, sendFileMessage, isSend } =
    useContext(Context);

  const Save = () => {
    if (sendFileMessage) sendFileMessage(formik.values.photo, "image");
    setshowCam({ ...showCam, isPreview: false });
  };

  const Retry = () => {
    setshowCam({ ...showCam, isPreview: false, isOpen: true });
    formik.setFieldValue("photo", { src: "" });
  };

  return (
    <View style={styles.preview}>
      <Image
        source={{ uri: formik.values.photo.src }}
        style={styles.previewImg}
        resizeMode="contain"
      />
      <View
        style={{
          ...styles.contain,
          flexDirection: "row",
          justifyContent: "center",
          bottom: 0,
          height: 50,
        }}
      >
        <TouchableOpacity style={styles.touchbtn} onPress={Save}>
          <Text style={styles.touchtxt}>{isSend ? "senden" : "Save"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchbtn} onPress={Retry}>
          <Text style={styles.touchtxt}>neues Bild</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Buttons = ({ Context }) => {
  const { cam, showCam, pickFromCamera, loading, setshowCam } =
    useContext(Context);

  const SwitchCamera = () => {
    if (showCam.type === Camera.Constants.Type.back)
      setshowCam({ ...showCam, type: Camera.Constants.Type.front });
    else setshowCam({ ...showCam, type: Camera.Constants.Type.back });
  };

  const CloseCam = () => {
    setshowCam({ ...showCam, isOpen: false });
  };
  return (
    <>
      <TouchableOpacity
        onPress={SwitchCamera}
        disabled={loading === true}
        style={styles.switch}
      >
        <Ionicons name="camera-reverse-outline" size={35} color={colors.bg} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={CloseCam}
        disabled={loading === true}
        style={styles.close}
      >
        <Ionicons name="close" size={35} color={colors.bg} />
      </TouchableOpacity>
      <View style={styles.contain}>
        <TouchableOpacity
          onPress={pickFromCamera}
          disabled={loading === true}
          style={styles.press}
        >
          {loading && <ActivityIndicator size={30} color={colors.primary} />}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contain: {
    position: "absolute",
    flex: 1,
    alignItems: "center",
    zIndex: 1001,
    width: "100%",
    height: 120,
    bottom: 15,
    // backgroundColor: "red",
  },
  touchbtn: {
    flexGrow: 1,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.transBg,
  },
  touchtxt: {
    color: colors.bg,
    textAlign: "center",
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: "Manrope_800ExtraBold",
  },
  preview: {
    position: "absolute",
    flex: 1,
    alignItems: "center",
    zIndex: 1001,
    width: windowWidth,
    height: "100%",
    backgroundColor: "black",
    // bottom: 15,
  },
  previewImg: {
    width: windowWidth,
    height: windowHeight,
  },
  cam: {
    flex: 1,
    width: windowWidth,
    height: "100%",
    position: "absolute",
    zIndex: 1000,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  switch: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 1001,
  },
  close: {
    position: "absolute",
    left: 10,
    top: 10,
    zIndex: 1001,
  },
  press: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
