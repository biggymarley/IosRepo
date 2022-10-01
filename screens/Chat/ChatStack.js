import { createStackNavigator } from "@react-navigation/stack";
import { Audio } from "expo-av";
import { Camera } from "expo-camera";
import * as DocumentPicker from "expo-document-picker";
import { useFormik } from "formik";
import React, { useContext, useEffect, useRef, useState } from "react";
import axios, { BaseURL, MessagesUrl } from "../../tools/Apis";
import { ChatProvider, UserContext } from "../../tools/Context";
import Chat from "./Chat";
import * as FileSystem from "expo-file-system";

import LiveChat from "./LiveChat";
const Stack = createStackNavigator();

export default function ChatStack() {
  const {
    IsLogged,
    setisLoading,
    socket,
    CreatNotif,
    messagesData,
    setmessagesData,
  } = useContext(UserContext);
  const [convertaionInfos, setConvertaionInfos] = useState({
    adminId: { _id: "" },
  });
  const [recording, setRecording] = useState();
  const [audioUri, setAudioUri] = useState({ uri: "", duration: 1 });
  const [showCam, setshowCam] = useState({
    type: {},
    isOpen: false,
    isPreview: false,
    isGif: false,
  });
  const cam = useRef({});


  const fetchMessages = async () => {
    try {
      if (
        convertaionInfos?.adminId?._id &&
        convertaionInfos?.adminId?._id !== ""
      ) {
        const res = await axios.get(
          `${MessagesUrl}/${convertaionInfos?.adminId?._id}`,
          {
            headers: {
              Authorization: `Bearer ${IsLogged.token}`,
            },
          }
        );
        setmessagesData([...res.data.messages]);
      }
    } catch (error) {
    }
  };

  const SendMessage = async (message) => {
    try {
      const data = {
        message: { content: message, type: "text" },
      };
      const send = await axios.post(MessagesUrl, data, {
        headers: {
          Authorization: `Bearer ${IsLogged.token}`,
        },
      });
      if (send.data) setmessagesData([...messagesData, send.data.message]);
    } catch (error) {
    }
  };

  const SendGif = async (GifNum) => {
    try {
      const data = {
        message: { content: GifNum, type: "gif" },
      };
      const send = await axios.post(MessagesUrl, data, {
        headers: {
          Authorization: `Bearer ${IsLogged.token}`,
        },
      });
      if (send.data) setmessagesData([...messagesData, send.data.message]);
    } catch (error) {
    }
  };

  const sendAudioMessage = async (file, deleteRecording) => {
    try {
      const formData = new FormData();
      formData.append("type", file.type);
      const data = await FileSystem.uploadAsync(
        `${BaseURL}${MessagesUrl}`,
        file.uri,
        {
          headers: {
            Authorization: `Bearer ${IsLogged.token}`,
          },
          httpMethod: "POST",
          uploadType: FileSystem.FileSystemUploadType.MULTIPART,
          fieldName: "file",
          mimeType: file.type,
          parameters: {
            type: "audio",
          },
        }
      );
      if (data.body) {
        deleteRecording();
        fetchMessages();
      }
    } catch (error) {
    }
  };

  const sendFileMessage = async (file, type) => {
    try {
      const formData = new FormData();
      formData.append("type", file.type);
      const data = await FileSystem.uploadAsync(
        `${BaseURL}${MessagesUrl}`,
        file.src,
        {
          headers: {
            Authorization: `Bearer ${IsLogged.token}`,
          },
          httpMethod: "POST",
          uploadType: FileSystem.FileSystemUploadType.MULTIPART,
          fieldName: "file",
          mimeType: file.type,
          parameters: {
            type: type,
          },
        }
      );
      //console.log(type);
      if (data.body) {
        // clearFunc();
        fetchMessages();
      }
    } catch (error) {
      // dispatch({ type: "showLoading", payload: false });
      //console.log(error);
    }
  };

  const pickImageLibrary = async () => {
    try {
      // setisLoading(true);
      let result = await DocumentPicker.getDocumentAsync({
        type: ["image/*", "video/*", "application/pdf"],
      });
      if (!result.cancelled) {
        let filename = result.uri.split("/").pop();

        let match = result.mimeType.split("/");
        let type = match[0] === "application" ? "application/pdf" : match[0];
        const source = {
          name: filename,
          type: result.mimeType,
          src: result.uri,
        };
        sendFileMessage(source, type);
        formik.setFieldValue("file", source);
      }
      // setisLoading(false);
    } catch (error) {
      // setisLoading(false);
      // Alert.alert("error", "e");
    }
    // setloading(false);
  };

  const pickFromCamera = async () => {
    if (!showCam.isOpen) return;
    try {
      const result = await cam.current.takePictureAsync({ quality: 1 });
      if (!result.cancelled) {
        let filename = result.uri.split("/").pop();
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        const source = {
          name: filename,
          type: type,
          src: result.uri,
        };
        formik.setFieldValue("photo", source);
      }
      setshowCam({
        ...showCam,
        isOpen: false,
        isPreview: true,
        type: Camera.Constants.Type.back,
      });
      //   setloading(false);
    } catch (error) {
      // Alert.alert("error", "e");
      //   setloading(false);
    }
  };

  async function startRecording() {
    // console.log("aa")
    try {
      //console.log("Requesting permissions..");
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
         playsInSilentModeIOS: true,
      });
      //console.log("Starting recording..");
      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      //console.log("Recording started");
    } catch (err) {
      // console.error("Failed to start recording", err);
      setAudioUri({ uri: "", duration: 1 });
    }
  }

  async function stopRecording() {
    //console.log("Stopping recording..");
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setAudioUri({ uri: uri, duration: recording._finalDurationMillis });
    //console.log("Recording stopped and stored at", uri);
  }

  const deleteUri = () => {
    setAudioUri({ uri: "", duration: 1 });
  };

  const formik = useFormik({
    initialValues: {
      photo: "",
      support: "",
      client: "",
      file: {},
    },
    onSubmit: (values) => {
      // //console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <ChatProvider
      value={{
        startRecording,
        stopRecording,
        showCam,
        setshowCam,
        messagesData,
        setmessagesData,
        formik,
        cam,
        pickImageLibrary,
        pickFromCamera,
        recording,
        setRecording,
        audioUri,
        setAudioUri,
        deleteUri,
        convertaionInfos,
        setConvertaionInfos,
        SendMessage,
        sendFileMessage,
        sendAudioMessage,
        SendGif,
        isSend: true,
      }}
    >
      <Stack.Navigator initialRouteName="ChatPrepare">
        <Stack.Screen
          name="ChatPrepare"
          component={Chat}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LiveChat"
          component={LiveChat}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </ChatProvider>
  );
}

const Messages = [
  {
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    who: "client",
  },
  {
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    who: "support",
  },

  {
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    who: "client",
  },

  {
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    who: "support",
  },

  {
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    who: "client",
  },

  {
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    who: "support",
  },

  {
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    who: "client",
  },

  {
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    who: "support",
  },

  {
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    who: "client",
  },

  {
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    who: "support",
  },

  {
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    who: "client",
  },

  {
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    who: "support",
  },

  {
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    who: "client",
  },

  {
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    who: "support",
  },

  {
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    who: "client",
  },

  {
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    who: "support",
  },

  {
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    who: "client",
  },
];
