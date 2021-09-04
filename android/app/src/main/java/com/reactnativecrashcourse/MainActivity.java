package com.reactnativecrashcourse;

import com.facebook.react.ReactActivity;
//react-native navi
// import com.reactnativenavigation.controllers.SplashActivity;

// import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends ReactActivity {
  // public class MainActivity extends NavigationActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

   //react-native-navigation implementation
  @Override
  protected String getMainComponentName() {
    return "ReactNativeCrashCourse";
  }
}
