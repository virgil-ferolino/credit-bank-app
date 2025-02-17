import React, { Fragment, useCallback, useRef, useState } from "react";
import styled from "styled-components/native";
import { Card, Switch, Text } from "react-native-paper";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";

import Container from "@/components/Container";

import BottomSheet, { BottomSheetMethods } from "@devvie/bottom-sheet";

import CreditCard from "@/components/credit-carousel/CreditCard";
import { Ionicons } from "@expo/vector-icons";

const TextBold = styled(Text)({
  fontWeight: 600,
});

const ContainerOpacity = styled(View)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: 10,
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  justifyContent: "center",
  alignItems: "center",
});

interface CardSettingProps {
  label: string;
  value: boolean;
  onToggle: () => void;
}

const CardSetting: React.FC<CardSettingProps> = ({
  label,
  value,
  onToggle,
}) => (
  <Card
    style={{
      ...(Platform.OS === "web" && { padding: 8 }),
      ...(Platform.OS === "ios" && { padding: 8 }),
    }}
  >
    <Card.Content
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 8,
      }}
    >
      <Text variant="bodyLarge" style={{ fontWeight: "600" }}>
        {label}
      </Text>
      <Switch value={value} onValueChange={onToggle} />
    </Card.Content>
  </Card>
);

export default function ActivateCard() {
  const [isLockCard, setIsLockCard] = useState<boolean>(false);
  const [isHome, setIsHome] = useState<boolean>(false);

  const sheetRef = useRef<BottomSheetMethods>(null);

  const handleSnapPress = useCallback(() => {
    sheetRef.current?.open();
  }, []);

  const renderBottomSheet = () => {
    return (
      <BottomSheet
        ref={sheetRef}
        animationType={"slide"}
        height={"75%"}
        backdropMaskColor={"#00000090"}
        style={{
          width: "100%",
          alignSelf: "center",
          maxWidth: 480,
        }}
      >
        <View
          style={{
            paddingHorizontal: 16,
            flexDirection: "column",
            rowGap: 16,
          }}
        >
          {isLockCard ? (
            <Fragment>
              <ImageBackground
                source={{ uri: "https://legacy.reactjs.org/logo-og.png" }}
                resizeMode="cover"
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <CreditCard />

                <ContainerOpacity>
                  <Ionicons name="lock-closed" size={62} color="gray" />
                </ContainerOpacity>
              </ImageBackground>
            </Fragment>
          ) : (
            <CreditCard />
          )}

          <View style={{ flexDirection: "column", rowGap: 8 }}>
            <Text variant="bodyLarge" style={{ fontWeight: "600" }}>
              Card Settings
            </Text>

            <CardSetting
              label={"Lock Card"}
              value={isLockCard}
              onToggle={() => setIsLockCard(!isLockCard)}
            />

            <CardSetting
              label={"Lock Card"}
              value={isHome}
              onToggle={() => setIsHome(!isHome)}
            />
          </View>
        </View>
      </BottomSheet>
    );
  };

  return (
    <Fragment>
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
              <TouchableOpacity onPress={handleSnapPress}>
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
      </Container>

      {renderBottomSheet()}
    </Fragment>
  );
}
