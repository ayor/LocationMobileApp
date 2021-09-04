import React, { useState } from "react";
import { View, StyleSheet, ImageBackground } from 'react-native';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeaderText from '../../components/UI/HeaderText/HeaderText';
import MainText from '../../components/UI/MainText/MainText';
import backgroundImage from '../../assets/background.jpg';
import CustomButton from "../../components/UI/CustomButton/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../../store/actions/actions";

const Auth = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const signInHandler = () => {
        navigation.navigate("Home", { username: username });
        dispatch(Login(true)); 
    }
    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.AuthContainer}>
                <MainText>
                    <HeaderText style={styles.textHeader}>Please Log In</HeaderText>
                </MainText>
                <View style={styles.InputContainer}>
                    <DefaultInput
                        placeholder="Your username"
                        style={styles.input}
                    // value={username}
                    // textContentType="username"
                    // onChangeText={(text)=> setUsername(text)}
                    />
                    <DefaultInput placeholder="Your E-mail address"
                        style={styles.input}
                    />
                    <DefaultInput
                        style={styles.input}
                        placeholder="Your Password"
                    // secureTextEntry={true}
                    // value={password}
                    // textContentType="password"
                    // onChangeText={(text)=> setPassword(text)}
                    />

                    <CustomButton onPress={signInHandler} color="#99BFF0">
                        Submit
                    </CustomButton>
                    <CustomButton onPress={signInHandler} color="#888888">
                        Sign Up
                    </CustomButton>

                </View>

            </View>
        </ImageBackground>
    )
};


const styles = StyleSheet.create({
    AuthContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundImage: {
        flex: 1
    },
    InputContainer: {
        width: "80%",
    },
    textHeader: {
        // color: "#3CB371"
    },
    input: {
        borderColor: "#ddd",
        borderWidth: 1,
        backgroundColor: "#eee"
    },
    Buttons: {
        width: "50%",
        padding: 6,
        margin: 6
    }

})
export default Auth;