import * as Linking from "expo-linking";
import LottieView from "lottie-react-native";
import React, { useContext } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { colors, windowWidth } from "../../assets/colors";
import {
  ChatNow,
  facebookAnim,
  contactusAnim,
  ChatAnimation,
  fixPhone,
  LocalisationAnim,
  WebAnim,
  PhoneIcon,
  Phonefix,
  MailAnim,
  instagramAnim,
  tiktokAnim,
  Phonemobileanim,
} from "../../assets/IconFactory";
import { UserContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";
import { Text } from "react-native";

export default function Contact({ navigation }) {
  return (
    <View style={styles.contactRoot}>
      {/* <BackgroundAnimation /> */}
      <MenuButton
        navigation={navigation}
        btnColor={colors.text}
        title="Kontaktaufnahme"
      />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ display: "flex", alignItems: "center" }}
      >
        <View style={styles.helloCont}>
          <LottieView
            source={contactusAnim}
            speed={0.5}
            resizeMode="contain"
            autoPlay={true}
            loop={true}
            style={styles.logo}
          />
        </View>
        {/* <CallBtns navigation={navigation} /> */}
        <ContactCard navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const CallBtns = ({ navigation }) => {
  const { IsLogged } = useContext(UserContext);
  return (
    <View style={styles.CallContainer}>
      <Animatable.View animation="swing" iterationCount={3}>
        <TouchableOpacity
          onPress={() => Linking.openURL(`tel:+4991125391310`)}
          i
          style={styles.roundedBtn}
        >
          <Image
            source={fixPhone}
            style={{ width: 90, height: 90 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View animation="swing" iterationCount={3}>
        <TouchableOpacity
          onPress={() => Linking.openURL(`tel:+491628020283`)}
          style={styles.roundedBtn}
        >
          <Image
            source={PhoneIcon}
            style={{ width: 90, height: 90 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </Animatable.View>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("whatsapp://send?text=hello&phone=+491628020283")
        }
        style={styles.roundedBtn}
      >
        <Image
          source={WtspIcon}
          style={{ width: 90, height: 90 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {IsLogged.isLogged && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Chat")}
          style={styles.roundedBtn}
        >
          <Image
            source={ChatNow}
            style={{ width: 90, height: 90 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}

      {/* </Animatable.View> */}
    </View>
  );
};
const Phonenumberfix = "+491628020283"
const PhonenumberMobile = "+4991125391310"
const ContactCard = ({ navigation }) => {
  const { IsLogged } = useContext(UserContext);
  return (
    <View style={{position:'relative'}}>
      <View
        style={{ backgroundColor: colors.primary, height: 1, width: "100%", position: "absolute", top: "-15%", zIndex: 9999 }}
      />
      <View style={styles.contactContenct}>
        {/* <Text style={styles.companyName}>KAL & ROK GmbH</Text> */}

        <TouchableOpacity
          onPress={() => Linking.openURL(`tel:${Phonenumberfix}`)}
          style={styles.copyButton}
          activeOpacity={0.9}
        >
          <View
            style={{
              alignSelf: "center",
              width: 90,
              height: 90,
              backgroundColor: colors.bg,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              marginBottom: 20,
              elevation: 5,
              borderRadius: 12,
            }}
          >
            <LottieView
              source={Phonemobileanim}
              speed={.6}
              resizeMode="contain"
              autoPlay={true}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL(`tel:${PhonenumberMobile}`)}
          style={styles.copyButton}
          activeOpacity={0.9}
        >
          <View
            style={{
              alignSelf: "center",
              width: 90,
              height: 90,
              backgroundColor: colors.bg,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              borderRadius: 12,
            }}
          >
            <LottieView
              source={Phonefix}
              speed={.6}
              resizeMode="contain"
              autoPlay={true}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </TouchableOpacity>
        {IsLogged.isLogged && (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate("Chat")}
            style={styles.copyButton}
          >
                   <View
            style={{
              alignSelf: "center",
              width: 90,
              height: 90,
              backgroundColor: colors.bg,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              borderRadius: 12,
            }}
          >
            <LottieView
              source={ChatAnimation}
              speed={.6}
              resizeMode="contain"
              autoPlay={true}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(`https://goo.gl/maps/5btLRM83qp9XH5dy8`)
          }
          style={styles.copyButton}
          activeOpacity={0.9}
        >
                <View
            style={{
              alignSelf: "center",
              width: 90,
              height: 90,
              backgroundColor: colors.bg,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              borderRadius: 12,
            }}
          >
            <LottieView
              source={LocalisationAnim}
              speed={.6}
              resizeMode="contain"
              autoPlay={true}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL(`mailto:info@kal-rok.de`)}
          style={styles.copyButton}
          activeOpacity={0.9}
        >
                <View
            style={{
              alignSelf: "center",
              width: 90,
              height: 90,
              backgroundColor: colors.bg,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              borderRadius: 12,
            }}
          >
            <LottieView
              source={MailAnim}
              speed={.6}
              resizeMode="contain"
              autoPlay={true}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.copyButton}
          onPress={() => Linking.openURL("https://www.kal-rok.de")}
        >
                 <View
            style={{
              alignSelf: "center",
              width: 90,
              height: 90,
              backgroundColor: colors.bg,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              borderRadius: 12,
            }}
          >
            <LottieView
              source={WebAnim}
              speed={.6}
              resizeMode="contain"
              autoPlay={true}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{...styles.copyButton, marginTop: 20}}
          onPress={() => Linking.openURL("https://instagram.com/kalrokgmbh?igshid=YmMyMTA2M2Y=")}
        >
                 <View
            style={{
              alignSelf: "center",
              width: 90,
              height: 90,
              backgroundColor: colors.bg,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              borderRadius: 12,
            }}
          >
            <LottieView
              source={instagramAnim}
              speed={.6}
              resizeMode="contain"
              autoPlay={true}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{...styles.copyButton, marginTop: 20}}
          onPress={() => Linking.openURL("https://www.facebook.com/KalRok-GmbH-109972234661965/")}
        >
                 <View
            style={{
              alignSelf: "center",
              width: 90,
              height: 90,
              backgroundColor: colors.bg,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              borderRadius: 12,
            }}
          >
            <LottieView
              source={facebookAnim}
              speed={.6}
              resizeMode="contain"
              autoPlay={true}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{...styles.copyButton, marginTop: 20}}
          onPress={() => Linking.openURL("https://www.tiktok.com/@rokk4197ihe?_t=8ZIpBHe3Wrd&_r=1")}
        >
                 <View
            style={{
              alignSelf: "center",
              width: 90,
              height: 90,
              backgroundColor: colors.bg,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              borderRadius: 12,
            }}
          >
            <LottieView
              source={tiktokAnim}
              speed={.6}
              resizeMode="contain"
              autoPlay={true}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactRoot: {
    flex: 1,
    alignItems: "center",
  },
  contactContenct: {
    width: windowWidth,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 5,
    backgroundColor: colors.bg,
    paddingTop: 20,
  },
  copyButton: {
    // marginVertical: 5,
    // // paddingVertical: 10,
    // // paddingHorizontal: 10,
    // borderRadius: 10,
    // backgroundColor: colors.bg,
    // borderWidth: 2,
    // borderColor: colors.primary,
    // elevation: 2,
    // overflow:'hidden'
    flexBasis: "33%",
  },

  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  IconHolder: {
    // backgroundColor: colors.primary,
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    // overflow:"hidden"
  },
  CallContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: "auto",
    marginBottom: "auto",
  },
  companyName: {
    fontFamily: "Inter_400Regular",
    marginBottom: 0,
    color: colors.text,
  },
  Location: {
    fontFamily: "Inter_400Regular",
    fontSize: 18,
    color: colors.text,
    padding: 10,
  },
  email: {
    fontFamily: "Inter_400Regular",
    fontSize: 18,
    color: colors.text,
    marginLeft: 25,
    padding: 10,
  },
  logo: {
    width: windowWidth,
    height: windowWidth * 1,
    backgroundColor: colors.bg,
  },
  helloCont: {
    // marginBottom: 10,
    overflow: "hidden",
    alignItems: "center",
    width: windowWidth,
    // flex: 1,
    backgroundColor: colors.bg,
  },
});
