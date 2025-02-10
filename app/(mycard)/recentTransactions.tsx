import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";
import { Avatar, Text } from "react-native-paper";
import Container from "@/components/Container";
import { transactionsArray } from "../(tabs)/mycard";

export default function RecentTransactions() {
  return (
    <Container>
      <Animated.View
        style={{
          flexDirection: "column",
          rowGap: 3,
        }}
      >
        <FlatList
          data={transactionsArray}
          nestedScrollEnabled={true}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={index}>
              <Animated.View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 16,
                  paddingVertical: 16,
                  backgroundColor: "#FFFFFF",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    columnGap: 10,
                    alignItems: "center",
                  }}
                >
                  <Avatar.Text label="AP" size={30} />
                  <Text variant="labelLarge" style={{ fontWeight: 700 }}>
                    {item.label}
                  </Text>
                </View>

                <Text variant="labelSmall" style={{ color: "#A0A0A0" }}>
                  {item.value}
                </Text>
              </Animated.View>
            </TouchableOpacity>
          )}
        />
      </Animated.View>
    </Container>
  );
}
