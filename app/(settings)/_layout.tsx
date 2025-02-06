import IosBackButton from "@/components/IosBackButton";
import { Stack } from "expo-router";

const SettingsLayout = () => {
  return (
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
  );
};

export default SettingsLayout;
