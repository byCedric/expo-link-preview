import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Keyboard, KeyboardEvent, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, SendButton, TextField, Button } from "../components/Themed";

const SendPost = (props) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const inputAccessoryViewID = "uniqueID";
  const secondTextInput = useRef();
  const [text, setText] = useState("");

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", (e) => {
      setKeyboardHeight(e.endCoordinates.height);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardHeight(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
        <View style={[styles.content, { marginBottom: keyboardHeight }]}>
          <TextField
            onChangeText={setText}
            value={text}
            placeholder="Post to wall"
            keyboardType="twitter"
            inputAccessoryViewID={inputAccessoryViewID}
            onSubmitEditing={() => {
              secondTextInput.focus();
            }}
            blurOnSubmit={false}
          />
          <SendButton style={styles.button} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginLeft: 12,
  },
});

export default SendPost;
