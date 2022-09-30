import { useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect, useContext } from "react";
import axios, { PricesUrl, WeightPricesUrl } from "../../tools/Apis";
import { PricesProvider, UserContext } from "../../tools/Context";
import ClaculatePrice from "./ClaculatePrice";
import Prices from "./Prices";

const Stack = createStackNavigator();

export default function PricesStack() {
  const [priceData, setpriceData] = useState(null);
  const [ActivePrice, setActivePrice] = useState(-1);

  const ShowPriceInfo = (index) => {
    setActivePrice(index);
  };
  const ClosePriceInfo = () => {
    setActivePrice(-1);
  };
  // useEffect(() => {
  //   setpriceData({ ...prices });
  // }, []);

  const { setisLoading } = useContext(UserContext);

  const fetchPrices = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(PricesUrl);
      // setpriceData({
      //   // weightPrice: parseInt(wprice?.data?.weigthprice?.weigthPrice ?? "5"),
      //   ...priceData,
      //   categories: [...res.data.data],
      // });
      const wprice = await axios.get(WeightPricesUrl);
      setpriceData({
        categories: [...res.data.data],
        weightPrice: wprice?.data?.weigthprice?.weigthPrice ?? 2.5,
        min: parseInt(wprice?.data?.weigthprice?.min ?? "16"),
        max: parseInt(wprice?.data?.weigthprice?.max ?? "100"),
      });
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      1;
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      fetchPrices();
    }, [])
  );

  return !priceData ? null : (
    <PricesProvider
      value={{
        priceData,
        ActivePrice,
        ShowPriceInfo,
        ClosePriceInfo,
        setpriceData,
      }}
    >
      <Stack.Navigator initialRouteName="PreiseCheck">
        <Stack.Screen
          name="PreiseCheck"
          component={Prices}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CalculatePrice"
          component={ClaculatePrice}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </PricesProvider>
  );
}

export const prices = {
  weightPrice: 2.5,
  categories: [
    {
      Cname: "Kategorie A",
      price: "2.5",
      desc: "Es sind Sendungen von geringerem Wert, deren Inhalt pauschalverzollt wird und keiner separaten ZollAnmelden bedürfen, für diese gilt ein Basispreis von 2.50€ /kg. Es sind in der Regel gebrauchte Artikel von geringerem Wert und in haushaltsüblichen Mengen.",
      subName: "Gebrauch Gegenstände ohne besonderen Wert",
    },
    {
      Cname: "Kategorie B",
      price: "",
      desc: "Es sind Sendungen mit Handelswaren für kommerzielle Zwecke, bei denen der Inhalt und Anzahl der Artikel, weitgehend die haushaltsüblichen Mengen überschreiten. Hier wird der aktuell zum Zeitpunkt der Abgabe der Sendung üblichen Marktpreis ermittelt, und auf Grundlage dessen werden die Transportkosten berechnet. Gegen eine Bearbeitungsgebühr in Höhe von 30,00€ führen wir auf Wunsch des Absenders und in seinem Auftrag die Verzollung seiner Sendung separat durch",
      subName: "Handelswaren auf Anfrage",
    },
    {
      Cname: "Kategorie C",
      price: "",
      desc: "Preis auf Anfrage Bei Elektroartikeln und Sendungen mit besonderem Wert und vor allem mit fragilem Inhalt sind hier für die Ermittlung von Transportkosten drei Faktoren maßgeblich: Zustand, Wert und Volumen des Artikels und ob es sich um ein fragiles und zerbrechliches Gut handelt, das eine besondere Behandlung erfordert. Unter dieser Kategorie fallen z.B. Smart-TV",
      subName: "Elektroartikel",
    },
    {
      Cname: "Kategorie D",
      price: "",
      desc: "Preis auf Anfrage Der Preis hier setzt sich aus drei Faktoren zusammen: Volumen, Gewicht und Wert der zu transportierenden Gegenstände. Hier wird ein schriftliches Angebot mit allen Details zur Abwicklung und Durchführung des Transportauftrages erstellt",
      subName: "Umzüge",
    },
  ],
};
