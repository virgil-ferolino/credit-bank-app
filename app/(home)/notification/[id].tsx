import { useNotificationStore } from "@/store/home/useNotification";
import { Stack } from "expo-router";
import { Fragment } from "react";
import Animated from "react-native-reanimated";

import { Text } from "react-native-paper";
import { Platform } from "react-native";

export default function GetNotification() {
  const selectedNotification = useNotificationStore(
    (state) => state.selectedNotification
  );

  return (
    <Fragment>
      <Stack.Screen
        options={{
          title: selectedNotification?.title || "Notification",
          headerBackVisible: Platform.OS === "android",
          headerTitleAlign: "left",
        }}
      />
      <Animated.View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
        {selectedNotification ? (
          <Animated.View>
            <Text variant="bodyLarge" style={{ fontWeight: "bold" }}>
              {selectedNotification.title}
            </Text>
            <Text variant="bodyMedium">{selectedNotification.description}</Text>
            <Text variant="bodyMedium" style={{ color: "#A0A0A0" }}>
              {selectedNotification.timespan}
            </Text>
          </Animated.View>
        ) : (
          <Text variant="bodyMedium">No notification found.</Text>
        )}
      </Animated.View>
    </Fragment>
  );
}
