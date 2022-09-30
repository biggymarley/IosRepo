import { useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import axios, { ToursUrl, UpdateUserValues } from "../../tools/Apis";
import { UserContext, UserTourProvider } from "../../tools/Context";
import SubscribeToCity from "./SubscribetoCity";
import SubscribeToNurm from "./SubscribeToNurm";
import SubscribeToTour from "./SubscribeToTour";
import Tours from "./Tours";
import UserTour from "./UserTour";

const Stack = createStackNavigator();

export default function TourStack({ navigation }) {
  const [TourData, setTourData] = useState({ cities: [] });
  const [tourId, setTourId] = useState("");
  const { setisLoading, userData, IsLogged, setuserData } =
    useContext(UserContext);

  const GetTour = async () => {
    try {
      // if ((await userData.tour?._id) == null)
      //   navigation.navigate("SubscribeToTour");
      // else {
      setisLoading(true);
      const res = await axios.get(`${ToursUrl}/${userData?.tour?._id}`, {
        headers: {
          Authorization: `Bearer ${IsLogged.token}`,
        },
      });
      setTourData({ ...res.data.data });
      setTourId(userData?.tour?._id);
      setisLoading(false);
      // }
    } catch (error) {
      setisLoading(false);
    }
  };

  const SubTotour = async () => {
    try {
      setisLoading(true);
      const res = await axios.put(
        UpdateUserValues,
        {
          tour: tourId,
        },
        {
          headers: {
            Authorization: `Bearer ${IsLogged.token}`,
          },
        }
      );
      setuserData({ ...res.data.data });
      const tour = await axios.get(`${ToursUrl}/${tourId}`, {
        headers: {
          Authorization: `Bearer ${IsLogged.token}`,
        },
      });
      setTourData({ ...tour.data.data });
      setTourId("");
      setisLoading(false);
      navigation.navigate("KAL&ROK on Tour", { screen: "SubscribeToCity" });
    } catch (error) {
      setisLoading(false);
      Alert.alert("error", "please retry");
      //console.log(error.response.data);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      GetTour();
    }, [userData])
  );

  return (
    <UserTourProvider value={{ TourData, tourId, setTourId, SubTotour }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Tours"
          component={Tours}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserTour"
          component={UserTour}
          options={{
            headerShown: false,
          }}
        />
        {userData.cityId === null ? (
          <Stack.Screen
            name="SubscribeToCity"
            component={SubscribeToCity}
            options={{
              headerShown: false,
            }}
          />
        ) : null}

        <Stack.Screen
          name="SubscribeToTour"
          component={SubscribeToTour}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SubscribeToNurm"
          component={SubscribeToNurm}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </UserTourProvider>
  );
}
