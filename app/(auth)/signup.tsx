import React from "react";
import styled from "styled-components/native";
import { TextInput, Button, Text, Surface, Checkbox } from "react-native-paper";
import { Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";

// Validation Schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
  termsAccepted: Yup.boolean().oneOf([true], "Accept terms and conditions"),
});

export default function SignUpScreen() {
  const router = useRouter();

  return (
    <Container>
      <BackgroundImage
        source={require("@/assets/images/bgworld.png")}
        resizeMode="cover"
      />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
      >
        <Card>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
              termsAccepted: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("Form Values: ", values);
              router.push("/(auth)/verifyphone");
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
              dirty,
              setFieldValue,
            }) => (
              <>
                <Title>Create your account</Title>
                <Text variant="bodyLarge" style={{ paddingBottom: "5px" }}>
                  Name
                </Text>

                <StyledTextInput
                  mode="outlined"
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  placeholder="ex: Jon Smith"
                  autoCapitalize="words"
                  error={touched.name && errors.name ? true : false}
                />
                {touched.name && errors.name && (
                  <ErrorText>{errors.name}</ErrorText>
                )}
                <Text variant="bodyLarge" style={{ paddingBottom: "5px" }}>
                  Email
                </Text>
                <StyledTextInput
                  mode="outlined"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholder="ex: jon.smith@email.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  error={touched.email && errors.email ? true : false}
                />
                {touched.email && errors.email && (
                  <ErrorText>{errors.email}</ErrorText>
                )}
                <Text variant="bodyLarge" style={{ paddingBottom: "5px" }}>
                  Password
                </Text>
                <StyledTextInput
                  mode="outlined"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  secureTextEntry
                  error={touched.password && errors.password ? true : false}
                />
                {touched.password && errors.password && (
                  <ErrorText>{errors.password}</ErrorText>
                )}
                <Text variant="bodyLarge" style={{ paddingBottom: "5px" }}>
                  Confirm Password
                </Text>

                <StyledTextInput
                  mode="outlined"
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  secureTextEntry
                  error={
                    touched.confirmPassword && errors.confirmPassword
                      ? true
                      : false
                  }
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <ErrorText>{errors.confirmPassword}</ErrorText>
                )}

                <TermsContainer>
                  <Checkbox.Android
                    status={values.termsAccepted ? "checked" : "unchecked"}
                    onPress={() =>
                      setFieldValue("termsAccepted", !values.termsAccepted)
                    }
                    color="#006d77"
                  />
                  <TermsText>
                    I understood the <TermsLink>terms & policy</TermsLink>
                  </TermsText>
                </TermsContainer>
                {touched.termsAccepted && errors.termsAccepted && (
                  <ErrorText>{errors.termsAccepted}</ErrorText>
                )}

                <Button
                  mode="contained"
                  onPress={() => handleSubmit()}
                  disabled={!(isValid && dirty)}
                >
                  SIGN UP
                </Button>

                <OrText>or sign up with</OrText>

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

                <SignInContainer>
                  <SignInText>Have an account? </SignInText>
                  <SignInButton
                    mode="text"
                    onPress={() => router.push("/(auth)")}
                  >
                    SIGN IN
                  </SignInButton>
                </SignInContainer>
              </>
            )}
          </Formik>
        </Card>
      </ScrollView>
    </Container>
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

const Card = styled(Surface)`
  width: 100%;
  max-width: 480px;
  align-self: center;
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

const ErrorText = styled(Text)`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
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
