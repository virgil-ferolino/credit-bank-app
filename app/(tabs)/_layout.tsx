import { Tabs } from "expo-router";
import React from "react";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { View } from "react-native";
import styled from "styled-components/native";

const ContainedView = styled(View)({
  maxWidth: 480,
  width: "100%",
  height: "100%",
  alignSelf: "center",
});

export default function TabLayout() {
  return (
    <ContainedView>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
            headerShown: false,
            headerStyle: { maxWidth: 480, width: "100%" },
          }}
        />
        <Tabs.Screen
          name="mycard"
          options={{
            title: "My Card",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="creditcard.fill" color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="gear.circle.fill" color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tabs>
    </ContainedView>
  );
}
