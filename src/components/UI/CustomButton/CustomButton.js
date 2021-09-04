import React from 'react';
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform, View,
    StyleSheet, Text
} from "react-native";

const CustomButton = props => {
    const content = (
        <View style={[styles.button, { 
            backgroundColor: props.color
             }]}>
            <Text style={styles.BtnText}>{props.children}</Text>
        </View>
    );

    if (Platform.OS === "android") {
        return (
            <TouchableNativeFeedback onPress={props.onPress}>
                {content}
            </TouchableNativeFeedback>
        )
    };
    return (
        <TouchableOpacity onPress={props.onPress}>
            {content}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        padding: 8,
        width: "60%",
        alignSelf: "center",
        margin: 5,
        borderWidth: 1,
        borderColor: "#303030",
        borderRadius: 5,
        textAlign: 'center'
    },
    BtnText: {
        textAlign: 'center',
        color: "white"
    }
})

export default CustomButton;