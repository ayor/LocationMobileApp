import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Placeholder from "../PlaceHolder/Placeholder";


const MapComp = (props) => (
    <View style={styles.container}>
        <Placeholder>
            <Text>Map</Text>
        </Placeholder>
        <Button onPress={props.onPress} title="Locate Me" />
    </View>
);

const styles = StyleSheet.create({
    container:{
        width: "100%",
        alignItems: "center"
    },
})



export default MapComp;

