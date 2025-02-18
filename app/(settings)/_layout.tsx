import { Stack } from "expo-router";
import styled from "styled-components/native";
import { View } from "react-native";
import StackLayout from "@/components/StackLayout";
const SettingsLayout = () => {
  const ContainedView = styled(View)({
    maxWidth: 480,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  });
  return (
    <ContainedView>
      <StackLayout>
        <Stack.Screen
          name="changePassword"
          options={{
            headerShown: true,
            headerTitle: "Change Password",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="contactUs"
          options={{
            headerShown: true,
            headerTitle: "Contact Us",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="profile"
          options={{
            headerShown: true,
            headerTitle: "My Profile",
            headerTitleAlign: "center",
          }}
        />
      </StackLayout>
    </ContainedView>
  );
};

export default SettingsLayout;
