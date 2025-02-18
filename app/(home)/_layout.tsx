import React from "react";
import IosBackButton from "@/components/IosBackButton";
import { Stack } from "expo-router";
const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerRight: () => <IosBackButton />,
        headerTitleStyle: {
          fontFamily: "Poppins",
        },
      }}
    >
      <Stack.Screen
        name="notification/index"
        options={{
          title: "Notifications",
          headerBackVisible: true,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="notification/[id]"
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
        name="promos/index"
        options={{
          headerTitle: "",
          headerShown: true,
          headerBackVisible: true,
        }}
      />
    </Stack>
  );
};

export default HomeLayout;
