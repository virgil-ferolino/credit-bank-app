import React, { PropsWithChildren } from "react";
import { Platform, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAppTheme } from "@/hooks/useTheme";

export default function StackLayout({ children }: PropsWithChildren) {
  const router = useRouter();
  const theme = useAppTheme();

  const renderIcons = () => {
    return (
      <TouchableOpacity onPress={router.back} hitSlop={20}>
        <Ionicons
          name="arrow-undo-circle-outline"
          size={30}
          color={theme.colors.primary}
          style={{ paddingLeft: 8 }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <Stack
      screenOptions={{
        animation: "slide_from_left",
        headerLeft: () => {
          return Platform.select({
            web: renderIcons(),
            android: renderIcons(),
            ios: renderIcons(),
          });
        },
        headerTitleStyle: {
          fontFamily: "Poppins",
        },
      }}
    >
      {children}
    </Stack>
  );
}
