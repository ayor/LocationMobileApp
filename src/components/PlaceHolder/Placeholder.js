import React from "react";
import { View, StyleSheet } from "react-native";


const Placeholder = (props) => (
    <View style={styles.Previews}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    Previews: {
        margin: 8,
        width: "80%",
        height: 200,
        borderWidth: 1,
        backgroundColor: "#eee",
        borderColor: "black",
    }
});

export default Placeholder;