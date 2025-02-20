import StackLayout from "@/components/StackLayout";
import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <StackLayout>
      <Stack.Screen name="OnboardingScreen" options={{ headerShown: false }} />
    </StackLayout>
  );
};

export default _layout;
