import LottieView from "lottie-react-native";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { colors, windowWidth } from "../assets/colors";
import {
  kalrokLoading
} from "../assets/IconFactory";

const Loading = ({ isLoading }) => {
  return (
    <View style={styles.root}>
      <View style={styles.loadingCont}>
        {/* <Animatable.View
          animation="slideInRight"
          useNativeDriver={true}
          style={{ zIndex: 2 }}
        >
          <Image
            source={logoBlack}
            style={{ width: 100 }}
            resizeMode="contain"
          />
        </Animatable.View> */}
        <LottieView
          source={kalrokLoading}
          autoPlay
          loop={true}
          speed={0.9}
          style={{
            width: windowWidth,
          }}
          resizeMode="cover"
        />
          {/* <Animatable.View animation="zoomIn" useNativeDriver={true}> */}
            <Text style={styles.title}>KAL&ROK GmbH</Text>
          {/* </Animatable.View> */}
        {/* <LottieView  /> */}
      </View>
      <ActivityIndicator size={45} color={colors.primary} />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    zIndex: 9999,
    height: "100%",
    backgroundColor: colors.bg,
    display: "flex",
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingCont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    // fontFamily:'Inter_300Light',
    fontSize: 24,
    letterSpacing: 3,
    position: "relative",
    top: "-100%",
  },
});

export default Loading;
