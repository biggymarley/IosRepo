import { Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { colors, windowWidth } from "../../assets/colors";
import { submitted, uploadId } from "../../assets/IconFactory";
import { ToDuContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";
export default function UploadId({ navigation }) {
  const ref = useRef({ current: {} });
  const isFocused = useIsFocused();
  // //console.log(isFocused);
  const { formik } = useContext(ToDuContext);

  // useEffect(() => {
  //   if (isFocused === true && ref?.current) ref?.current?.play();
  // }, [isFocused]);

  // useFocusEffect(
  //   // () => ref?.current?.play()
  //   //   // //console.log(ref.current.play() ?? "dd")
  //   //   if (isFocused === true) ref.current?.play();
  //   //   // return () => null;
  //   // }, [isFocused])
  // );

  const CheckIds = () => {
    if (
      !formik?.values?.mfaceId ||
      !formik?.values?.mbackId ||
      formik.values.mfaceId === "" ||
      formik.values.mbackId === ""
    ) {
      Alert.alert(
        "",
        "Ausweiskopien des Absenders in Marokko sind erforderlich. Fügen Sie diese ihrem Abholungsauftrag bei. Vielen Dank!"
      );
      return;
    }
    navigation.navigate("Rules");
  };

  return (
    <>
      <MenuButton
        isBack={true}
        btnColor={colors.text}
        navigation={navigation}
        textSize={14}
        isRight={true}
        title={"Dokumenten Upload"}
      />
      <ScrollView>
        {formik.values.mfaceId || formik.values.mbackId ? (
          <PreviewContainer />
        ) : (
          <View style={styles.cont}>
            <LottieView
              ref={ref}
              loop={false}
              autoPlay
              source={uploadId}
              speed={0.7}
            />
          </View>
        )}
        <Upload />
      </ScrollView>
      <TouchableOpacity style={styles.next} onPress={CheckIds}>
        <Text style={styles.nextText}>Weiter</Text>
        <FontAwesome5
          name="angle-right"
          size={17}
          color="#fff"
          style={{ marginTop: 3 }}
        />
      </TouchableOpacity>
    </>
  );
}

const PreviewContainer = () => {
  const flatRef = useRef();
  const { formik, deleteId } = useContext(ToDuContext);
  const [data, setdata] = useState([]);

  useEffect(() => {
    let res = [];
    res = [formik?.values?.mfaceId, formik?.values?.mbackId].filter(
      (e) => e !== ""
    );
    let objar = res.map((e) => {
      return { item: e, deleteId: deleteId };
    });
    setdata([...objar]);
  }, [formik?.values?.mfaceId, formik?.values?.mbackId]);

  return (
    <View style={styles.adsContainer}>
      <Carousel
        ref={flatRef}
        data={data}
        renderItem={AdsImg}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        enableSnap={true}
        loop={true}
        autoplay={true}
        autoplayInterval={2000}
      />
    </View>
  );
};
const AdsImg = ({ item }) => {
  return (
    <View>
      <TouchableOpacity
        style={{ marginLeft: "auto", marginRight: 20 }}
        onPress={() => item.deleteId(item.item)}
      >
        <MaterialIcons name="delete" size={30} color="black" />
      </TouchableOpacity>
      <Image source={{ uri: item.item }} style={styles.adImg} />
    </View>
  );
};
const Upload = () => {
  const { pickImageLibrary, formik, loading } = useContext(ToDuContext);
  const refR = useRef({});
  const refL = useRef({});

  // useFocusEffect(
  //   React.useCallback(() => {
  //     if (formik.values.mfaceId !== "") {
  //       refR.current?.play();
  //     }
  //     if (formik.values.mbackId !== "") {
  //       refL.current?.play();
  //     }

  //     return () => null;
  //   }, [formik.values.mfaceId, formik.values.mbackId])
  // );
  const isFocused = useIsFocused();
  useFocusEffect(
    React.useCallback(() => {
      if (formik.values.mfaceId !== "") {
        refR.current?.play();
      }
      if (formik.values.mbackId !== "") {
        refL.current?.play();
      }
      return () => null;
    }, [isFocused, formik.values.mfaceId, formik.values.mbackId])
  );

  // useEffect(() => {
  //   if (formik.values.mfaceId !== "") {
  //     refR.current?.play();
  //   }
  //   if (formik.values.mbackId !== "") {
  //     refL.current?.play();
  //   }
  // }, [isFocused]);
  return (
    <>
      <View style={styles.uploadContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => pickImageLibrary("mfaceId")}
        >
          {formik.values.mfaceId !== "" ? (
            <LottieView source={submitted} autoPlay loop={false} ref={refR} />
          ) : (
            <>
              <Text
                style={{
                  marginBottom: 15,
                  fontFamily: "Inter_700Bold",
                  color: colors.bg,
                  fontSize: 18,
                }}
              >
                Vorderseite
              </Text>
              <Feather name="upload" size={50} color={colors.bg} />
            </>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => pickImageLibrary("mbackId")}
        >
          {formik.values.mbackId !== "" ? (
            <LottieView source={submitted} loop={false} autoPlay ref={refL} />
          ) : (
            <>
              <Text
                style={{
                  marginBottom: 15,
                  fontFamily: "Inter_700Bold",
                  color: colors.bg,
                  fontSize: 18,
                }}
              >
                Rückseite
              </Text>
              <Feather name="upload" size={50} color={colors.bg} />
            </>
          )}
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator size={45} color={colors.primary} />}
    </>
  );
};

const styles = StyleSheet.create({
  uploadContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    flexBasis: "45%",
    width: 150,
    height: 150,
    margin: 5,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cont: {
    display: "flex",
    alignItems: "center",
    margin: 15,
    backgroundColor: colors.primaryTrans,
    height: windowWidth * 0.8,
    overflow: "hidden",
    borderRadius: 12,
  },
  next: {
    backgroundColor: colors.primary,
    marginTop: "auto",
    padding: 15,
    paddingHorizontal: windowWidth * 0.2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 15,
    marginBottom: 10,
  },
  nextText: {
    fontFamily: "Inter_700Bold",
    color: "white",
    fontSize: 17,
    marginRight: 15,
  },
  adImg: {
    width: windowWidth,
    height: windowWidth,
    resizeMode: "contain",
  },
});
