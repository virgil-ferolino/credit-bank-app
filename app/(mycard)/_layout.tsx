import IosBackButton from "@/components/IosBackButton";
import { Stack } from "expo-router";
const MyCardsLayout = () => {
  return (
      <Stack
        screenOptions={{
          headerRight: () => <IosBackButton />,
        }}
      >
        <Stack.Screen
          name="addNewCard"
          options={{
            title: "Add New Card",
            headerBackVisible: true,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="recentTransactions"
          options={{
            title: "Recent Transactions",
            headerBackVisible: true,
            headerTitleAlign: "center",
          }}
        />
      </Stack>
  );
};

export default MyCardsLayout;
