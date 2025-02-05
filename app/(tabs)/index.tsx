import React from "react";
import { useRouter } from "expo-router";
import { Image, TouchableOpacity, View } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import styled from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons";

import CreditCard from "@/components/credit-carousel/CreditCard";
import ParallaxScrollView from "@/components/ParralaxView";
import { menuList, transaction } from "@/data/home";

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
  borderBottomLeftRadius: 35,
  borderBottomRightRadius: 35,
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
});

const TextBold = styled(Text)({
  fontWeight: 700,
});

const RenderTransactionItem = (props: TransactionItem) => {
  return (
    <TransactionContainer>
      <TransactionAvatar>
        <Avatar.Text size={30} label="AP" />
        <View>
          <TextBold variant="bodyLarge">{props.title}</TextBold>
          <Text variant="labelSmall">{props.category}</Text>
        </View>
      </TransactionAvatar>

      <Text>{props.price}</Text>
    </TransactionContainer>
  );
};

export default function HomeScreen() {
  const router = useRouter();

  const handleNotification = () => {
    router.push("/notification");
  };

  const handleViewRecent = () => {
    router.push("/transaction");
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
              <WhiteText variant="labelSmall">Well cum back,</WhiteText>
              <WhiteText variant="labelLarge">Charles James</WhiteText>
            </View>
          </View>

          <TouchableOpacity onPress={handleNotification} hitSlop={20}>
            <MaterialIcons name="notifications" size={40} color="#FFFFFF" />
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
              <TouchableOpacity>
                <Card.Content
                  style={{ alignItems: "center", width: 100, height: 125 }}
                >
                  <Image source={item.image} />
                  <Text
                    variant="labelMedium"
                    style={{ textAlign: "center", fontWeight: 700 }}
                  >
                    {item.label}
                  </Text>
                </Card.Content>
              </TouchableOpacity>
            </StyledWhiteCard>
          ))}
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextBold variant="labelLarge">Recent Transaction</TextBold>
          <TouchableOpacity hitSlop={20} onPress={handleViewRecent}>
            <Text>View more</Text>
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
