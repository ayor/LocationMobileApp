import React, { useLayoutEffect } from 'react';
import { createDrawerNavigator, 
    DrawerContentScrollView, 
    DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import DashboardScreen from '../DashboardScreen/DashboardScreen';
import { useDispatch } from "react-redux";
import {Login} from '../../../store/actions/actions'
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => (
    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
            <DrawerItem 
            label="Logout"
            inactiveTintColor="red"
            icon={({focused, color, size})=><Icon name={!focused ? "log-out-outline": "log-out"} size={size} color={color}/>}
            onPress={()=> props.Logout()}
            />
    </DrawerContentScrollView>
)

const HomeScreen = ({navigation}) => {
    const dispatch = useDispatch();

    const Logout = ()=>{
        dispatch(Login(false))
        navigation.popToTop();
    }

    return(
    <Drawer.Navigator drawerContent={props=> <CustomDrawerContent Logout={Logout} {...props}/>}>
        <Drawer.Screen
            component={DashboardScreen}
            name="Dashboard"
            options={() => ({
                title: "Share/Find Place",
                headerTitleStyle: {
                    textAlign: 'center',
                }
            })}
        />
    </Drawer.Navigator>
)};

export default HomeScreen;

