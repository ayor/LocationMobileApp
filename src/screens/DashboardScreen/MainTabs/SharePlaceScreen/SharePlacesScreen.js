





import React, { useState } from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { setPlaces } from "../../../../../store/actions/actions";
import DefaultInput from "../../../../components/UI/DefaultInput/DefaultInput";
import SharePlaceHeader from '../../../../components/SharePlace/Header';
import ImageComp from '../../../../components/SharePlace/ImageComp';
import MapComp from '../../../../components/SharePlace/MapComp';

const SharePlace = ({ route, navigation }) => {
    const [place, setPlace] = useState("");
    const dispatch = useDispatch();

    const onPlaceSubmitHandler = () => {
        if (place.trim() === "") {
            return;
        };

        dispatch(setPlaces({
            key: Math.random(),
            name: place,
            image: { uri: 'https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg' }
        }))
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                    <SharePlaceHeader />
                    <ImageComp  />
                    <MapComp  />
                    <DefaultInput 
                    placeholder="Place name" 
                    style={styles.Input} 
                    onChangeText={(text) => setPlace(text)}
                    />
                    <Button title="Share the place" onPress={onPlaceSubmitHandler} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center'
    },
    Input: {
        width: "80%"
    }
});


export default SharePlace;