import React from "react";
import { StyleSheet, View, StatusBar, Image, Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import FormLogin from "../components/login/Form";
import TouchableText from "../components/TouchableText";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Text style={styles.text}>LiLo App</Text>
      <Image
        style={styles.image}
        source={require("../assets/images/scuola.jpeg")}
      />
      <FormLogin />
      <View style={styles.buttons}>
        <Text style={styles.textFooter}>Non hai ancora un account?</Text>
        <TouchableText
          action={() => navigation.navigate("SignUp")}
          text="Registrati"
          textStyle={{
            fontSize: 20,
            color: "#009fff",
            fontFamily: "open-sans-regular",
            textDecorationLine: "underline"
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: wp("100%"),
    height: hp("35%"),
    paddingTop: hp("5%"),
    paddingBottom: hp("5%"),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  text: {
    fontSize: hp("7%"),
    alignSelf: "center",
    color: "#009fff",
    paddingTop: hp("8%"),
    marginBottom: hp("3%"),
    fontFamily: "open-sans-regular"
  },
  image: {
    height: hp("13%"),
    width: wp("85%"),
    marginTop: hp("3%"),
    alignSelf: "center"
  },
  buttons: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: hp("5%")
  },
  textFooter: {
    fontFamily: "open-sans-regular"
  }
});

export default LoginScreen;
