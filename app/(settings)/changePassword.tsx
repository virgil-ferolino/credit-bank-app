import { Text, TextInput, Button } from "react-native-paper";
import { ScrollView, Platform, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import ParallaxScrollView from "@/components/ParralaxView";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const commonPadding = Platform.OS === "ios" ? 20 : 25;
const iconSize = Platform.OS === "ios" ? 28 : 25;
const iconColor = "#0065A1";

const StyledView = styled(ScrollView)({
  paddingTop: 20,
  paddingLeft: commonPadding,
  paddingRight: commonPadding,
});

const StyledButton = styled(Button)({
  borderRadius: 10,
  marginTop: 40,
  padding: 5,
});

const StyledButtonTitle = styled(Text)({
  color: "white",
  alignSelf: "center",
});

const StyledText = styled(Text)({
  color: "#6F6F6F",
  marginTop: 10,
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
        <TextInput
          placeholder="Enter your current password"
          mode="outlined"
          placeholderTextColor="#9A9A9A"
          activeOutlineColor="black"
          value={passwords.password}
          onChangeText={(value: string) =>
            handlePasswordChange("password", value)
          }
          secureTextEntry={!visibility.password}
          right={
            <TextInput.Icon
              icon={() => (
                <TouchableOpacity
                  onPress={() => togglePasswordVisibility("password")}
                >
                  <MaterialIcons
                    name={visibility.password ? "visibility-off" : "visibility"}
                    size={iconSize}
                    color={iconColor}
                  />
                </TouchableOpacity>
              )}
            />
          }
        />
        <StyledText>New Password</StyledText>
        <TextInput
          placeholder="Enter your new password"
          mode="outlined"
          placeholderTextColor="#9A9A9A"
          activeOutlineColor="black"
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
                    size={iconSize}
                    color={iconColor}
                  />
                </TouchableOpacity>
              )}
            />
          }
        />
        <StyledText>Confirm Password</StyledText>
        <TextInput
          placeholder="Confirm new password"
          mode="outlined"
          placeholderTextColor="#9A9A9A"
          activeOutlineColor="black"
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
                    size={iconSize}
                    color={iconColor}
                  />
                </TouchableOpacity>
              )}
            />
          }
        />
        <StyledButton
          buttonColor="#0265A1"
          textColor="white"
          labelStyle={{ fontSize: 17 }}
        >
          <StyledButtonTitle>SET PASSWORD</StyledButtonTitle>
        </StyledButton>
      </StyledView>
    </ParallaxScrollView>
  );
};

export default ChangePassword;
