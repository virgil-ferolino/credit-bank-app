import React from "react";
import { Button, Card, Text } from "react-native-paper";
import { Link } from "expo-router";
import { View } from "react-native";
import styled from "styled-components/native";
import ParallaxScrollView from "@/components/ParralaxView";

const ParentView = styled(View)({
  paddingLeft: 15,
  paddingRight: 15,
  gap: 20,
});
const CategoryView = styled(View)({
  gap: 10,
});
const HeaderView = styled(View)({
  display: "flex",
  flexDirection: "row",
  flexGrow: 1,
  justifyContent: "space-between",
  alignItems: "center",
});
//
const PointView = styled(View)({
  backgroundColor: "#02708D",
  borderRadius: 10,
  padding: 5,
});
const StyledPointTitle = styled(Text)({
  color: "white",
  textAlign: "center",
  padding: 10,
});
const StyledPointContent = styled(Text)({
  textAlign: "center",
  padding: 10,
  width: "100%",
  backgroundColor: "white",
  borderBottomRightRadius: 7,
  borderBottomLeftRadius: 7,
  fontWeight: "bold",
});
//
const StyledAddButton = styled(Button)({
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 15,
});
//
const StyledAccountView = styled(View)({
  padding: "10px 15px 10px 15px",
  backgroundColor: "#02708D",
  borderRadius: 10,
  gap: 10,
});
const StyledAccountText = styled(Text)({
  color: "white",
});
//
const StyledTransactionCard = styled(Card.Content)({
  gap: 10,
});

const MyCards = () => {
  return (
    <ParallaxScrollView>
      <ParentView>
        <HeaderView>
          <Text variant="titleMedium">My Cards</Text>
          <Link href={{ pathname: "/addNewCard" }}>
            <StyledAddButton buttonColor="#0265A1" textColor="white">
              Add New Card
            </StyledAddButton>
          </Link>
        </HeaderView>
        <PointView>
          <StyledPointTitle variant="titleMedium">
            Point Balance
          </StyledPointTitle>
          <StyledPointContent variant="headlineLarge">
            17,532
          </StyledPointContent>
        </PointView>

        <CategoryView>
          <Text variant="titleMedium">Account Details</Text>
          <StyledAccountView>
            <HeaderView>
              <StyledAccountText variant="titleSmall">
                Outstanding Balance
              </StyledAccountText>
              <StyledAccountText variant="titleSmall">
                PHP 80,450.00
              </StyledAccountText>
            </HeaderView>
            <HeaderView>
              <StyledAccountText variant="titleSmall">
                Available Credit
              </StyledAccountText>
              <StyledAccountText variant="titleSmall">
                PHP 60,530.00
              </StyledAccountText>
            </HeaderView>
          </StyledAccountView>
        </CategoryView>
        <CategoryView>
          <Text variant="titleMedium">Recent Transactions</Text>
          <Card>
            <StyledTransactionCard>
              <HeaderView>
                <Text variant="titleSmall">YOUTUBE</Text>
                <Text variant="titleSmall">- %5.00</Text>
              </HeaderView>
              <HeaderView>
                <Text variant="titleSmall">SPOTIFY</Text>
                <Text variant="titleSmall">- $12.99</Text>
              </HeaderView>
            </StyledTransactionCard>
          </Card>
        </CategoryView>
      </ParentView>
    </ParallaxScrollView>
  );
};

export default MyCards;
