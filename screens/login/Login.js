import { Octicons } from "@expo/vector-icons";
import { Video } from "expo-av";
import React, { useContext, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { colors, windowHeight, windowWidth } from "../../assets/colors";
import { logoWhite, VideoLoading, VideoLogin } from "../../assets/IconFactory";
import { UserContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";
import VerifyAccount from "../../tools/VerifyAccount";
import LoginInputs from "./LoginInputs";
export default function Login({ navigation }) {
  const [open, setOpen] = useState(false);
  const [isMuted, setisMuted] = useState(true);
  const [NeedVerif, setNeedVerif] = useState(false);
  // const [NeedPwd, setNeedPwd] = useState(false);
  const { NeedPwd, setNeedPwd } = useContext(UserContext);
  const [Rphone, setRphone] = useState("49");
  const [Rpwd, setRpwd] = useState("");
  const [phone, setPhone] = useState("49");
  const [pwd, setpwd] = useState("");
  const ToggleSound = () => {
    setisMuted(!isMuted);
  };

  const HandleClose = () => {
    setOpen(false);
  };
  const HandleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {NeedVerif ? (
        <VerifyAccount
          navigation={navigation}
          phone={NeedPwd ? Rphone : phone}
          password={NeedPwd ? Rpwd : pwd}
          setNeedVerif={setNeedVerif}
          isLoggin={true}
        />
      ) : (
        <>
          <MenuButton
            navigation={navigation}
            isTrans={true}
            rightBtn={
              <MuteButton isMuted={isMuted} ToggleSound={ToggleSound} />
            }
          />
          <View style={styles.container}>
            <VideoBg open={open} video={VideoLogin} isMuted={isMuted} />
            <Animatable.View animation="bounceIn" duration={1500}>
              <Image
                resizeMode="contain"
                source={logoWhite}
                style={styles.logo}
              />
            </Animatable.View>
            <LoginInputs
              HandleClose={HandleClose}
              open={open}
              navigation={navigation}
              phone={phone}
              setPhone={setPhone}
              pwd={pwd}
              setpwd={setpwd}
              setNeedVerif={setNeedVerif}
              NeedPwd={NeedPwd}
              setNeedPwd={setNeedPwd}
              Rpwd={Rpwd}
              Rphone={Rphone}
              setRphone={setRphone}
              setRpwd={setRpwd}
            />
            <ChoseButton HandleOpen={HandleOpen} navigation={navigation} />
          </View>
        </>
      )}
    </>
  );
}

const MuteButton = ({ isMuted, ToggleSound }) => {
  return (
    <TouchableOpacity onPress={ToggleSound}>
      {isMuted ? (
        <Octicons name="mute" size={24} color="white" />
      ) : (
        <Octicons name="unmute" size={24} color="white" />
      )}
    </TouchableOpacity>
  );
};

const ChoseButton = ({ HandleOpen, navigation }) => {
  return (
    <Animatable.View style={styles.ButnStack} animation="bounceInUp">
      <TouchableOpacity style={{ width: "80%" }} onPress={HandleOpen}>
        {/* <LinearGradient
          
          start={[0.0, 0.5]}
          end={[1.0, 0.5]}
          locations={[0.0, 1.0]}
          colors={[colors.primary, colors.primaryText]}
        > */}
        {/* </LinearGradient> */}
        <View style={styles.login}>
          <Text style={styles.logtext}>Anmelden</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.regtext}>
          Sie haben noch keinen Account?
          <Text style={{ color: "white", fontFamily: "Manrope_700Bold" }}>
            {" "}
            Hier registrieren
          </Text>
        </Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export const VideoBg = ({ open, video, isMuted }) => {
  return (
    <>
      <Video
        source={video}
        resizeMode="cover"
        isLooping={true}
        isMuted={isMuted}
        shouldPlay={true}
        style={styles.backgroundVideo}
        posterSource={VideoLoading}
      />
      <View
        style={{
          ...styles.bgCover,
          ...(open && {
            opacity: 0.8,
          }),
        }}
      ></View>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  bgCover: {
    backgroundColor: "rgb(0,0,0)",
    opacity: 0.6,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  ButnStack: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 20,
    width: "100%",
  },
  login: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: colors.primary,
    borderRadius: 32,
  },
  logtext: {
    fontSize: 15,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#FFFFFF",
    fontFamily: "Manrope_800ExtraBold",
  },
  regtext: {
    fontSize: 15,
    color: "#FFFFFF",
    letterSpacing: 1,
    // fontWeight: "b0old",
    fontFamily: "Manrope_400Regular",
  },

  inputView: {
    display: "flex",
  },
  logo: {
    height: windowHeight / 4,
    width: windowWidth / 2,
    marginTop: "20%",
  },
});
