import React, { useContext, useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { HelperText, TextInput } from "react-native-paper";
import { AirbnbRating } from "react-native-ratings";
import { colors, theme, windowWidth } from "../../assets/colors";
import axios from "../../tools/Apis";
import { UserContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";

export default function AddReview({ navigation }) {
  const { IsLogged, setisLoading } = useContext(UserContext);
  const [ratingScore, setratingScore] = useState(5);
  const [comment, setcomment] = useState("");
  const handleChange = (text) => {
    if (400 - comment.length > 0) setcomment(text);
    if (comment.length > text.length) setcomment(text);
  };

  const SubmitReview = async () => {
    try {
      if (comment !== "" && ratingScore >= 1) {
        setisLoading(true);
        const res = await axios.post(
          "/api/v1/reviews/",
          {
            text: comment,
            rating: ratingScore,
          },
          {
            headers: {
              Authorization: `Bearer ${IsLogged.token}`,
            },
          }
        );
        setisLoading(false);
        navigation.navigate("Reviews");
      } else Alert.alert("error", "Review Comment *");
    } catch (error) {
      setisLoading(false);
      Alert.alert(
        "error",
        error?.response?.data?.error ?? "Server Error Try Again",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("Reviews"),
            style: "cancel",
          },
        ]
      );
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""} style={{flex: 1}}>
      <MenuButton
        isBack={true}
        btnColor={colors.text}
        navigation={navigation}
        title="Bewertungen abgeben"
      />
      <ScrollView style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.cont}
          onPress={() => {
            Keyboard.dismiss();
          }}
          activeOpacity={1}
        >
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.score}>{ratingScore}</Text>
            <Text
              style={{
                ...styles.score,
                opacity: 0.4,
                fontSize: windowWidth * 0.03,
                alignSelf: "flex-end",
              }}
            >
              {" "}
              / 5.0
            </Text>
          </View>
          <AirbnbRating
            count={5}
            // ratingCount={ratingScore}
            // value={ratingScore}
            onFinishRating={(rating) => setratingScore(rating)}
            reviews={["Terrible", "Bad", "Meh", "OK", "Good"]}
            defaultRating={5}
            size={windowWidth / 8 - 15}
            selectedColor="rgb(250, 175, 0)"
            showRating={false}
          />
          <Text style={styles.label}>Bewertung abgeben :</Text>
          <TextInput
            style={styles.input}
            theme={theme}
            onChangeText={(text) => handleChange(text)}
            value={comment}
            multiline={true}
            numberOfLines={10}
            x
            //   disabled={50 - comment.length <= 0}
            mode="outlined"
            keyboardType="default"
            activeOutlineColor={colors.primary}
            outlineColor="rgba(0,0,0,0.2)"
            selectionColor={colors.primary}
          />
          <HelperText style={{ marginBottom: 0, marginLeft: "auto" }}>
            {400 - comment.length} caractere left
          </HelperText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={SubmitReview}>
          <Text
            style={{
              color: colors.bg,
              fontFamily: "Manrope_700Bold",
              fontSize: 16,
            }}
          >
            abgeben
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    margin: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: "Manrope_700Bold",
    marginTop: 30,
    marginBottom: 5,
  },
  addButton: {
    // position: "absolute",
    // bottom: 0,
    // marginBottom:'auto',
    alignSelf: "center",
    backgroundColor: colors.primary,
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    margin: 5,
  },
  score: {
    fontSize: windowWidth * 0.05,
    textAlign: "center",
    fontFamily: "Inter_700Bold",
    marginVertical: 5,
  },
});
