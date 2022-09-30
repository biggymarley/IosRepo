import { useFocusEffect } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";
import { colors, windowWidth } from "../../assets/colors";
import axios, { RolesUrl } from "../../tools/Apis";
import { UserContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";
export default function Privacy({ navigation }) {
  const [PrivacyData, setPrivacyData] = useState([]);

  const { setisLoading } = useContext(UserContext);
  const fetchRoles = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(RolesUrl);
      if (res.data.count === 0) setPrivacyData([]);
      else setPrivacyData([...res.data.data]);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      //console.log("error", error.response.data.error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchRoles();
    }, [])
  );

  return (
    <>
      <MenuButton
        title="Datenschutzerklärung der KAL&ROK GmbH"
        textSize={windowWidth * .035}
        navigation={navigation}
        isBack={true}
        btnColor={colors.text}
      />
      <ScrollView>
        {PrivacyData.map((elem, index) => (
          <PrivacyDisplay key={index} data={elem} Aindex={index} />
        ))}
      </ScrollView>
    </>
  );
}

const PrivacyDisplay = ({ data, Aindex }) => {
  return (
    <List.Accordion
      title={`${Aindex + 1} - ${data.name}`}
      titleStyle={styles.title}
      style={styles.acord}
      theme={{ colors: { background: "#FFFFFF" } }}
      titleNumberOfLines={10}
    >
      <View style={styles.root}>
        {data?.roles &&
          data?.roles.map((elem, index) => (
            <View key={index} style={{ margin: 5, backgroundColor: colors.bg }}>
              <Text style={styles.subtitle}>- {elem.title}</Text>
              <Text style={styles.desc}>{elem.description}</Text>
            </View>
          ))}
      </View>
    </List.Accordion>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontFamily: "Inter_500Medium",
    color: colors.text,
    fontSize: windowWidth * 0.036,
  },
  root: {
    marginHorizontal: 15,
    // elevation:3
  },
  title: {
    fontFamily: "Manrope_500Medium",
    fontSize: windowWidth * 0.038,
    color: colors.primary,
    // textTransform:'capitalize'
  },
  desc: {
    fontFamily: "Inter_300Light",
    fontSize: windowWidth * 0.035,
  },
  acord: {
    backgroundColor: colors.bg,
    margin: 8,
    borderRadius: 8,
    elevation: 2,
  },
});
export const defaultPrivacy = [
  {
    title: "Datenschutz auf einen Blick",
    items: [
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle:
          "Wer ist verantwortlich für die Datenerfassung auf dieser Website?",
        desc: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.",
      },
      {
        itemTitle: "Wie erfassen wir Ihre Daten?",
        desc: "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.",
      },
      {
        itemTitle: "Wofür nutzen wir Ihre Daten?",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.",
      },
    ],
  },
  {
    title: "Hosting",
    items: [
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
    ],
  },
  {
    title: "Allgemeine Hinweise und Pflicht­informationen",
    items: [
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
    ],
  },
  {
    title: "Datenerfassung auf dieser Website",
    items: [
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
    ],
  },
  {
    title: "Plugins und Tools ",
    items: [
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
      {
        itemTitle: "Allgemeine Hinweise",
        desc: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung. Datenerfassung auf dieser Website ",
      },
    ],
  },
];
