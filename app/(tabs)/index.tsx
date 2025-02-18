import React from "react";
import { RelativePathString, useRouter } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";
import { Avatar, Badge, Card, Text } from "react-native-paper";
import styled from "styled-components/native";

import { Ionicons } from "@expo/vector-icons";

import CreditCard from "@/components/credit-carousel/CreditCard";
import ParallaxScrollView from "@/components/ParralaxView";
import { initialNotifications, menuList, transaction } from "@/data/home";
import { useAppTheme } from "@/hooks/useTheme";

interface TransactionItem {
  title: string;
  category: string;
  price: string;
}

const BlueBackground = styled(View)({
  width: "100%",
  height: 250,
  backgroundColor: "#004068",
  position: "absolute",
  borderBottomLeftRadius: 24,
  borderBottomRightRadius: 24,
});

const TransactionContainer = styled(View)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const TransactionAvatar = styled(View)({
  flexDirection: "row",
  gap: 5,
  alignItems: "center",
});

const StyledWhiteCard = styled(Card)({
  backgroundColor: "#FFFFFF",
});

const WhiteText = styled(Text)({
  color: "#FFFFFF",
  fontFamily: "Poppins",
});

const TextBold = styled(Text)({
  fontFamily: "PoppinsBold",
});

const RenderTransactionItem = (props: TransactionItem) => {
  return (
    <TransactionContainer>
      <TransactionAvatar>
        <Avatar.Text size={30} label={props.title.slice(0, 2).toUpperCase()} />
        <View>
          <TextBold>{props.title}</TextBold>
          <Text
            variant="labelSmall"
            style={{
              fontFamily: "Poppins",
            }}
          >
            {props.category}
          </Text>
        </View>
      </TransactionAvatar>

      <Text>{props.price}</Text>
    </TransactionContainer>
  );
};

export default function HomeScreen() {
  const router = useRouter();

  const theme = useAppTheme();

  const unreadCount = initialNotifications.filter(
    (notification) => !notification.read
  ).length;

  const handleNotification = () => {
    router.push("/(home)/notification");
  };

  const handleViewRecent = () => {
    router.push("/(home)/transaction");
  };

  const handleNavigateMenu = (route: RelativePathString) => {
    router.push(route);
  };

  return (
    <ParallaxScrollView>
      <BlueBackground />

      <View style={{ padding: 15, rowGap: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Avatar.Image
              size={40}
              source={{
                uri: "https://images7.alphacoders.com/489/thumb-1920-489447.jpg",
              }}
            />
            <View>
              <WhiteText variant="labelSmall">Welcome back,</WhiteText>
              <WhiteText variant="labelLarge">Charles James</WhiteText>
            </View>
          </View>

          <TouchableOpacity
            onPress={handleNotification}
            hitSlop={20}
            style={{ backgroundColor: "transparent" }}
          >
            <Badge style={{ position: "absolute", top: -5, right: 23 }}>
              {unreadCount}
            </Badge>
            <Ionicons name="notifications" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <CreditCard />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignContent: "center",
          }}
        >
          {menuList.map((item, ids) => (
            <StyledWhiteCard key={ids}>
              <TouchableOpacity
                onPress={() =>
                  handleNavigateMenu(item.route as RelativePathString)
                }
              >
                <Card.Content
                  style={{
                    alignItems: "center",
                    width: 100,
                    height: 125,
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 70, height: 70 }}
                  />
                  <Text
                    variant="labelMedium"
                    style={{
                      textAlign: "center",
                      fontFamily: "PoppinsSemiBold",
                      fontSize: 12,
                    }}
                  >
                    {item.label}
                  </Text>
                </Card.Content>
              </TouchableOpacity>
            </StyledWhiteCard>
          ))}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextBold variant="labelLarge">Recent Transaction</TextBold>
          <TouchableOpacity hitSlop={20} onPress={handleViewRecent}>
            <Text
              variant="bodySmall"
              style={{
                fontFamily: "PoppinsSemiBold",
                color: theme.colors.primary,
              }}
            >
              View more
            </Text>
          </TouchableOpacity>
        </View>

        <StyledWhiteCard>
          <Card.Content style={{ rowGap: 15 }}>
            {transaction.length > 0 ? (
              transaction
                .slice(0, 4)
                .map((item, ids) => (
                  <RenderTransactionItem
                    key={ids}
                    title={item.title}
                    price={item.price}
                    category={item.category}
                  />
                ))
            ) : (
              <Text
                variant="bodyMedium"
                style={{ textAlign: "center", color: "gray" }}
              >
                No transactions available
              </Text>
            )}
          </Card.Content>
        </StyledWhiteCard>
      </View>
    </ParallaxScrollView>
  );
}
