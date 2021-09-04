/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import AuthScreen from './src/screens/AuthScreen/AuthScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import PlaceDetailScreen from './src/screens/PlaceDetailScreen/PlaceDetail';
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={() => ({
        headerStyle: {
          backgroundColor: "#99BFF0",
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          color:"black"
        }
      })}>
        <Stack.Screen name="Auth"
          component={AuthScreen}
          options={{
            title: "Login/Signup"
          }} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation})=>{
            return{
            headerRight: () => (<TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer)}>
              <Icon name="menu" color="black" size={35}/>
          </TouchableOpacity>)
          }}}
        />
        <Stack.Screen
          name="PlaceDetail"
          component={PlaceDetailScreen}

        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

{/*
  */}
