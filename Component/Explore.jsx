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

export default class Explore extends Component {
  render() {
    return (
      <AdvisorProfile
        style={{ marginBottom: 20, backgroundColor: "#ffffff" }}
      />
    );

    return (
      <Container style={{ marginBottom: 20, backgroundColor: "#ffffff" }}>
        <Content style={{ marginTop: 50 }}>
          <CardAdvisor />
          <PromotedCard />
          <CardCompany />
        </Content>
        <StatusBar style="auto" />
      </Container>
    );
  }
}
