
import { AppRegistry } from 'react-native';
//  import { Navigation } from "react-native-navigation";
 import App from './App';
 import React from 'react';
 import configStore from './store/configureStore';
 
 import { Provider } from 'react-redux';
 import { name as appName } from './app.json';
 
 const store = configStore();
 
 const Application = () =>(
     <Provider store={store}>
         <App/>
     </Provider>
 );
 
 AppRegistry.registerComponent(appName,()=> Application);

// Navigation.registerComponent('com.myApp.WelcomeScreen', () => Application);
// Navigation.events().registerAppLaunchedListener(() => {
//    Navigation.setRoot({
//      root: {
//        stack: {
//          children: [
//            {
//              component: {
//                name: 'com.myApp.WelcomeScreen'
//              }
//            }
//          ]
//        }
//      }
//   });
// });
