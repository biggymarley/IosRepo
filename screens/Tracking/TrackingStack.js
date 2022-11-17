import { useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useState } from "react";
import {
  step1Png,
  step2Png,
  step3Png,
  step4Png,
  step5Png,
  step6Png,
  step7Png,
} from "../../assets/IconFactory";
import axios, { MyCommandUrl } from "../../tools/Apis";
import { TrackingProvider, UserContext } from "../../tools/Context";
import FromMa from "./FromMa";
import GetStarted from "./GetStarted";
import NoTrack from "./NoTrack";
import OneStep from "./OneStep";
import TrackInfos from "./TrackInfos";

const Stack = createStackNavigator();

export default function TrackingStack({ navigation }) {
  const [status, setstatus] = useState({ finish: false });
  const [history, setHistory] = useState([]);

  const { setisLoading, IsLogged } = useContext(UserContext);

  const fetchTracking = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(MyCommandUrl, {
        headers: {
          Authorization: `Bearer ${IsLogged.token}`,
        },
      });
      const command = res.data.data.filter((e) => e.history === false)[0] ?? {};
      setstatus({ ...command });
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchTracking();
    }, [])
  );

  return (
    <TrackingProvider value={{ status, steps, history }}>
      <Stack.Navigator>
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TrackInfos"
          component={TrackInfos}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NoTrack"
          component={NoTrack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FromMa"
          component={FromMa}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SingleStep"
          component={OneStep}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="History"
          component={History}
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack.Navigator>
    </TrackingProvider>
  );
}

const steps = [
  {
    icon: step1Png,
    name: {
      gr: "-Sendungsabgabe in der filiale.",
      fr: "-Dépôt de colis dans la filiale.     ",
      ar: "         - إ يـداع الأرسـاليا ت في الـوكــالـة .",
    },
    status: 2, //0: not yet arrived to it , 1: is active, 2: pass it
  },
  {
    icon: step2Png,
    name: {
      gr: "-Verladung der sendungen.",
      fr: "-Embarquement de colis.     ",
      ar: "                             - شحن الإرساليات .",
    },
    status: 2,
  },
  {
    icon: step3Png,
    name: {
      gr: "-Durchfahrt durch Frankreich.",
      fr: "-Traversée en France                      ",
      ar: "                             -في الطـريـق عبر فرنسا .",
    },
    status: 1,
  },
  {
    icon: step4Png,
    name: {
      gr: "-Durchfahrt durch Spanien.",
      fr: "-Traversée en Espagne.          ",
      ar: "                     -في الطـريـق عبر إسبانيا .",
    },
    status: 0,
  },
  {
    icon: step5Png,
    name: {
      gr: "-Zollabfertigung der Sendungen.",
      fr: "-Dédouanement de colis.                    ",
      ar: "                    -التخليص الجمركي للإرساليات .",
    },
    status: 0,
  },
  {
    icon: step6Png,
    name: {
      gr: "-Verteilung der Sendungen in Marokko läuft.    ",
      fr: "-Colis sont en cours de distrubition au Maroc. ",
      ar: "                                   -الإرساليات في طور التوزيع في المغرب .",
    },
    status: 0,
  },
  {
    icon: step7Png,
    name: {
      gr: "-Zustellung der Sendungen läuft.",
      fr: "-Livraison de colis est en cours.     ",
      ar: "  -الإرساليات في طور التسليم في المغرب .",
    },
    status: 0,
  },
];
