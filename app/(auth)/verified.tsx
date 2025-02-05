import styled from "styled-components/native";
import { Button, Text } from "react-native-paper";
import { useRouter } from "expo-router";

export default function VerificationScreen() {
  const router = useRouter();
  return (
    <Background
      source={require("@/assets/images/bgworld.png")}
      resizeMode="cover"
      style={{ backgroundColor: "#0A8599" }} // Add teal background color
    >
      <Content>
        <TextContainer>
          <IconContainer>
            {/* <Check size={40} color="#fff" /> */}
          </IconContainer>
          <Title variant="headlineMedium">Verified!</Title>
          <Subtitle>Your account has been created successfully.</Subtitle>
        </TextContainer>
        <StyledButton
          mode="contained"
          onPress={() => router.push("/(auth)/")}
          labelStyle={{
            fontSize: 16,
            fontWeight: "600",
            color: "#0A8599",
            letterSpacing: 1,
          }}
        >
          SIGN IN
        </StyledButton>
      </Content>
    </Background>
  );
}

const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const TextContainer = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const IconContainer = styled.View`
  width: 72px;
  height: 72px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 36px;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled(Text)`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
`;

const Subtitle = styled(Text)`
  font-size: 16px;
  color: #fff;
  text-align: center;
  margin-bottom: 48px;
  opacity: 0.9;
  letter-spacing: 0.3px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  background-color: #fff;
  border-radius: 28px;
  padding-vertical: 6px;
  elevation: 0;
  margin-top: auto;
  margin-bottom: 32px;
`;
