import { useFocusEffect } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";
import { colors, windowWidth } from "../../assets/colors";
import axios, { ImpUrl } from "../../tools/Apis";
import { UserContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";

export default function Impressum({ navigation }) {
  const [ImpressumData, setImpressumData] = useState([]);
  const { setisLoading } = useContext(UserContext);
  const fetchImpressums = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(ImpUrl);
      if (res.data.count === 0) setImpressumData([...defaultImpressum]);
      else setImpressumData([...res.data.impre]);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      //console.log("error", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchImpressums();
    }, [])
  );

  return (
    <>
      <MenuButton
        title="Impressum´s der KAL&ROK GmbH"
        navigation={navigation}
        isBack={true}
        btnColor={colors.text}
      />
      <ScrollView>
        {ImpressumData.map((elem, index) => (
          <ImpressumDisplay key={index} data={elem} Aindex={index} />
        ))}
      </ScrollView>
    </>
  );
}

const ImpressumDisplay = ({ data, Aindex }) => {
  return (
    <List.Accordion
    title={`${Aindex + 1} - ${data.title}`}
    titleStyle={styles.title}
    style={styles.acord}
    theme={{ colors: { background: "#FFFFFF" } }}
    titleNumberOfLines={10}
  >
    <View style={styles.root}>
      {/* <Text style={styles.title}>
        {Aindex + 1} - {data.title}
      </Text> */}
      <Text style={styles.desc}>{data.description}</Text>
    </View>
    </List.Accordion>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 15,
  },
  title: {
    fontFamily: "Manrope_500Medium",
    fontSize: windowWidth * 0.038,
    color: colors.primary,
    // textTransform:'capitalize'
  },
  desc: {
    fontFamily: "Inter_300Light",
    fontSize: 16,
  },
});

export const defaultImpressum = [
  {
    title: "Angaben gemäß §5 TMG",
    description:
      "KAL & ROK GmbH\nAbdelhafid El Kouzoudi\nLeopoldstraße 11a\n90439 Nürnberg\nSteuer ID: DE344144227",
  },
  {
    title: "Kontakt",
    description: "Telefon: 0911 / 25391310\nE-Mail: info@kal-rok.de",
  },
  {
    title: "Verbraucherstreitbeilegung/Universalschlichtungsstelle",
    description:
      "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer\nVerbraucherschlichtungsstelle teilzunehmen.",
  },
];
