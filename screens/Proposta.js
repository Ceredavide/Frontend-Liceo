import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import FormProposta from "../components/proposta/Form";

const PropostaScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.card} showsVerticalScrollIndicator={false}>
        <FormProposta navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009fff"
  },
  card: {
    flex: 1,
    padding: 5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#F1F5F9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  },
});

export default PropostaScreen;
