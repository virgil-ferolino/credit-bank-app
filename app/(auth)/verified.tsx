import React from "react";
import styled from "styled-components/native";
import { Button, Text } from "react-native-paper";

export default function VerificationScreen() {
  return (
    <Background
      source={require("@/assets/images/bgworld.png")}
      resizeMode="cover"
    >
      <Content>
        <IconContainer />
        <Title>Verified!</Title>
        <Subtitle>Your account has been created successfully.</Subtitle>
        <StyledButton onPress={() => {}}>SIGN IN</StyledButton>
      </Content>
    </Background>
  );
}

const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const IconContainer = styled.View`
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
`;

const Subtitle = styled(Text)`
  font-size: 16px;
  color: #fff;
  text-align: center;
  margin-bottom: 40px;
  opacity: 0.8;
`;

const StyledButton = styled(Button)`
  width: 100%;

  margin-top: 20px;
  background-color: #fff;
  border-radius: 25px;
  padding-vertical: 8px;
`;
