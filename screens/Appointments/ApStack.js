import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useState } from "react";
import axios, { ApUrl } from "../../tools/Apis";
import { AppointmentsProvider, UserContext } from "../../tools/Context";
import Appointments from "./Appointments";
import ApToDu from "./ApToDu";
import ApToMa from "./ApToMa";
import FInalAnim from "./FInalAnim";
import RoadHandler from "./RoadHandler";

const Stack = createStackNavigator();

export default function AppointmentsStack({ navigation }) {
  const [apData, setapData] = useState({ ...default_appointments });

  const { setisLoading } = useContext(UserContext);

  const fetchAps = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(ApUrl);
      setapData({ ...(res.data.appointment ?? default_appointments) });
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      ;
    }
  };

 

  return (
    <AppointmentsProvider value={{ apData , setapData, fetchAps}}>
      <Stack.Navigator initialRouteName="Appointments">
        <Stack.Screen
          name="Appointments"
          component={Appointments}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ApToMa"
          component={ApToMa}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ApToDu"
          component={ApToDu}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RoadHandler"
          component={RoadHandler}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="FInalAnim"
          component={FInalAnim}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </AppointmentsProvider>
  );
}

const default_appointments = {
  ToMa: "mid-january",
  ToDu: "mid-summer",
};
