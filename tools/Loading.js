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
});

export default Loading;
