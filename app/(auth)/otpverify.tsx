import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  TextInput as RNTextInput,
  ScrollView,
} from "react-native";
import { Button, Text, Surface } from "react-native-paper";
import styled from "styled-components/native";

interface FormValues {
  otp: string[];
}

export default function VerifyPhoneScreen() {
  const router = useRouter();
  const initialValues: FormValues = {
    otp: Array(5).fill(""),
  };

  const [formValue, setFormValue] = useState<FormValues>(initialValues);

  const handleOtpChange = (index: number) => (text: string) => {
    const newOtp = [...formValue.otp];
    newOtp[index] = text;
    setFormValue({ ...formValue, otp: newOtp });

    if (text.length === 1 && index < 4) {
      (inputRefs[index + 1].current as RNTextInput)?.focus();
    }
  };

  const inputRefs = Array(5)
    .fill(0)
    .map(() => React.createRef<RNTextInput>());

  return (
    <Container>
      <BackgroundImage
        source={require("@/assets/images/bgworld.png")}
        resizeMode="cover"
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
        >
          <Card>
            <Title>Verify your phone number</Title>

            <Subtitle>
              We will send you a One-Time-Password (OTP){"\n"}on this mobile
              number.
            </Subtitle>

            <PhoneInputContainer>
              {formValue.otp.map((digit, index) => (
                <OtpInput
                  key={index}
                  ref={inputRefs[index]}
                  keyboardType="number-pad"
                  maxLength={1}
                  selectTextOnFocus
                  value={digit}
                  onChangeText={handleOtpChange(index)}
                />
              ))}
            </PhoneInputContainer>

            <Button
              mode="contained"
              onPress={() => router.push("/(auth)/verified")}
              contentStyle={{ height: 45 }}
            >
              SEND CODE
            </Button>
          </Card>
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

const Card = styled(Surface)`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: white;

  padding-left: 60px;
  padding-right: 60px;
  padding-top: 50px;
  padding-bottom: 50px;
  elevation: 4;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
`;

const Subtitle = styled(Text)`
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
  line-height: 20px;
`;

const PhoneInputContainer = styled.View`
  padding-bottom: 300px;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 30px;
`;

const OtpInput = styled(RNTextInput)`
  background-color: #ffffff;
  width: 50px;
  height: 50px;
  border-width: 1px;
  border-radius: 8px;
  text-align: center;
  font-size: 20px;
`;
