import LottieView from "lottie-react-native";
import moment from "moment";
import "moment/locale/de";
import React, { useContext } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Divider, ProgressBar } from "react-native-paper";
import { AirbnbRating } from "react-native-ratings";
import { colors, windowWidth } from "../../assets/colors";
import { logoicon, star } from "../../assets/IconFactory";
import { BaseURL, GetFileUrl } from "../../tools/Apis";
import { ReviewsContext } from "../../tools/Context";
import MenuButton from "../../tools/MenuButton";

export default function Reviews({ navigation }) {
  const { StarsData } = useContext(ReviewsContext);
  moment.locale("de");

  return (
    <>
      <MenuButton
        btnColor={colors.text}
        title={"Bewertungen"}
        navigation={navigation}
        rightBtn={<AddreviewButton navigation={navigation} />}
      />
      <ScrollView>
        <View>
          <Text style={styles.score}>{StarsData.avrageRating}</Text>
          <AirbnbRating
            count={5}
            ratingCount={StarsData.avrageRating}
            reviews={["Terrible", "Bad", "Meh", "OK", "Good"]}
            defaultRating={StarsData.avrageRating}
            readonly={true}
            isDisabled={true}
            size={windowWidth / 8 - 15}
            selectedColor="rgb(250, 175, 0)"
            showRating={false}
          />
          <Text style={styles.total}>
            basierend auf {StarsData.length} abgegebenen Bewertungen
          </Text>
          <RScores />
          <Divider />
        </View>
        <View style={{ paddingBottom: 0 }}>
          <AllReviews />
        </View>
      </ScrollView>
      {/* <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddReview")}
      >
        <Text style={{ color: colors.bg, fontFamily: "Manrope_700Bold" }}>
          Bewertung abgeben
        </Text>
      </TouchableOpacity> */}
    </>
  );
}

const AllReviews = () => {
  const { ReviewsData } = useContext(ReviewsContext);
  const url = `${BaseURL}${GetFileUrl}/`;

  return (
    <View style={{ margin: 10 }}>
      {ReviewsData.reviews.map((review, index) => (
        <View key={index}>
          <View style={{ marginVertical: 10 }}>
            <View style={styles.head}>
              <Image
                source={
                  review?.user?.photo === "no-photo"
                    ? logoicon
                    : { uri: `${url}${review?.user?.photo}` }
                }
                resizeMode="cover"
                style={styles.avatar}
              />
              <View>
                <Text style={{ fontFamily: "Manrope_700Bold", fontSize: 14 }}>
                  {review?.user?.firstName.slice(0, 2) || "Us"}******{" "}
                  {review?.user?.lastName.slice(0, 2) || "Us"}******
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <AirbnbRating
                    count={5}
                    defaultRating={review.rating}
                    ratingCount={review.rating}
                    readonly={true}
                    isDisabled={true}
                    size={20}
                    selectedColor="rgb(250, 175, 0)"
                    showRating={false}
                  />
                  <Text
                    style={{
                      fontFamily: "Manrope_700Bold",
                      fontSize: 16,
                      marginLeft: 5,
                    }}
                  >
                    {review.rating}
                  </Text>
                </View>
              </View>
                <Text
                  style={{
                    fontSize: windowWidth * 0.035,
                    fontFamily: "Inter_400Regular",
                    marginLeft:"auto",
                    opacity:.4

                  }}
                >
                  {moment(review.createdAt).fromNow()}
                </Text>
            </View>
            <Text style={styles.comment}>{review.text}</Text>
          </View>
          {ReviewsData.reviews.length > index + 1 && <Divider />}
        </View>
      ))}
    </View>
  );
};

const RScores = () => {
  const { StarsData } = useContext(ReviewsContext);
  return (
    <View style={{ display: "flex", width: "100%", padding: 10 , justifyContent:'center'}}>
      {starsScore.map((star, index) => (
        <View style={styles.container} key={index}>
          <Text style={styles.starname}>{star.label}</Text>
          <ProgressBar
            progress={
              Math.round(StarsData.result[star.prog] / StarsData.length || 0) ??
              0
            }
            color={"rgb(250, 175, 0)"}
            style={{
              width: windowWidth * 0.67,
              // flexGrow:1,
              height: 8,
              borderRadius: 5,
            }}
          />
          <Text style={{ ...styles.starname, marginLeft: 6 }}>
            {Math.round(
              (StarsData.result[star.prog] / StarsData.length || 0) * 100
            ) ?? 0}{" "}
            %
          </Text>
        </View>
      ))}
    </View>
  );
};

const AddreviewButton = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("AddReview")}>
      {/* <MaterialCommunityIcons
        name="star"
        size={30}
        color={"rgb(250, 175, 0)"}
      /> */}
        <LottieView
            source={star}
            speed={0.5}
            resizeMode="contain"
            autoPlay={true}
            loop={true}
            style={{ width: 40, height: 40 }}
          />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 12,
    margin: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: colors.primaryTrans,
    borderRadius: 40 / 2,
    marginRight: 15,
  },
  comment: {
    fontFamily: "Inter_400Regular",
    lineHeight: 22,
    opacity: 0.6,
  },
  score: {
    fontSize: windowWidth * 0.12,
    textAlign: "center",
    fontFamily: "Inter_700Bold",
    marginVertical: 5,
  },
  head: {
    display: "flex",
    flexDirection: "row",
    // alignItems: "space-between",
    width: "100%",
    marginBottom: 25,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 5,
  },
  total: {
    fontSize: windowWidth * 0.038,
    textAlign: "center",
    fontFamily: "Inter_300Light",
    marginVertical: 5,
    opacity: 0.5,
  },
  starname: {
    width: 65,
    fontSize: 12,
    textAlign: "left",
    fontFamily: "Manrope_400Regular",
    // marginVertical: 5,
    // marginRight: 10,
    opacity: 0.5,
  },
});

const starsScore = [
  {
    label: "5 Sterne",
    prog: "fiveStar",
  },
  {
    label: "4 Sterne",
    prog: "fourStar",
  },
  {
    label: "3 Sterne",
    prog: "threeStar",
  },
  {
    label: "2 Sterne",
    prog: "twoStar",
  },
  {
    label: "1  Stern",
    prog: "oneStar",
  },
];
