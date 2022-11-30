import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { colors } from "../../assets/colors";
import { ChatContext } from "../../tools/Context";
const AudioPlayer = ({ uri, noSend, sendAudioMessage }) => {
  const [sound, setSound] = React.useState({});
  const [status, setstatus] = React.useState(0);
  const [resume, setresume] = React.useState(0);
  const [isPlaying, setisPlaying] = React.useState(false);
  const [max, setmax] = React.useState(500);
  const { deleteUri } = React.useContext(ChatContext);

  async function playSound() {
    // if (sound) await sound?.unloadAsync();
 
    // const { sound, status } = await Audio.Sound.createAsync(
    //   { uri: uri.uri },
    //   {
    //     shouldPlay: true,
    //     progressUpdateIntervalMillis: 100,
    //     positionMillis: resume === max ? 0 : resume,
    //   },
    //   (status) => {
    //     setstatus(status.positionMillis);
    //     if (status.positionMillis === status.playableDurationMillis)
    //       setisPlaying(false);
    //   }
    // );
    // setSound(sound);
     await sound.playAsync();
    setisPlaying(true);
  }

  const StopPlaying = async () => {
    try {
      const res = await sound.pauseAsync();
      setresume(res.positionMillis);
      setisPlaying(false);
    } catch (err) {
      console.log(err);
    }
  };

  const SlidePlaying = async (value) => {
    try {
      await sound.playFromPositionAsync(value);
      setisPlaying(true);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    const initAudio = async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
        });
        if (sound) await sound?.unloadAsync();
        const { sound, status } = await Audio.Sound.createAsync(
          { uri: uri.uri },
          {
            shouldPlay: false,
            progressUpdateIntervalMillis: 100,
            positionMillis: resume === max ? 0 : resume,
          },
          (status) => {
            setstatus(status.positionMillis);
            if (status.positionMillis === status.playableDurationMillis)
              setisPlaying(false);
          }
        );
        setSound(sound);
        setmax(status.playableDurationMillis);
      } catch (error) {
        console.log(error);
      }
    };
    initAudio();
  }, []);

  return (
    <View
      style={{
        // marginLeft: 50,
        flexGrow: 1,
        height: 50,
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 10,
        alignItems: "center",
        padding: 5,
        flexDirection: "row",
      }}
    >
      {isPlaying ? (
        <TouchableOpacity onPress={StopPlaying}>
          <Ionicons name="pause" size={24} color={colors.primary} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={playSound}>
          <Ionicons name="play" size={24} color={colors.primary} />
        </TouchableOpacity>
      )}

      <Slider
        style={{ flexGrow: 1, height: 40 }}
        value={status ?? 0}
        minimumValue={0}
        maximumValue={max}
        onSlidingStart={async () => {
          try {
            await sound.pauseAsync();
          } catch (error) {
            console.log(error);
          }
        }}
        onSlidingComplete={(value) => SlidePlaying(value)}
        // onResponderEnd
        minimumTrackTintColor={colors.primary}
        maximumTrackTintColor={colors.secondary}
        thumbTintColor={colors.primary}
      />
      {noSend === true ? null : (
        <>
          <TouchableOpacity
            style={{ marginRight: 6 }}
            onPress={() => {
              sound?.unloadAsync();
              deleteUri();
            }}
          >
            <Ionicons name="ios-trash" size={24} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              sendAudioMessage(uri, () => {
                sound?.unloadAsync();
                deleteUri();
              })
            }
          >
            <Ionicons name="send" size={20} color={colors.primary} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default AudioPlayer;
