import React, { useState } from "react";
import styled from "styled-components/native";
import { TextInput, Button, Text, Surface } from "react-native-paper";
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";
import { useRouter } from "expo-router";

// import * as Yup from "yup";
import { Formik } from "formik";
import theme from "@/theme";

// const validationSchema = Yup.object().shape({
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   password: Yup.string()
//     .min(6, "Minimum 6 characters")
//     .required("Password is required"),
// });

export default function LoginScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () =>
    // values: { email: string; password: string }
    {
      // if (values.email || values.password) {
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

            <Formik
              initialValues={{ email: "", password: "" }}
              // validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View
                  style={{
                    flexDirection: "column",
                    rowGap: 5,
                  }}
                >
                  <View>
                    <Text
                      variant="bodyLarge"
                      style={{
                        paddingBottom: 5,
                        color: errors.email && touched.email ? "red" : "#333",
                        fontFamily: "Poppins",
                      }}
                    >
                      Email
                    </Text>
                    <StyledTextInput
                      mode="outlined"
                      keyboardType="email-address"
                      placeholder="ex: jon.smith@email.com"
                      placeholderTextColor="#9A9A9A"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      error={errors.email && touched.email}
                    />
                  </View>

                  <View>
                    <Text
                      variant="bodyLarge"
                      style={{
                        paddingBottom: 5,
                        color:
                          errors.password && touched.password ? "red" : "#333",
                        fontFamily: "Poppins",
                      }}
                    >
                      Password
                    </Text>

                    <StyledTextInput
                      mode="outlined"
                      placeholder="********"
                      secureTextEntry={!showPassword}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      error={errors.password && touched.password}
                      right={
                        <TextInput.Icon
                          onPress={togglePasswordVisibility}
                          icon={showPassword ? "eye-off" : "eye"}
                          size={24}
                          color={theme.colors.primary}
                        />
                      }
                    />

                    {errors.password && touched.password && (
                      <ErrorText>{errors.password}</ErrorText>
                    )}
                  </View>

                  <Button
                    mode="contained"
                    onPress={() => handleSubmit()}
                    buttonColor={theme.colors.primary}
                    style={{ borderRadius: 10 }}
                  >
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

const ErrorText = styled(Text)`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;
