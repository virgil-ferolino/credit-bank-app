import { useState } from "react";
import styled from "styled-components/native";
import { TextInput, Button, Text, Surface, Checkbox } from "react-native-paper";
import { Image } from "react-native";
import { useRouter } from "expo-router";

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
}

export default function SignUpScreen() {
  const router = useRouter();
  const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  };

  const [formValue, setFormValue] = useState<FormValues>(initialValues);

  const handleInputChange = (field: keyof FormValues) => (text: string) => {
    setFormValue({ ...formValue, [field]: text });
  };

  const handleTermsAcceptedChange = () => {
    setFormValue({ ...formValue, termsAccepted: !formValue.termsAccepted });
  };

  return (
    <Container>
      <BackgroundImage
        source={require("@/assets/images/bgworld.png")}
        resizeMode="cover"
      />
      <Card>
        <Title>Create your account</Title>

        <StyledTextInput
          mode="outlined"
          label="Name"
          value={formValue.name}
          onChangeText={handleInputChange("name")}
          placeholder="ex: jon smith"
          autoCapitalize="words"
        />

        <StyledTextInput
          mode="outlined"
          label="Email"
          value={formValue.email}
          onChangeText={handleInputChange("email")}
          placeholder="ex: jon.smith@email.com"
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

        <StyledTextInput
          mode="outlined"
          label="Confirm password"
          value={formValue.confirmPassword}
          onChangeText={handleInputChange("confirmPassword")}
          secureTextEntry
        />

        <TermsContainer>
          <Checkbox.Android
            status={formValue.termsAccepted ? "checked" : "unchecked"}
            onPress={handleTermsAcceptedChange}
            color="#006d77"
          />
          <TermsText>
            I understood the <TermsLink>terms & policy</TermsLink>
          </TermsText>
        </TermsContainer>

        <Button
          mode="contained"
          onPress={() => router.push("/(auth)/verifyphone")}
        >
          SIGN UP
        </Button>

        <OrText>or sign up with</OrText>

        <SocialButtons>
          <SocialButton onPress={() => {}}>
            <SocialIcon
              source={require("@/assets/images/google.svg")}
              resizeMode="contain"
            />
          </SocialButton>
          <SocialButton onPress={() => {}}>
            <SocialIcon
              source={require("@/assets/images/fb.svg")}
              resizeMode="contain"
            />
          </SocialButton>
          <SocialButton onPress={() => {}}>
            <SocialIcon
              source={require("@/assets/images/twitter.svg")}
              resizeMode="contain"
            />
          </SocialButton>
        </SocialButtons>

        <SignInContainer>
          <SignInText>Have an account? </SignInText>
          <SignInButton mode="text" onPress={() => router.push("/(auth)/")}>
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
