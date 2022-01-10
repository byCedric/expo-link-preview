import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, View, Title } from "../components/Themed";
import Colors from "../constants/Colors";

export default class Notice extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title style={styles.title}>Welcome to my lil app</Title>
        <Text lightStyle={Colors.dark.secondary}>Welcome to my
          This is a home for you to save everything you like in one place. Feel
          free to create shared boards with friends or run it solo dolo
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 16,
    marginBottom: 24,
    backgroundColor: Colors.dark.container,
    borderRadius: 12,
  },
  title: {
    marginBottom: 6,
  },
});
