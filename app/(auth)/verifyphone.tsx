import { useState } from "react";
import { View, Image } from "react-native";
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

interface VerifyPhoneScreenProps {
  onSendCode: (countryCode: string, phoneNumber: string) => void;
}

export default function VerifyPhoneScreen({
  onSendCode,
}: VerifyPhoneScreenProps) {
  const [countryCode, setCountryCode] = useState(countryCodes[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);

  const handleSendCode = () => {
    onSendCode(countryCode.value, phoneNumber);
  };

  return (
    <Container>
      <BackgroundImage
        source={require("@/assets/images/bgworld.png")}
        resizeMode="cover"
      />
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

        <SendButton
          mode="contained"
          // onPress={handleSendCode}
          disabled={phoneNumber.length < 10}
        >
          SEND CODE
        </SendButton>
      </Card>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  background-color: #006d77;
  height: 100%;
`;

const BackgroundImage = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Card = styled(View)`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 60px 30px 30px;
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

const SendButton = styled(Button).attrs({
  contentStyle: { height: 45 },
})`
  background-color: #006d77;
  border-radius: 8px;
  font-weight: bold;
`;
