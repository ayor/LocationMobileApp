
import React from "react";
import { TextInput, StyleSheet,View, Button } from "react-native";

const Input = ({text,changeHandler, placeSubmitHandler }) => (
    <View style={styles.inputView}>
    <TextInput
      style={styles.placeInput}
      value={text}
      placeholder={"An Awesome Place"}
      onChangeText={changeHandler}
    />
    <Button
      style={styles.placeButton}
      title="Add"
      color="#09920b"
      onPress={placeSubmitHandler}
    />
  </View>
);

const styles = StyleSheet.create({

    inputView: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    placeInput: {
      width: "70%",
      height: 40,
      color:"black",
      marginBottom: 20,
      borderBottomWidth: .8,
      borderBottomColor: "#ccc"
    },
    placeButton: {
      width: "30%",
    },
  })

export default Input;