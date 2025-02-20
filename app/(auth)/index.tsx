import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput, Button, Text, Surface } from "react-native-paper";
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import theme from "@/theme";
import OnboardingScreen from "@/components/onboard/OnboardingScreen";

export default function LoginScreen() {
  const router = useRouter();
  const [firstLaunch, setFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const value = await AsyncStorage.getItem("hasLaunched");
        if (value === null) {
          setFirstLaunch(true);
          await AsyncStorage.setItem("hasLaunched", "true");
        } else {
          setFirstLaunch(false);
        }
      } catch (error) {
        console.error("Error checking first launch", error);
      }
    };

    checkFirstLaunch();
  }, []);

  const handleSubmit = () => {
    router.push("/(tabs)");
  };

  if (firstLaunch === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <>
      {firstLaunch ? (
        <OnboardingScreen />
      ) : (
        <Container>
          <BackgroundImage
            source={require("@/assets/images/bgworld.png")}
            resizeMode="cover"
          />

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={{ flex: 1 }}
          >
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "flex-end",
              }}
              keyboardShouldPersistTaps="handled"
            >
              <StyledSurface>
                <Title>Sign in to your account</Title>

                <Formik
                  initialValues={{ email: "", password: "" }}
                  onSubmit={handleSubmit}
                >
                  {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={{ flexDirection: "column", rowGap: 5 }}>
                      <InputGroup>
                        <StyledLabel>Email</StyledLabel>
                        <StyledTextInput
                          mode="outlined"
                          keyboardType="email-address"
                          placeholder="ex: jon.smith@email.com"
                          placeholderTextColor="#9A9A9A"
                          value={values.email}
                          onChangeText={handleChange("email")}
                          onBlur={handleBlur("email")}
                        />
                      </InputGroup>

                      <InputGroup>
                        <StyledLabel>Password</StyledLabel>
                        <StyledTextInput
                          mode="outlined"
                          placeholder="********"
                          secureTextEntry
                          value={values.password}
                          onChangeText={handleChange("password")}
                          onBlur={handleBlur("password")}
                        />
                      </InputGroup>

                      <Button mode="contained" onPress={() => handleSubmit()}>
                        SIGN IN
                      </Button>
                    </View>
                  )}
                </Formik>

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
            </ScrollView>
          </KeyboardAvoidingView>
        </Container>
      )}
    </>
  );
}

// Styled Components
const Container = styled.View`
  flex: 1;
  width: 100%;
  max-width: 480px;
  align-self: center;
`;

const BackgroundImage = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const StyledSurface = styled(Surface)`
  width: 100%;
  max-width: 480px;
  align-self: center;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 50px 60px;
  elevation: 4;
`;

const Title = styled(Text)`
  font-size: 27px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const InputGroup = styled.View`
  margin-bottom: 12px;
`;

const StyledLabel = styled(Text)`
  padding-bottom: 5px;
  color: #333;
`;

const StyledTextInput = styled(TextInput)`
  background-color: white;
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

const SocialIcon = styled(Image)`
  width: 30px;
  height: 30px;
`;

const OrText = styled(Text)`
  text-align: center;
  margin-vertical: 15px;
  color: #666;
`;
