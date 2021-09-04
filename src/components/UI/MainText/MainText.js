import React from "react";
import { Text, StyleSheet } from "react-native";

const MainText = props => (
    <Text {...props} style={styles.MainText}>
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    MainText:{
        color: "black",
        backgroundColor: "transparent"
    }
});

export default MainText;