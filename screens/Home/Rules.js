import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import LottieView from "lottie-react-native";
import React, { useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { colors, windowHeight, windowWidth } from "../../assets/colors";
import { checklist } from "../../assets/IconFactory";
import { UserContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";
export default function Rules({ navigation }) {
  const { SetRules, CloseRules, rules } = useContext(UserContext);
  return (
    <>
      <MenuButton
        isClose={true}
        btnColor={colors.text}
        navigation={navigation}
        title={"Rechtliches"}
        isTrans={false}
        rightBtn={<CloseButton CloseRules={CloseRules}/>}
      />
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
        <AGBrules />
      </ScrollView>
      <TouchableOpacity
        style={{
          ...styles.next,
          ...((rules.role1 === false || rules.role2 === false) && {
            backgroundColor: "grey",
          }),
        }}
        onPress={SetRules}
        disabled={rules.role1 === false || rules.role2 === false}
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

const CloseButton = ({CloseRules}) => {
  return (
    <TouchableOpacity onPress={CloseRules}>
      <AntDesign name="closecircleo" size={25} color="#000000af" />
    </TouchableOpacity>
  );
};

const AGBrules = () => {
  const { setRules, CloseRules, rules, setrules } = useContext(UserContext);

  return (
    <>
      <TouchableOpacity
        style={styles.section}
        onPress={() => setrules({ ...rules, role1: !rules.role1 })}
      >
        <Checkbox
          style={styles.checkbox}
          value={rules.role1}
          color={colors.primary}
        />
        <Text style={styles.paragraph}>
          Ich habe die AGB´s, die Datenschutzbestimmungen und die
          Nutzungsbedinungen der mobilen App der KAL&ROK GmbH gelesen und ich
          stemme diesen ausdrücklich zu.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.section}
        onPress={() => setrules({ ...rules, role2: !rules.role2 })}
      >
        <Checkbox
          style={styles.checkbox}
          value={rules.role2}
          color={colors.primary}
        />
        <Text style={styles.paragraph}>
          Ich möchte über anstehende Touren, Angebote und Termine für Fahrten
          benachrichtigt werden. Ich kann diese Einwilligung jederzeit
          widerrufen, indem ich diese Option desaktiviere.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.section}
        onPress={() =>
          setrules({ ...rules, notification: !rules.notification })
        }
      >
        <Checkbox
          style={styles.checkbox}
          value={rules.notification}
          color={colors.primary}
        />
        <Text style={styles.paragraph}>Benachrichtigungen</Text>
      </TouchableOpacity>
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
