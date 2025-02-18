import React, { useState } from "react";
import styled from "styled-components/native";
import { TextInput, Button, Text, Surface } from "react-native-paper";
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

// import * as Yup from "yup";  // Removed validation import
// import { Formik } from "formik";  // Removed Formik import

// const validationSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   password: Yup.string()
//     .min(6, "Minimum 6 characters")
//     .required("Password is required"),
// });

export default function LoginScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values: { email: string; password: string }) => {
    // if (values.email && values.password) {
    router.push("/(tabs)");
    // } else {
    //   alert("Please enter both email and password.");
    // }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
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

            {/* Removed Formik validation and used basic state handling */}
            <View>
              <View>
                <Text
                  variant="bodyLarge"
                  style={{
                    paddingBottom: 5,
                    color: "#333",
                  }}
                >
                  Email
                </Text>
                <StyledTextInput
                  mode="outlined"
                  keyboardType="email-address"
                  placeholder="ex: jon.smith@email.com"
                  // value={values.email} // No longer using Formik's value
                  // onChangeText={handleChange("email")} // No longer using Formik's handleChange
                  // onBlur={handleBlur("email")} // No longer using Formik's handleBlur
                  // error={errors.email && touched.email} // No longer using validation error
                />
                {/* Removed error display */}
              </View>

              <View>
                <Text
                  variant="bodyLarge"
                  style={{
                    paddingBottom: 5,
                    color: "#333",
                  }}
                >
                  Password
                </Text>
                <PasswordInputContainer>
                  <StyledTextInput
                    mode="outlined"
                    placeholder="••••••"
                    secureTextEntry={!showPassword}
                    // value={values.password} // No longer using Formik's value
                    // onChangeText={handleChange("password")} // No longer using Formik's handleChange
                    // onBlur={handleBlur("password")} // No longer using Formik's handleBlur
                    // error={errors.password && touched.password} // No longer using validation error
                    style={{ flex: 1 }}
                  />
                  <PasswordToggle onPress={togglePasswordVisibility}>
                    <Ionicons
                      name={showPassword ? "eye-off" : "eye"}
                      size={24}
                      color="#006d77"
                    />
                  </PasswordToggle>
                </PasswordInputContainer>
                {/* Removed error display */}
              </View>

              <Button
                mode="contained"
                onPress={() => handleSubmit({ email: "", password: "" })}
              >
                SIGN IN
              </Button>
            </View>

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
  );
}

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

const StyledTextInput = styled(TextInput)<{ error?: boolean }>`
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

const PasswordInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

const PasswordToggle = styled(TouchableOpacity)`
  position: absolute;
  right: 10px;
  padding: 4px;
  top: 11px;
  justify-content: center;
  align-items: center;
`;
