import React, { useState } from "react";
import { FlatList, Platform, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { Avatar, Text } from "react-native-paper";

import { useRouter } from "expo-router";

import { initialNotifications } from "@/data/home";

import {
  NotificationItem,
  useNotificationStore,
} from "@/store/home/useNotification";
import Container from "@/components/Container";

const ReadAll = styled(Text)({
  color: "#656565",
  paddingHorizontal: 15,
  paddingVertical: 8,
  textAlign: "right",
});

interface NotificationItemProps extends NotificationItem {
  handlePress: () => void;
}

const RenderNotificationItem = (props: NotificationItemProps) => {
  return (
    <TouchableOpacity onPress={props.handlePress}>
      <Animated.View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 16,
          backgroundColor: props.read ? "#FFFFFF" : "#E7F2F8",
        }}
      >
        <View style={{ flexDirection: "row", columnGap: 4 }}>
          <Avatar.Text label="XD" size={30} />
          <View>
            <Text variant="labelLarge" style={{ fontWeight: 700 }}>
              {props.title}
            </Text>
            <Text variant="labelSmall" style={{ flexWrap: "wrap" }}>
              {`${props.description.slice(0, 40)}...`}
            </Text>
          </View>
        </View>

        <Text variant="labelSmall" style={{ color: "#A0A0A0" }}>
          {props.timespan}
        </Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const Notification = () => {
  const router = useRouter();

  const [notifications, setNotifications] =
    useState<NotificationItem[]>(initialNotifications);

  const markAsRead = (index: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((item, i) =>
        i === index ? { ...item, read: true } : item
      )
    );
  };

  const setSelectedNotification = useNotificationStore(
    (state) => state.setSelectedNotification
  );

  const handleNavigate = (index: number, data: NotificationItem) => {
    setSelectedNotification(data);

    router.push({
      pathname: "/[id]",
      params: { id: index },
    });

    markAsRead(index);
  };

  return (
    <Container>
      <Animated.View style={{ marginTop: Platform.OS === "web" ? 0 : -30 }}>
        <TouchableOpacity hitSlop={20}>
          <ReadAll variant="labelMedium">Read All</ReadAll>
        </TouchableOpacity>

        <FlatList
          data={notifications}
          nestedScrollEnabled={true}
          renderItem={({ item, index }) => (
            <RenderNotificationItem
              key={index}
              title={item.title}
              description={item.description}
              timespan={item.timespan}
              read={item.read}
              handlePress={() => handleNavigate(index, item)}
            />
          )}
        />
      </Animated.View>
    </Container>
  );
};

export default Notification;
