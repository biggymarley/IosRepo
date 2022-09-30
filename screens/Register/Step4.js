import { Feather, FontAwesome5 } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import LottieView from "lottie-react-native";
import React, { useContext, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { colors, windowHeight, windowWidth } from "../../assets/colors";
import { checklist } from "../../assets/IconFactory";
import { RegisterContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";
import AGB from "../AGB/AGB";
export default function Step4({ navigation }) {
  const { formik, CreateUser } = useContext(RegisterContext);
  const [openAgb, setopenAgb] = useState(false);
  const CreateAndDone = async () => {
    CreateUser();
    navigation.navigate("Done");
  };
  return (
    <>
      <MenuButton
        isBack={true}
        btnColor={colors.text}
        navigation={navigation}
        title={"Rechtliches"}
        isTrans={false}
        backFunc={() => setopenAgb(false)}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={openAgb}
        onRequestClose={() => setopenAgb(false)}
      >
        <View style={{ flex: 1 }}>
          <MenuButton
            isBack={true}
            btnColor={colors.text}
            navigation={navigation}
            backFunc={() => setopenAgb(false)}
            title={"AGB"}
            isTrans={false}
          />
          <AGB withHeader={true} />
        </View>
      </Modal>
      <ScrollView>
        <View style={styles.cont}>
          <LottieView
            source={checklist}
            speed={0.5}
            resizeMode="contain"
            autoPlay={true}
            loop={true}
            style={{ height: "100%", width: windowWidth }}
          />
        </View>
        <AGBrules setopenAgb={setopenAgb} openAgb={openAgb} />
      </ScrollView>
      <TouchableOpacity
        style={{
          ...styles.next,
          ...((formik.values.role1 === false ||
            formik.values.role2 === false) && {
            backgroundColor: "grey",
          }),
        }}
        onPress={CreateAndDone}
        disabled={
          formik.values.role1 === false || formik.values.role2 === false
        }
      >
        <Text style={styles.nextText}>Abschicken</Text>
        <FontAwesome5
          name="angle-right"
          size={17}
          color="#fff"
          style={{ marginTop: 3 }}
        />
      </TouchableOpacity>
    </>
  );
}

const AGBrules = ({ setopenAgb, openAgb }) => {
  const { formik } = useContext(RegisterContext);

  return (
    <>
      <View style={styles.section}>
        <Checkbox
          onValueChange={() =>
            formik.setFieldValue("role1", !formik.values.role1)
          }
          style={styles.checkbox}
          value={formik.values.role1}
          color={colors.primary}
        />
        <View>
          <Text style={styles.paragraph}>
            Ich habe die AGB´s, die Datenschutzbestimmungen und die
            Nutzungsbedinungen der mobilen App der KAL&ROK GmbH gelesen und ich
            stemme diesen ausdrücklich zu.
          </Text>
          <TouchableOpacity
            onPress={() => setopenAgb(!openAgb)}
            style={{
              display: "flex",
              alignSelf: "flex-end",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                ...styles.paragraph,
                marginRight: 8,
                color: colors.primary,
              }}
            >
              AGB
            </Text>
            <Feather name="external-link" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Checkbox
          onValueChange={() =>
            formik.setFieldValue("role2", !formik.values.role2)
          }
          style={styles.checkbox}
          value={formik.values.role2}
          color={colors.primary}
        />
        <Text style={styles.paragraph}>
          Ich möchte über anstehende Touren, Angebote und Termine für Fahrten
          benachrichtigt werden. Ich kann diese Einwilligung jederzeit
          widerrufen, indem ich diese Option desaktiviere.
        </Text>
      </View>
      <View style={styles.section}>
        <Checkbox
          onValueChange={() =>
            formik.setFieldValue("notification", !formik.values.notification)
          }
          style={styles.checkbox}
          value={formik.values.notification}
          color={colors.primary}
        />
        <Text style={styles.paragraph}>Benachrichtigungen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cont: {
    display: "flex",
    alignItems: "center",
    margin: 15,
    height: windowHeight * 0.3,
    overflow: "hidden",
    borderRadius: 12,
    // backgroundColor: colors.primaryTrans,
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
  next: {
    backgroundColor: colors.primary,
    margin: 10,
    marginTop: "auto",
    marginBottom: 10,
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
