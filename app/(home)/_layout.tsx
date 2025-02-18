import React from "react";

import { Stack } from "expo-router";

import StackLayout from "@/components/StackLayout";
const HomeLayout = () => {
  return (
    <StackLayout>
      <Stack.Screen
        name="notification/index"
        options={{
          title: "Notifications",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen name="notification/[id]" />
      <Stack.Screen
        name="transaction"
        options={{
          title: "Recent Transaction",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="activate-card"
        options={{
          title: "Select Card",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="promos/index"
        options={{
          headerTitle: "",
          headerShown: true,
        }}
      />
    </StackLayout>
  );
};

export default HomeLayout;
