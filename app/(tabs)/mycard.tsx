import { Card, Text, Button, Avatar } from "react-native-paper";
import { useRouter } from "expo-router";
import { Pressable, View } from "react-native";
import styled from "styled-components/native";
import ParallaxScrollView from "@/components/ParralaxView";
import CreditCarousel from "@/components/credit-carousel/CreditCarousel";

interface LabelValue {
  label: string;
  value: string | number;
  iconName?: string;
}

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
//
const StyledAddButton = styled(Button)({
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 15,
  boxShadow: "none",
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

const accountDetailsArray: LabelValue[] = [
  {
    label: "Outstanding Balance",
    value: "PHP 80,450.00",
  },
  {
    label: "Available Credit",
    value: "PHP 60,530.00",
  },
];
export const transactionsArray: LabelValue[] = [
  {
    label: "YOUTUBE",
    value: "-$5.00",
    iconName: "YT",
  },
  {
    label: "SPOTIFY",
    value: "-$12.00",
    iconName: "ST",
  },
  {
    label: "MOBILE LEGENDS",
    value: "$12.00",
    iconName: "ML",
  },
  {
    label: "MOBILE LEGENDS",
    value: "$12.00",
    iconName: "ML",
  },
  {
    label: "MOBILE LEGENDS",
    value: "$12.00",
    iconName: "ML",
  },
];

const MyCards = () => {
  const reroute = useRouter();

  return (
    <ParallaxScrollView>
      <ParentView>
        <HeaderView>
          <Text variant="titleMedium">My Cards</Text>
          <StyledAddButton
            buttonColor="#0265A1"
            textColor="white"
            onPress={() => reroute.navigate("/addNewCard")}
          >
            Add New Card
          </StyledAddButton>
        </HeaderView>
      </ParentView>
      <CreditCarousel />
      <ParentView>
        <PointView>
          <StyledPointTitle variant="titleMedium">
            Point Balance
          </StyledPointTitle>
          <StyledPointContent variant="headlineLarge">
            17,532
          </StyledPointContent>
        </PointView>
        <CategoryView>
          <TextBold variant="titleMedium">Account Details</TextBold>
          <StyledAccountView>
            {accountDetailsArray.map(({ label, value }, index) => (
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
            <TextBold variant="titleMedium">Recent Transactions</TextBold>
            <Pressable onPress={() => reroute.push("/recentTransactions")}>
              <Text variant="titleSmall">View more</Text>
            </Pressable>
          </HeaderView>

          <Card style={{ boxShadow: "none" }}>
            <StyledTransactionCard>
              {renderViewMore(transactionsArray)}
            </StyledTransactionCard>
          </Card>
        </CategoryView>
      </ParentView>
    </ParallaxScrollView>
  );
};

export default MyCards;
