import React, { Component, useState } from "react";
import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import CardCompany from "./CardCompany";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// const [customStyleIndex, setCustomStyleIndex] = useState(0);

// const handleCustomIndexSelect = (index) => {
//   setCustomStyleIndex(index);
// };

export class StudentProfile extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
  }

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  };

  render() {
    return (
      <View style={{ marginBottom: 20, backgroundColor: "#ffffff" }}>
        <View
          style={{
            marginTop: 50,
          }}
        >
          <Thumbnail
            style={{
              height: 60,
              width: 60,
              marginHorizontal: "40%",
            }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            }}
          />
          <Text
            style={{
              color: "#1E4274",
              fontSize: 18,
              fontWeight: "bold",
              marginHorizontal: "25%",
              marginVertical: 5,
            }}
          >
            Basmaa
          </Text>
          <Text
            note
            style={{
              color: "#1E4274",
              fontSize: 14,
              marginHorizontal: "31%",
            }}
          >
            BIS Training advisor
          </Text>
        </View>

        <SegmentedControlTab
          tabsContainerStyle={styles.tabsContainerStyle}
          tabStyle={styles.tabStyle}
          tabTextStyle={styles.tabTextStyle}
          activeTabStyle={styles.activeTabStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
          selectedIndex={this.state.selectedIndex}
          values={["Profile", "Opportunity"]}
          onTabPress={this.handleIndexChange}
          // onTabPress={handleCustomIndexSelect}
        />

        {/* {customStyleIndex === 0 && <Text> Tab one</Text>} */}
        {/* {customStyleIndex === 1 && <Text> Tab two</Text>} */}

      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();
  return <StudentProfile {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  tabsContainerStyle: {
    width: "80%",
    marginHorizontal: "10%",
    marginVertical: 15,
  },
});
