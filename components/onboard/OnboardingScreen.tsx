import { useState } from "react";

import { Button } from "react-native-paper";
import LottieView from "lottie-react-native";
import styled from "styled-components/native";
import { useRouter } from "expo-router";
import realTimeAnimation from "@/assets/images/real-time.json";
import notifAnimation from "@/assets/images/notif.json";
import securityAnimation from "@/assets/images/security.json";

const Container = styled.View`
  flex: 1;
  background-color: #006d84;
`;

const ContentWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-bottom: 140px;
`;

const AnimationContainer = styled.View`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

const TitleText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
`;

const DescriptionText = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  max-width: 320px;
`;

const BottomSection = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px;
  align-items: center;
`;

const PaginationContainer = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-bottom: 80px;
`;

const PaginationDot = styled.View<{ isActive: boolean }>`
  width: ${(props: { isActive: string }) => (props.isActive ? "24px" : "8px")};
  height: 8px;
  border-radius: 4px;
  background-color: ${(props: { isActive: string }) =>
    props.isActive ? "white" : "rgba(255, 255, 255, 0.3)"};
`;

const screens = [
  {
    animation: realTimeAnimation,
    title: "Real-time Spending Insights",
    description:
      "Help you track expenses effortlessly with automatic categorization, detailed analytics, and instant alerts—giving you full control over your finances at a glance",
  },
  {
    animation: notifAnimation,
    title: "Bank-Level Security",
    description:
      "Ensures your money and data stay safe with encryption, multi-factor authentication, and real-time fraud protection",
  },
  {
    animation: securityAnimation,
    title: "Instant Notification",
    description:
      "Keep you updated with real-time alerts for transactions, account activity, and security updates—so you're always in control",
  },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mountLottie, setMountLottie] = useState(true);

  const handleNext = () => {
    if (currentIndex < screens.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setMountLottie(false);
      router.push("/(auth)");
    }
  };

  return (
    <Container>
      <ContentWrapper>
        {mountLottie ? (
          <AnimationContainer>
            <LottieView
              source={screens[currentIndex].animation}
              autoPlay
              loop
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </AnimationContainer>
        ) : null}

        <TitleText
          variant="bodyLarge"
          style={{ fontFamily: "PoppinsSemiBold" }}
        >
          {screens[currentIndex].title}
        </TitleText>
        <DescriptionText style={{ fontFamily: "Poppins" }}>
          {screens[currentIndex].description}
        </DescriptionText>
      </ContentWrapper>

      <BottomSection>
        <PaginationContainer>
          {screens.map((_, index) => (
            <PaginationDot key={index} isActive={currentIndex === index} />
          ))}
        </PaginationContainer>
        <Button
          mode="contained"
          onPress={handleNext}
          contentStyle={{ height: 50 }}
          style={{
            width: 320,
            backgroundColor: "white",
            borderRadius: 10,
          }}
          labelStyle={{
            fontFamily: "PoppinsSemiBold",
            color: "#006d84",
          }}
        >
          {currentIndex === screens.length - 1 ? "GET STARTED" : "NEXT"}
        </Button>
      </BottomSection>
    </Container>
  );
}
