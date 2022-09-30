import { useFocusEffect } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";
import { colors, windowWidth } from "../../assets/colors";
import axios, { AGBUrl } from "../../tools/Apis";
import { UserContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";

export default function AGB({ navigation, withHeader }) {
  const [AgbData, setAgbData] = useState([]);
  const { setisLoading } = useContext(UserContext);

  const fetchAgbs = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(AGBUrl);
      setAgbData([...res.data.agb]);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
  };

  // useEffect(() => {
  //   // setAgbData([...defaultAgb]);
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchAgbs();
    }, [])
  );

  return (
    <>
      {withHeader ? null : (
        <MenuButton
          title="AGB´s der KAL&ROK GmbH"
          navigation={navigation}
          isBack={true}
          btnColor={colors.text}
        />
      )}

      <ScrollView>
        {AgbData.map((elem, index) => (
          <AgbDisplay key={index} data={elem} Aindex={index} />
        ))}
      </ScrollView>
    </>
  );
}

const AgbDisplay = ({ data, Aindex }) => {
  return (
    <List.Accordion
      title={`${data.title}`}
      titleStyle={styles.title}
      style={styles.acord}
      theme={{ colors: { background: "#FFFFFF" } }}
      titleNumberOfLines={10}
    >
      <View style={styles.root}>
        {/* <Text style={styles.title}>
      {data.title}
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
  acord: {
    backgroundColor: colors.bg,
    margin: 8,
    borderRadius: 8,
    elevation: 2,
  },
});

export const defaultAgb = [
  {
    title: "Geltungsbereich",
    desc: "nachstehende allgemeine Geschäftsbedingungen regeln das Vertragsverhältnis zwischen dem Transport-und Logistikdienstleister, KAL&ROK GmbH, als Auftragnehmer und seinen Kunden, kurz Absender bzw. Auftraggeber genannt. Und sofern nichts Abweichendes vereinbart wurde, gelten die nachstehend formulierten AGB’s. Mit der Erteilung des Auftrags erklärt sich der Auftraggeber mit diesen Bedingungen einverstanden. ",
  },
  {
    title: "Angebot und Vertragsschluss: ",
    desc: "Ein Vertrag kommt dadurch zustande, wenn der Auftraggeber die Auftragsbestätigung unterzeichnet. Lediglich schriftliche Angebote des Auftragnehmers sind bindend, telefonische oder Angebote per E-Mail sind nicht bindend. ",
  },
  {
    title: "Form von Erklärungen:",
    desc: "Rechtserhebliche Erklärungen und Anzeigen, die der Auftraggeber gegenüber dem Auftragnehmer oder einem Dritten abzugeben hat, bedürfen der Schriftform.",
  },
  {
    title: "Verpackungsbedingungen",
    desc: "Eine sichere Verpackung ist für alle Sendungen unabhängig vom Inhalt unerlässlich, außer für Gegenstände, die sich unverpackt befördert lassen.     Die Verpackung muss so beschaffen sein, dass sie dem Inhalt der Sendung genügend Schutz bietet, und vor Verlust oder Beschädigung schützt.     Aus Rücksicht auf die Gesundheit unserer Mitarbeiter ist eine besondere Kennzeichnung der Pakete mit einem Gewicht von über 20 Kg erforderlich.    Flaschen und Behälter mit flüssigem Inhalt müssen eine Dichtigkeit aufweisen, sodass ein Austritten der Flüssigkeit ausgeschlossen sein muss. Somit wird verhindert, dass Sendungen anderer Kunden beschädigt oder beschmiert werden. ",
  },
  {
    title: "Unfreier Versand:",
    desc: "Sendungen können unfrei zum Versend abgegeben werden und die Zahlung des Entgelts wird beim Empfänger geltend gemacht. Verweigert der Empfänger jedoch die Zahlung und somit auch die Annahme des Paketes, wird das Paket an den Absender zurückgesandt und die Versandkosten werden ihm dann in Rechnung gestellt.",
  },
  {
    title: "Hinweise zum Datenschutz",
    desc: "Angaben des Absenders und Empfängers werden von der KAL&ROK GmbH ausschließlich zur Erfüllung des Transportvertrages und zur Zollabwicklung auf der Grundlage der gesetzlich geltenden Vorschriften genutzt. Im Rahmen dieses Transportvertrages werden diese Angaben den Zollbehörden im Bestimmungsland sowie den kooperierenden Zustellpartnern zur Verfügung gestellt. Eine Übermittlung der Angaben kann in Papier- oder in elektronischer Form erfolgen.",
  },
  {
    title: "Ausschluss und Verbotsgüter:",
    desc: "Der Absender ist verpflichtet bei der Abgabe seiner Sendung zu klären, ob es sich bei dem Inhalt der abgegebenen Sendung um die nachstehend näher   bestimmten Verbotsgüter handelt:     Pakete, deren Inhalt, Beförderung oder Lagerung gegen ein gesetzliches oder behördliches Verbot, insbesondere gegen Ein-, Ausfuhr oder zollrechtliche Bestimmungen des Einlieferungs-, Durchgangs- oder Bestimmungslandes verstoßen. Hierzu gehören auch \n Pakete bzw. Güter, deren Beförderung nach dem Weltpostvertrag nicht zugelassen ist.     \n Pakete mit temperaturgeführtem Gut, dessen Beförderung besondere Einrichtungen, Sicherheitsvorkehrungen oder Genehmigungen erfordern.     \n Pakete, deren Inhalt auch bei gewöhnlichem Transportverlauf Sachschäden verursachen oder Personen verletzen könnten.     \n Pakete mit lebenden Tieren, Tierkadavern, Körperteilen oder sterblichen Überresten von Menschen.     \n Pakete, die Betäubungs-, Rauschmittel oder verbotene Substanze enthalten.     \n Pakete, die Geld, Edelmetalle, Schecks, Kreditkarten, gültige Briefmarken, Wertpapiere oder andere Zahlungsmittel enthalten.     \n Pakete, deren Inhalt gegen gesetzliche Vorschriften zum Schutz geistigen Eigentums verstößt, einschließlich gefälschter oder nicht lizenzierter Kopien von Produkten (Markenpiraterie aller Arten).     \n Pakete, die Waffen, insbesondere Schusswaffen, oder Teile davon, Waffenimitate oder Munition enthalten.     Die KAL&ROK GmbH ist zwar zur Prüfung der \n Pakete auf das Vorliegen von Beförderungsausschlüssen nicht verpflichtet; jedoch ist sie bei Verdacht auf solche Ausschlüsse zur Öffnung und Überprüfung der \n Pakete berechtigt. Der Absender ist und bleibt Eigentümer der Sendung und folgerichtig verantwortlich für den Inhalt seiner Sendung.     Eine Kündigung des Beförderungsvertrages durch den Absender nach Abgabe der Sendung in die Obhut der KAL&ROK GmbH ist ausgeschlossen. ",
  },
  {
    title: "Geltungsbereich",
    desc: "nachstehende allgemeine Geschäftsbedingungen regeln das Vertragsverhältnis zwischen dem Transport-und Logistikdienstleister, KAL&ROK GmbH, als Auftragnehmer und seinen Kunden, kurz Absender bzw. Auftraggeber genannt. Und sofern nichts Abweichendes vereinbart wurde, gelten die nachstehend formulierten AGB’s. Mit der Erteilung des Auftrags erklärt sich der Auftraggeber mit diesen Bedingungen einverstanden. ",
  },
  {
    title: "Geltungsbereich",
    desc: "nachstehende allgemeine Geschäftsbedingungen regeln das Vertragsverhältnis zwischen dem Transport-und Logistikdienstleister, KAL&ROK GmbH, als Auftragnehmer und seinen Kunden, kurz Absender bzw. Auftraggeber genannt. Und sofern nichts Abweichendes vereinbart wurde, gelten die nachstehend formulierten AGB’s. Mit der Erteilung des Auftrags erklärt sich der Auftraggeber mit diesen Bedingungen einverstanden. ",
  },
  {
    title: "Geltungsbereich",
    desc: "nachstehende allgemeine Geschäftsbedingungen regeln das Vertragsverhältnis zwischen dem Transport-und Logistikdienstleister, KAL&ROK GmbH, als Auftragnehmer und seinen Kunden, kurz Absender bzw. Auftraggeber genannt. Und sofern nichts Abweichendes vereinbart wurde, gelten die nachstehend formulierten AGB’s. Mit der Erteilung des Auftrags erklärt sich der Auftraggeber mit diesen Bedingungen einverstanden. ",
  },
  {
    title: "Geltungsbereich",
    desc: "nachstehende allgemeine Geschäftsbedingungen regeln das Vertragsverhältnis zwischen dem Transport-und Logistikdienstleister, KAL&ROK GmbH, als Auftragnehmer und seinen Kunden, kurz Absender bzw. Auftraggeber genannt. Und sofern nichts Abweichendes vereinbart wurde, gelten die nachstehend formulierten AGB’s. Mit der Erteilung des Auftrags erklärt sich der Auftraggeber mit diesen Bedingungen einverstanden. ",
  },
  {
    title: "Geltungsbereich",
    desc: "nachstehende allgemeine Geschäftsbedingungen regeln das Vertragsverhältnis zwischen dem Transport-und Logistikdienstleister, KAL&ROK GmbH, als Auftragnehmer und seinen Kunden, kurz Absender bzw. Auftraggeber genannt. Und sofern nichts Abweichendes vereinbart wurde, gelten die nachstehend formulierten AGB’s. Mit der Erteilung des Auftrags erklärt sich der Auftraggeber mit diesen Bedingungen einverstanden. ",
  },
];
