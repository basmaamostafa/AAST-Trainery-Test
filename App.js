import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Explore } from "./Component/Explore";
import Session from "./Component/Session";
import { AdvisorProfile } from "./Component/AdvisorProfile";
import Search from "./Component/Search";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Tutorial1 } from "./Component/Tutorials/Tutorialscreen1";
import { Tutorial2 } from "./Component/Tutorials/Tutorialscreen2";
import { Tutorial3 } from "./Component/Tutorials/Tutorialscreen3";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default class MyDrawer extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
        // drawerContent={props => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Explore" component={Explore} />
          <Drawer.Screen name="Search" component={Search} />
          <Drawer.Screen name="AdvisorProfile" component={AdvisorProfile} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
class App extends Component {
  render() {
    // return <Explore />;
    return (
      // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Explore"
          component={Explore}
          options={{
            header: () => {
              "none";
            },
          }}
        />
        <Stack.Screen
          name="AdvisorProfile"
          component={AdvisorProfile}
          options={{
            header: () => {
              "none";
            },
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            header: () => {
              "none";
            },
          }}
        />
        <Stack.Screen name="Career Coaching" component={Session} />
      </Stack.Navigator>
      /* <Drawer.Navigator>
          <Drawer.Screen name="Career Coaching" component={Session} />
          <Drawer.Screen name="Search" component={Search} />
          <Drawer.Screen name="AdvisorProfile" component={AdvisorProfile} />
        </Drawer.Navigator> */
      // </NavigationContainer>
    );
  }
}
