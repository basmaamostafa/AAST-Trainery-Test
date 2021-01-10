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
  DatePicker,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

export class Session extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 20, backgroundColor: "#ffffff" }}>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: "#1E4274",
                fontSize: 24,
                fontWeight: "bold",
                marginHorizontal: "5%",
                // marginVertical: 5,
              }}
            >
              CV writing
            </Text>
            <Thumbnail
              style={{
                height: 200,
                width: null,
                // flex: 1,
                marginHorizontal: "5%",
                marginVertical: 15,
                borderRadius: 5,
              }}
              source={{
                uri:
                  "https://images.unsplash.com/photo-1494599948593-3dafe8338d71?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
              }}
            />
          </View>
          <View>
            <Text
              style={{
                color: "#1E4274",
                fontSize: 16,
                marginLeft: 20,
                marginRight: 15,
                lineHeight: 22,
                // marginTop: 10,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              malesuada molestie tempor ornare condimentum mi, dictum. Ut
              lobortis nulla aliquet enim, fusce vitae. Pellentesque molestie
              metus nisi in condimentum id. Quam donec eros pellentesque
              fringilla. Facilisi sem pellentesque dui quis consectetur eu.
              Consequat elit etiam ultricies morbi leo hac id mauris quisque.
              Felis habitant neque tellus risus eu non urna dui.
            </Text>
            {/* <DatePickerExample /> */}
            <Right>
              <Button
                style={{
                  backgroundColor: "#1E4274",
                  borderRadius: 5,
                  height: 30,
                  width: 75,
                }}
                onPress={() => {
                  this.props.navigation.navigate("Career Coaching");
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: "#ffffff",
                    textTransform: "capitalize",
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  Book
                </Text>
              </Button>
            </Right>
          </View>
        </View>
      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();
  return <Session {...props} navigation={navigation} />;
}

export class DatePickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container>
        <Content>
          <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
          />
          <Text>Date: {this.state.chosenDate.toString().substr(4, 12)}</Text>
        </Content>
      </Container>
    );
  }
}
