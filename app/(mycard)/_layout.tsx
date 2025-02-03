import React from "react";
import { Stack } from "expo-router";

const MyCardsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="addNewCard"
        options={{
          title: "Add New Card",
          headerBackVisible: true,
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};

export default MyCardsLayout;
