import { Card, Text, Avatar, Chip } from "react-native-paper";
import { Router, useRouter } from "expo-router";
import { Platform, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import ParallaxScrollView from "@/components/ParralaxView";
import CreditCarousel from "@/components/credit-carousel/CreditCarousel";
import {
  CardDataProps,
  LabelValue,
  useCardData,
} from "@/store/mycard/useCardData";
import theme from "@/theme";
import { Ionicons } from "@expo/vector-icons";

const ParentView = styled(View)({
  padding: 15,
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
  gap: 20,
});
const TextBold = styled(Text)({
  fontWeight: "bold",
});

const TransactionLabel = styled(View)({
  flexDirection: "row",
  gap: 10,
  alignItems: "center",
});

const renderViewMore = (item: LabelValue[]) => {
  return item.map(({ label, iconName, value }, index) => {
    if (index <= 2) {
      return (
        <HeaderView key={index}>
          <TransactionLabel>
            <Avatar.Text label={iconName ?? ""} size={40} />
            <Text variant="titleMedium">{label}</Text>
          </TransactionLabel>
          <Text
            variant="titleMedium"
            style={{
              color: value.toString().includes("-") ? "red" : "black",
            }}
          >
            {value}
          </Text>
        </HeaderView>
      );
    } else return null;
  });
};

const renderCardDetails = (
  data: CardDataProps,
  reroute: Router,
  key: number
) => {
  return (
    <ParentView key={key}>
      <PointView>
        <StyledPointTitle variant="titleMedium">Point Balance</StyledPointTitle>
        <StyledPointContent variant="headlineLarge">
          {data.pointBalance}
        </StyledPointContent>
      </PointView>
      <CategoryView>
        <TextBold variant="labelLarge">Account Details</TextBold>
        <StyledAccountView>
          {data.account.map(({ label, value }, index) => (
            <HeaderView key={index}>
              <StyledAccountText variant="titleMedium">
                {label}
              </StyledAccountText>
              <StyledAccountText variant="titleMedium">
                {value}
              </StyledAccountText>
            </HeaderView>
          ))}
        </StyledAccountView>
      </CategoryView>
      <CategoryView>
        <HeaderView>
          <TextBold variant="labelLarge">Recent Transactions</TextBold>
          <TouchableOpacity
            onPress={() => reroute.push("/recentTransactions")}
            hitSlop={20}
          >
            <Text
              variant="bodySmall"
              style={{ fontWeight: 700, color: theme.colors.primary }}
            >
              View more
            </Text>
          </TouchableOpacity>
        </HeaderView>

        <Card style={{ boxShadow: "none" }}>
          <StyledTransactionCard>
            {renderViewMore(data.transaction)}
          </StyledTransactionCard>
        </Card>
      </CategoryView>
    </ParentView>
  );
};

const MyCards = () => {
  const reroute = useRouter();
  const { activeIndex, cardData } = useCardData((state) => state);
  const platformView = () => {
    if (Platform.OS === "web") {
      return cardData.map((data, index) =>
        activeIndex.web === index
          ? renderCardDetails(data, reroute, index)
          : null
      );
    } else {
      return cardData.map((data, index) =>
        activeIndex.mobile === index
          ? renderCardDetails(data, reroute, index)
          : null
      );
    }
  };

  return (
    <ParallaxScrollView>
      <ParentView>
        <HeaderView>
          <Text variant="titleMedium">My Cards</Text>

          <Chip
            compact
            textStyle={{ color: "white" }}
            style={{ backgroundColor: theme.colors.primary }}
            icon={() => (
              <Ionicons name="add-outline" color={"white"} size={24} />
            )}
            onPress={() => reroute.navigate("/addNewCard")}
          >
            New Card
          </Chip>
        </HeaderView>
      </ParentView>
      <CreditCarousel />
      {platformView()}
    </ParallaxScrollView>
  );
};

export default MyCards;
