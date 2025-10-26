import { useState } from 'react';
import { StyleSheet, Text, Pressable } from "react-native";
import { palette, commonStyles } from "../assets/CommonStyles";



export function Button(props) {
  const [isPressed, setPressed] = useState(false);

  return (
    <Pressable
    style={[styles.button, isPressed? styles.button_active : styles.button_inactive, {userSelect: 'none'}]}
    onPressIn={() => {
      setPressed(true);
    }}
    onPressOut={() => {
      setPressed(false);
      props.onPress();
    }}>
      <Text style={[commonStyles.text, styles.buttonText]}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
      borderColor: 'transparent',
      borderRadius: 20,
      marginTop: 10,
      marginBottom: 10,
      paddingTop: 10,
      paddingBottom: 10,
    },

    button_inactive: {
      backgroundColor: palette.main,
    },

    button_active: {
      backgroundColor: palette.darkerMain,
    },

    buttonText: {
      color: palette.textButton,
      textAlign: 'center',
      fontWeight: 'bold',
    },
});