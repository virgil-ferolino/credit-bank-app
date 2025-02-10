import React from "react";
import {
  View,
  Modal,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { Card, Switch, Text } from "react-native-paper";
import CreditCard from "../credit-carousel/CreditCard";

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
  <Card>
    <Card.Content
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text variant="bodyLarge" style={{ fontWeight: "700" }}>
        {label}
      </Text>
      <Switch value={value} onValueChange={onToggle} />
    </Card.Content>
  </Card>
);

interface ModalCreditCardProps {
  isVisible: boolean;
  onClose: () => void;
  isLockCard: boolean;
  setIsShowLock: () => void;
  isHome: boolean;
  setIsHome: () => void;
}

const ModalCreditCard: React.FC<ModalCreditCardProps> = ({
  isVisible,
  onClose,
  isLockCard,
  setIsShowLock,
  isHome,
  setIsHome,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <Overlay>
        <ModalContainer>
          <TouchableOpacity
            hitSlop={20}
            style={{ alignSelf: "flex-end", padding: 10 }}
            onPress={onClose}
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

              <CardSetting
                label={"Lock Card"}
                value={isLockCard}
                onToggle={setIsShowLock}
              />
              <CardSetting
                label={"Set Home Card"}
                value={isHome}
                onToggle={setIsHome}
              />
            </View>
          </ModalContent>
        </ModalContainer>
      </Overlay>
    </Modal>
  );
};

export default ModalCreditCard;
