import React, { Component } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";

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
import CardAdvisor from "./CardAdvisor";
import PromotedCard from "./PromotedCard";
import CardCompany from "./CardCompany";
import CardCoach from "./CardCoach";
import { AdvisorProfile } from "./AdvisorProfile";
import Search from "./Search";
import Session from "./Session";
import { useNavigation } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

export class Explore extends Component {
  render() {
    // return <Search style={{ backgroundColor: "#ffffff" }} />;
    const { navigation } = this.props;

    return (
      <Container style={{ marginBottom: 20 }}>
        <Content style={{ marginTop: 50 }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text>Explore</Text>
            <Button
              title="Open drawer"
              onPress={() => navigation.navigate.openDrawer()}
            >
              <Text> Open drawer</Text>
            </Button>
            <Button
              title="Toggle drawer"
              onPress={() => navigation.navigate.toggleDrawer()}
            >
              <Text>Toggle drawer</Text>
            </Button>
          </View>
          <Button
            transparent
            onPress={() => {
              this.props.navigation.navigate("Search");
            }}
          >
            <Right>
              <Feather
                name="search"
                size={28}
                color="#1E4274"
                style={{
                  marginRight: 20,
                }}
              />
            </Right>
          </Button>
          <CardCoach />
          <CardAdvisor />
          <PromotedCard />
          <CardCompany />
        </Content>
        <StatusBar style="auto" />
      </Container>
    );
  }
}
export default function (props) {
  const navigation = useNavigation();
  return <Explore {...props} navigation={navigation} />;
}
