import { Card, Text, Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { View } from "react-native";
import styled from "styled-components/native";
import ParallaxScrollView from "@/components/ParralaxView";
import CreditCard from "@/components/credit-carousel/CreditCard";

interface LabelValue {
  label: string;
  value: string | number;
}

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
  gap: 20,
});

const MyCards = () => {
  const reroute = useRouter();

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
  const transactionsArray: LabelValue[] = [
    {
      label: "YOUTUBE",
      value: "-$5.00",
    },
    {
      label: "SPOTIFY",
      value: "-$12.00",
    },
    {
      label: "MOBILE LEGENDS",
      value: "$12.00",
    },
  ];
  // const creditCardArray = [
  //   {
  //     cardNumber: "**** **** **** 1234",
  //     cardHolder: "JAMES CHARLES",
  //     expiryDate: "**/**",
  //     cvv: "***",
  //   },
  // ];
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
        <CreditCard />
        <PointView>
          <StyledPointTitle variant="titleMedium">
            Point Balance
          </StyledPointTitle>
          <StyledPointContent variant="headlineLarge">
            17,532
          </StyledPointContent>
        </PointView>

        <CategoryView>
          <Text variant="titleLarge">Account Details</Text>
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
          <Text variant="titleLarge">Recent Transactions</Text>
          <Card>
            <StyledTransactionCard>
              {transactionsArray.map(({ label, value }, index) => (
                <HeaderView key={index}>
                  <Text variant="titleMedium">{label}</Text>
                  <Text
                    variant="titleMedium"
                    style={{
                      color: value.toString().includes("-") ? "red" : "black",
                    }}
                  >
                    {value}
                  </Text>
                </HeaderView>
              ))}
            </StyledTransactionCard>
          </Card>
        </CategoryView>
      </ParentView>
    </ParallaxScrollView>
  );
};

export default MyCards;
