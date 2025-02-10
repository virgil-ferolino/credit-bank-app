import React, { useState } from "react";
import styled from "styled-components/native";
import { Card, Text } from "react-native-paper";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, View } from "react-native";

import Container from "@/components/Container";
import ModalCreditCard from "@/components/home/ModalCreditCard";

import { Platform } from "react-native";

const TextBold = styled(Text)({
  fontWeight: 700,
});

export default function ActivateCard() {
  const [isLockCard, setIsLockCard] = useState<boolean>(false);
  const [isHome, setIsHome] = useState<boolean>(false);

  const [isShowCard, setIsShowCard] = useState<boolean>(false);

  return (
    <Container>
      <Animated.View
        style={{
          paddingHorizontal: 16,
          flexDirection: "column",
          rowGap: 5,
          paddingVertical: 8,
        }}
      >
        <Card elevation={3}>
          <LinearGradient
            colors={["#9EA448", "#B93B3B"]}
            style={{ borderRadius: 10 }}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0.8 }}
          >
            <TouchableOpacity onPress={() => setIsShowCard(true)}>
              <Card.Content
                style={{
                  padding: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text variant="bodyMedium">Credit Card</Text>
                  <Text variant="bodyMedium">1234 1234 1234 1234</Text>
                </View>

                <TextBold variant="bodyLarge">Personal Savings</TextBold>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TextBold variant="bodyMedium">123456789</TextBold>
                  <TextBold variant="bodyMedium">PHP 128,000.00</TextBold>
                </View>
              </Card.Content>
            </TouchableOpacity>
          </LinearGradient>
        </Card>
      </Animated.View>

      <ModalCreditCard
        isVisible={isShowCard}
        onClose={() => setIsShowCard(false)}
        isLock={isLockCard}
        setIsLock={() => setIsLockCard(!isLockCard)}
        isHome={isHome}
        setIsHome={() => setIsHome(!isHome)}
      />
    </Container>
  );
}
