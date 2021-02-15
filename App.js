import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Explore } from "./Component/Explore";
import Session from "./Component/Session";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AdvisorProfile } from "./Component/AdvisorProfile";
import Search from "./Component/Search";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Tutorial1 } from "./Component/Tutorials/Tutorialscreen1";
import { Tutorial2 } from "./Component/Tutorials/Tutorialscreen2";
import { Tutorial3 } from "./Component/Tutorials/Tutorialscreen3";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return <Tutorial3 />;
    return (
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
          <Stack.Screen
            name="Search"
            component={Search}
            options={{
              header: () => {
                "none";
              },
            }}
          />
          <Stack.Screen
            name="Career Coaching"
            component={Session}
            // options={{
            //   header: () => {
            //     "none";
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// class AppContainer extends React.Component {
//   render() {
//     return (
//       <ActionSheetProvider>
//         <ConnectedApp />
//       </ActionSheetProvider>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
