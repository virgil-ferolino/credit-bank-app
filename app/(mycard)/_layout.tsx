import IosBackButton from "@/components/IosBackButton";
import { Stack } from "expo-router";
import styled from "styled-components/native";
import { View } from "react-native";
const MyCardsLayout = () => {
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
    </ContainedView>
  );
};

export default MyCardsLayout;
