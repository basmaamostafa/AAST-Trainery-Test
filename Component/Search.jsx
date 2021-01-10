import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
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
  Item,
  Input,
  ActionSheet,
} from "native-base";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={{ justifyContent: "center" }}>
        <Content style={{ marginTop: 40 }}>
          <Item
            success
            style={{
              width: "80%",
              marginLeft: "10%",
              color: "#1E4274",
              borderBottomColor: "#1E4274",
            }}
          >
            <Input placeholder="Search" />
            <Icon name="search" style={{ color: "#1E4274" }} />
          </Item>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: 27,
            }}
          >
            <View>
              <Button
                transparent
                // onPress={() => {
                //   this.props.navigation.navigate("Search");
                // }}
              >
                <Text
                  style={{
                    color: "#1E4274",
                    textTransform: "capitalize",
                    paddingRight: 5,
                  }}
                >
                  Sort by
                </Text>
                <MaterialIcons name="filter-list" size={24} color="#1E4274" />
              </Button>
            </View>
            <View>
              <Button
                transparent
                onPress={() => {
                  this.props.navigation.navigate("Search");
                }}
              >
                <Text
                  style={{
                    color: "#1E4274",
                    textTransform: "capitalize",
                    paddingRight: 5,
                  }}
                >
                  Filter by
                </Text>
                <MaterialIcons name="filter-alt" size={24} color="#1E4274" />
              </Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
export default function (props) {
  const navigation = useNavigation();
  return <Search {...props} navigation={navigation} />;
}
