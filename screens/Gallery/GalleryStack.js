import { useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import { logoBlack, tourGif, VideoLogin } from "../../assets/IconFactory";
import axios, { GalleryUrl } from "../../tools/Apis";
import { GalleryProvider, UserContext } from "../../tools/Context";
import Gallery from "./Gallery";
import InfoDisplay from "./InfoDisplay";

const Stack = createStackNavigator();

export default function GalleryStack() {
  const [Imgs, setImgs] = useState([]);
  const [ImgIndex, setImgIndex] = useState(-1);
  const { setisLoading, isLoading } = useContext(UserContext);

  const IndexingImg = (index, navigation) => {
    setImgIndex(index);
    navigation.navigate("InfoDisplay");
  };

  const CloseInfo = (index) => {
    setImgIndex(-1);
  };


  const GetGallery = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(GalleryUrl);
      setImgs([...res.data.gallery]);
      setisLoading(false);
    } catch (error) {
      setisLoading(false);
      Alert.alert("error", "Server Error");
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      GetGallery();
    }, [])
  );

  return (
    <GalleryProvider value={{ Imgs, IndexingImg, ImgIndex }}>
      <Stack.Navigator initialRouteName="Gallery">
        <Stack.Screen
          name="Gallery"
          component={Gallery}
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
    </GalleryProvider>
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
