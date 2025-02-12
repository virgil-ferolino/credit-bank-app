import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { TextInput, Button, Text, Menu } from "react-native-paper";
import styled from "styled-components/native";

const countryCodes: CountryCode[] = [
  { label: "Philippines (+63)", value: "+63" },
  { label: "United States (+1)", value: "+1" },
  { label: "United Kingdom (+44)", value: "+44" },
  { label: "Australia (+61)", value: "+61" },
  { label: "Canada (+1)", value: "+1" },
];

interface CountryCode {
  label: string;
  value: string;
}

export default function VerifyPhoneScreen() {
  const [countryCode, setCountryCode] = useState(countryCodes[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);

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
          <Title>Verify your phone number</Title>
          <Subtitle>
            We will send you a One-Time-Password (OTP){"\n"}
            on this mobile number.
          </Subtitle>
          <PhoneInputContainer>
            <Menu
              visible={menuVisible}
              onDismiss={() => setMenuVisible(false)}
              anchor={
                <CountryCodeInput
                  mode="outlined"
                  value={countryCode.value}
                  onChangeText={() => {}}
                  right={
                    <TextInput.Icon
                      icon="chevron-down"
                      onPress={() => setMenuVisible(true)}
                    />
                  }
                  editable={false}
                  onPressIn={() => setMenuVisible(true)}
                />
              }
            >
              {countryCodes.map((code) => (
                <Menu.Item
                  key={code.value}
                  onPress={() => {
                    setCountryCode(code);
                    setMenuVisible(false);
                  }}
                  title={code.label}
                />
              ))}
            </Menu>

            <PhoneInput
              mode="outlined"
              value={phoneNumber}
              onChangeText={(text: string) =>
                setPhoneNumber(text.replace(/[^0-9]/g, "").slice(0, 10))
              }
              keyboardType="phone-pad"
              placeholder="Enter phone number"
              maxLength={10}
            />
          </PhoneInputContainer>

          <Button
            mode="contained"
            onPress={() => router.push("/(auth)/otpverify")}
            disabled={phoneNumber.length < 10}
            contentStyle={{ height: 45 }} // Matching the button height from the first code
          >
            SEND CODE
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

const Card = styled(View)`
  width: 100%;

  align-self: center;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 50px 30px;
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

const PhoneInputContainer = styled(View)`
  padding-bottom: 300px;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 30px;
`;

const CountryCodeInput = styled(TextInput)`
  width: 80px;
  background-color: white;
`;

const PhoneInput = styled(TextInput)`
  flex: 1;
  background-color: white;
`;
