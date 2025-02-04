import React, { Fragment } from "react";
import Animated from "react-native-reanimated";
import { Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

export default function GetNotification() {
  const { id, title } = useLocalSearchParams();

  return (
    <Fragment>
      <Stack.Screen
        options={{
          title: title as string,
          headerBackVisible: true,
          headerTitleAlign: "left",
        }}
      />
      <Animated.View style={{ paddingVertical: 16, paddingHorizontal: 16 }}>
        <Text>ID : {id}</Text>
      </Animated.View>
    </Fragment>
  );
}
