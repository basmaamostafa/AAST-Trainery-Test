import React, { Component, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
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

export class AdvisorProfile extends Component {
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
      <ScrollView>
        <View
          style={{
            marginBottom: 20,
            backgroundColor: "#ffffff",
            height: "100%",
          }}
        >
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
              Dr. Rehab Elbadrawy
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

          <Profile />
        </View>
      </ScrollView>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();
  return <AdvisorProfile {...props} navigation={navigation} />;
}

class Profile extends Component {
  render() {
    return (
      <View>
        <View>
          <Text
            style={{
              color: "#1E4274",
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 20,
            }}
          >
            Advisor Profile
          </Text>
          <Text
            style={{
              color: "#1E4274",
              fontSize: 16,
              marginLeft: 20,
              marginRight: 15,
              lineHeight: 22,
              marginTop: 10,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            malesuada molestie tempor ornare condimentum mi, dictum. Ut lobortis
            nulla aliquet enim, fusce vitae. Pellentesque molestie metus nisi in
            condimentum id. Quam donec eros pellentesque fringilla. Facilisi sem
            pellentesque dui quis consectetur eu. Consequat elit etiam ultricies
            morbi leo hac id mauris quisque. Felis habitant neque tellus risus
            eu non urna dui.
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "#1E4274",
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 20,
              marginTop: 10,
            }}
          >
            Advisor Info
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
            <Feather name="phone" size={20} color="#CD8930" />
            <Text
              style={{
                color: "#CD8930",
                fontSize: 16,
                marginLeft: 20,
              }}
            >
              (316) 555-0116
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
            <Feather name="mail" size={20} color="#CD8930" />
            <Text
              style={{
                color: "#CD8930",
                fontSize: 16,
                marginLeft: 20,
              }}
            >
              debra.holt@example.com
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
            <Feather name="users" size={20} color="#1E4274" />
            <Text
              style={{
                color: "#1E4274",
                fontSize: 16,
                marginLeft: 20,
              }}
            >
              BIS Department
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 10 }}>
            <Feather name="users" size={20} color="#1E4274" />

            <Text
              style={{
                color: "#1E4274",
                fontSize: 16,
                marginLeft: 20,
              }}
            >
              AAST - CMT
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

// export class Opportunity extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Opportunity</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  tabsContainerStyle: {
    width: "80%",
    marginHorizontal: "10%",
    marginVertical: 15,
  },
  tabStyle: {
    backgroundColor: "#ffffff",
    borderColor: "#F2F2F2",
  },
  firstTabStyle: {
    backgroundColor: "#F2F2F2",
    color: "red",
  },
  lastTabStyle: {
    backgroundColor: "#1E4274",
    borderColor: "#F2F2F2",
    color: "#1E4274",
  },
  tabTextStyle: {
    color: "#1E4274",
  },
  activeTabStyle: {
    backgroundColor: "#F2F2F2",
    borderColor: "#ffffff",
  },
  activeTabTextStyle: {
    color: "#CD8930",
  },
});
