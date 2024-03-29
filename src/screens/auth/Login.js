import React from "react";
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View, Image, TextInput } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { AntDesign } from "@expo/vector-icons";

import LoadingButton from "../../components/shared/LoadingButton"
import ErrorText from "../../components/shared/ErrorText"

import useLogin from "../../hooks/useLogin";

import COLORS from "../../constants/COLORS"

const LoginScreen = () => {

  const { isLoading, formikLogin } = useLogin()

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } = formikLogin

  return (
    <KeyboardAwareScrollView style={styles.screen}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <>
          <Image
            source={require("../../../assets/images/illustrations/login.png")}
            style={styles.image}
          />
          <View style={styles.form}>
            <View style={styles.containerTextInput}>
              <AntDesign
                name="user"
                size={32}
                color={COLORS.secondary}
                style={styles.icon}
              />
              <TextInput
                autoCapitalize="none"
                placeholder="e-mail"
                placeholderTextColor={COLORS.secondary}
                keyboardType="email-address"
                style={styles.textInput}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                returnKeyType="next"
              />
            </View>
            <ErrorText error={errors.email} touched={touched.email} />
            <View style={styles.containerTextInput}>
              <AntDesign
                name="lock"
                size={32}
                color={COLORS.secondary}
                style={styles.icon}
              />
              <TextInput
                placeholder="password"
                secureTextEntry={true}
                placeholderTextColor={COLORS.secondary}
                style={styles.textInput}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                returnKeyType="next"
              />
            </View>
            <ErrorText error={errors.password} touched={touched.password} />
          </View>
          <LoadingButton
            text="Login"
            color={Object.entries(errors).length === 0 ? COLORS.green : COLORS.red}
            handleSubmit={handleSubmit}
            loading={isLoading}
          />
        </>
      </TouchableWithoutFeedback >
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.main
  },
  image: {
    marginTop: hp("5%"),
    height: wp("50%"),
    width: wp("52"),
    alignSelf: "center"
  },
  form: {
    marginTop: hp("8%"),
    marginBottom: hp("3%")
  },
  containerTextInput: {
    marginTop: hp("2%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    paddingEnd: 10
  },
  textInput: {
    height: hp("5%"),
    width: wp("60%"),
    color: COLORS.white,
    paddingLeft: wp("3%"),
    fontSize: hp("2%"),
    fontFamily: "open-sans-regular",
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.secondary
  }
});

export default LoginScreen;
