import IosBackButton from "@/components/IosBackButton";
import { Stack } from "expo-router";
import { Platform } from "react-native";
import styled from "styled-components/native";

const MyCardsLayout = () => {
  return (
    <Container>
      <Content>
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
  width: ${Platform.OS === "web" ? "100%" : "100%"};
  max-width: 480px;
`;

export default MyCardsLayout;
