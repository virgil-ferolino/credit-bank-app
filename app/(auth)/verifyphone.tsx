import { useState } from "react";
import { ScrollView, View, Modal, Pressable } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import styled from "styled-components/native";
import { useRouter } from "expo-router";

const countryCodes = [
  { label: "Philippines (+63)", value: "+63" },
  { label: "United States (+1)", value: "+1" },
  { label: "United Kingdom (+44)", value: "+44" },
  { label: "Australia (+61)", value: "+61" },
  { label: "China (+86)", value: "+86" },
];

export default function VerifyPhoneScreen() {
  const [countryCode, setCountryCode] = useState(countryCodes[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

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
            <Pressable onPress={() => setModalVisible(true)}>
              <CountryCodeInput
                mode="outlined"
                value={countryCode.value}
                editable={false}
                pointerEvents="none"
                right={
                  <TextInput.Icon
                    icon="chevron-down"
                    onPress={() => setModalVisible(true)}
                  />
                }
                // Make the input non-interactive, Pressable will handle the touch
              />
            </Pressable>

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
            contentStyle={{ height: 45 }}
          >
            SEND CODE
          </Button>
        </Card>
      </ScrollView>

      {/* Country Code Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalOverlay onPress={() => setModalVisible(false)} />
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>Select Country Code</ModalTitle>
          </ModalHeader>
          <ModalBody>
            {countryCodes.map((code) => (
              <Pressable
                key={code.value}
                onPress={() => {
                  setCountryCode(code);
                  setModalVisible(false);
                }}
                style={{
                  paddingVertical: 15,
                  paddingHorizontal: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: "#f0f0f0",
                }}
              >
                <Text style={{ fontSize: 16 }}>{code.label}</Text>
              </Pressable>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button
              mode="outlined"
              onPress={() => setModalVisible(false)}
              style={{ borderRadius: 20 }}
            >
              CANCEL
            </Button>
          </ModalFooter>
        </ModalContainer>
      </Modal>
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

const Card = styled(View)`
  width: 100%;
  max-width: 480px;
  align-self: center;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 50px 50px;
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

// Modal Styles
const ModalOverlay = styled.Pressable`
  flex: 1;
`;

const ModalContainer = styled(View)`
  bottom: 0;
  width: 100%;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px 0;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 480px;
  align-self: center;
`;

const ModalHeader = styled(View)`
  align-items: center;
  padding: 10px;
`;

const ModalTitle = styled(Text)`
  font-size: 18px;
  font-weight: bold;
`;

const ModalBody = styled(ScrollView)`
  max-height: 300px;
`;

const ModalFooter = styled(View)`
  align-items: center;
  padding: 10px;
`;
