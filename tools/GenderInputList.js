import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../assets/colors";

export const GenderInputList = ({ Context, Vname }) => {
  const { formik, PickGender } = useContext(Context);

  return (
    <View style={styles.list}>
      <Text style={styles.title}>Anrede *</Text>
      {formik.values[Vname] && formik.values[Vname] !== "male" ? (
        <MaterialCommunityIcons
          name="gender-female"
          size={22}
          color={colors.primary}
          style={styles.genderIcon}
        />
      ) : (
        <MaterialCommunityIcons
          name="gender-male"
          size={22}
          color={colors.primary}
          style={styles.genderIcon}
        />
      )}

      <Picker
        selectedValue={formik.values[Vname] ?? "male"}
        
        onValueChange={(itemValue, itemIndex) => PickGender(Vname, itemValue)}
        style={{ marginLeft: 30 }}
      >
        <Picker.Item label="Herr" value="male" />
        <Picker.Item label="Frau" value="female" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0, 0 , 0 , .2)",
    height: 58,
    padding: 0,
    backgroundColor: "#FFF",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    top: -10.5,
    left: 10.5,
    position: "absolute",
    backgroundColor: "white",
    color: "rgba(0,0,0,.5)",
    paddingHorizontal: 3,
    fontSize: 13,
    marginBottom: 15,
    zIndex: 5,
  },
  genderIcon: {
    // top: 29,
    // bottom:0,
    left: 10,
    position: "absolute",
  },
});
