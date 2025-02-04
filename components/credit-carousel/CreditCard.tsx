import { Image, View } from "react-native";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";
import { CreditCardProps } from "./types";
import { LinearGradient } from "expo-linear-gradient";
import { useAppTheme } from "@/hooks/useTheme";
// Standard credit card ratio

const ParentView = styled(Card)({
  baxShadow: "none",
  position: "relative",
  overflow: "hidden",
});
const ParentImage = styled(Image)({
  position: "absolute",
});
const StyledContent = styled(Card.Content)({
  padding: 20,
});

// Card Header
const HeaderView = styled(View)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 24,
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
  marginBottom: 24,
});
// Card Details
const CardDetailsView = styled(View)({
  marginRight: 24,
});
const CardDetailsLabel = styled(Text)({
  color: "#ffffff",
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
  const {
    colors: { gradientStart, gradientEnd },
  } = useAppTheme();
  return (
    <ParentView>
      <LinearGradient
        colors={[gradientStart, gradientEnd]}
        style={{ flex: 1, borderRadius: 10 }}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <ParentImage
          source={require("@/assets/images/cardBackground.png")}
          resizeMode="cover"
        />
        <StyledContent>
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
        </StyledContent>
      </LinearGradient>
    </ParentView>
  );
};

export default CreditCard;
