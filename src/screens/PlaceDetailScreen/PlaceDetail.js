import React, { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deletePlace, selectPlace } from '../../../store/actions/actions';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



const PlaceDetail = ({ route, navigation }) => {
    const { key } = route.params;
    let selectedPlace = null
    const selPlace = useSelector(({ places: { places } }) => places.find(place => place.key === key));
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        if(selPlace){
            navigation.setOptions({
                title: selPlace.name 
            })
        }
    }, [navigation, selPlace])

    const deletePlaceHandler = () => {
        dispatch(deletePlace(key));
        navigation.pop(); 
    }

    if (selPlace) {
        selectedPlace = (
            <View>
                <Image style={styles.PlaceDetailImage} source={selPlace.image} />
                <Text style={styles.placeName}>{selPlace.name}</Text>
            </View>
        )
    }

    return (

        <View style={styles.container}>
            {selectedPlace}
            <View style={styles.buttons}>
                <TouchableOpacity onPress={deletePlaceHandler}>
                    <Icon name="ios-trash"
                        size={30} color="blue" />
                </TouchableOpacity>
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    PlaceDetailImage: {
        width: "100%",
        height: 200,
    },
    placeName: {
        fontWeight: "bold",
        fontSize: 28,
        textTransform: "capitalize",
        color: "#f34e67",
        textAlign: "center"
    },
    buttons: {
        width: "100%",
        margin: 10,
        alignItems: 'center'
    }
})

export default PlaceDetail;