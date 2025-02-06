import { Text } from "react-native-paper";
import { ScrollView, Platform, Linking, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import ParallaxScrollView from "@/components/ParralaxView";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const commonPadding = Platform.OS === "ios" ? 30 : 50;

const StyledView = styled(ScrollView)({
  paddingTop: 20,
  gap: 15,
  paddingLeft: commonPadding,
  paddingRight: commonPadding,
});

const StyledText = styled(Text)(() => ({
  color: "#004068",
  fontSize: 16,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 12,
  textAlign: "center",
}));

const StyledIcon = styled(MaterialIcons)(() => ({
  marginRight: 10,
  fontSize: 30,
  alignSelf: "center",
  color: "#004068",
}));

const StyledInfo = styled(Text)(() => ({
  fontSize: 16,
  color: "#004068",
  marginBottom: 20,
  fontWeight: "bold",
  textAlign: "center",
}));

const ContactUs = () => {
  const handlePhonePress = () => {
    Linking.openURL("tel:+639187388888");
  };

  const handleEmailPress = () => {
    Linking.openURL("mailto:QDiCharge@gmail.com");
  };

  return (
    <ParallaxScrollView>
      <StyledView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledIcon name="phone" />
        <TouchableOpacity onPress={handlePhonePress}>
          <StyledText>Contact Number:</StyledText>
        </TouchableOpacity>
        <StyledInfo>+63 918 738 8888</StyledInfo>

        <StyledIcon name="email" />
        <TouchableOpacity onPress={handleEmailPress}>
          <StyledText>Email Address:</StyledText>
        </TouchableOpacity>
        <StyledInfo>QDiCharge@gmail.com</StyledInfo>

        <StyledIcon name="home" />
        <StyledText>Home Address:</StyledText>
        <StyledInfo>
          Unit 2402 City Trade and Financial Tower, 7th Avenue, BGC, Taguig
        </StyledInfo>
      </StyledView>
    </ParallaxScrollView>
  );
};

export default ContactUs;
