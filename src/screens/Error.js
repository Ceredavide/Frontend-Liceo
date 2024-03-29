import React from "react"
import {
    StyleSheet,
    View,
    Text
} from "react-native";

import LottieView from 'lottie-react-native';

import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from "react-native-responsive-screen";

import Button from "../components/shared/MyButton"

import COLORS from '../constants/COLORS'

const Error = ({ reload, text }) => {
    return (
        <View style={{ flex: 1 }}>
            <LottieView
                autoPlay
                loop={false}
                style={styles.lottie}
                source={require('../../assets/lottie/error.json')}
            />
            <Text style={styles.text}>{text || "Qualcosa è andato storto."}</Text>
            <Button text="Riprova" action={reload} color="red" />
        </View>
    )
}

const styles = StyleSheet.create({
    lottie: {
        width: hp('45%'),
        height: hp('45%')
    },
    text: {
        color: COLORS.white,
        fontFamily: 'open-sans-regular',
        fontSize: hp('3%'),
        alignSelf: "center",
        textAlign: 'center',
        width: wp('80%'),
        marginBottom: hp('2%')
    }
})

export default Error