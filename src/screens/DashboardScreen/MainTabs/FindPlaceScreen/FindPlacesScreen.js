import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  selectPlace
} from "../../../../../store/actions/actions";
import { View, StyleSheet } from 'react-native';
import ListItems from '../../../../components/ListItems/ListItems';



// import placeImage from './src/assets/tajmahal.jpeg';

const FindPlaces = ({ route, navigation }) => {
  // const { username } = route.params;
  const { places } = useSelector(state => state.places);

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarBadge: places.length,
      title: route.name
    });

  }, [navigation, places])

  const selectHandler = (key) => {
    navigation.push("PlaceDetail", {key: key})
  }


  return (
    <View style={styles.container}>
      <ListItems
        places={places}
        onSelectHandler={selectHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
  inputView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
})
export default FindPlaces;