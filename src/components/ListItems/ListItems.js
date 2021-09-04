import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem/ListItem';

const ListItems = ({ places, onSelectHandler }) => {
    return (
        <FlatList
            data={places}
            renderItem={(info) => (
                <ListItem 
                    clicked={onSelectHandler.bind(this, info.item.key)}
                    placeName={info.item.name}
                    image={info.item.image} />
            )}
        />
    )
};


export default ListItems;