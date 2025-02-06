import React, { useState } from "react";
import { Card, Text } from "react-native-paper";

import ParallaxScrollView from "@/components/ParralaxView";
import Animated from "react-native-reanimated";
import {
  Dimensions,
  Modal,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";

import styled from "styled-components/native";
import CreditCard from "@/components/credit-carousel/CreditCard";

const { height } = Dimensions.get("screen");

const Overlay = styled(TouchableOpacity)({
  flex: 1,
  backgroundColor: "transparent",
  justifyContent: "flex-end",
});

const ModalContainer = styled(Animated.View)({
  height: height * 0.75, // ✅ Cover half the screen
  backgroundColor: "#fff",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  padding: 20,

  scrollbarWidth: "none", // For Firefox
  msOverflowStyle: "none", // For IE/Edge
  maxWidth: 480,
  width: "100%",
  // flex: 1,
  alignSelf: "center",
  WebkitOverflowScrolling: "touch", // For iOS smooth scrolling
  overflowY: "auto",
});

const CloseButton = styled(TouchableOpacity)({
  alignSelf: "flex-end",
  padding: 10,
});

const ModalContent = styled(View)({
});

export default function ActivateCard() {
  const [visible, setVisible] = useState(false);

  return (
    <ParallaxScrollView>
      <Animated.View
        style={{
          marginTop: Platform.OS === "web" ? 0 : -30,
          paddingHorizontal: 16,
          flexDirection: "column",
          rowGap: 5,
          paddingVertical: 5,
        }}
      >
        <Card elevation={3}>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Card.Content>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="bodyMedium">Credit Card</Text>
                <Text variant="bodyMedium">1234 1234 1234 1234</Text>
              </View>

              <Text variant="bodyLarge" style={{ fontWeight: 700 }}>
                Personal Savings
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="bodyMedium" style={{ fontWeight: 700 }}>
                  123456789
                </Text>
                <Text variant="bodyMedium" style={{ fontWeight: 700 }}>
                  PHP 128,000.00
                </Text>
              </View>
            </Card.Content>
          </TouchableOpacity>
        </Card>
      </Animated.View>

      <Modal animationType="slide" transparent={true} visible={visible}>
        <Overlay activeOpacity={4} onPress={() => setVisible(false)}>
          <ModalContainer>
            <CloseButton onPress={() => setVisible(false)}>
              <Animated.Text style={{ fontSize: 18 }}>✖</Animated.Text>
            </CloseButton>

            <ModalContent>
              <CreditCard />
            </ModalContent>
          </ModalContainer>
        </Overlay>
      </Modal>
    </ParallaxScrollView>
  );
}
