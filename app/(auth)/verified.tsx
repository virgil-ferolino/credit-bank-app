import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Button, Text } from "react-native-paper";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function VerificationScreen() {
  return (
    <ImageBackground
      source={require("../../assets/images/bgworld.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          {/* <Icon name="check-circle" size={50} color="#fff" /> */}
        </View>

        <Text style={styles.title}>Verified!</Text>
        <Text style={styles.subtitle}>
          Your account has been created successfully.
        </Text>

        <Button
          mode="contained"
          onPress={() => {}}
          style={styles.button}
          labelStyle={styles.buttonLabel}
        >
          SIGN IN
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
    opacity: 0.8,
  },
  button: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingVertical: 8,
  },
  buttonLabel: {
    fontSize: 16,
    color: "#20B2AA", // Matching the teal color from the background
    fontWeight: "bold",
  },
});
