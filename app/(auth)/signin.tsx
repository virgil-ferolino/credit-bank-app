import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { TextInput, Button, Text, Surface } from "react-native-paper";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/bgworld.png")}
        style={styles.background}
        resizeMode="cover"
      />

      <Surface style={styles.card}>
        <Text style={styles.title}>Sign in your account</Text>

        <TextInput
          mode="outlined"
          label="ex: john@email.com"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="ex: john@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          mode="outlined"
          label="*******"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={() => {}}
          style={styles.signInButton}
          contentStyle={styles.buttonContent}
        >
          SIGN IN
        </Button>

        <Text style={styles.orText}>or sign in with</Text>

        <View style={styles.socialButtons}>
          <Button onPress={() => {}} style={styles.socialButton}>
            <Image
              source={require("../../assets/images/google.svg")}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </Button>
          <Button onPress={() => {}} style={styles.socialButton}>
            <Image
              source={require("../../assets/images/fb.svg")}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </Button>
          <Button onPress={() => {}} style={styles.socialButton}>
            <Image
              source={require("../../assets/images/twitter.svg")}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </Button>
        </View>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <Button
            mode="text"
            onPress={() => {}}
            style={styles.signUpButton}
            labelStyle={styles.signUpButtonText}
          >
            SIGN UP
          </Button>
        </View>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  container: {
    flex: 1,
    backgroundColor: "#006d77",
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
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    marginBottom: 12,
    backgroundColor: "white",
  },
  signInButton: {
    marginTop: 10,
    backgroundColor: "#006d77",
    paddingVertical: 6,
    fontWeight: "bold",
  },
  buttonContent: {
    fontWeight: "bold",
    height: 45,
  },
  orText: {
    textAlign: "center",
    marginVertical: 15,
    color: "#666",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    marginBottom: 20,
  },
  socialButton: {
    width: 50,
    height: 50, // Set height and width to create a square button
    borderRadius: 25, // Keep the rounded button shape
    justifyContent: "center", // Center the image inside the button
    alignItems: "center", // Align items horizontally and vertically
    padding: 0, // Remove padding to avoid extra space
  },
  socialIcon: {
    width: 30, // Adjust width as per your preference
    height: 30, // Adjust height as per your preference
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpText: {
    color: "#666",
  },
  signUpButton: {
    margin: 0,
    padding: 0,
  },
  signUpButtonText: {
    color: "#006d77",
    fontWeight: "bold",
  },
});
