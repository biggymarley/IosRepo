import { useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import { logoBlack, tourGif, VideoLogin } from "../../assets/IconFactory";
import axios, { InfosUrl } from "../../tools/Apis";
import { InfosProvider, UserContext } from "../../tools/Context";
import InfoDisplay from "./InfoDisplay";
import Infos from "./Infos";

const Stack = createStackNavigator();

export default function InfosStack() {
  const [Imgs, setImgs] = useState([]);
  const [JustText, setJustText] = useState([]);
  const [ImgIndex, setImgIndex] = useState(-1);
  const { setisLoading, isLoading } = useContext(UserContext);

  const IndexingImg = (index, navigation) => {
    setImgIndex(index);
    navigation.navigate("InfoDisplay");
  };

  const CloseInfo = (index) => {
    setImgIndex(-1);
  };

  // useEffect(() => {
  //   setisLoading(true);
  //   setImgs([...itemData]);
  //   setTimeout(() => {
  //     setisLoading(false);
  //   }, 5000);

  //   return () => null;
  // }, []);

  const GetInfos = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(InfosUrl);
      const textData = res.data.info.filter((e) => e.media.length === 0);
      const ImgsData = res.data.info.filter((e) => (e) => e.media.length > 0);
      setImgs([...ImgsData]);
      setJustText([...textData]);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      Alert.alert("error", "Server Error");
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      GetInfos();
    }, [])
  );

  return (
    <InfosProvider value={{ Imgs, IndexingImg, ImgIndex, JustText }}>
      <Stack.Navigator initialRouteName="InfosScreen">
        <Stack.Screen
          name="InfosScreen"
          component={Infos}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="InfoDisplay"
          component={InfoDisplay}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </InfosProvider>
  );
}

export const itemData = [
  {
    imgs: [
      {
        src: VideoLogin,
        type: "video/mp4",
      },
      {
        src: logoBlack,
        type: "img",
      },
      {
        src: VideoLogin,
        type: "video/mp4",
      },
      {
        src: tourGif,
        type: "img",
      },
    ],
    title: "Hello",
    desc: "Officia laborum ut proident mollit veniam minim deserunt do amet officia do nisi non.",
  },
  {
    imgs: [
      {
        src: tourGif,
        type: "img",
      },
      {
        src: logoBlack,
        type: "img",
      },
    ],
    title: "Breakfast",
    desc: "Officia laborum ut proident mollit veniam minim deserunt do amet officia do nisi non.",
  },
  {
    imgs: [
      {
        src: tourGif,
        type: "img",
      },
      {
        src: logoBlack,
        type: "img",
      },
    ],
    title: "Breakfast",
    desc: "Officia laborum ut proident mollit veniam minim deserunt do amet officia do nisi non.",
  },
  {
    imgs: [
      {
        src: logoBlack,
        type: "img",
      },
      {
        src: VideoLogin,
        type: "video/mp4",
      },
      {
        src: VideoLogin,
        type: "video/mp4",
      },
      {
        src: tourGif,
        type: "img",
      },
    ],
    title: "Hello",
    desc: "Officia laborum ut proident mollit veniam minim deserunt do amet officia do nisi non.",
  },
  // {
  //   imgs: [
  //     {
  //       src: logoBlack,
  //       type: "img",
  //     },
  //     {
  //       src: VideoLogin,
  //       type: "video/mp4",
  //     },
  //     {
  //       src: VideoLogin,
  //       type: "video/mp4",
  //     },
  //     {
  //       src: tourGif,
  //       type: "img",
  //     },
  //   ],
  //   title: "Hello",
  //   desc: "Officia laborum ut proident mollit veniam minim deserunt do amet officia do nisi non.",
  // },
  // {
  //   imgs: [
  //     {
  //       src: logoBlack,
  //       type: "img",
  //     },
  //     {
  //       src: VideoLogin,
  //       type: "video/mp4",
  //     },
  //     {
  //       src: VideoLogin,
  //       type: "video/mp4",
  //     },
  //     {
  //       src: tourGif,
  //       type: "img",
  //     },
  //   ],
  //   title: "Hello",
  //   desc: "Officia laborum ut proident mollit veniam minim deserunt do amet officia do nisi non.",
  // },
  // {
  //   imgs: [
  //     {
  //       src: logoBlack,
  //       type: "img",
  //     },
  //     {
  //       src: VideoLogin,
  //       type: "video/mp4",
  //     },
  //     {
  //       src: VideoLogin,
  //       type: "video/mp4",
  //     },
  //     {
  //       src: tourGif,
  //       type: "img",
  //     },
  //   ],
  //   title: "Hello",
  //   desc: "Officia laborum ut proident mollit veniam minim deserunt do amet officia do nisi non.",
  // },

  // {
  //   imgs: [
  //     {
  //       src: logoBlack,
  //       type: "img",
  //     },
  //     {
  //       src: VideoLogin,
  //       type: "video/mp4",
  //     },
  //     {
  //       src: VideoLogin,
  //       type: "video/mp4",
  //     },
  //     {
  //       src: tourGif,
  //       type: "img",
  //     },
  //   ],
  //   title: "Hello",
  //   desc: "Officia laborum ut proident mollit veniam minim deserunt do amet officia do nisi non.",
  // },
  // {
  //   imgs: [
  //     {
  //       src: logoBlack,
  //       type: "img",
  //     },
  //     {
  //       src: VideoLogin,
  //       type: "video/mp4",
  //     },
  //     {
  //       src: VideoLogin,
  //       type: "video/mp4",
  //     },
  //     {
  //       src: tourGif,
  //       type: "img",
  //     },
  //   ],
  //   title: "Hello",
  //   desc: "Officia laborum ut proident mollit veniam minim deserunt do amet officia do nisi non.",
  // },
];
