/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  View as DefaultView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Icon, Button as DefaultButton } from "react-native-elements";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export function useThemeColor(props, colorName) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

// –––– TEXT –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //

export function Text(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "secondary"
  );

  return (
    <DefaultText
      style={[{ color, fontSize: 16, fontWeight: "400" }, style]}
      {...otherProps}
    />
  );
}

export function Copy(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "primary"
  );

  return (
    <DefaultText
      style={[{ color, fontSize: 18, fontWeight: "500" }, style]}
      {...otherProps}
    />
  );
}

export function Header(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "primary"
  );

  return (
    <DefaultText
      style={[{ color, fontSize: 28, fontWeight: "700" }, style]}
      {...otherProps}
    />
  );
}

export function Title(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "primary"
  );

  return (
    <DefaultText
      style={[{ color, fontSize: 22, fontWeight: "600" }, style]}
      {...otherProps}
    />
  );
}

// –––– TEXTFIELDS –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //

export function TextField(props) {
  const { style, lightColor, darkColor, icon, ...otherProps } = props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "primary"
  );
  const placeholderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "secondary"
  );
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "container"
  );

  return (
    <DefaultView style={{ flex: 1 }}>
      <TextInput
        style={[{ color, backgroundColor }, fieldStyles.textField, style]}
        placeholderTextColor={placeholderColor}
        {...otherProps}
      />
      <DefaultView style={fieldStyles.icon}>{icon}</DefaultView>
    </DefaultView>
  );
}

const fieldStyles = StyleSheet.create({
  textField: {
    position: "relative",
    flex: 1,
    fontSize: 18,
    borderRadius: 16,
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  icon: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

// –––– BUTTONS –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //

export function Button(props) {
  const {
    style,
    lightColor,
    darkColor,
    onPress,
    disabled,
    text,
    icon,
    flex,
    ...otherProps
  } = props;

  return (
    <TouchableOpacity
      style={[buttonStyles.button, style, disabled && { opacity: 0.3 }]}
      {...otherProps}
      onPress={onPress}
      // onPress={() => signInHandler()}
      disabled={disabled}
    >
      <DefaultView style={[buttonStyles.buttonContainer, flex && { flex: 1 }]}>
        {icon && icon}
        <Text style={buttonStyles.buttonText}>{text}</Text>
      </DefaultView>
    </TouchableOpacity>
  );
}

export function SendButton(props) {
  const { style, lightColor, darkColor, onPress, disabled, ...otherProps } =
    props;

  return (
    <DefaultButton
      {...otherProps}
      onPress={onPress}
      disabled={disabled}
      buttonStyle={[buttonStyles.sendButton, style]}
      icon={
        <Icon
          name="arrow-up"
          type="feather"
          color={disabled ? Colors.light.secondary : Colors.dark.primary}
          style={{strokeWidth: 6}}
        />
      }
    />
  );
}

const buttonStyles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: "#111111",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginHorizontal: 24,
    marginBottom: 36,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
  sendButton: {
    width: 36,
    height: 36,
    padding: 4,
    backgroundColor: Colors.default.blue,
    borderRadius: 64,
  },
});

// –––– VIEWS –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //

export function View(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Container(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "container"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Divider(props) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "divider"
  );

  return (
    <View
      style={[{ backgroundColor }, viewStyles.divider, style]}
      {...otherProps}
    />
  );
}

// –––– STYLES ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //

const viewStyles = StyleSheet.create({
  divider: {
    height: 1,
    marginVertical: 12,
  },
});
