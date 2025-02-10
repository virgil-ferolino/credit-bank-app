import { View, TouchableOpacity, Modal } from "react-native";
import React from "react";
import styled from "styled-components/native";
import CreditCard from "../credit-carousel/CreditCard";
import { Text } from "react-native-paper";
import { useAppTheme } from "@/hooks/useTheme";

const StyledLockCardButton = styled(TouchableOpacity)({
  backgroundColor: "#FFFFFF",
  padding: 6,
  width: "50%",
  alignItems: "center",
  borderTopWidth: 1,
  borderTopColor: "gray",
});

interface ModalLockCardProps {
  isVisible: boolean;
  onLock: () => void;
  onCancel: () => void;
}

const ModalLockCard: React.FC<ModalLockCardProps> = ({
  isVisible,
  onLock,
  onCancel,
}) => {
  const {
    colors: { primary, error },
  } = useAppTheme();

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
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
            <StyledLockCardButton onPress={onLock}>
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

            <StyledLockCardButton onPress={onCancel}>
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
  );
};

export default ModalLockCard;
