import { FontAwesome5 } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../assets/colors";
import { emptyBox, logoicon, mandPng } from "../../assets/IconFactory";
import { BaseURL, GetFileUrl } from "../../tools/Apis";
import { TrackingContext, UserContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";

export default function History({ navigation }) {
  const { history } = useContext(TrackingContext);
  return (
    <>
      <MenuButton
        isBack={true}
        navigation={navigation}
        btnColor={colors.text}
        title="History"
        isRight={true}
      />
      {history.length > 0 ? (
        <MapHistoryOrders history={history} />
      ) : (
        <View style={{ flex: 1, marginTop: 15 }}>
          <LottieView
            source={emptyBox}
            loop={true}
            autoPlay
            speed={0.5}
            // ref={ref}
          />
        </View>
      )}
    </>
  );
}

export const MapHistoryOrders = ({ history }) => {
  const { userData } = useContext(UserContext);
  const url = `${BaseURL}${GetFileUrl}/`;

  return history.map((e, index) => (
    <View key={index} style={styles.historyCard}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          padding: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        <View style={styles.cont}>
          <Image
            source={
              userData?.photo === "no-photo"
                ? logoicon
                : { uri: `${url}${userData.photo}?${new Date()}` }
            }
            resizeMode="cover"
            style={styles.pic}
          />
          <Text style={styles.title}>Sender :</Text>
          <Text style={styles.value}>
            {e.lastName} {e.firstName}
          </Text>
        </View>
        <FontAwesome5
          name="angle-right"
          size={17}
          color="#fff"
          style={{ marginTop: 3 }}
        />
        <View
          style={{
            ...styles.cont,
            borderRightWidth: 2,
            borderRightColor: colors.bg,
          }}
        >
          <Image source={mandPng} resizeMode="cover" style={styles.pic} />
          <Text style={styles.title}>Reciver :</Text>
          <Text style={styles.value}>{e.recipient.name}</Text>
        </View>
      </View>
      <View style={{ ...styles.cont }}>
        <View>
          <Text style={styles.title}>Items:</Text>
          <Text style={styles.value}>{e.content}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.title}>Weight:</Text>
          <Text style={styles.value}>{e.wights}Kg</Text>
        </View>
      </View>
    </View>
  ));
};

const styles = StyleSheet.create({
  historyCard: {
    margin: 5,
    // padding: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.primary,
    elevation: 4,
  },
  cont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  pic: {
    width: 90,
    borderWidth: 2,
    borderColor: "#fff",
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  title: {
    fontFamily: "Manrope_800ExtraBold",
    color: colors.bg,
    fontSize: 14,
  },
  value: {
    fontFamily: "Manrope_600SemiBold",
    color: colors.bg,
    fontSize: 14,
  },
});
