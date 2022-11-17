import { useFocusEffect } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import LottieView from "lottie-react-native";
import moment from "moment";
import "moment/locale/de";
import React, { useContext, useRef, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FAB, TextInput } from "react-native-paper";
import { colors, theme, windowWidth } from "../../assets/colors";
import {
  adminPdp,
  gifchat,
  gifchat2,
  gifchat4,
  notFound,
  micAnim,
} from "../../assets/IconFactory";
import axios, {
  BaseURL,
  ConvertationUrl,
  GetFileUrl,
  MessagesUrl,
} from "../../tools/Apis";
import { ChatContext, UserContext } from "../../tools/Context";
import CostumCamera, { Preview } from "../../tools/CostumCamera";
import MenuButton from "../../tools/MenuButton";
import AudioPlayer from "./AudioPlayer";
import MessageHandler from "./MessageHandler";
export default function LiveChat({ navigation }) {
  const {
    messagesData,
    setmessagesData,
    formik,
    showCam,
    setConvertaionInfos,
  } = useContext(ChatContext);
  const scrollViewRef = useRef();

  const { IsLogged, setisLoading, userData, setNewMessage } =
    useContext(UserContext);
  const fetchMessages = async () => {
    try {
      // setisLoading(true);
      const conv = await axios.get(ConvertationUrl, {
        headers: {
          Authorization: `Bearer ${IsLogged.token}`,
        },
      });
      //console.log(conv.data)
      if (conv?.data?.conversations[0]) {
        setConvertaionInfos({ ...conv?.data?.conversations[0] });
        const res = await axios.get(
          `${MessagesUrl}/${
            conv?.data?.conversations?.[0]?.adminId?._id ?? userData._id
          }`,
          {
            headers: {
              Authorization: `Bearer ${IsLogged.token}`,
            },
          }
        );
        //console.log(res.data);
        setmessagesData([...res.data.messages]);
      } else setmessagesData([]);
      setNewMessage(false);
      // setisLoading(false);
    } catch (error) {
      // setisLoading(false);
      setmessagesData([]);
      setConvertaionInfos({});
      //console.log(error);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      // fetchConvInfos();
      fetchMessages();
    }, [userData])
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : ""}
      style={{ flex: 1 }}
      keyboardVerticalOffset={40}
    >
      {showCam.isPreview && formik.values.photo !== "" && (
        <Preview Context={ChatContext} />
      )}
      {showCam.isOpen && <CostumCamera Context={ChatContext} />}
      <GifModal />
      <MenuButton
        isBack={true}
        title="Live-Chat"
        btnColor={colors.text}
        navigation={navigation}
        isRight={true}
        isTrans={showCam?.isOpen === true}
      />
      <View style={{ flex: 1 }}>
        {messagesData.length > 0 ? (
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current.scrollToEnd({ animated: true })
            }
          >
            <Messages />
          </ScrollView>
        ) : (
          <LottieView source={notFound} autoPlay={true} loop={true} />
        )}
      </View>
      <SendInput />
    </KeyboardAvoidingView>
  );
}

const GifModal = () => {
  const { showCam, setshowCam, SendGif } = useContext(ChatContext);
  const HandleGif = (GifNum) => {
    SendGif(GifNum);
    setshowCam({ ...showCam, isGif: false });
  };
  return (
    <Modal
      visible={showCam.isGif}
      animationType="fade"
      transparent={true}
      onRequestClose={() => setshowCam({ ...showCam, isGif: false })}
    >
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.BlackTransBg,
            minHeight: "100%",
          }}
        >
          <TouchableOpacity
            onPress={() => setshowCam({ ...showCam, isGif: false })}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 1,
            }}
          ></TouchableOpacity>
          <View style={styles.gifmodal}>
            {gifs.map((gif, index) => (
              <TouchableOpacity
                key={index}
                style={{ width: "33%" }}
                onPress={() => HandleGif(gif.name)}
              >
                <Image
                  source={gif.src}
                  style={{ width: "100%", height: 150 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const Messages = () => {
  const { messagesData } = useContext(ChatContext);

  return messagesData.map((message, index) =>
    message.message ? <SidesHandler message={message} key={index} /> : null
  );
};

const SidesHandler = ({ message }) => {
  const { userData } = useContext(UserContext);

  if (message.senderId !== userData?._id) return <LeftSide message={message} />;
  else return <RightSide message={message} />;
};

const url = `${BaseURL}${GetFileUrl}/`;
const RightSide = ({ message }) => {
  const { userData } = useContext(UserContext);
  moment.locale("de");
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-end",
          margin: 5,
          marginTop: 15,
          // flexWrap:"wrap"
        }}
      >
        <View style={styles.right}>
          <MessageHandler message={message} />
          {/* <Text
          style={{
            position: "absolute",
            bottom: 5,
            right: 5,
            width: 40,
            opacity: 0.5,
          }}
          >
          {moment(message?.createdAt).format("LT")}
        </Text> */}
        </View>
        <Image
          source={{ uri: `${url}${userData.photo}` }}
          style={{ width: 40, height: 40, marginLeft: 5, borderRadius: 20 }}
          resizeMode="cover"
        />
      </View>
      <Text
        style={{
          marginLeft: "auto",
          marginRight: 55,
          opacity: 0.5,
        }}
      >
        {moment(message?.createdAt).calendar()}
      </Text>
    </>
  );
};

const LeftSide = ({ message }) => {
  const { convertaionInfos } = useContext(ChatContext);
  // const url = `${BaseURL}${GetFileUrl}/`;

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-start",
          margin: 5,
          marginTop: 15,
        }}
      >
        <Image
          source={adminPdp}
          style={{
            width: 40,
            height: 40,
            marginRight: 5,
            borderRadius: 20,
          }}
          resizeMode="cover"
        />
        <View style={styles.left}>
          <MessageHandler message={message} />
        </View>
      </View>
      <Text
        style={{
          marginLeft: 55,
          marginRight: "auto",
          opacity: 0.5,
        }}
      >
        {moment(message?.createdAt).calendar()}
      </Text>
    </>
  );
};

const SendInput = () => {
  const [text, settext] = useState("");
  const [open, setOpen] = useState(false);
  const {
    recording,
    startRecording,
    stopRecording,
    audioUri,
    SendMessage,
    sendAudioMessage,
  } = React.useContext(ChatContext);
  const sending = () => {
    SendMessage(text);
    settext("");
  };
  return (
    <View
      style={{
        padding: 15,
        paddingTop: 5,
        // display: "flex",
        // flexDirection: "row",
      }}
    >
      {audioUri.uri !== "" ? (
        <AudioPlayer uri={audioUri} sendAudioMessage={sendAudioMessage} />
      ) : (
        <>
          <View style={{ position: "relative" }}>
            <TextInput
              style={{ marginLeft: 50 }}
              placeholder="Nachricht schicken"
              value={text}
              onChangeText={(text) => settext(text)}
              theme={theme}
              mode="outlined"
              keyboardType="default"
              activeOutlineColor={colors.primary}
              outlineColor="rgba(0,0,0,0.2)"
              selectionColor={colors.primary}
              right={
                text !== "" && !recording ? (
                  <TextInput.Icon
                    name="send"
                    color={colors.primary}
                    size={20}
                    onPress={sending}
                  />
                ) : null
              }
            />
          </View>
          <FabButton />
          <AudioIcons text={text} open={open} setOpen={setOpen} />
        </>
      )}
    </View>
  );
};

const AudioIcons = ({ text, open, setOpen }) => {
  const { recording, startRecording, stopRecording } =
    React.useContext(ChatContext);
  const ref = useRef();
  const HandelRecording = () => {
    if (recording) {
      stopRecording();
      setOpen(false);
      ref?.current?.pause();
    } else {
      startRecording();
      ref?.current?.play();
    }
  };

  const HandleClose = () => {
    if (recording) {
      stopRecording();
    }
    setOpen(false);
  };
  return text === "" ? (
    <>
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={{
          width: 75,
          height: 75,
          position: "absolute",
          right: 15,
          bottom: 6,
          zIndex: 999,
        }}
      >
        <LottieView
          source={micAnim}
          // autoPlay={true}
          loop={true}
          speed={2}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={HandleClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                fontFamily: "Manrope_700Bold",
                color: colors.primary,
                fontSize: 15,
                textAlign: "center",
              }}
            >
              {recording ? "Aufnahmen" : "Sprachnachricht aufnehmen"}
            </Text>
            <TouchableOpacity
              onPress={HandelRecording}
              style={{
                width: 150,
                height: 150,
                zIndex: 999,
              }}
            >
              <LottieView
                source={micAnim}
                loop={true}
                speed={2}
                resizeMode="contain"
                ref={ref}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.callContainer}
              onPress={HandleClose}
            >
              <Text style={styles.callText}>Sprachnachricht löschen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  ) : null;
};

const FabButton = () => {
  const [open, setState] = React.useState(false);
  const { setshowCam, showCam, pickImageLibrary } = useContext(ChatContext);
  const checkForCameraRollPermission = async () => {
    try {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Berechtigungen",
          "Bitte erteilen Sie in den Einstellungen Ihres Systems Kamerarollenberechtigungen"
        );
      } else {
        //console.log("Media Permissions are granted");
      }
      await ImagePicker.requestCameraPermissionsAsync();
      const res = await ImagePicker.getCameraPermissionsAsync();
      if (res.status !== "granted") {
        Alert.alert(
          "Berechtigungen",
          "Bitte erteilen Sie in den Einstellungen Ihres Systems Kamerarollenberechtigungen"
        );
      } else {
        //console.log("Media Permissions are granted");
      }
    } catch (error) {}
  };

  React.useEffect(() => {
    checkForCameraRollPermission();
  }, []);
  return (
    <FAB.Group
      style={{
        right: windowWidth - 75,
        marginBottom: 3,
      }}
      fabStyle={{
        backgroundColor: colors.primary,
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        elevation: 0,
      }}
      color={colors.bg}
      theme={{ colors: { backdrop: "transparent" } }}
      open={open}
      icon={open ? "close" : "plus"}
      actions={[
        {
          icon: "camera-outline",
          onPress: () => {
            setshowCam({
              ...showCam,
              isOpen: true,
              type: Camera.Constants.Type.back,
            });
          },
          small: false,
          color: colors.primary,
        },
        {
          icon: "gif",
          onPress: () => setshowCam({ ...showCam, isGif: true }),
          small: false,
          color: colors.primary,
        },
        {
          icon: "paperclip",
          onPress: () => pickImageLibrary(),
          small: false,
          color: colors.primary,
        },
      ]}
      onStateChange={() => setState(!open)}
      //   onPress={() => {
      //     if (open) {
      //       // do something if the speed dial is open
      //     }
      //   }}
    />
  );
};

const styles = StyleSheet.create({
  right: {
    backgroundColor: colors.primaryTrans,
    borderRadius: 8,
    padding: 10,
    // paddingBottom: 30,
    minWidth: 50,
    // paddingRight: 60,
    paddingVertical: 15,
    flexShrink: 1,
    position: "relative",
  },
  left: {
    backgroundColor: colors.secondaryTrans,
    borderRadius: 8,
    padding: 10,
    minWidth: 50,

    // paddingRight: 60,
    paddingVertical: 15,
    flexShrink: 1,
  },
  gifmodal: {
    width: "96%",
    backgroundColor: colors.bg,
    borderRadius: 12,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    zIndex: 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    backgroundColor: "#0000004a",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 15,
    // width: "60%",
    // height: "40%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  callContainer: {
    width: "80%",
    // marginVertical: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // margin: 10,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: colors.primary,
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 2,
    // marginTop: windowHeight * 0.2,
  },
  callText: {
    fontFamily: "Manrope_700Bold",
    color: colors.bg,
    fontSize: 15,
    textAlign: "center",
  },
});

const gifs = [
  {
    src: gifchat,
    name: "1",
  },
  {
    src: gifchat2,
    name: "2",
  },
  // {
  //   src: gifchat3,
  //   name: "3",
  // },
  {
    src: gifchat4,
    name: "4",
  },
];
