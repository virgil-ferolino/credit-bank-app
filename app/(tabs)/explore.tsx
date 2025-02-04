import { useState } from "react";
import { Text, Switch } from "react-native";
import { View } from "react-native";
import ParallaxScrollView from "@/components/ParralaxView";
import styled from "styled-components/native";
import { IconSymbol } from "@/components/ui/IconSymbol";

const StyledView = styled(View)({
  paddingTop: 15,
  gap: 15,
  paddingLeft: 20,
  paddingRight: 20,
});

const Section = styled(View)({
  padding: 14,
  alignItems: "center",
});

const SectionTitle = styled(Text)({
  fontSize: 17,
  fontWeight: "bold",
  padding: 16,
  marginBottom: 8,
});

const Description = styled(Text)({
  fontSize: 14,
  color: "#525252",
  padding: 14,
  paddingBottom: 8,
});

const MenuItem = styled.TouchableOpacity({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 16,
  borderBottomWidth: 1,
  borderBottomColor: "white",
});

const MenuText = styled(Text)({
  fontSize: 14,
  color: "#000000",
});

const RightContent = styled(View)({
  flexDirection: "row",
  alignItems: "center",
  color: "#525252",
});

const SecondaryText = styled(Text)({
  fontSize: 12,
  color: "#525252",
});

const LogoutItem = styled(MenuItem)({
  padding: 16,
  borderBottomWidth: 1,
  borderBottomColor: "white",
});

const LogoutText = styled(Text)({
  color: "#FF0000",
  fontSize: 14,
});

export default function SettingsScreen() {
  const [isBiometricEnabled, setBiometricEnabled] = useState(false);

  return (
    <ParallaxScrollView>
      <StyledView>
        <Section>
          <SectionTitle>Settings</SectionTitle>
        </Section>
        <Description>General</Description>

        <MenuItem>
          <MenuText>Language</MenuText>
          <RightContent>
            <SecondaryText>English</SecondaryText>
            <IconSymbol name="chevron.right" size={24} color="#7E848D" />
          </RightContent>
        </MenuItem>

        <MenuItem>
          <MenuText>My Profile</MenuText>
          <IconSymbol name="chevron.right" size={24} color="#7E848D" />
        </MenuItem>

        <MenuItem>
          <MenuText>Contact Us</MenuText>
          <IconSymbol name="chevron.right" size={24} color="#7E848D" />
        </MenuItem>

        <Description>Security</Description>

        <MenuItem>
          <MenuText>Change Password</MenuText>
          <IconSymbol name="chevron.right" size={24} color="#7E848D" />
        </MenuItem>

        <MenuItem>
          <MenuText>Privacy Policy</MenuText>
          <IconSymbol name="chevron.right" size={24} color="#7E848D" />
        </MenuItem>

        <Description>Choose what data you share with us</Description>

        <MenuItem>
          <MenuText>Biometric</MenuText>
          <Switch
            value={isBiometricEnabled}
            onValueChange={setBiometricEnabled}
            trackColor={{ false: "#525252", true: "#7E848D" }}
            ios_backgroundColor="#D1D1D6"
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
          />
        </MenuItem>

        <LogoutItem>
          <LogoutText>Log out</LogoutText>
          <IconSymbol name="chevron.right" size={24} color="#FF0000" />
        </LogoutItem>
      </StyledView>
    </ParallaxScrollView>
  );
}
