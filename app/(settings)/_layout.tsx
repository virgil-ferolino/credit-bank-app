import IosBackButton from "@/components/IosBackButton";
import { Stack } from "expo-router";
import styled from "styled-components/native";
import { View } from "react-native";
const SettingsLayout = () => {
  const ContainedView = styled(View)({
    maxWidth: 480,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  });
  return (
    <ContainedView>
      <Stack
        screenOptions={{
          headerRight: () => <IosBackButton />,
        }}
      >
        <Stack.Screen
          name="changePassword"
          options={{
            headerShown: true,
            headerTitle: "Change Password",
            headerTitleAlign: "center",
            headerBackVisible: true,
          }}
        />
        <Stack.Screen
          name="contactUs"
          options={{
            headerShown: true,
            headerTitle: "Contact Us",
            headerTitleAlign: "center",
            headerBackVisible: true,
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            headerShown: true,
            headerTitle: "My Profile",
            headerTitleAlign: "center",
            headerBackVisible: true,
          }}
        />
      </Stack>
    </ContainedView>
  );
};

export default SettingsLayout;
