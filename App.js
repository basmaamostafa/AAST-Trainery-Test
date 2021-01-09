import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Explore from "./Component/Explore";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AdvisorProfile from "./Component/AdvisorProfile";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      // <View style={styles.container}>
        <NavigationContainer>
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
          </Stack.Navigator>
        </NavigationContainer>
      // </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
