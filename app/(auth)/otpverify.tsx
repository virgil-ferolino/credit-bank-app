import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { TextInput, Button, Text, Surface, useTheme } from "react-native-paper";

export default function VerifyPhoneScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/bgworld.png")}
        style={styles.backgroundImage}
      />
      <Surface style={styles.card}>
        <Text style={styles.title}>Verify your phone number</Text>

        <Text style={styles.subtitle}>
          We will send you a One-Time-Password (OTP){"\n"}
          on this mobile number.
        </Text>

        <View style={styles.phoneInputContainer}>
          {[...Array(5)].map((_, index) => (
            <TextInput
              key={index}
              style={[styles.otpInput]}
              keyboardType="number-pad"
              maxLength={1}
              selectTextOnFocus
            />
          ))}
        </View>

        <Button
          mode="contained"
          onPress={() => {}}
          style={styles.sendButton}
          contentStyle={styles.buttonContent}
        >
          SEND CODE
        </Button>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006d77",
    height: "100%",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.1,
  },
  card: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 50,
    paddingBottom: 50,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 25,
    lineHeight: 20,
  },
  phoneInputContainer: {
    paddingBottom: 300,
    flexDirection: "row",
    gap: 8,
    marginBottom: 30,
  },
  countryCode: {
    width: 70,
    backgroundColor: "white",
  },
  phoneInput: {
    flex: 1,
    backgroundColor: "white",
  },
  sendButton: {
    backgroundColor: "#006d77",
    borderRadius: 8,
  },
  buttonContent: {
    height: 45,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  otpInput: {
    backgroundColor: "#FFFFFF",
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
  },
});
