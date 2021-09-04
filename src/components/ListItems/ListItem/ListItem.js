import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ListItem = props => (
    <TouchableOpacity onPress={props.clicked} >
    <View style={styles.listContainer} >
        <Image source={props.image} style={styles.listImage}/>
        <Text style={styles.listText}>{props.placeName}</Text>
    </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listContainer:{
        width:"100%",
        padding:10,
        margin:5,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: 'center'
    },
    listImage:{
        width: 30,
        height: 30,
        marginRight: 10
    },
    listText:{
        color:"tomato",
    }
})

export default ListItem;