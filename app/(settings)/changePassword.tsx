import { Text, TextInput, Button } from "react-native-paper";
import { ScrollView, Platform, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import ParallaxScrollView from "@/components/ParralaxView";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

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
  height: 50,
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
  const [passwords, setPasswords] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [visibility, setVisibility] = useState({
    password: false,
    newPassword: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: keyof typeof visibility) => {
    setVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handlePasswordChange = (
    field: keyof typeof passwords,
    value: string
  ) => {
    setPasswords((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <ParallaxScrollView>
      <StyledView>
        <StyledText>Password</StyledText>
        <StyledTextInput
          value={passwords.password}
          onChangeText={(value: string) =>
            handlePasswordChange("password", value)
          }
          right={
            <TextInput.Icon
              icon={() => (
                <TouchableOpacity
                  onPress={() => togglePasswordVisibility("password")}
                >
                  <MaterialIcons
                    name={visibility.password ? "visibility-off" : "visibility"}
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
          value={passwords.newPassword}
          onChangeText={(value: string) =>
            handlePasswordChange("newPassword", value)
          }
          secureTextEntry={!visibility.newPassword}
          right={
            <TextInput.Icon
              icon={() => (
                <TouchableOpacity
                  onPress={() => togglePasswordVisibility("newPassword")}
                >
                  <MaterialIcons
                    name={
                      visibility.newPassword ? "visibility-off" : "visibility"
                    }
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
          value={passwords.confirmPassword}
          onChangeText={(value: string) =>
            handlePasswordChange("confirmPassword", value)
          }
          secureTextEntry={!visibility.confirmPassword}
          right={
            <TextInput.Icon
              icon={() => (
                <TouchableOpacity
                  onPress={() => togglePasswordVisibility("confirmPassword")}
                >
                  <MaterialIcons
                    name={
                      visibility.confirmPassword
                        ? "visibility-off"
                        : "visibility"
                    }
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
