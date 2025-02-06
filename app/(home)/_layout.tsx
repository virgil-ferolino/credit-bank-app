import IosBackButton from "@/components/IosBackButton";

import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerRight: () => <IosBackButton />,
      }}
    >
      <Stack.Screen
        name="notification"
        options={{
          title: "Notifications",
          headerBackVisible: true,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerBackVisible: true,
          headerTitleAlign: "left",
        }}
      />
      <Stack.Screen
        name="transaction"
        options={{
          title: "Recent Transaction",
          headerBackVisible: true,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="activate-card"
        options={{
          title: "Select Card",
          headerBackVisible: true,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="promos"
        options={{
          title: "Promos & Discounts",
          headerBackVisible: true,
          headerTitleAlign: "center"
        }}
      />
    </Stack>
  );
};

export default HomeLayout;
