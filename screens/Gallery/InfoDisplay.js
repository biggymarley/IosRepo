import { Video } from "expo-av";
import React, { useContext, useRef } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors, windowHeight, windowWidth } from "../../assets/colors";
import { BaseURL, GetFileUrl } from "../../tools/Apis";
import { GalleryContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";

export default function InfoDisplay({ navigation }) {
  const { Imgs, ImgIndex } = useContext(GalleryContext);
  if (!Imgs[ImgIndex]) {
    navigation.navigate("Gallery");
    return null;
  } else
    return (
      <>
        <MenuButton
          isBack={true}
          navigation={navigation}
          btnColor={colors.text}
          // title={Imgs[ImgIndex].name}
          isRight={false}
        />
        <ScrollView>
          <View>
            <View
              style={{
                display: "flex",
                // alignItems: "center",
              }}
            >
              <Text style={styles.title}>{Imgs[ImgIndex].name}</Text>
              <Text style={styles.desc}>{Imgs[ImgIndex].description}</Text>
              {Imgs[ImgIndex].media.map((img, index) => (
                <ImgsPreview key={index} img={img.src} type={img.type} />
              ))}
            </View>
          </View>
        </ScrollView>
      </>
    );
}

const ImgsPreview = ({ img, type, gindex, navigation }) => {
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
  return (
    <>
      <View style={styles.btn}>
        {type.includes("video") ? (
          <Video
            source={{ uri: `${url}${img}` }}
            resizeMode={Video.RESIZE_MODE_CONTAIN}
            isMuted={false}
            useNativeControls
            style={styles.imgbtn}
            ref={ref}
            onPlaybackStatusUpdate={(status) => checkIfFinished(status)}
          />
        ) : (
          <Image source={{ uri: `${url}${img}` }} resizeMode="contain" style={styles.imgbtn} />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imgbtn: {
    width: windowWidth,
    height: "100%",
  },
  btn: {
    overflow: "hidden",
    backgroundColor: colors.bg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: windowWidth * 0.5,
    width: "100%",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  desc: {
    fontFamily: "Inter_300Light",
    color: colors.text,
    lineHeight: 25,
    fontSize: 18,
    marginBottom: windowHeight * 0.05,
    marginLeft: windowWidth * 0.03,
    textAlign: "left",
  },
  title: {
    fontFamily: "Manrope_800ExtraBold",
    color: colors.primary,
    marginHorizontal: windowWidth * 0.02,
    lineHeight: 25,
    fontSize: 16,
    marginTop: 25,
    textAlign: "center",
  },
});
