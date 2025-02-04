import React, { useState } from "react";
import styled from "styled-components/native";
import { TextInput, Button, Text, Surface, Checkbox } from "react-native-paper";
import { Image } from "react-native";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <Container>
      <BackgroundImage
        source={require("../../assets/images/bgworld.png")}
        resizeMode="cover"
      />
      <Card>
        <Title>Create your account</Title>

        <StyledTextInput
          mode="outlined"
          label="Name"
          value={name}
          onChangeText={setName}
          placeholder="ex: jon smith"
          autoCapitalize="words"
        />

        <StyledTextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="ex: jon.smith@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <StyledTextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <StyledTextInput
          mode="outlined"
          label="Confirm password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TermsContainer>
          <Checkbox.Android
            status={termsAccepted ? "checked" : "unchecked"}
            onPress={() => setTermsAccepted(!termsAccepted)}
            color="#006d77"
          />
          <TermsText>
            I understood the <TermsLink>terms & policy</TermsLink>
          </TermsText>
        </TermsContainer>

        <SignUpButton mode="contained" onPress={() => {}}>
          SIGN UP
        </SignUpButton>

        <OrText>or sign up with</OrText>

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

        <SignInContainer>
          <SignInText>Have an account? </SignInText>
          <SignInButton mode="text" onPress={() => {}}>
            SIGN IN
          </SignInButton>
        </SignInContainer>
      </Card>
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
`;

const Card = styled(Surface)`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 30px;
  elevation: 4;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const StyledTextInput = styled(TextInput)`
  margin-bottom: 12px;
  background-color: white;
`;

const TermsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

const TermsText = styled(Text)`
  color: #666;
  font-size: 14px;
`;

const TermsLink = styled(Text)`
  color: #006d77;
  text-decoration: underline;
`;

const SignUpButton = styled(Button)`
  margin-top: 5px;
  background-color: #006d77;
  padding-vertical: 6px;
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
  padding: 0;
`;

const SocialIcon = styled(Image)`
  width: 30px;
  height: 30px;
`;

const SignInContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SignInText = styled(Text)`
  color: #666;
`;

const SignInButton = styled(Button)`
  margin: 0;
  padding: 0;
  color: #006d77;
  font-weight: bold;
`;
