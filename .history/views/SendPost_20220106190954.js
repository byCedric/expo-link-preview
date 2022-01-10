import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import { BlurView } from "expo-blur";
import { SendButton, TextField } from "../components/Themed";

import { postMessage } from "../api/messages";

const SendPost = (props) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardWillShow", (e) => {
      const paddingBottom = 34;
      const offsest = 12;
      setKeyboardHeight(e.endCoordinates.height - paddingBottom + offsest);
    });
    const hideSubscription = Keyboard.addListener("keyboardWillHide", () => {
      setKeyboardHeight(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const sendButtonHandler = () => {
    postMessage(props.user, text);
    setText("");
  };

  return (
    <BlurView style={styles.container} intensity={100} tint="light">
      <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
        <Animatable.View
          style={[styles.content, { marginBottom: keyboardHeight }]}
          transition="marginBottom"
          duration={400}
          easing="ease-out-cubic"
        >
          <TextField
            onChangeText={setText}
            value={text}
            placeholder="Post to wall"
            keyboardType="twitter"
            onSubmitEditing={() => {
              sendButtonHandler();
            }}
            blurOnSubmit={false}
          />
          <SendButton
            style={styles.button}
            onPress={() => {
              sendButtonHandler();
            }}
          />
        </Animatable.View>
      </SafeAreaView>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: "red"
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  button: {
    marginLeft: 12,
  },
});

export default SendPost;
