import React, {useLayoutEffect } from 'react';
import SharePlaceScreen from './MainTabs/SharePlaceScreen/SharePlacesScreen';
import FindPlaceScreen from './MainTabs/FindPlaceScreen/FindPlacesScreen';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

const DashboardScreen = ({route, navigation}) => {
  const placeCount = useSelector(state => state.places.places.length); 
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator screenOptions={
      ({ route }) => ({
        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Share Places") {
            iconName = focused ? "share" : "ios-information-circle-outline";
          } else if (route.name === 'Find Places') {
            iconName = focused ? 'search' : 'ios-list';
          }

          return <Icon name={iconName} size={size} color={color} />
        },
      })
    }
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",

      }}

    >
      <Tabs.Screen
        name="Share Places"
        component={SharePlaceScreen}
        
      />
      <Tabs.Screen
        name="Find Places"
        component={FindPlaceScreen}
        options={{tabBarBadge: placeCount}} />
    </Tabs.Navigator>
  )
}

export default DashboardScreen;