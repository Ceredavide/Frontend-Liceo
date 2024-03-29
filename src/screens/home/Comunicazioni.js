import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useSelector } from "react-redux"

import {
  widthPercentageToDP as wp
} from "react-native-responsive-screen";

import Screen from "../../components/shared/Screen"
import MyButton from "../../components/shared/MyButton";
import FloatingButton from "../../components/shared/FloatingButton"
import CardComunicazione from "../../components/comunicazioni/CardComunicazione"

import COLORS from "../../constants/COLORS"

const ComunicazioniScreen = ({ navigation }) => {
  const comunicazioni = useSelector(state => state.comunicazioni.comunicazioni)

  function renderItem({ item }) {
    return (
      <CardComunicazione
        comunicazione={item}
        navigation={navigation}
      />
    )
  }

  return (
    <Screen>
      <View style={styles.header}>
        <FloatingButton
          iconName="arrowleft"
          action={navigation.goBack}
          color={COLORS.white}
        />
        <MyButton
          action={() => navigation.navigate("FormComunicazione")}
          text="Nuova Comunicazione"
          color="#1ed15a"
          style={styles.button}
        />
      </View>
      <FlatList
        data={comunicazioni}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {
    width: wp("100%"),
    flexDirection: "row",
    alignItems: "center"
  },
  floatingButton: {
    alignSelf: "flex-start"
  },
  button: {
    marginLeft: wp("3.5%")
  }
});

export default ComunicazioniScreen;