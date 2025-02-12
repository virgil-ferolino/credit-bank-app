import { Tabs } from "expo-router";
import React from "react";

import { IconSymbol } from "@/components/ui/IconSymbol";
import {
  OpaqueColorValue,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { SFSymbol } from "expo-symbols";

const tabBarStyle: StyleProp<ViewStyle> = {
  maxWidth: 480,
  width: "100%",
  alignSelf: "center",
};

const tabBarLabelStyle: StyleProp<TextStyle> = {
  fontSize: 10,
  fontWeight: 900,
};

const TabBarIcon = ({
  color,
  name,
}: {
  color: string | OpaqueColorValue;
  name: SFSymbol;
}) => {
  return <IconSymbol size={28} name={name} color={color} />;
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: tabBarStyle,
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: tabBarLabelStyle,
        tabBarAllowFontScaling: true,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: (props) => (
            <TabBarIcon color={props.color} name="house.fill" />
          ),
        }}
      />
      <Tabs.Screen
        name="mycard"
        options={{
          title: "My Card",
          tabBarIcon: (props) => (
            <TabBarIcon color={props.color} name="creditcard.fill" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: (props) => (
            <TabBarIcon color={props.color} name="gear.circle.fill" />
          ),
        }}
      />
    </Tabs>
  );
}
