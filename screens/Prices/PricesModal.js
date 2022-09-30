import { Ionicons } from "@expo/vector-icons";
import React, { useContext, useEffect, useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../assets/colors";
import { PricesContext } from "../../tools/Context";

export default function PricesModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const { ClosePriceInfo, priceData, ActivePrice } = useContext(PricesContext);

  useEffect(() => {
    if (
      ActivePrice > -1 &&
      priceData.categories &&
      priceData.categories[ActivePrice]
    )
      setModalVisible(true);
    else setModalVisible(false);
  }, [ActivePrice]);

  if (priceData.categories && priceData.categories[ActivePrice])
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={ClosePriceInfo}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Header />
            <Text style={styles.subName}>
              {priceData.categories[ActivePrice].subName}
            </Text>
            <PriceHandler />
            <Text style={styles.subdesc}>
            {priceData.categories[ActivePrice].desc}
            </Text>
          </View>
        </View>
      </Modal>
    );
  else return null;
}

const PriceHandler = () => {
  const { priceData, ActivePrice } = useContext(PricesContext);

  if (priceData.categories[ActivePrice].price)
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Text style={styles.euro}>€</Text> */}
        <Text style={styles.price}>
          {priceData.categories[ActivePrice].price}
        </Text>
        <Text style={styles.kg}>€/Kg</Text>
      </View>
    );
  else return null;
};

const Header = () => {
  const { ClosePriceInfo, priceData, ActivePrice } = useContext(PricesContext);
  return (
    <View style={styles.container}>
      <Text style={styles.tname}>
        {priceData.categories[ActivePrice].Cname}
      </Text>
      <TouchableOpacity onPress={ClosePriceInfo}>
        <Ionicons name="close" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 0,
  },
  tname: {
    fontFamily: "Inter_900Black",
    color: colors.text,
    fontSize: 18,
    marginBottom: 25,
    // opacity: 0.7,
    // textTransform: "capitalize",
  },
  subName: {
    fontFamily: "Inter_600SemiBold",
    color: colors.text,
    fontSize: 15,
    textAlign: "center",
  },
  subdesc: {
    fontFamily: "Inter_300Light",
    color: colors.text,
    lineHeight: 25,
    fontSize: 15,
    marginTop: 15,
    textAlign: "left",
  },
  price: {
    fontFamily: "Manrope_800ExtraBold",
    color: colors.text,
    textAlign: "center",
    marginHorizontal: 2,
    fontSize: 40,
  },
  euro: {
    fontFamily: "Manrope_800ExtraBold",
    color: colors.text,
    textAlign: "center",
    opacity: 0.5,
    fontSize: 20,
    alignSelf: "flex-start",
  },
  kg: {
    fontFamily: "Manrope_800ExtraBold",
    color: colors.text,
    textAlign: "center",
    opacity: 0.5,
    fontSize: 20,
    alignSelf: "flex-end",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:colors.BlackTransBg    
  },
  modalView: {
    padding: 20,
    width: "95%",
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  modalText: {
    marginBottom: 15,
    // textAlign: "center",
  },
});
