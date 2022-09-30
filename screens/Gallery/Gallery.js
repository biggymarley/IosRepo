import { Video } from "expo-av";
import React, { useContext, useRef } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { colors, windowWidth } from "../../assets/colors";
import { BaseURL, GetFileUrl } from "../../tools/Apis";
import { GalleryContext, UserContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";
export default function Gallery({ navigation }) {
  const { Imgs } = useContext(GalleryContext);
  const { isLoading } = useContext(UserContext);

  return (
    <>
      <MenuButton
        navigation={navigation}
        btnColor={colors.text}
        title="Bibliothek"
        textSize={18}
      />
      <ScrollView>
        <View style={styles.root}>
          {/* <View style={styles.contAnimation}>
            <LottieView source={gallery} loop={false} autoPlay speed={0.8} />
          </View> */}
          <View
            style={{
              flex: 1,
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <GalleryMap Imgs={Imgs} navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const GalleryMap = ({ Imgs, navigation }) => {
  return Imgs.map((img, index) => (
    <ImgsButns key={index} img={img} gindex={index} navigation={navigation} />
  ));
};

const ImgsButns = ({ img, gindex, navigation }) => {
  const { IndexingImg } = useContext(GalleryContext);
  const url = `${BaseURL}${GetFileUrl}/`;
  const ref = useRef(null);
  const checkIfFinished = async (status) => {
    if (
     ref?.current &&  status.positionMillis !== 0 &&
      status.playableDurationMillis === status.positionMillis &&
      !status.isPlaying
    ) {
      await ref.current.setPositionAsync(0);
      await ref.current.pauseAsync();
    
    }
  };
  if (img.media && img.media[0])
    return (
      <>
        <View style={{ flexBasis: "100%" }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => IndexingImg(gindex, navigation)}
          >
            {img.media[0].type && img.media[0].type.includes("video") ? (
              <Video
                source={{ uri: `${url}${img.media[0].src}` }}
                resizeMode="cover"
                // isLooping
                isMuted={false}
                useNativeControls={true}
                // shouldPlay={true}
                ref={ref}
                onPlaybackStatusUpdate={(status) => checkIfFinished(status)}
                style={styles.imgbtn}
              />
            ) : (
              <Image
                source={{ uri: `${url}${img.media[0].src}` }}
                resizeMode="stretch"
                style={styles.imgbtn}
              />
            )}
          </TouchableOpacity>
        </View>
      </>
    );
  else return null;
};

const styles = StyleSheet.create({
  root: {
    margin: 5,
    flex: 1,
  },
  contAnimation: {
    display: "flex",
    alignItems: "center",
    backgroundColor: colors.textBg,
    height: windowWidth * 0.4,
    overflow: "hidden",
    borderRadius: 12,
    margin: 10,
    marginBottom: 25,
  },
  imgbtn: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  btn: {
    overflow: "hidden",
    backgroundColor: "#E0E4E4",
    height: windowWidth * 0.5 - 10,
    margin: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
