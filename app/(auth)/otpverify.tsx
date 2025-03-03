import theme from "@/theme";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import { TextInput as RNTextInput, ScrollView } from "react-native";
import { Button, Text, Surface } from "react-native-paper";
import styled from "styled-components/native";

interface FormValues {
  otp: string[];
}

export default function VerifyPhoneScreen() {
  const router = useRouter();
  const initialValues: FormValues = {
    otp: Array(6).fill(""),
  };

  const [formValue, setFormValue] = useState<FormValues>(initialValues);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleOtpChange = (index: number) => (text: string) => {
    if (/^\d*$/.test(text)) {
      const newOtp = [...formValue.otp];
      newOtp[index] = text;
      setFormValue({ ...formValue, otp: newOtp });

      if (text.length === 1 && index < 5) {
        (inputRefs[index + 1].current as RNTextInput)?.focus();
      }

      if (text === "" && index > 0) {
        (inputRefs[index - 1].current as RNTextInput)?.focus();
      }
    }
  };

  const handleResendOTP = () => {
    console.log("Resending OTP...");
  };

  useEffect(() => {
    const allFieldsFilled = formValue.otp.every((digit) => digit.length === 1);
    setIsButtonDisabled(!allFieldsFilled);
  }, [formValue.otp]);

  const inputRefs = Array(6)
    .fill(0)
    .map(() => React.createRef<RNTextInput>());

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
          <ResendContainer>
            <Text>Didn't receive code? </Text>
            <Text
              onPress={handleResendOTP}
              style={{ textDecorationLine: "underline", color: "#2187d1" }}
            >
              Resend
            </Text>
          </ResendContainer>
          <Button
            mode="contained"
            onPress={() => router.push("/(auth)/verified")}
            buttonColor={theme.colors.primary}
            style={{ borderRadius: 10 }}
            contentStyle={{ height: 45 }}
            disabled={isButtonDisabled}
          >
            VERIFY
          </Button>
        </Card>
      </ScrollView>
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
  width: 100%;
  max-width: 480px;
  align-self: center;
  background-color: white;

  padding: 50px 50px;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
`;

const ResendContainer = styled(Text)`
  flex-direction: row;
  align-items: center;
  align-self: center;
  padding-bottom: 300px;
`;

const Subtitle = styled(Text)`
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
  line-height: 20px;
`;

const PhoneInputContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  align-self: center;
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
