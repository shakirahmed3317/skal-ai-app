import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import GradientText from "./GradientText";
import GradientBtn from "./GradientBtn";
import { useNavigation } from "@react-navigation/native";

function OnboardingOne() {
  const navigation = useNavigation();
  const image = require("../../assets/images/onboardingOne.png");

  const handleContinue = () => {
    navigation.navigate("OnboardingTwo");
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
      }}
    >
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
            Unleash creativity with our AI image generation feature.
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.buttonOpacity}
              onPress={handleContinue}
            >
              <GradientBtn text={"Continue"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default OnboardingOne;

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
    alignItems: "center",
    marginTop: 35,
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
