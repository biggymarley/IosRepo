import { Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import React, { useContext } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../assets/colors";
export const ChooseModal = ({ open, HandleClose, Context }) => {
  const { formik, pickImageLibrary, pickFromCamera, setshowCam, showCam, cam } =
    useContext(Context);

  const FromLibrary = () => {
    pickImageLibrary();
    HandleClose();
  };

  const FromCamera = async () => {
    setshowCam({ type: Camera.Constants.Type.front, isOpen: true });
    HandleClose();
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={HandleClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        
          <TouchableOpacity onPress={FromCamera} style={styles.touch}>
            <View style={styles.view}>
              <Ionicons
                name="ios-camera-outline"
                size={25}
                color={colors.bg}
                style={{ marginRight: 20 }}
              />
              <Text style={styles.text}>Foto machen</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={FromLibrary}
            style={{ borderBottomWidth: 1, borderColor: colors.transBg }}
          >
            <View style={styles.view}>
              <Ionicons
                name="md-images-outline"
                size={25}
                color={colors.bg}
                style={{ marginRight: 20 }}
              />
              <Text style={styles.text}>Aus der Bibliothek auswählen</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={HandleClose}>
            <Ionicons
              name="md-chevron-down"
              size={24}
              color={colors.bg}
              style={{ alignSelf: "center" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  login: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  text: {
    fontFamily: "Manrope_800ExtraBold",
    fontSize: 16,
    color: colors.bg,
  },
  view: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  touch: {
    borderBottomWidth: 1,
    borderColor: colors.transBg,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: colors.primary,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 5,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginTop: 15,
    marginBottom: 20,
  },
});

export default ChooseModal;
