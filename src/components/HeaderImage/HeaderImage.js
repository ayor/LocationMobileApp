import React from 'react'; 
import headerImage from '../../assets/download.jpeg';
import { Image } from "react-native";

const HeaderImage = (props)=> (<Image source={headerImage} style={{height: 55, width: "100%"}} />);

export default HeaderImage; 