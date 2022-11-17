import { Video } from "expo-av";
import * as Linking from "expo-linking";
import React, { useEffect, useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { windowWidth } from "../../assets/colors";
import {
  gifchat,
  gifchat2,
  gifchat3,
  gifchat4,
  gifchat5,
  gifchat6,
  gifchat7,
  gifchat8,
  pdf,
} from "../../assets/IconFactory";
import { BaseURL, GetFileUrl } from "../../tools/Apis";
import AudioPlayer from "./AudioPlayer";
import axios, { FaqsUrl } from "../../tools/Apis";
const Types = {
  image: "image",
  text: "text",
  pdf: "application/pdf",
  video: "video",
  audio: "audio",
  gif: "gif",
  link: "link",
};
export default function MessageHandler({ message }) {
  const [file, setFile] = useState(null);
  const ref = useRef(null);
  const checkIfFinished = async (status) => {
    try {
      if (
        ref?.current &&
        status.positionMillis !== 0 &&
        status.playableDurationMillis === status.positionMillis &&
        !status.isPlaying
      ) {
        await ref.current.setPositionAsync(0);
        await ref.current.pauseAsync();
      }
    } catch (error) {}
  };

  // const getfile = async () => {
  //   try {
  //     const check = await axios.get(
  //       `${BaseURL}${GetFileUrl}/${message.message.content}`
  //     );
  //     console.log(check.data);
  //     setFile(check.data);
  //   } catch (error) {
  //     setFile(null);
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   if (
  //     message.message.type === Types.video ||
  //     message.message.type === Types.audio ||
  //     message.message.type === Types.image
  //   )
  //     getfile();
  // }, [message]);
  // if (
  //   (message.message.type === Types.video ||
  //     message.message.type === Types.audio ||
  //     message.message.type === Types.image) &&
  //   !file
  // )
  //   return null;
  switch (message.message.type) {
    case Types.image:
      return (
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              `${BaseURL}${GetFileUrl}/${message.message.content}`
            )
          }
        >
          <Image
            source={{
              uri: `${BaseURL}${GetFileUrl}/${message.message.content}`,
            }}
            resizeMode="contain"
            style={{ width: windowWidth / 2, height: windowWidth / 2 }}
          />
        </TouchableOpacity>
      );
    case Types.gif:
      return (
        <Image
          source={
            gifs.filter((e) => e.name === message.message.content)?.[0].src
          }
          resizeMode="contain"
          style={{ width: windowWidth / 2, height: windowWidth / 2 }}
        />
      );
    case Types.pdf:
      return (
        <View>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                `${BaseURL}${GetFileUrl}/${message.message.content}`
              )
            }
          >
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <Image
                source={pdf}
                resizeMode="contain"
                style={{ width: 50, height: 50, marginBottom: 10 }}
              />
              <Text>
                {message?.message?.content?.split(".pdf")?.[0] ?? "Pdf"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    case Types.audio:
      return (
        <View style={{ minWidth: windowWidth / 2 }}>
          <AudioPlayer
            uri={{
              uri: `${BaseURL}${GetFileUrl}/${message.message.content}`,
            }}
            noSend={true}
          />
        </View>
      );
    case Types.video:
      return (
        <View>
          {/* <Video
            source={{
              uri: `${BaseURL}${GetFileUrl}/${message.message.content}`,
            }}
            resizeMode="contain"
            style={{ width: windowWidth / 2, height: windowWidth / 2 }}
            isMuted={false}
            isLooping={false}
            useNativeControls={true}
            ref={ref}
            onPlaybackStatusUpdate={(status) => checkIfFinished(status)}
          /> */}
        </View>
      );
    case Types.link: {
      const link =
        message?.message?.content.includes("http://") ||
        message?.message?.content.includes("https://")
          ? message?.message?.content
          : `http://${message?.message?.content}`;
      return (
        <TouchableOpacity onPress={() => Linking.openURL(link)}>
          <Text style={{ color: "blue", textDecorationLine: "underline" }}>
            {message?.message?.content}
          </Text>
        </TouchableOpacity>
      );
    }
    default:
      return (
        <View>
          <Text>{message?.message?.content}</Text>
        </View>
      );
  }
}

const gifs = [
  {
    src: gifchat,
    name: "1",
  },
  {
    src: gifchat2,
    name: "2",
  },
  {
    src: gifchat3,
    name: "3",
  },
  {
    src: gifchat4,
    name: "4",
  },
  {
    src: gifchat5,
    name: "5",
  },
  {
    src: gifchat6,
    name: "6",
  },
  {
    src: gifchat7,
    name: "7",
  },
  {
    src: gifchat8,
    name: "8",
  },
];
