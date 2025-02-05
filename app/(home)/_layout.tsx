import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <Stack>
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
    </Stack>
  );
};

export default HomeLayout;
