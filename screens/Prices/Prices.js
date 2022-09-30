import React, { useContext } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { colors } from "../../assets/colors";
import { calculatorColored } from "../../assets/IconFactory";
import { PricesContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";
import PricesModal from "./PricesModal";

export default function Prices({ navigation }) {

  return (
    <>
      <MenuButton
        btnColor={colors.text}
        navigation={navigation}
        // isBack={true}
        title="Preise & Leistungen"
        rightBtn={<CalculateIcon navigation={navigation} />}
      />
      <ScrollView>
        <View style={styles.root}>
          <Text style={styles.desc}>
            Mindestbetrag, unabhängig vom Volumen und Gewicht, beträgt 40€
          </Text>
          <Text style={styles.subdesc}>
            ACHTUNG: Bei Sendungen, deren Gewicht zu keinem Verhältnis zum
            Volumen der Verpackung steht, behält sich die KAL&ROK das Recht vor,
            einen angemessenen Aufpreis zu erheben.
          </Text>
          <Text style={styles.title}>- Preiskategorien :</Text>
          <PricesMap />
        </View>
      </ScrollView>
      <PricesModal />
    </>
  );
}

const CalculateIcon = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("CalculatePrice")}>
      <Image
        source={calculatorColored}
        style={{ width: 25, height: 25 }}
        resizeMode="contain"
      />

      {/* <MaterialCommunityIcons name="calculator" size={25} color={colors.text} /> */}
    </TouchableOpacity>
  );
};

const PricesMap = () => {
  const { priceData } = useContext(PricesContext);
  if (priceData && priceData.categories)
    return priceData.categories.map((cat, index) => (
      <PriceCard cat={cat} key={index} cindex={index} />
    ));
  else return null;
};

const PriceCard = ({ cat, cindex }) => {
  const { ShowPriceInfo } = useContext(PricesContext);
  return (
    <TouchableOpacity
      style={styles.cardPrice}
      onPress={() => ShowPriceInfo(cindex)}
    >
      <View>
        <Text style={styles.Cname}>{cat.Cname}</Text>
        <Text style={styles.subName}>{cat.subName}</Text>
        {cat.price !== "" && <Text style={styles.price}>{cat.price}€/Kg</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 15,
    flex: 1,
  },
  desc: {
    fontFamily: "Inter_500Medium",
    color: colors.text,
    lineHeight: 25,
    fontSize: 16,
    marginBottom: 15,
    // textAlign: "center",
  },
  price: {
    fontFamily: "Manrope_800ExtraBold",
    color: colors.bg,
    position: "absolute",
    right: 0,
    fontSize: 15,
  },
  Cname: {
    fontFamily: "Inter_900Black",
    color: colors.bg,
    fontSize: 15,
    marginBottom: 5,
    // textAlign: "center",
  },
  subName: {
    fontFamily: "Manrope_500Medium",
    color: colors.bg,
    fontSize: 14,
    // textAlign: "center",
  },
  subdesc: {
    fontFamily: "Inter_300Light",
    color: colors.text,
    lineHeight: 25,
    fontSize: 14,
    marginBottom: 15,
    // textAlign: "center",
  },
  title: {
    fontFamily: "Manrope_800ExtraBold",
    color: colors.text,
    fontSize: 20,
    marginBottom: 15,
  },
  cardPrice: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: colors.primary,
    padding: 10,
    minHeight: 100,
    // backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 10,
  },
});
