import React from "react";
import { View, Image, StyleSheet, Button } from "react-native";
import img from "../../assets/download.jpeg";
import Placeholder from "../PlaceHolder/Placeholder";

const ImageComp = props => (
    <View style={styles.container}>
        <Placeholder>
            <Image source={img} style={styles.Image} />
        </Placeholder>
        <Button onPress={props.onPress} title="Select Image" />
    </View>
);

const styles = StyleSheet.create({
    container:{
        width: "100%",
        alignItems: "center"
    },
    Image: {
        width: "100%",
        height: "100%"
    }
});


export default ImageComp;