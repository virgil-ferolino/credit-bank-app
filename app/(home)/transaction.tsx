import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";
import { Avatar, Text } from "react-native-paper";

import { transaction } from "@/data/home";
import Container from "@/components/Container";

export default function Transaction() {
  return (
    <Container>
      <Animated.View
        style={{
          flexDirection: "column",
          rowGap: 3,
        }}
      >
        <FlatList
          data={transaction}
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
                <View style={{ flexDirection: "row", columnGap: 4 }}>
                  <Avatar.Text label="AP" size={30} />
                  <View>
                    <Text variant="labelLarge" style={{ fontWeight: 700 }}>
                      {item.title}
                    </Text>
                    <Text variant="labelSmall" style={{ flexWrap: "wrap" }}>
                      {item.category}
                    </Text>
                  </View>
                </View>

                <Text variant="labelSmall" style={{ color: "#A0A0A0" }}>
                  {item.price}
                </Text>
              </Animated.View>
            </TouchableOpacity>
          )}
        />
      </Animated.View>
    </Container>
  );
}
