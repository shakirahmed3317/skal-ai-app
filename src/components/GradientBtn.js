import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function GradientBtn(props) {
  return (
    <View>
      <LinearGradient
        style={{ borderRadius: 20 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#FF0099", "#C31432"]}
      >
        <Text
          style={[
            props.style,
            {
              backgroundColor: "transparent",
              padding: 20,
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
            },
          ]}
        >
          {props.text}
        </Text>
      </LinearGradient>
    </View>
  );
}

export default GradientBtn;
