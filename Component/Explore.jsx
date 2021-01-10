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
import { AdvisorProfile } from "./AdvisorProfile";
import Search from "./Search";
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default class Explore extends Component {
  render() {
    return <Search style={{ backgroundColor: "#ffffff" }} />;

    return (
      <Container style={{ marginBottom: 20, backgroundColor: "#ffffff" }}>
        <Content style={{ marginTop: 50 }}>
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
          <CardAdvisor />
          <PromotedCard />
          <CardCompany />
        </Content>
        <StatusBar style="auto" />
      </Container>
    );
  }
}
