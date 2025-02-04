import React, { useState } from "react";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { Avatar, Text } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";
import { initialNotifications } from "@/data/home";
import { useRouter } from "expo-router";

const ReadAll = styled(Text)({
  color: "#656565",
  paddingHorizontal: 15,
  paddingVertical: 8,
  textAlign: "right",
});

export interface NotificationItem {
  title: string;
  description: string;
  timespan: string;
  read: boolean;
}

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
              {props.description}
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

  const handleNavigate = (index: number, title: string) => {
    router.navigate({
      pathname: "/[id]",
      params: { id: index, title: title },
    });
    markAsRead(index);
  };

  return (
    <Animated.View>
      <ReadAll variant="labelMedium">Read All</ReadAll>
      <Animated.ScrollView>
        <Animated.View style={{ rowGap: 3 }}>
          {notifications.map((item, ids) => (
            <RenderNotificationItem
              key={ids}
              title={item.title}
              description={item.description}
              timespan={item.timespan}
              read={item.read}
              handlePress={() => handleNavigate(ids, item.title)}
            />
          ))}
        </Animated.View>
      </Animated.ScrollView>
    </Animated.View>
  );
};

export default Notification;
