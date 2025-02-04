import React, { useState } from "react";
import styled from "styled-components/native";
import { TextInput, Button, Text, Surface } from "react-native-paper";
import { Image } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <BackgroundImage
        source={require("../../assets/images/bgworld.png")}
        resizeMode="cover"
      />
      <StyledSurface>
        <Title>Sign in your account</Title>

        <StyledTextInput
          mode="outlined"
          label="ex: john@email.com"
          value={email}
          onChangeText={setEmail}
          placeholder="ex: john@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <StyledTextInput
          mode="outlined"
          label="*******"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <SignInButton mode="contained" onPress={() => {}}>
          SIGN IN
        </SignInButton>

        <OrText>or sign in with</OrText>

        <SocialButtons>
          <SocialButton onPress={() => {}}>
            <SocialIcon
              source={require("../../assets/images/google.svg")}
              resizeMode="contain"
            />
          </SocialButton>
          <SocialButton onPress={() => {}}>
            <SocialIcon
              source={require("../../assets/images/fb.svg")}
              resizeMode="contain"
            />
          </SocialButton>
          <SocialButton onPress={() => {}}>
            <SocialIcon
              source={require("../../assets/images/twitter.svg")}
              resizeMode="contain"
            />
          </SocialButton>
        </SocialButtons>

        <SignUpContainer>
          <SignUpText>Don't have an account? </SignUpText>
          <SignUpButton mode="text" onPress={() => {}}>
            SIGN UP
          </SignUpButton>
        </SignUpContainer>
      </StyledSurface>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #006d77;
`;

const BackgroundImage = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const StyledSurface = styled(Surface)`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 50px 60px;
  elevation: 4;
`;

const Title = styled(Text)`
  font-size: 27px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const StyledTextInput = styled(TextInput)`
  margin-bottom: 12px;
  background-color: white;
`;

const SignInButton = styled(Button)`
  margin-top: 10px;
  background-color: #006d77;
  padding-vertical: 6px;
  font-weight: bold;
  height: 45px;
`;

const OrText = styled(Text)`
  text-align: center;
  margin-vertical: 15px;
  color: #666;
`;

const SocialButtons = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const SocialButton = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;

const SocialIcon = styled(Image)`
  width: 30px;
  height: 30px;
`;

const SignUpContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SignUpText = styled(Text)`
  color: #666;
`;

const SignUpButton = styled(Button)`
  color: #006d77;
  font-weight: bold;
`;
