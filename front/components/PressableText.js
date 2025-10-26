import { useState } from 'react';
import { StyleSheet, Text, Pressable } from "react-native";
import { palette } from '../assets/CommonStyles';



export function PressableText(props) {
  let [isPressed, setPressed] = useState(false);
  
  return (
    <Pressable
    onPressIn={() => {
      setPressed(true);
    }}
    onPressOut={() => {
      setPressed(false);
      props.onPress();
    }}>
      <Text style={[styles.text, isPressed? styles.text_active : styles.text_inactive, {userSelect: 'none'}]}>
        {props.text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    text_inactive: {
        color: palette.text,
    },

    text_active: {
        color: palette.textMedium,
    },
});