import React from "react";
import IosBackButton from "@/components/IosBackButton";
import { Stack } from "expo-router";
import styled from "styled-components/native";
import { Platform } from "react-native";

const HomeLayout = () => {
  return (
    <Container>
      <Content>
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
              headerTitleAlign: "center",
            }}
          />
        </Stack>
      </Content>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: ${Platform.OS === "web" ? "center" : "stretch"};
  justify-content: flex-start;
`;

const Content = styled.View`
  flex: 1;
  width: ${Platform.OS === "web" ? "80%" : "100%"};
  max-width: 480px;
`;

export default HomeLayout;
