import { useFocusEffect } from "@react-navigation/native";
import React, { useContext, useRef, useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Carousel from "react-native-snap-carousel";
import { colors, windowHeight, windowWidth } from "../../assets/colors";
import {
  AgbButton,
  AppointmentsButton,
  Calculate,
  ChatButton,
  contact,
  FaqsButton,
  GalleryButton,
  imprButton,
  InfosButton,
  PreiseButton,
  PrivacyButton,
  ProfileButton,
  RecommandButton,
  ReviewButton,
  ToDuButton,
  ToMaButton,
  ToursButton,
  TrackingButton,
} from "../../assets/IconFactory";
import { BackgroundAnimation } from "../../tools/animatedBg";
import axios, {
  AdsUrl,
  BaseURL,
  GetFileUrl,
  MEurl,
  ToursUrl,
} from "../../tools/Apis";
import { HomeTourProvider, UserContext } from "../../tools/Context";
import { Header } from "../../tools/MenuButton";
import Rules from "./Rules";
import TourInfos from "./TourInfos";
import CustomFooter from "../../tools/CustomFooter/CustomFooter";
export default function Home({ navigation }) {
  const [TourData, setTourData] = useState({ cities: [] });
  const [isLoading, setisLoading] = useState(false);
  const [indicator, setindocator] = useState(1);
  const { userData, IsLogged, setuserData, AcceptRules } =
    useContext(UserContext);
  const [AdsData, setAdsData] = useState([]);
  const url = `${BaseURL}${GetFileUrl}/`;
  const getAds = async () => {
    try {
      const res = await axios.get(AdsUrl);
      const ads = res.data.data.filter((e) => e.active === true);
      const myads =
        ads[0] &&
        ads[0].media.image.map((e) => {
          e = `${url}${e}`;
          return e;
        });
      setAdsData([...(myads ?? [])]);
    } catch (error) {}
  };

  useFocusEffect(
    React.useCallback(() => {
      getAds();
    }, [])
  );

  const GetTour = async () => {
    try {
      const me = await axios.get(MEurl, {
        headers: {
          Authorization: `Bearer ${IsLogged.token}`,
        },
      });
      if (JSON.stringify(userData) !== JSON.stringify(me.data.data))
        setuserData({ ...me.data.data });
      if (me.data.data.tour?._id == null) {
        setindocator(0);
        return;
      } else {
        setisLoading(true);
        const res = await axios.get(`${ToursUrl}/${me.data.data.tour?._id}`, {
          headers: {
            Authorization: `Bearer ${IsLogged.token}`,
          },
        });
        setTourData({ ...res.data.data });
        if (me?.data?.data?.cityId == null) setindocator(1);
        setisLoading(false);
      }
    } catch (error) {
      setisLoading(false);
      //console.log(error.response.data);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      GetTour();
    }, [userData])
  );

  return (
    <HomeTourProvider
      value={{
        TourData,
        userData,
        navigation,
        isLoading,
        indicator,
      }}
    >
      {AcceptRules ? (
        <Rules navigation={navigation} />
      ) : (
        <View style={styles.root}>
          <Header navigation={navigation} />
          <ScrollView>
            <AdsContainer AdsData={AdsData} />
            {IsLogged.isLogged ? <TourInfos navigation={navigation} /> : null}
            {!IsLogged.isLogged ? (
              <CallCompany navigation={navigation} />
              ) : null}
            {IsLogged.isLogged ? <HomeMenu navigation={navigation} /> : null}
          </ScrollView>
          {!IsLogged.isLogged ? (
            <NotLoggedContent navigation={navigation} />
            ) : null}
         
          <BackgroundAnimation />
          {IsLogged.isLogged ?<>
            <View style={{height: 60}} />
            <CustomFooter navigation={navigation} IsLogged={IsLogged}/>
          </>
             : null}
        </View>
      )}
    </HomeTourProvider>
  );
}

const NotLoggedContent = ({ navigation }) => {
  return (
    <View style={styles.InviteRoot}>
      <Text style={styles.Invitetitle}>
        Werden Sie{" "}
        <Text
          style={{
            fontFamily: "Manrope_700Bold",
            fontWeight: "400",
            letterSpacing: 2,
          }}
        >
          Kal&Rok{" "}
        </Text>
        Mitglied :
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={styles.InviteButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.InviteButtonText}>Hier registrieren</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.InviteButtonLogin}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.InviteButtonTextLogin}>Anmelden</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const url =
  Platform.OS === "ios"
    ? "https://apps.apple.com/us/app/kal-rok/id1645721448"
    : "https://play.google.com/store/apps/details?id=kalrok.app";
const CallCompany = ({ navigation }) => {
  const ref = useRef();
  // const [opacity, setOpacity] = useState(0);
  useFocusEffect(
    React.useCallback(() => {
      ref.current.fadeInUp(300);
    }, [])
  );
  return (
    <Animatable.View ref={ref} useNativeDriver={true}>
      <View style={styles.gridItems}>
        {NotLoggedButtons.map((item, index) => (
          <BigButton item={item} key={index} navigation={navigation}/>
        ))}
      </View>
    </Animatable.View>
  );
};

const HomeMenu = (props) => {
  const ref = useRef();
  // const [opacity, setOpacity] = useState(0);
  useFocusEffect(
    React.useCallback(() => {
      ref.current.fadeInUp(300);
    }, [])
  );
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(false);
    }}
  >
    <View style={styles.centeredView}>
    <Animatable.View ref={ref} useNativeDriver={true}>
      <View style={styles.gridItems}>
        {buttons.map((item, index) => (
          <BigButton item={item} key={index} {...props} />
        ))}
      </View>
    </Animatable.View>
    </View>
    </Modal>
  );
};

const BigButton = ({ item, navigation }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Laden Sie unsere mobile App herunter und genießen Sie unseren digitalen Service : ${url}`,
        url: url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          //console.log("done");
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <TouchableOpacity
      style={styles.bigButton}
      activeOpacity={0.8}
      onPress={() =>
        item.onPress
          ? onShare()
          : navigation.navigate(item.link, { ...item.options } ?? {})
      }
    >
      <Image
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
        source={item.CosIcon}
      />
      {/* <Text style={styles.butText}>{item.label}</Text> */}
    </TouchableOpacity>
  );
};

const AdsContainer = ({ AdsData }) => {
  const flatRef = useRef();
  return (
    <View style={styles.adsContainer}>
      <Carousel
        ref={flatRef}
        data={AdsData}
        renderItem={AdsImg}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        enableSnap={true}
        loop={true}
        autoplay={true}
        autoplayInterval={35000}
      />
    </View>
  );
};
const AdsImg = ({ item }) => {
  return <Image source={{ uri: item }} style={styles.adImg} />;
};

const NotLoggedButtons = [
  {
    link: "Kontakt",
    CosIcon: contact,
  },
  {
    link: "Preise",
    options: { screen: "CalculatePrice" },
    CosIcon: Calculate,
  },
];

const buttons = [
  {
    link: "Kontakt",
    CosIcon: contact,
  },
  {
    link: "Preise",
    options: { screen: "CalculatePrice" },
    CosIcon: Calculate,
  },
  {
    link: "Profile",
    CosIcon: ProfileButton,
  },
  {
    link: "Chat",
    CosIcon: ChatButton,
  },
  {
    // label: "Versand nach MA",
    link: "Versand nach MA",
    CosIcon: ToMaButton,
  },
  {
    // label: "Versand nach DE",
    link: "Versand nach DE",
    CosIcon: ToDuButton,
  },
  {
    link: "KAL&ROK on Tour",
    options: { screen: "Tours" },
    CosIcon: ToursButton,
  },
  {
    link: "Fahrten & Termine",
    options: { screen: "Appointments" },
    CosIcon: AppointmentsButton,
  },
  {
    label: "Sendungsverfolgung",
    link: "Sendungsverfolgung",
    CosIcon: TrackingButton,
  },
  {
    label: "Bewertungen",
    link: "Bewertungen",
    CosIcon: ReviewButton,
  },
  {
    link: "Infos",
    options: { screen: "InfosScreen" },
    CosIcon: InfosButton,
  },
  {
    onPress: true,
    CosIcon: RecommandButton,
  },
  {
    link: "FAQ",
    CosIcon: FaqsButton,
  },
  {
    link: "Bibliothek",
    CosIcon: GalleryButton,
  },
  {
    link: "Impressum",
    CosIcon: imprButton,
  },
  {
    link: "Preise",
    options: { screen: "PreiseCheck" },
    CosIcon: PreiseButton,
  },
  {
    link: "AGB",
    CosIcon: AgbButton,
  },
  {
    link: "Datenschutz­",
    CosIcon: PrivacyButton,
  },
];

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: "#f6f5f0",
    // height: windowHeight,
  },
  image: {
    // flex: 1,
    // justifyContent: "center",
    margin: 10,
  },
  InviteRoot: {
    margin: 10,
    marginTop: "auto",
  },
  Invitetitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "300",
    marginBottom: 10,
    textTransform: "capitalize",
    textAlign: "center",
  },
  InviteButton: {
    flexGrow: 1,
    // alignSelf: "flex-start",
    backgroundColor: colors.primary,
    overflow: "hidden",
    borderRadius: 12,
    shadowColor: colors.text,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 3,
    marginRight: 5,
  },
  InviteButtonText: {
    fontFamily: "Manrope_700Bold",
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    padding: 15,
    // paddingRight: 40,
    // paddingLeft: 40,
  },
  InviteButtonLogin: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: colors.primary,
    alignSelf: "flex-start",
    backgroundColor: colors.bg,
    overflow: "hidden",
    borderRadius: 12,
    shadowColor: colors.text,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 3,
  },
  InviteButtonTextLogin: {
    fontFamily: "Manrope_700Bold",
    color: colors.primary,
    fontSize: 15,
    textAlign: "center",
    padding: 15,
    // paddingRight: 40,
    // paddingLeft: 40,
  },
  callContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",

    backgroundColor: colors.bg,
    // borderWidth: 2,
    // borderColor: colors.primary,
    height: 60,
    borderRadius: 15,
  },
  callText: {
    // fontFamily: "Inter_700Bold",
    color: colors.text,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  rightIocn: {
    width: 70,
    marginRight: 20,
    height: "130%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 11,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    // borderRightWidth: 2,
    // borderColor: colors.primary,
  },
  adsContainer: {
    display: "flex",
    marginBottom: 25,
    backgroundColor: colors.bg,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  bigButton: {
    width: "100%",
    height: windowWidth * 0.5,
    flexBasis: "45%",
    elevation: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // display: "flex",
    // justifyContent: "space-evenly",
    // alignItems: "center",
    // marginBottom: 10,
  },
  butText: {
    fontFamily: "Inter_700Bold",
    margin: 5,
    color: colors.primary,
    fontSize: 12,
    textAlign: "center",
  },

  adImg: {
    width: windowWidth,
    height: windowHeight * 0.3,
    resizeMode: "contain",
  },
  cont: {
    height: windowHeight,
    width: windowWidth,
  },
  gridItems: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
});
