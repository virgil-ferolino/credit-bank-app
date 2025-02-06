import { Text, TextInput, Button } from "react-native-paper";
import { ScrollView, Platform, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import ParallaxScrollView from "@/components/ParralaxView";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather"; // Import the Feather icon set

const commonPadding = Platform.OS === "ios" ? 40 : 60;
const StyledView = styled(ScrollView)({
  paddingTop: 20,
  gap: 10,
  paddingLeft: commonPadding,
  paddingRight: commonPadding,
});

const StyledTextInput = styled(TextInput)({
  marginBottom: 12,
  backgroundColor: "white",
  borderRadius: 10,
  height: 30,
  paddingVertical: 6,
});

const StyledButton = styled(Button)({
  marginTop: 50,
  backgroundColor: "#004068",
  color: "black",
  borderRadius: 10,
  paddingLeft: commonPadding,
  paddingRight: commonPadding,
  height: 40,
});

const StyledButtonTitle = styled(Text)({
  color: "white",
  textAlign: "center",
});

const StyledText = styled(Text)({
  color: "#6F6F6F",
  marginBottom: 10,
  fontSize: 16,
});

const ChangePassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = (field: string) => {
    if (field === "password") {
      setPasswordVisible(!passwordVisible);
    } else if (field === "newPassword") {
      setNewPasswordVisible(!newPasswordVisible);
    } else if (field === "confirmPassword") {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };

  return (
    <ParallaxScrollView>
      <StyledView>
        <StyledText>Password</StyledText>
        <StyledTextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
          right={
            <TextInput.Icon
              icon={() => (
                <TouchableOpacity
                  onPress={() => togglePasswordVisibility("password")}
                >
                  <Icon
                    name={passwordVisible ? "eye-off" : "eye"}
                    size={20}
                    color="#004068"
                  />
                </TouchableOpacity>
              )}
            />
          }
        />
        <StyledText>New Password</StyledText>
        <StyledTextInput
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={!newPasswordVisible}
          right={
            <TextInput.Icon
              icon={() => (
                <TouchableOpacity
                  onPress={() => togglePasswordVisibility("newPassword")}
                >
                  <Icon
                    name={newPasswordVisible ? "eye-off" : "eye"}
                    size={20}
                    color="#004068"
                  />
                </TouchableOpacity>
              )}
            />
          }
        />
        <StyledText>Confirm Password</StyledText>
        <StyledTextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!confirmPasswordVisible}
          right={
            <TextInput.Icon
              icon={() => (
                <TouchableOpacity
                  onPress={() => togglePasswordVisibility("confirmPassword")}
                >
                  <Icon
                    name={confirmPasswordVisible ? "eye-off" : "eye"}
                    size={20}
                    color="#004068"
                  />
                </TouchableOpacity>
              )}
            />
          }
        />
        <StyledButton>
          <StyledButtonTitle>SET PASSWORD</StyledButtonTitle>
        </StyledButton>
      </StyledView>
    </ParallaxScrollView>
  );
};

export default ChangePassword;
