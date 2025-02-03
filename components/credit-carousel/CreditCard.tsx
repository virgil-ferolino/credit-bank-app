import { View } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components/native";
import { CreditCardProps } from "./types";
// Standard credit card ratio

const ParentView = styled(View)({
  backgroundColor: "#0265A1",
  padding: 20,
  borderRadius: 20,
});

// Card Header
const HeaderView = styled(View)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 20,
});
const HeaderName = styled(Text)({
  color: "#fff",
  fontSize: 12,
  fontWeight: "600",
});
const HeaderType = styled(Text)({
  color: "#fff",
  fontSize: 11,
});
// Card Number
const CardNumber = styled(Text)({
  color: "#fff",
  fontSize: 17,
  letterSpacing: 2,
  marginBottom: 12,
});
// Card Details
const CardDetailsView = styled(View)({
  marginRight: 24,
});
const CardDetailsLabel = styled(Text)({
  color: "#ffffff90",
  fontSize: 10,
  marginBottom: 4,
});
const CardDetailsValue = styled(Text)({
  color: "#fff",
  fontSize: 12,
  fontWeight: "500",
});
const CardDetailSection = styled(View)({
  marginRight: 12,
});
const CardDetailRow = styled(View)({
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 16,
});
// Circles
const CardLogo = styled(View)({
  flexDirection: "row",
  alignItems: "center",
  marginHorizontal: -20,
});
const WhiteCircle = styled(View)({
  width: 30,
  height: 30,
  borderRadius: 15,
  marginHorizontal: 5,
  backgroundColor: "#ffffff",
});
const RedCircle = styled(View)({
  width: 30,
  height: 30,
  borderRadius: 15,
  marginHorizontal: -8,
  backgroundColor: "#EB001B",
});
const OrangeCircle = styled(View)({
  width: 30,
  height: 30,
  borderRadius: 15,
  backgroundColor: "#F79E1B",
});

const CreditCard = ({
  cardNumber = "**** **** **** 1234",
  cardHolder = "JAMES CHARLES",
  expiryDate = "**/**",
  cvv = "***",
}: CreditCardProps) => {
  return (
    <ParentView>
      <HeaderView>
        <HeaderName>ADRBank</HeaderName>
        <HeaderType>Credit Card</HeaderType>
        <WhiteCircle />
      </HeaderView>

      <CardNumber>{cardNumber}</CardNumber>

      <CardDetailsView>
        <CardDetailSection>
          <CardDetailsLabel>Card Holder Name</CardDetailsLabel>
          <CardDetailsValue>{cardHolder}</CardDetailsValue>
        </CardDetailSection>

        <CardDetailRow>
          <CardDetailSection>
            <CardDetailsLabel>Expired Date</CardDetailsLabel>
            <CardDetailsValue>{expiryDate}</CardDetailsValue>
          </CardDetailSection>

          <CardDetailSection>
            <CardDetailsLabel>CVV</CardDetailsLabel>
            <CardDetailsValue>{cvv}</CardDetailsValue>
          </CardDetailSection>

          <CardLogo>
            <RedCircle />
            <OrangeCircle />
          </CardLogo>
        </CardDetailRow>
      </CardDetailsView>
    </ParentView>
  );
};

export default CreditCard;
