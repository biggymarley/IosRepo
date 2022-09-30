import { FontAwesome5 } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import Checkbox from "expo-checkbox";
import * as ImagePicker from "expo-image-picker";
import React, { useContext, useEffect } from "react";
import {
  ActivityIndicator,
  Alert, KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import { colors, theme, windowWidth } from "../../assets/colors";
import { ToDuContext, UserContext } from "../../tools/Context";
import { GenderInputList } from "../../tools/GenderInputList";
import MenuButton from "../../tools/MenuButton";

export default function Step3({ navigation }) {
  const { formik, VerifyMoroko, cam, showCam, pickFromCamera, loading } =
    useContext(ToDuContext);
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
      {showCam.isOpen && (
        <>
          <Camera
            type={showCam.type}
            style={{
              flex: 1,
              // width: "100%",
              width: windowWidth,
              height: "100%",
              position: "absolute",
              zIndex: 1000,
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
            ref={cam}
          />
          <View
            style={{
              position: "absolute",
              flex: 1,
              alignItems: "center",
              zIndex: 1001,
              width: "100%",
              height: 120,
              bottom: 15,
            }}
          >
            <TouchableOpacity
              onPress={pickFromCamera}
              disabled={loading === true}
              style={{
                position: "absolute",
                width: 90,
                height: 90,
                borderRadius: 45,
                backgroundColor: "white",
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {loading && <ActivityIndicator size={45} color="#0000ff" />}
            </TouchableOpacity>
          </View>
        </>
      )}

      <MenuButton
        isBack={true}
        btnColor={colors.text}
        navigation={navigation}
        title={"Angaben des Absenders in Marokko"}
        textSize={14}
        isTrans={showCam.isOpen === true}
      />
      <ScrollView>
        <View style={styles.step1Root}>
          <SexeHandler />
          <InfoInputs />
          <TouchableOpacity
            style={styles.next}
            onPress={() => VerifyMoroko(navigation)}
          >
            <Text style={styles.nextText}>Weiter</Text>
            <FontAwesome5
              name="angle-right"
              size={17}
              color="#fff"
              style={{ marginTop: 3 }}
            />
          </TouchableOpacity>
        </View>
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
          onChangeText={formik.handleChange("mlastname")}
          value={formik.values.mlastname}
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
          visible={errors.mlastname !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.mlastname}
        </HelperText>
        <TextInput
          label="Vorname *"
          style={styles.input}
          theme={theme}
          onChangeText={formik.handleChange("mfirstname")}
          value={formik.values.mfirstname}
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
          visible={errors.mfirstname !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.mfirstname}
        </HelperText>
        <TextInput
          label="Ausweis-Nr. CIN *"
          style={styles.input}
          theme={theme}
          onChangeText={formik.handleChange("cin")}
          value={formik.values.cin}
          mode="outlined"
          keyboardType="default"
          activeOutlineColor={colors.primary}
          outlineColor="rgba(0,0,0,0.2)"
          selectionColor={colors.primary}
          left={
            <TextInput.Icon name="id-card" color={colors.primary} size={20} />
          }
        />
        <HelperText
          type="error"
          visible={errors.cin !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.cin}
        </HelperText>
        <TextInput
          label="Wohnort *"
          onChangeText={formik.handleChange("madress")}
          value={formik.values.madress}
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
          visible={errors.madress !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.madress}
        </HelperText>
        <TextInput
          label="Telefonnummer *"
          onChangeText={formik.handleChange("mphone")}
          value={formik.values.mphone}
          mode="outlined"
          keyboardType="number-pad"
          theme={theme}
          activeOutlineColor={colors.primary}
          outlineColor="rgba(0,0,0,0.2)"
          style={styles.input}
          selectionColor={colors.primary}
          left={
            <TextInput.Icon
              forceTextInputFocus={false}
              name="plus"
              color={colors.primary}
              size={20}
            />
          }
        />
        <HelperText
          type="error"
          visible={errors.mphone !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.mphone}
        </HelperText>
        <TextInput
          label="Anzahl der Sendungen *"
          onChangeText={formik.handleChange("numItems")}
          value={formik.values.numItems}
          mode="outlined"
          keyboardType="number-pad"
          theme={theme}
          activeOutlineColor={colors.primary}
          outlineColor="rgba(0,0,0,0.2)"
          style={styles.input}
          selectionColor={colors.primary}
          left={
            <TextInput.Icon
              forceTextInputFocus={false}
              name="archive"
              color={colors.primary}
              size={20}
              style={{ marginRight: 10 }}
            />
          }
        />
        <HelperText
          type="error"
          visible={errors.numItems !== ""}
          style={{ marginBottom: 0 }}
        >
          {errors.numItems}
        </HelperText>
      <SendingType />
      <PaimentType />
    </View>
  );
};

const SendingType = () => {
  const { formik, ChooseType } = useContext(ToDuContext);
  return (
    <>
       <Text style={styles.title}>- Art der Sendung :</Text>
      <TouchableOpacity style={styles.section} onPress={() => ChooseType(1)}>
        <Checkbox
          style={styles.checkbox}
          value={formik.values.type === 1}
          //   onValueChange={() => ChooseType(1)}
          color={colors.primary}
        />
        <Text style={styles.paragraph}>
          Privatsendung: Inhalt in hausüblichen Mengen und für den Eigenbedarf
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={() => ChooseType(2)}>
        <Checkbox
          style={styles.checkbox}
          value={formik.values.type === 2}
          //   onValueChange={() => ChooseType(2)}
          color={colors.primary}
        />
        <Text style={styles.paragraph}>
          Gewerbliche Sendung: Inhalt ist für kommerzielle Zwecke  bestimmt
        </Text>
      </TouchableOpacity>
    </>
  );
};
const PaimentType = () => {
  const { formik, ChoosePayment } = useContext(ToDuContext);

  return (
    <>
     <Text style={styles.title}>- Zahlungsmodalitäten :</Text>
      <TouchableOpacity style={styles.section} onPress={() => ChoosePayment(1)}>
        <Checkbox
          style={styles.checkbox}
          value={formik.values.payment === 1}
          //   onValueChange={() => ChoosePayment(1)}
          color={colors.primary}
        />
        <Text style={styles.paragraph}>Barzahlung</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={() => ChoosePayment(2)}>
        <Checkbox
          style={styles.checkbox}
          value={formik.values.payment === 2}
          //   onValueChange={() => ChoosePayment(2)}
          color={colors.primary}
        />
        <Text style={styles.paragraph}>Banküberweisung</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={() => ChoosePayment(3)}>
        <Checkbox
          style={styles.checkbox}
          value={formik.values.payment === 3}
          //   onValueChange={() => ChoosePayment(3)}
          color={colors.primary}
        />
        <Text style={styles.paragraph}>Kartenzahlung</Text>
      </TouchableOpacity>
    </>
  );
};

const SexeHandler = () => {
  const { errors } = useContext(ToDuContext);

  return (
    <View>
      <GenderInputList Context={ToDuContext} Vname="mgender" />
      <HelperText
        type="error"
        visible={errors.mgender !== ""}
        style={{ marginBottom: 0 }}
      >
        {errors.mgender}
      </HelperText>
    </View>
  );
};

const styles = StyleSheet.create({
  step1Root: {
    margin: 15,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    width: windowWidth - 45,
    marginBottom: 15,
  },
  checkbox: {
    marginRight: 10,
    marginTop: 2,
  },
  paragraph: {
    fontFamily: "Inter_600SemiBold",
    color: "black",
    fontSize: 15,
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
    fontFamily: "Inter_500Medium",
    color: "#000",
    // opacity: 0.6,
    color: colors.text,
    // textTransform: "capitalize",
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
