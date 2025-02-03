import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { TextInput, Button, Text, Surface, Checkbox } from "react-native-paper";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/bgworld.png")}
        style={styles.background}
        resizeMode="cover"
      />
      <Surface style={styles.card}>
        <Text style={styles.title}>Create your account</Text>

        <TextInput
          mode="outlined"
          label="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="ex: jon smith"
          autoCapitalize="words"
        />

        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholder="ex: jon.smith@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <TextInput
          mode="outlined"
          label="Confirm password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={styles.input}
        />

        <View style={styles.termsContainer}>
          <Checkbox.Android
            status={termsAccepted ? "checked" : "unchecked"}
            onPress={() => setTermsAccepted(!termsAccepted)}
            color="#006d77"
          />
          <Text style={styles.termsText}>
            I understood the{" "}
            <Text style={styles.termsLink}>terms & policy</Text>
          </Text>
        </View>

        <Button
          mode="contained"
          onPress={() => {}}
          style={styles.signUpButton}
          contentStyle={styles.buttonContent}
        >
          SIGN UP
        </Button>

        <Text style={styles.orText}>or sign up with</Text>

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

        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Have an account? </Text>
          <Button
            mode="text"
            onPress={() => {}}
            style={styles.signInButton}
            labelStyle={styles.signInButtonText}
          >
            SIGN IN
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
  card: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 30,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    marginBottom: 12,
    backgroundColor: "white",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  termsText: {
    color: "#666",
    fontSize: 14,
  },
  termsLink: {
    color: "#006d77",
    textDecorationLine: "underline",
  },
  signUpButton: {
    marginTop: 5,
    backgroundColor: "#006d77",
    paddingVertical: 6,
  },
  buttonContent: {
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
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signInText: {
    color: "#666",
  },
  signInButton: {
    margin: 0,
    padding: 0,
  },
  signInButtonText: {
    color: "#006d77",
    fontWeight: "bold",
  },
});
