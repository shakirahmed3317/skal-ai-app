import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import GradientText from "./GradientText";
import GradientBtn from "./GradientBtn";

function OnboardingTwo() {
  const image = require("../../assets/images/onboardingTwo.png");
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleMain}>
          <Text style={styles.title}>Say hello to</Text>
        </Text>
        <GradientText
          text="Skal AI"
          style={{ fontSize: 60, fontWeight: "bold" }}
        />
      </View>
      <View>
        <View style={styles.imageContainer}>
          <Image source={image} />
        </View>
      </View>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Transform thoughts into visuals, turning your imagination into
            reality.
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.buttonOpacity}>
              <GradientBtn text={"See Pricing"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default OnboardingTwo;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 35,
  },
  textContainer: {
    marginTop: 35,
    marginLeft: 35,
    marginRight: 35,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  btn: {
    alignItems: "center",
  },
  buttonOpacity: {
    width: "80%",
    top: 60,
  },
});
