import { useFocusEffect } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";
import { colors, windowWidth } from "../../assets/colors";
import axios, { FaqsUrl } from "../../tools/Apis";
import { UserContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";

export default function FAQ({ navigation }) {
  const [FaqData, setFaqData] = useState([]);

  const { setisLoading } = useContext(UserContext);

  const fetchFaqs = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(FaqsUrl);
      setFaqData([...res.data.data]);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      //console.log(error.response.data.error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchFaqs();
    }, [])
  );

  return (
    <>
      <MenuButton
        title="FAQs der KAL&ROK GmbH"
        navigation={navigation}
        isBack={true}
        btnColor={colors.text}
      />
      <ScrollView>
        {FaqData.map((elem, index) => (
          <FaqDisplay key={index} data={elem} Aindex={index} />
        ))}
      </ScrollView>
    </>
  );
}

const FaqDisplay = ({ data, Aindex }) => {
  return (
    <List.Accordion
      title={`${Aindex + 1} - ${data.quation}`}
      titleStyle={styles.title}
      style={styles.acord}
      theme={{ colors: { background: "#FFFFFF" } }}
      titleNumberOfLines={10}
    >
      <View style={styles.root}>
        {/* <Text style={styles.title}>
          {Aindex + 1} - {data.quation}
        </Text> */}
        <Text style={styles.desc}>- {data.answer}</Text>
      </View>
    </List.Accordion>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 16,
  },
  acord:{
    backgroundColor: colors.bg,
    margin: 8,
    borderRadius: 8,
    elevation:2
  }
});

export const defaultFaq = [
  {
    title: "Geschäftsbedingungen regeln das Vertragsverhältnis ?",
    desc: "nachstehende allgemeine Geschäftsbedingungen regeln das Vertragsverhältnis zwischen dem Transport-und Logist",
  },
  {
    title: "Geschäftsbedingungen regeln das Vertragsverhältnis ?",
    desc: "nachstehende allgemeine Geschäftsbedingungen regeln das Vertragsverhältnis zwischen dem Transport-und Logist",
  },
  {
    title: "Geschäftsbedingungen regeln das Vertragsverhältnis ?",
    desc: "nachstehende allgemeine Geschäftsbedingungen regeln das Vertragsverhältnis zwischen dem Transport-und Logist",
  },
  {
    title: "Geschäftsbedingungen regeln das Vertragsverhältnis ?",
    desc: "nachstehende allgemeine Geschäftsbedingungen regeln das Vertragsverhältnis zwischen dem Transport-und Logist",
  },
  {
    title: "Geschäftsbedingungen regeln das Vertragsverhältnis ?",
    desc: "nachstehende allgemeine Geschäftsbedingungen regeln das Vertragsverhältnis zwischen dem Transport-und Logist",
  },
  {
    title: "Geschäftsbedingungen regeln das Vertragsverhältnis ?",
    desc: "nachstehende allgemeine Geschäftsbedingungen regeln das Vertragsverhältnis zwischen dem Transport-und Logist",
  },
];
