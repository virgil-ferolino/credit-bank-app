import { useState } from "react";
import styled from "styled-components/native";
import { TextInput, Button, Text, Surface } from "react-native-paper";
import { Dimensions, Image } from "react-native";
import { useRouter } from "expo-router";
import ParallaxScrollView from "@/components/ParralaxView";

interface FormValues {
  email: string;
  password: string;
}

const { height } = Dimensions.get("window");

export default function LoginScreen() {
  const router = useRouter();
  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const [formValue, setFormValue] = useState<FormValues>(initialValues);

  const handleInputChange = (field: keyof FormValues) => (text: string) => {
    setFormValue({ ...formValue, [field]: text });
  };

  return (
    <Container>
      <BackgroundImage
        source={require("@/assets/images/bgworld.png")}
        resizeMode="cover"
      />
      <StyledSurface>
        <Title>Sign in your account</Title>

        <StyledTextInput
          mode="outlined"
          label="ex: john@email.com"
          value={formValue.email}
          onChangeText={handleInputChange("email")}
          placeholder="ex: john@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <StyledTextInput
          mode="outlined"
          label="Password"
          value={formValue.password}
          onChangeText={handleInputChange("password")}
          secureTextEntry
        />

        <Button mode="contained" onPress={() => router.push("/(tabs)")}>
          SIGN IN
        </Button>

        <OrText>or sign in with</OrText>

        <SocialButtons>
          <SocialButton onPress={() => {}}>
            <SocialIcon
              source={require("@/assets/images/google.png")}
              resizeMode="contain"
            />
          </SocialButton>
          <SocialButton onPress={() => {}}>
            <SocialIcon
              source={require("@/assets/images/fb.png")}
              resizeMode="contain"
            />
          </SocialButton>
          <SocialButton onPress={() => {}}>
            <SocialIcon
              source={require("@/assets/images/twitter.png")}
              resizeMode="contain"
            />
          </SocialButton>
        </SocialButtons>

        <SignUpContainer>
          <SignUpText>Don't have an account? </SignUpText>
          <SignUpButton
            mode="text"
            onPress={() => router.push("/(auth)/signup")}
          >
            SIGN UP
          </SignUpButton>
        </SignUpContainer>
      </StyledSurface>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  max-width: 480px;
  height: ${height}px;
  background-color: #006d77;
  align-self: center;
  justify-content: flex-end;
`;

const BackgroundImage = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const StyledSurface = styled(Surface)`
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
