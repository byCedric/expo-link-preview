import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Icon, Button } from "react-native-elements";
import { View, Divider } from "../components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "../constants/Colors"

import { signOut } from "../api/authentication";

const Navigation = (props) => {
  return (
    <View style={styles.container}>
        {props.user !== null && (
          <View style={styles.content}>
            <Button
              buttonStyle={styles.button}
              icon={<Icon name="smile" type="feather" color={Colors.light.secondary} />}
            />
            <TouchableOpacity style={styles.profile}>
              <Image
                style={styles.profile}
                source={{ uri: props.user.profile_picture }}
              />
            </TouchableOpacity>
            <Button
              buttonStyle={styles.button}
              icon={<Icon name="log-out" type="feather" color={Colors.light.secondary} />}
              onPress={() => signOut()}
            />
          </View>
        )}
        <Divider style={{ marginBottom: 0 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 12,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  profile: {
    width: 56,
    height: 56,
    borderRadius: 64,
  },
  button: {
    width: 48,
    height: 48,
    backgroundColor: "transparent"
  }
});

export default Navigation;
