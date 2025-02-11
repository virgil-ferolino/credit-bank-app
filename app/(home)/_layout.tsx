import React from "react";
import IosBackButton from "@/components/IosBackButton";
import { Stack } from "expo-router";
import styled from "styled-components/native";
import { View } from "react-native";
const HomeLayout = () => {
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
          name="promos"
          options={{
            headerTitle: "",
            headerShown: true,
            headerBackVisible: true,
          }}
        />
      </Stack>
    </ContainedView>
  );
};

export default HomeLayout;
