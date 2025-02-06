import React, { useState } from "react";
import { Card, Switch, Text } from "react-native-paper";
import Animated from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

import {
  Dimensions,
  ImageBackground,
  Modal,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import CreditCard from "@/components/credit-carousel/CreditCard";
import Container from "@/components/Container";
import { useAppTheme } from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";

const { height } = Dimensions.get("screen");

const Overlay = styled(View)({
  flex: 1,
  justifyContent: "flex-end",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

const ModalContainer = styled(Animated.View)({
  height: height * 0.75,
  backgroundColor: "#fff",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  padding: 20,
  maxWidth: 480,
  width: "100%",
  alignSelf: "center",
});

const ModalContent = styled(View)({
  flex: 1,
  rowGap: 8,
});

const StyledLockCardButton = styled(TouchableOpacity)({
  backgroundColor: "#FFFFFF",
  padding: 6,
  width: "50%",
  alignItems: "center",
  borderTopWidth: 1,
  borderTopColor: "gray",
});
export default function ActivateCard() {
  const [isLockCard, setIsLockCard] = useState<boolean>(false);
  const [isHome, setIsHome] = useState<boolean>(false);

  const [isShowCard, setIsShowCard] = useState<boolean>(false);
  const [isShowLock, setIsShowLock] = useState<boolean>(false);

  const {
    colors: { primary, error },
  } = useAppTheme();

  return (
    <Container>
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

                <Text variant="bodyLarge" style={{ fontWeight: "700" }}>
                  Personal Savings
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text variant="bodyMedium" style={{ fontWeight: "700" }}>
                    123456789
                  </Text>
                  <Text variant="bodyMedium" style={{ fontWeight: "700" }}>
                    PHP 128,000.00
                  </Text>
                </View>
              </Card.Content>
            </TouchableOpacity>
          </LinearGradient>
        </Card>
      </Animated.View>

      <Modal animationType="slide" transparent={true} visible={isShowCard}>
        <Overlay onPress={() => setIsShowCard(false)}>
          <ModalContainer>
            <TouchableOpacity
              hitSlop={20}
              style={{
                alignSelf: "flex-end",
                padding: 10,
              }}
              onPress={() => setIsShowCard(false)}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>

            <ModalContent>
              {isLockCard ? (
                <Card style={{ position: "relative" }}>
                  <ImageBackground
                    source={{ uri: "https://legacy.reactjs.org/logo-og.png" }}
                    resizeMode="cover"
                  >
                    <CreditCard />

                    <View
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons name="lock-closed" size={62} color="gray" />
                    </View>
                  </ImageBackground>
                </Card>
              ) : (
                <CreditCard />
              )}

              <View style={{ flexDirection: "column", rowGap: 8 }}>
                <Text variant="bodyLarge" style={{ fontWeight: "700" }}>
                  Card Settings
                </Text>

                <Card>
                  <Card.Content
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text variant="bodyLarge" style={{ fontWeight: "700" }}>
                      Lock Card
                    </Text>
                    <Switch
                      value={isLockCard}
                      onValueChange={() => setIsShowLock(true)}
                    />
                  </Card.Content>
                </Card>

                <Card>
                  <Card.Content
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text variant="bodyLarge" style={{ fontWeight: "700" }}>
                      Set Home Card
                    </Text>
                    <Switch
                      value={isHome}
                      onValueChange={() => setIsHome(!isHome)}
                    />
                  </Card.Content>
                </Card>
              </View>
            </ModalContent>
          </ModalContainer>
        </Overlay>
      </Modal>

      <Modal animationType="fade" transparent={true} visible={isShowLock}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 25,
              maxWidth: 480,
              flexDirection: "column",
              rowGap: 16,
            }}
          >
            <CreditCard />
            <Text
              variant="bodyMedium"
              style={{ fontWeight: "700", textAlign: "center" }}
            >
              Lock Card?
            </Text>
            <Text variant="bodyMedium">
              You will not be able to make new purchases or pay for them using a
              digital wallet.
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <StyledLockCardButton
                onPress={() => {
                  setIsLockCard(true);
                  setIsShowLock(false);
                }}
              >
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: "700",
                    color: primary,
                    marginTop: 15,
                  }}
                >
                  Lock
                </Text>
              </StyledLockCardButton>

              <StyledLockCardButton
                onPress={() => {
                  setIsShowLock(false);
                  setIsLockCard(false);
                }}
              >
                <Text
                  style={{
                    fontSize: 19,
                    color: error,
                    marginTop: 15,
                    fontWeight: "700",
                  }}
                >
                  Cancel
                </Text>
              </StyledLockCardButton>
            </View>
          </View>
        </View>
      </Modal>
    </Container>
  );
}
