import { useFocusEffect } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  BackHandler,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { colors, windowWidth } from "../../assets/colors";
import { CalcPng } from "../../assets/IconFactory";
import axios, { WeightPricesUrl } from "../../tools/Apis";
import { PricesContext, UserContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";
import SlideRuler from "../../tools/SlideRuler";

const stepwidth = 19.13;

export default function ClaculatePrice({ navigation }) {
  const { priceData, setpriceData } = useContext(PricesContext);
  const { setisLoading } = useContext(UserContext);
  const [dataCheck, setdataCheck] = useState(null);
  const [weight, setweight] = useState(1);
  const [price, setprice] = useState(40);
  const [width, setwidth] = useState(100);
  const [steps, setsteps] = useState(200);
  const fetchPrices = async () => {
    try {
      setisLoading(true);
      const wprice = await axios.get(WeightPricesUrl);
      setpriceData({
        ...priceData,
        weightPrice: wprice?.data?.weigthprice?.weigthPrice || 2.5,
        min: parseInt(wprice?.data?.weigthprice?.min || "16"),
        max: parseInt(wprice?.data?.weigthprice?.max || "100"),
      });

      setprice(wprice?.data?.weigthprice?.weigthPrice || 40);
      setsteps(wprice?.data?.weigthprice?.max || 100);
      setwidth(parseInt(stepwidth * (wprice?.data?.weigthprice?.max || 100)));
      setdataCheck({ ...wprice });
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
  };

  const HandlePrice = (weight) => {
    setweight(weight);
    if (weight < (priceData?.min || 16))
      setprice(16 * (priceData?.weightPrice || 2.5));
    else setprice(weight * (priceData?.weightPrice || 2.5));
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchPrices();
      const onBackPress = () => {
        navigation.navigate("Preise");
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  return !dataCheck ? null : (
    <View style={{ flex: 1 }}>
      <MenuButton
        isBack={true}
        btnColor={colors.text}
        navigation={navigation}
        title={"Preisrechner"}
        isRight={true}
      />
      <ScrollView>
        <View style={styles.root}>
          <Text style={styles.infos}>
            - Preisrechner ist nur für Sendungen der Preiskategorie A anwendbar.
          </Text>
          <Text style={styles.infos}>
            - Mindestbetrag unabhängig vom Gewicht, Volumen oder Inhalt beträgt
            40€
          </Text>
          <Text style={styles.infos}>
            - Bei Sendungen, deren Verpackung zu keinem Verhältnis zum Gewicht
            steht, könnte ein Volumenzuschlag erhoben werden.
          </Text>
          <View style={styles.imgContainer}>
            <Image
              source={CalcPng}
              style={styles.balance}
              resizeMode="contain"
            />
            <Text style={styles.price}>{price}€</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "auto",
              marginBottom: "auto",
              width: "100%",
              flex: 1,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "40%",
                justifyContent: "center",
              }}
            >
              <Text style={styles.priceDisplay}>{weight}</Text>
              <Text style={styles.kg}>Kg</Text>
            </View>
            <Text style={{ ...styles.priceDisplay, color: colors.primary }}>
              =
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "40%",
                justifyContent: "center",
              }}
            >
              <Text style={styles.priceDisplay}>{price}</Text>
              <Text style={styles.kg}>€</Text>
            </View>
          </View>
          <SlideRuler
            HandlePrice={HandlePrice}
            weight={weight}
            width={width}
            steps={steps}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 15,
  },
  balance: { width: "100%", height: "100%" },
  imgContainer: {
    position: "relative",
    width: "90%",
    height: windowWidth * 0.8,
  },
  price: {
    position: "absolute",
    top: "4%",
    right: "27%",
    color: colors.bg,
    fontSize: windowWidth * 0.035,
    fontFamily: "Manrope_800ExtraBold",
  },
  priceDisplay: {
    fontFamily: "Manrope_800ExtraBold",
    color: colors.text,
    textAlign: "center",
    marginHorizontal: 2,
    fontSize: 40,
  },
  euro: {
    fontFamily: "Manrope_800ExtraBold",
    color: colors.secondary,
    textAlign: "center",
    opacity: 0.5,
    fontSize: 20,
    alignSelf: "flex-start",
  },
  kg: {
    fontFamily: "Manrope_800ExtraBold",
    color: colors.primary,
    textAlign: "center",
    opacity: 0.5,
    fontSize: 20,
    alignSelf: "flex-end",
  },
  infos: {
    fontFamily: "Manrope_600SemiBold",
    color: colors.text,
    textAlign: "left",
    alignSelf: "flex-start",
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
