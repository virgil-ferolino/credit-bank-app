import React, { useState } from "react";
import {
  Text,
  // Switch,
  Modal,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ParallaxScrollView from "@/components/ParralaxView";
import styled from "styled-components/native";
import { useRouter } from "expo-router";

const commonPadding = Platform.OS === "ios" ? 16 : 12;

const StyledView = styled(View)(() => ({
  paddingTop: 15,
  gap: 10,
  paddingLeft: commonPadding,
  paddingRight: commonPadding,
}));

const Section = styled(View)(() => ({
  padding: commonPadding,
  alignItems: "center",
}));

const SectionTitle = styled(Text)(() => ({
  fontSize: 17,
  fontWeight: "bold",
  padding: commonPadding,
  marginBottom: 26,
}));

const Description = styled(Text)(() => ({
  fontSize: 16,
  color: "#525252",
  padding: commonPadding,
  paddingBottom: 7,
}));

const MenuItem = styled(TouchableOpacity)(() => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: commonPadding,
  borderBottomWidth: 1,
  borderBottomColor: "white",
  backgroundColor: "white",
  borderRadius: 10,
}));

const MenuText = styled(Text)(() => ({
  fontSize: 16,
  color: "#000000",
}));

const LogoutItem = styled(MenuItem)(() => ({
  padding: commonPadding,
  gap: 100,
  borderBottomWidth: 1,
  borderBottomColor: "white",
}));

const LogoutText = styled(Text)(() => ({
  color: "#FF0000",
  fontSize: 16,
}));

const ModalContainer = styled(View)(() => ({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  alignSelf: "center",
  width: 480,
}));

const ModalContent = styled(View)(() => ({
  backgroundColor: "white",
  padding: 20,
  borderRadius: 25,
  width: "70%",
  alignItems: "center",
}));

const ModalButton = styled(TouchableOpacity)(() => ({
  backgroundColor: "#FFFFFF",
  padding: 6,
  width: "50%",
  alignItems: "center",
  borderTopWidth: 2,
  borderTopColor: "#D3D3D3",
}));

const ModalButtonText = styled(Text)(() => ({
  fontSize: 16,
  fontWeight: "bold",
}));

const Separator = styled(View)(() => ({
  borderLeftWidth: 2,
  borderLeftColor: "#D3D3D3",
  height: "100%",
}));

const ButtonsContainer = styled(View)(() => ({
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
}));

export default function SettingsScreen() {
  const router = useRouter();
  const reroute = useRouter();
  // const [isBiometricEnabled, setBiometricEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleConfirmLogout = () => {
    setModalVisible(false);
    router.push("/(auth)");
  };

  return (
    <ParallaxScrollView>
      <StyledView>
        <Section>
          <SectionTitle>Settings</SectionTitle>
        </Section>

        <Description>General</Description>
        <MenuItem onPress={() => reroute.push("/profile")}>
          <MenuText>My Profile</MenuText>
          <MaterialIcons name="chevron-right" size={24} color="#7E848D" />
        </MenuItem>

        <MenuItem onPress={() => reroute.push("/contactUs")}>
          <MenuText>Contact Us</MenuText>
          <MaterialIcons name="chevron-right" size={24} color="#7E848D" />
        </MenuItem>

        <Description>Security</Description>
        <MenuItem onPress={() => reroute.push("/changePassword")}>
          <MenuText>Change Password</MenuText>
          <MaterialIcons name="chevron-right" size={24} color="#7E848D" />
        </MenuItem>

        <LogoutItem onPress={handleLogout}>
          <LogoutText>Log out</LogoutText>
          <MaterialIcons name="chevron-right" size={24} color="#FF0000" />
        </LogoutItem>

        <Modal visible={modalVisible} transparent animationType="fade">
          <ModalContainer>
            <ModalContent>
              <Text
                style={{
                  fontSize: 19,
                  marginBottom: 25,
                  fontWeight: "bold",
                  padding: commonPadding,
                }}
              >
                Log out
              </Text>
              <Text style={{ fontSize: 14, marginBottom: 30 }}>
                Are you sure you want to logout?
              </Text>
              <ButtonsContainer>
                <ModalButton onPress={handleConfirmLogout}>
                  <ModalButtonText
                    style={{
                      fontSize: 19,
                      color: "red",
                      marginTop: 15,
                    }}
                  >
                    Log out
                  </ModalButtonText>
                </ModalButton>
                <Separator />
                <ModalButton onPress={handleCloseModal}>
                  <ModalButtonText
                    style={{
                      fontSize: 19,
                      marginTop: 15,
                    }}
                  >
                    Cancel
                  </ModalButtonText>
                </ModalButton>
              </ButtonsContainer>
            </ModalContent>
          </ModalContainer>
        </Modal>
      </StyledView>
    </ParallaxScrollView>
  );
}
