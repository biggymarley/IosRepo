import { useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useState } from "react";
import { mandPng } from "../../assets/IconFactory";
import axios, { RatingUrl, ReviewsUrl } from "../../tools/Apis";
import { ReviewsProvider, UserContext } from "../../tools/Context";
import AddReview from "./AddReview";
import Reviews from "./Reviews";

const Stack = createStackNavigator();

export default function ReviewsStack() {
  const [ReviewsData, setReviews] = useState({ reviews: [] });
  const [StarsData, setStarsData] = useState({
    avrageRating: 5.0,
    length: 100,
    result: {
      fiveStar: 0,
      fourStar: 0,
      oneStar: 0,
      threeStar: 0,
      twoStar: 0,
    },
  });
  const { IsLogged, setisLoading } = useContext(UserContext);
  const Getads = async () => {
    try {
      setisLoading(true);
      const rating = await axios.get(`${RatingUrl}`, {
        headers: {
          Authorization: `Bearer ${IsLogged.token}`,
        },
      });
      setStarsData({ ...rating.data });
      const allReviews = await axios.get(`${ReviewsUrl}`);
      console.log(allReviews?.data?.data)
      // const activeReviews = allReviews.data.data.filter((e) => e.valid === true);
      setReviews({ reviews: [...allReviews?.data?.data?.reverse() ?? []] });
      setisLoading(false);
    } catch (error) {
      setisLoading(false);

      //console.log(error.response.data);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      Getads();
    }, [])
  );

  return (
    <ReviewsProvider value={{ ReviewsData, StarsData }}>
      <Stack.Navigator initialRouteName="Reviews">
        <Stack.Screen
          name="Reviews"
          component={Reviews}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddReview"
          component={AddReview}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </ReviewsProvider>
  );
}

const default_stars = {
  total: 30,
  starsScore: [
    {
      label: "5 star",
      prog: 90,
    },
    {
      label: "4 star",
      prog: 40,
    },
    {
      label: "3 star",
      prog: 10,
    },
    {
      label: "2 star",
      prog: 2,
    },
    {
      label: "1 star",
      prog: 1,
    },
  ],
};
const default_reviews = {
  total: 6,
  reviews: [
    {
      name: "user name",
      date: "14 jan 2022 9:41 AM",
      comment:
        "Ea laboris aliqua cillum ipsum aute ipsum veniam adipisicing. Nisi commodo ut ad ex laborum. Ea laboris aliqua cillum ipsum aute ipsum veniam adipisicing. Nisi commodo ut ad ex laborum.",
      stars: 5,
      pic: mandPng,
    },
    {
      name: "user name",
      date: "14 jan 2022 9:41 AM",
      comment:
        "Ea laboris aliqua cillum ipsum aute ipsum veniam adipisicing. Nisi commodo ut ad ex laborum.",
      stars: 2,
      pic: mandPng,
    },
    {
      name: "user name",
      date: "14 jan 2022 9:41 AM",
      comment:
        "Ea laboris aliqua cillum ipsum aute ipsum veniam adipisicing. Nisi commodo ut ad ex laborum.",
      stars: 5,
      pic: mandPng,
    },
    {
      name: "user name",
      date: "14 jan 2022 9:41 AM",
      comment:
        "Ea laboris aliqua cillum ipsum aute ipsum veniam adipisicing. Nisi commodo ut ad ex laborum.",
      stars: 5,
      pic: mandPng,
    },
    {
      name: "user name",
      date: "14 jan 2022 9:41 AM",
      comment:
        "Ea laboris aliqua cillum ipsum aute ipsum veniam adipisicing. Nisi commodo ut ad ex laborum.",
      stars: 4,
      pic: mandPng,
    },
    {
      name: "user name",
      date: "14 jan 2022 9:41 AM",
      comment:
        "Ea laboris aliqua cillum ipsum aute ipsum veniam adipisicing. Nisi commodo ut ad ex laborum.",
      stars: 5,
      pic: mandPng,
    },
  ],
};
