import React from 'react';
import { Text, StyleSheet } from "react-native";

const HeaderText = props => (
    <Text {...props} style={[styles.HeaderText, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
    HeaderText: {
        fontSize: 28,
        fontWeight: 'bold'
    }
});

export default HeaderText;
